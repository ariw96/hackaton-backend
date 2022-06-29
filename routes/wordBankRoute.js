const express = require("express");
const router = express.Router();
const {
	getQuiz,
	setQuiz,
	updateQuiz,
	deleteQuiz,
} = require("../controllers/wordsController");

router.route("/").get(protect, getWordBank).post(protect, setWordBank);
router.route("/:id").delete(protect, deleteWordBank).put(protect, updateWordBank);

module.exports = router;
