import { reactive } from 'vue';

export const store = reactive({
  users: [], // Array to store registered users
  isAuthenticated: false,
  login(username, password) {
    const user = this.users.find(user => user.username === username && user.password === password);
    if (user) {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  },
  register(username, password) {
    const userExists = this.users.some(user => user.username === username);
    if (!userExists) {
      this.users.push({ username, password });
      return true;
    }
    return false;
  },
  logout() {
    this.isAuthenticated = false;
  }
});