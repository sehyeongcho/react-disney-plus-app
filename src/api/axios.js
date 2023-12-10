import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "41e58a698999bd2b3f9298f77709f276",
    language: "ko-KR"
  }
});

export default instance;