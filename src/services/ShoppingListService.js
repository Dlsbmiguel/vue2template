import http from "../http-commons";

class ShoppingListService {
  getAll() {
    return http.get("ShoppingList");
  }
  get(id) {
    return http.get(`ShoppingList/${id}`);
  }
  create(data) {
    return http.post("ShoppingList", data);
  }
  update(id, data) {
    return http.put(`ShoppingList/${id}`, data);
  }
  delete(id) {
    return http.delete(`ShoppingList/${id}`);
  }
}
export default new ShoppingListService();
