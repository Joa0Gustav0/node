const users = [
  { username: "Gustavo", role: "FrontEnd Developer" },
  { username: "Maria", role: "BackEnd Developer" },
  { username: "Paulo", role: "FullStack Developer" },
];

var qUsername = function (param) {
  var qUser = undefined;
  users.forEach((user) => {
    if (user.username.toLowerCase() === param.toLowerCase()) {
      qUser = user;
    }
  });

  if (qUser === undefined) return "Username does not match any user.";
  return JSON.stringify(qUser);
};

var qRole = function (param) {
  var qRole = undefined;
  users.forEach((user) => {
    if (user.role.toLowerCase() === param.toLowerCase()) {
      qRole = user;
    }
  });
  if (qRole === undefined) return "Role does not match any user.";
  return JSON.stringify(qRole);
};


module.exports = {
  users() {
    return JSON.stringify(users);
  },
  queryUsername(username) {
    return qUsername(username);
  },
  queryRole(role) {
    return qRole(role);
  },
};
