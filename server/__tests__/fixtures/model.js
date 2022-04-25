class Users {
  constructor ({ username, password, email, mobile, createdAt, updatedAt }) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.mobile = mobile;
    if (updatedAt) {
      this.updatedAt = updatedAt;
    }
    if (createdAt) {
      this.createdAt = createdAt;
    }
  }
}

module.exports = {
  Users
};
