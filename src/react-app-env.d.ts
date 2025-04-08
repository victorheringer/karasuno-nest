/// <reference types="react-scripts" />
declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_DATABASE: string;
    REACT_APP_HOST: string;
    REACT_SHARE_LINK: string;
    REACT_APP_BUCKET_DATA_URL: string;
    EACT_APP_BUCKET_ACCESS_KEY: string;
    RECT_APP_BUCKET_SECRETE_ACCESS_KEY: string;
    REACT_APP_BUCKET_REGION: string;
    REACT_APP_BUCKET_ENDPOINT: string;
    REACT_APP_BUCKET_NAME: string;
    REACT_APP_BUCKET_ACL: string;
  }
}
