const Router = require("express");
const {showBooksList, addBook} = require("../controllers/booksControllers");

const router = Router();

router.get("/", showBooksList);
router.get("/bookslist", showBooksList);
router.post("/addbook",addBook);


module.exports = router;


