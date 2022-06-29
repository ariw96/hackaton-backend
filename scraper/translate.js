const hebrewToArabic = async (word) => {
	const browser = await puppeteer.launch({
		headless: false,
		defaultViewport: {
			width: 300,
			height: 600,
		},
	});
	const page = await browser.newPage();
	await page.goto(`https://rothfarb.info/ronen/arabic/?searchString=${word}`);
	const translatedWord = await page.evaluate(() => {
		const tag = document.querySelector(".result .arb.harm");
		return tag.innerText;
	});

	console.log(translatedWord);
	await browser.close();
	return translatedWord;
};
const arabicToHebrew = async (word) => {
	const browser = await puppeteer.launch({
		headless: false,
		defaultViewport: {
			width: 300,
			height: 600,
		},
	});
	const page = await browser.newPage();
	await page.goto(`https://rothfarb.info/ronen/arabic/?searchString=${word}`);
	const grabWord = await page.evaluate(() => {
		const tag = document.querySelector(".result a");
		return tag.innerText;
	});
	const translatedWord = grabWord.split("").reverse().join("");
	console.log(translatedWord);
	await browser.close();
	return translatedWord;
};
