const asyncHandler = require("express-async-handler");
const WordBank = require("../models/wordsModel");

// route GET /api/words

const getWords = asyncHandler(async (req, res) => {
	const words = await WordBank.find();
	res.status(200).json(words);
});

// route POST /api/words

const setWord = asyncHandler(async (req, res) => {
	const { hebrew, arabic, Hspelling, Aspelling } = req.body;
	if (!wordName) {
		throw new Error("Please provide a text");
	}

	const word = await word.create({
		hebrew: hebrew,
		arabic: arabic,
		Hspelling: Hspelling,
		Aspelling: Aspelling,
	});
	res.status(200).json(word);
});
// des update word
// route PUT /api/word/:id

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
	getWords,
	setWord,
	updateWord,
	deleteWord,
};
