import http from "../http-commons";

class CategoryService {
  getAll() {
    return http.get("Categories");
  }
  get(id) {
    return http.get(`Categories/${id}`);
  }
  create(data) {
    return http.post("Categories", data);
  }
  update(id, data) {
    return http.put(`Categories/${id}`, data);
  }
  delete(id) {
    return http.delete(`Categories/${id}`);
  }
}
export default new CategoryService();
