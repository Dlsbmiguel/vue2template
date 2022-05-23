import http from "../http-commons";

class UserService {
  getAll() {
    return http.get("User");
  }
  getLoggedInUser() {
    return http.get("User/getLoggedInUser");
  }
  get(id) {
    return http.get(`User/${id}`);
  }
  create(data) {
    return http.post("User", data);
  }
  update(id, data) {
    return http.put(`User/${id}`, data);
  }
  delete(id) {
    return http.delete(`User/${id}`);
  }
}
export default new UserService();
