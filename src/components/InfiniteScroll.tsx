import { ReactNode, useEffect, useRef, useState } from 'react'

interface Props {
  dataLength: number
  hasMore?: boolean
  loader?: ReactNode
  handlerEndSection: CallableFunction
  children: ReactNode
  margin?: number
}
function InfiniteScroll({
  dataLength,
  hasMore = false,
  loader = <h5>Loading...</h5>,
  handlerEndSection,
  margin = 20,
  children,
}: Props) {
  const [prevlength, setPrevlength] = useState(0)
  const endRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    setPrevlength(dataLength)
    const observer = new IntersectionObserver(handlerObserver, {
      rootMargin: `${margin}px`,
    })

    if (endRef.current) observer.observe(endRef.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  const handlerObserver = (
    e: IntersectionObserverEntry[],
    o: IntersectionObserver
  ) => {
    const [target] = e
    if (target.isIntersecting && prevlength > 0 && hasMore) handlerEndSection()
  }
  return (
    <>
      {children}

      {hasMore && loader}
      <div ref={endRef} style={{ padding: '.5em .75em' }}></div>
    </>
  )
}

export default InfiniteScroll
