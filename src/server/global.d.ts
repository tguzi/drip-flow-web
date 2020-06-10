declare global {
  namespace NodeJS {
    interface Global {
      __IS_PROD__: boolean;
    }
  }
}
