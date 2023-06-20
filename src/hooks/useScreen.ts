function useScreen() {
  const { innerWidth: width } = window;
  return {
    width,
  };
}

export default useScreen;
