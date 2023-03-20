import ContentLoader from 'react-content-loader'

function Card() {
  return (
    <ContentLoader
      speed={3}
      width={320}
      height={360}
      viewBox="0 0 320 360"
      backgroundColor="#373d48"
      foregroundColor="#282c34"
    >
      <rect x="0" y="0" rx="2" ry="2" width="300" height="320" />
    </ContentLoader>
  )
}

export default Card
