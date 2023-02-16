import { IResponse } from "../../types/response";

interface ISearch {
  q: string;
}

interface ISearchResponse extends Omit<IResponse, "response"> {
  response: ISearchItem[];
}

interface ISearchItem {
  entityType: number;
  resultAlias: string;
  searchCriteria: string;
  searchResult: string;
  onClick?: (inputValue: string) => void;
}

export { ISearch, ISearchItem, ISearchResponse };
