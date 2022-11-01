import axios from 'axios';

const BASE_URL = "https://the-nis-123.github.io/fake-api/api/";

export default axios.create({
  baseURL: BASE_URL
});
