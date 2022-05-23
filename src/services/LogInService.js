import http from "../http-commons";
class LogInService {
  async login(user) {
    try {
      const response = await http.post("LogIn", user);
      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
  logout() {
    localStorage.removeItem("user");
  }
}
export default new LogInService();
