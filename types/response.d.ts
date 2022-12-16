interface IResponse {
  customErrorCode: null | number;
  errorMessage: string;
  systemErrorMessage: string;
  hasError: boolean;
  page?: IPage;
  response: null | [] | {};
}
interface IPage {
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export { IResponse, IPage };