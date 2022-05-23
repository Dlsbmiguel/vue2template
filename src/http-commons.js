import axios from "axios";
import authHeader from "./helpers/AuthHeader";
export default axios.create({
  baseURL: "https://localhost:7182/api/",
  headers: authHeader(),
});
