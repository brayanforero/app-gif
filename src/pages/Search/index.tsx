import { SearchFeed } from "@components/common";
import { SearchBar } from "@components/shared";

interface Props {
  params: {
    keyword: string;
  };
}

function Search({ params }: Props) {
  const { keyword } = params;
  localStorage.setItem("last-keyword", keyword);
  return (
    <>
      <SearchBar />
      <SearchFeed key={keyword} keyword={keyword} />
    </>
  );
}

export default Search;
