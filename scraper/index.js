const puppeteer = require("puppeteer");
const hebrewToArabicInHebrewText = async (word) => {
	const browser = await puppeteer.launch({
		headless: true,
		defaultViewport: {
			width: 300,
			height: 600,
		},
	});
	const page = await browser.newPage();
	await page.goto(`https://rothfarb.info/ronen/arabic/?searchString=${word}`);
	const grabWord = await page.evaluate(() => {
		const tag = document.querySelector(".result .arb.keter");
		return tag.innerText;
	});
	const translatedWord = grabWord.split("").reverse().join("");
	console.log(translatedWord);
	await browser.close();
	return translatedWord;
};

const dictionaryScraper = async () => {
	const browser = await puppeteer.launch({
		headless: true,
	});
	const page = await browser.newPage();
	await page.goto(`http://www.mideastweb.org/dictionary_arabic_hebrew.htm`);
	const wordBank = await page.evaluate(() => {
		const tag = document.querySelectorAll(" tbody > tr > td > p");
		let words = [];
		tag.forEach((element) => {
			words.push(element.innerText);
		});
		let arrayWordsObject = [];
		for (let i = 4; i < words.length; i++) {
			let wordObject = {};
			wordObject.arabic = words[i];
			i++;
			wordObject.hebrew = words[i];
			i++;
			wordObject.hebrewInArabicText = words[i];

			arrayWordsObject.push(wordObject);
		}

		return arrayWordsObject;
	});
	// console.log(wordBank);
	let newWordBank = [];
	for (let i = 0; i < wordBank.length - 15; i++) {
		await page.goto(
			`https://rothfarb.info/ronen/arabic/?searchString=${wordBank[i].hebrew}`
		);
		const grabWord = await page.evaluate(() => {
			const tag = document.querySelector(".result .arb.keter");

			return tag?.innerText || "$";
		});
		newWordBank.push({
			arabic: wordBank[i].arabic,
			hebrew: wordBank[i].hebrew,
			arabicInHebrewText: wordBank[i].hebrewInArabicText,
			hebrewInArabicText: grabWord,
		});
		console.log(newWordBank[i]);
	}
	console.log(newWordBank);
	await browser.close();
	return wordBank;
};
dictionaryScraper();
