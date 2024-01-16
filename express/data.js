const users = [
  { username: "Gustavo", role: "FrontEnd Developer" },
  { username: "Maria", role: "BackEnd Developer" },
  { username: "Paulo", role: "FullStack Developer" },
];

var getUser = function (param) {
  var qUser = undefined;
  users.forEach((user) => {
    if (user.username.toLowerCase() === param.toLowerCase()) {
      qUser = user;
    }
  });

  if (qUser === undefined) return "User not Found.";
  return JSON.stringify(qUser);
};

module.exports = {
  users() {
    return JSON.stringify(users);
  },
  queryUser(user) {
    return getUser(user);
  }
};
