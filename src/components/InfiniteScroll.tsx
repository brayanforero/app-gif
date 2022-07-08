import { ReactNode, useEffect, useRef, useState } from 'react'

interface Props {
  dataLength: number
  hasMore?: boolean
  loader?: ReactNode
  isLoading: boolean
  handlerEndSection: CallableFunction
  children: ReactNode
  margin?: number
}
function InfiniteScroll({
  dataLength = 0,
  hasMore = false,
  loader = <h5>Loading...</h5>,
  isLoading,
  handlerEndSection,
  margin = 20,
  children,
}: Props) {
  const endRef = useRef<HTMLDivElement | null>(null)
  const countRef = useRef(0)

  useEffect(() => {
    const observer = new IntersectionObserver(handlerObserver, {
      rootMargin: `${margin}px`,
    })

    if (endRef.current) observer.observe(endRef.current)

    return () => {
      observer.disconnect()
    }
  }, [])
  useEffect(() => {
    countRef.current++
  }, [dataLength])

  const handlerObserver = (
    e: IntersectionObserverEntry[],
    o: IntersectionObserver
  ) => {
    const [target] = e

    if (countRef.current === 0) return
    if (target.isIntersecting) handlerEndSection()
  }
  return (
    <div style={{ minHeight: '90vh', position: 'relative' }}>
      {children}

      {hasMore && isLoading && loader}
      <div
        ref={endRef}
        style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '100%',
          padding: '1em',
        }}
      ></div>
    </div>
  )
}

export default InfiniteScroll
