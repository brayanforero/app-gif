import { BallTriangle } from 'react-loader-spinner'
function Page() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <BallTriangle color="#5747eb" height={80} width={80} />
    </div>
  )
}

export default Page
