import { reactive } from 'vue';

export const store = reactive({
  users: JSON.parse(localStorage.getItem('users')) || [], 
  isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
  currentUser: JSON.parse(localStorage.getItem('currentUser')) || null,

  login(username, password) {
    const user = this.users.find(user => user.username === username && user.password === password);
    if (user) {
      this.isAuthenticated = true;
      this.currentUser = user;
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }
    return false;
  },

  register(username, email, password, gender, userType) {
    const userExists = this.users.some(user => user.username === username);
    if (!userExists) {
      const newUser = { username, email, password, gender, userType };
      this.users.push(newUser);
      this.isAuthenticated = true;
      this.currentUser = newUser;
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('currentUser', JSON.stringify(newUser));
      localStorage.setItem('users', JSON.stringify(this.users));
      return true;
    }
    return false;
  },

  logout() {
    this.isAuthenticated = false;
    this.currentUser = null;
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('currentUser');
  },

  isAdmin() {
    return this.currentUser && this.currentUser.userType === 'admin';
  },

  isUser() {
    return this.currentUser && this.currentUser.userType === 'user';
  }
});
