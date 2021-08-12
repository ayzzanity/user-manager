const express = require("express");
const router = express.Router();
const { User } = require("../models");

//get all Users
router.get("/users", async (req, res) => {
  const users = await User.findAll();
  res.send(users);
});

//get User by id
router.get("/users/:id", async (req, res) => {
  const user = await User.findAll({ where: { id: req.params.id } });
  res.send(user);
});
// post new User
router.post("/users/new", async (req, res) => {
  const submittedUser = await User.create({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    phone: req.body.phone,
    company: req.body.company,
    website: req.body.website,
  });
  res.send(submittedUser);
});
//edit user
router.put("/users/edit/:id", async (req, res) => {
  await User.update(
    {
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      phone: req.body.phone,
      company: req.body.company,
      website: req.body.website,
    },
    { where: { id: req.params.id } }
  );
  res.send("updated");
});
// delete User
router.delete("/users/delete/:id", async (req, res) => {
  await User.destroy({ where: { id: req.params.id } });
  res.send("deleted");
});

module.exports = router;
