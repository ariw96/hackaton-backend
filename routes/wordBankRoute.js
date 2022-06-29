const express = require("express");
const router = express.Router();
const {
	getWords,
	setWord,
	updateWord,
	deleteWord,
} = require("../controllers/wordsController");

router.route("/").get(getWords).post(setWord);
router.route("/:id").delete(deleteWord).put(updateWord);

module.exports = router;
