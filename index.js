const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

app.get("/", (req, res) => {
  res.send(
    "wow! congratulations this is your first node project,let's code your carrier with node and express"
  );
});

const users = [
  { id: 0, name: "popy", email: "popy@gmail.com", number: "01716904781" },
  { id: 1, name: "limon", email: "limon@gmail.com", number: "01716904781" },
  { id: 2, name: "khadija", email: "khadija@gmail.com", number: "01716904781" },
  { id: 3, name: "kamal", email: "kamal@gmail.com", number: "01716904781" },
  { id: 4, name: "rayhan", email: "rayhan@gmail.com", number: "01716904781" },
  { id: 5, name: "sumon", email: "sumon@gmail.com", number: "01716904781" },
  { id: 6, name: "raihan", email: "raihan@gmail.com", number: "01716904781" },
];

app.get("/users", (req, res) => {
  const search = req.query.search;
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.post("/users", (req, res) => {
  console.log("our clientsite data", req.body);
  const newUsers = req.body;
  newUsers.id = users.length;
  users.push(newUsers);

  res.json(newUsers);
});

app.listen(port, () => {
  console.log("server is running on");
});
