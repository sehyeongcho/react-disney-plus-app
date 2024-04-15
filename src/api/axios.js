/**
 * Axios는 브라우저, Node.js를 위한 HTTP 비동기 통신 라이브러리입니다.
 * 이 파일은 The Movie Database API 서버에 요청을 보낼 때, URL 중 중복되는 부분을 계속해서 입력하지 않아도 되게끔 Axios 인스턴스를 생성하는 파일입니다.
 */

import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "41e58a698999bd2b3f9298f77709f276", // The Movie Database API 키
    language: "ko-KR"
  }
});

export default instance;