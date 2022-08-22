import { ReactNode, useEffect, useRef } from 'react'

interface LoaderProps {
  children: ReactNode
  show: boolean
}

export const LoaderContainer = ({ children, show = false }: LoaderProps) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {show && children}
    </div>
  )
}

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

    if (target.isIntersecting && countRef.current > 0) handlerEndSection()
  }
  return (
    <div style={{ minHeight: '90vh', position: 'relative' }}>
      {children}

      <LoaderContainer show={hasMore && isLoading}>{loader}</LoaderContainer>
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
