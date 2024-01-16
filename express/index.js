const express = require("express");
const app = express();

var data = require("./data");

app.get("/", function (req, res) {
  res.send(data.users());
});
app.get("/username/:username", function (req, res) {
  res.send(data.queryUsername(req.params.username));
});
app.get("/role/:role", function (req, res) {
  res.send(data.queryRole(req.params.role));
});

//This is no longer needed even if it works 💡
/* users.forEach((user, index) => {
  app.get(`/user-${index}`, function (req, res) {
    res.send(JSON.stringify(user));
  });
}); */

app.listen(
  2409,
  console.log("Servidor hospedado e ativo em http://localhost:2409")
);
