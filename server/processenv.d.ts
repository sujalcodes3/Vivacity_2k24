export {};
declare global {
    namespace NodeJS {
      interface ProcessEnv {
        MONGO_URI: string;
      }
    }
  }