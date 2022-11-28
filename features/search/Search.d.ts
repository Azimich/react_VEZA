interface ISearch {
  q: string;
}
interface ISearchData {
  id: number;
  title: string;
  desc: string;
  onClick?: (inputValue: string) => void;
}

export { ISearch, ISearchData };
