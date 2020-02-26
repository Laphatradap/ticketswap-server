const { Router } = require("express");
const Comment = require("./model")

const router = new Router();

router.get("/comments", async (req, res, next) => {
  try {
    const comments = await Comment.findAll();
    res.send(comments);
  } catch (error) {
    next(error);
  }
});

router.post("/comments", async (req, res, next) => {
  try {
    await Comment.create(req.body).then(comment => {
      res.json(comment);
    });
  } catch (error) {
    next(error);
  }
});
module.exports = router