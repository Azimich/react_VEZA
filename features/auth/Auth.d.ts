interface IAuthState {
  identify: boolean; //для определения был запрос на сервер или нет
  customErrorCode: string | number | null;
  errorMessage: string | null;
  hasError: boolean;
  response: [];
}

export { IAuthState };
