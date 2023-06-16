import ContentLoader from "react-content-loader";

function Lines() {
  return (
    <ContentLoader
      speed={2}
      width={`100%`}
      height={60}
      viewBox="0 0 100% 60"
      backgroundColor="#373d48"
      foregroundColor="#282c34"
    >
      <rect x="20%" y="0" rx="4" ry="4" width="60%" height="100%" />
    </ContentLoader>
  );
}

export default Lines;
