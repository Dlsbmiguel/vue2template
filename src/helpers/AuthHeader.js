export default function authHeader() {
  let user = JSON.parse(localStorage.getItem("vuex"));
  if (user) {
    return { Authorization: "Bearer " + user.user.accessToken };
  } else {
    return {};
  }
}
