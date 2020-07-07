// type TFetch = fetch(input: RequestInfo, init?: RequestInit): Promise<Response>
export interface AskAdapter {
  (config: AskRequestConfig): AskPromise<any>;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AskPromise<T = any> extends Promise<AskResponse<T>> {
}

export interface AskRequestConfig {
  url?: string;
  method?: string;
  baseUrl?: string;
  headers?: AskHeader;
  params?: AskParam;
  data?: AskData;
  adapter?: AskAdapter;
  /**
   * 重新尝试最大次数
   */
  maxAttempts?: number;
  /**
   * 尝试间隔时间
   */
  attemptDelay?: number;

  timeout?: number;
}

export interface AskHeader {
  'X-Requested-With'?: string;
  [key: string]: any;
}

export interface AskParam {
  [key: string]: any;
}
export interface AskData {
  [key: string]: any;
}

export type AskInterceptor<V> = {
  fulfilled?: (value: V) => V | Promise<V>;
  rejected?: (error: any) => any;
}

export interface AskResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: any;
  config: AskRequestConfig;
  request?: any;
}

export interface AskInterceptorManager<V> {
  use(onFulfilled?: (value: V) => V | Promise<V>, onRejected?: (error: any) => any): number;
  eject(id: number): void;
  forEach(fn: any): void;
}

export interface AskInstance {
  (config: AskRequestConfig): AskPromise;
  (url: string, config?: AskRequestConfig): any;
  defaults: AskRequestConfig;
  interceptors: {
    request: AskInterceptorManager<AskRequestConfig>;
    response: AskInterceptorManager<AskResponse>;
  };
  // getUri(config?: AskRequestConfig): string;
  // request<T = any, R = AskResponse<T>> (config: AskRequestConfig): Promise<R>;
  // get<T = any, R = AskResponse<T>>(url: string, config?: AskRequestConfig): Promise<R>;
  // delete<T = any, R = AskResponse<T>>(url: string, config?: AskRequestConfig): Promise<R>;
  // head<T = any, R = AskResponse<T>>(url: string, config?: AskRequestConfig): Promise<R>;
  // post<T = any, R = AskResponse<T>>(url: string, data?: any, config?: AskRequestConfig): Promise<R>;
  // put<T = any, R = AskResponse<T>>(url: string, data?: any, config?: AskRequestConfig): Promise<R>;
  // patch<T = any, R = AskResponse<T>>(url: string, data?: any, config?: AskRequestConfig): Promise<R>;
}
