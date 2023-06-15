import ContentLoader from "react-content-loader";

interface Props {
  width?: number;
  height?: number;
}

function Card({ width = 300, height = 300 }: Props) {
  return (
    <ContentLoader
      speed={3}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      backgroundColor="#373d48"
      foregroundColor="#282c34"
      style={{
        borderRadius: "var(--radius)",
      }}
    >
      <rect x="0" y="0" rx="2" ry="2" width="300" height="320" />
    </ContentLoader>
  );
}

export default Card;
