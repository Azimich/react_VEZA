interface IResponse {
  customErrorCode: null | string;
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

export { IResponse };
