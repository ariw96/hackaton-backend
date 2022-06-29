// const asyncHandler = require("express-async-handler");
// const User = require("../models/userModel");
// // des register new user
// // route POST /api/users
// // access public
// const registerUser = asyncHandler(async (req, res) => {
// 	const { name } = req.body;
// 	if (!name ) {
// 		res
// 			.status(400)
// 			.send({ name, message: "Please enter Name" });
// 	}

// 	//create user
// 	const userExists = await User.findOne({ name });
// 	if (userExists) {
// 		res.status(400);
// 		throw new Error("User already exists");
// 	}
// 	const user = await User.create({
// 		name,
// 	});
// 	if (user) {
// 		res.status(201).json({
// 			_id: user.id,
// 			name: user.name,
// 		});
// 	} else {
// 		res.status(400);
// 		throw new Error("User not created invalid data");
// 	}
// 	res.send("User created");
// });

// // des post user
// // route POST/api/login
// // access public
// const loginUser = asyncHandler(async (req, res) => {
// 	const { name } = req.body;
// 	//check if user email
// 	const user = await User.findOne({ email });
// 	if (user && bcrypt.compareSync(password, user.password)) {
// 		res.json({
// 			_id: user.id,
// 			name: user.name,
// 			email: user.email,
// 			token: generateToken(user.id),
// 		});
// 	} else {
// 		res.status(400);
// 		throw new Error("Invalid credentials");
// 	}
// });
// // des get user data
// // route GET /api/users/me
// // access private
// const getUser = asyncHandler(async (req, res) => {
// 	const user = await User.findById(req.params.id);
// 	res.status(200).json(user);
// });
// const getAllUsers = asyncHandler(async (req, res) => {
// 	const users = await User.find();
// 	res.status(200).json(users);
// });

// module.exports = {
// 	registerUser,
// 	loginUser,
// 	getUser,
// 	getAllUsers,
// };
