interface IResponse {
  customErrorCode: null | number;
  errorMessage: string;
  systemErrorMessage: string;
  hasError: boolean;
  page?: IPage;
  response: [];
}
interface IPage {
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  hasPreviousPage: false;
  hasNextPage: true;
}

export { IResponse, IPage };
