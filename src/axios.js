import axios from 'axios';

const BASE_URL = "https://the-nis-123.github.io/fake-api/";

export default axios.create({
  baseURL: BASE_URL
});
