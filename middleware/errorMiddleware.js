const errorHandler = (err, req, res, next) => {
	const statusCode = res.statusCode ? res.statusCode : 500;

	res.status(statusCode);

	res.json({
		message: err.message,
		stack: process.env.NODE_ENV === "production" ? null : err.stack,
	});
};

module.exports = {
	errorHandler,
};
export const words = [
	{
		hebrew: "בית ספר",
		arabic: "مدرسة",
		Hspelling: "מה-דרה-סה", // Hebrew pronounciation in english letters
		Aspelling: "بيت-سيفر", // Arabic pronounciation in english letters,
		id: "som id here",
	},
];
