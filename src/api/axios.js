import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: '75f7fc8d3b0059c54f5c03d4227daaae',
    language: "ko-KR",
  },
});

export default instance;
