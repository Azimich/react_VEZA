interface ISingResponseData {
  errorMessage?: string;
  hasError?: boolean;
  response?: ISingResponse | null;
}

interface ISingResponse {
  accessToken?: string;
  refreshToken?: string;
  userName?: string;
}

export { ISingResponseData };
