const { Router } = require("express");
const { getToDo, saveToDo } = require("../controllers/ToDoController");

const router = Router();

router.get("/", getToDo);
router.get("/save", saveToDo);

module.exports = router;
