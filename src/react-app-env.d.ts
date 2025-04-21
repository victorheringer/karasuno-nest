/// <reference types="react-scripts" />
declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_DATABASE: string;
    REACT_APP_HOST: string;
    REACT_APP_REMOTE_JSON_URL: string;
    REACT_APP_ACHIEVIMENTS_FILE_NAME: stirng;
    REACT_APP_BOARD_FILE_NAME: string;
  }
}
