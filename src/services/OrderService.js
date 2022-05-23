import http from "../http-commons";

class OrderService {
  getAll() {
    return http.get("Order");
  }
  makeOrder() {
    return http.get("Order/make");
  }
  get(id) {
    return http.get(`Order/${id}`);
  }
  create(data) {
    return http.post("Order", data);
  }
  update(id, data) {
    return http.put(`Order/${id}`, data);
  }
  delete(id) {
    return http.delete(`Order/${id}`);
  }
}
export default new OrderService();
