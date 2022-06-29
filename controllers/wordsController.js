const asyncHandler = require("express-async-handler");
const WordBank = require("../models/wordsModel");

// des get word
// route GET /api/words
// access private
const getWord = asyncHandler(async (req, res) => {
	const word = await WordBank.find({ user: req.user.id });
	res.status(200).json(word);
});
// des set account
// route POST /api/wordzes
// access private
const setWord = asyncHandler(async (req, res) => {
	const { wordName, question, answerList } = req.body.wordData;
	if (!wordName || !question) {
		throw new Error("Please provide a text");
	}

	const word = await word.create({
		wordName: wordName,
		user: req.user._id,
		question: question,
		answerList: answerList,
	});
	res.status(200).json(word);
});
// des update word
// route PUT /api/word/:id
// access private
const updateWord = asyncHandler(async (req, res) => {
	const word = await word.findById(req.params.id);

	if (!word) {
		res.status(404);
		throw new Error("word not found");
	}

	const updatedWord = await word.findByIdAndUpdate();
	res.status(200).json(updatedWord);
});
// des get account
// route DELETE /api/accounts/:id
// access private
const deleteWord = asyncHandler(async (req, res) => {
	const word = await word.findById(req.params.id);
	if (!word) {
		res.status(404);
		throw new Error("word not found");
	}

	await word.remove();
	res.status(200).json({ id: req.params.id });
});

module.exports = {
	getWord,
	setWord,
	updateWord,
	deleteWord,
};
