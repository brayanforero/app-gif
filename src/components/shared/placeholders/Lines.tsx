import ContentLoader from "react-content-loader";

function Lines() {
  return (
    <ContentLoader
      speed={2}
      width={`100%`}
      height={140}
      viewBox="0 0 100% 140"
      backgroundColor="#373d48"
      foregroundColor="#282c34"
    >
      <rect x="0" y="0" rx="4" ry="4" width="100%" height="100%" />
    </ContentLoader>
  );
}

export default Lines;
