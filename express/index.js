const express = require("express");
const app = express();

var data = require("./data");

app.get("/", function (req, res) {
  res.send(data.users());
});
app.get("/user/:username", function (req, res) {
  res.send(data.queryUser(req.params.username));
});
/* users.forEach((user, index) => {
  app.get(`/user-${index}`, function (req, res) {
    res.send(JSON.stringify(user));
  });
}); */

app.listen(
  2409,
  console.log("Servidor hospedado e ativo em http://localhost:2409")
);
