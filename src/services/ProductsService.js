import http from "../http-commons";

class ProductsService {
  getAll() {
    return http.get("Products");
  }
  get(id) {
    return http.get(`Products/${id}`);
  }
  create(data) {
    return http.post("Products", data);
  }
  addCategoryToProduct(data) {
    return http.post("Products/AddCategoryToProduct", data);
  }
  update(id, data) {
    return http.put(`Products/${id}`, data);
  }
  delete(id) {
    return http.delete(`Products/${id}`);
  }
}
export default new ProductsService();
