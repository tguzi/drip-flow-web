// type TFetch = fetch(input: RequestInfo, init?: RequestInit): Promise<Response>
export type TRequestParams = Partial<{
  baseUrl: string;
  timeout: number;
  contentType: string;
}>

export type TInit = Partial<{
  
}>

export interface IFetch {
  (input: RequestInfo, init?: RequestInit): Promise<Response>;
}

export interface IOptions {
  input: RequestInfo;
  init?: RequestInit;
}

export interface IInterceptor {
  fetch: (input: RequestInfo, init?: RequestInit) => Promise<Response>;
  options: IOptions;
}