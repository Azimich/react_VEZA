interface IResponse {
  customErrorCode: null | number;
  errorMessage: string;
  systemErrorMessage: "";
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

interface IObjects {
  address: string;
  categories: [];
  imageUrl: string;
  industryObjectId: number;
  slidePosition: number;
  title: string;
  titleDelivery: string;
}

export { IResponse, IPage, IObjects };
