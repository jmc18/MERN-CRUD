import { v4 as uuid } from 'uuid';

let users = [];

export const getUsers = (req, res) => {
	res.send(users);
};

export const getUser = (req, res) => {
	const userId = req.params.userId;
	const singleUser = users.filter((user) => user.userId === userId);
	res.send(singleUser);
};

export const createUser = (req, res) => {
	const user = req.body;

	users.push({ ...user, userId: uuid() });
	res.send('User was Added Successfully');
};

export const deletUser = (req, res) => {
	const userId = req.params.userId;
	users = users.filter((user) => user.userId !== userId);
	res.send('User was Deleted Successfully');
};

export const updateUser = (req, res) => {
	const userId = req.params.userId;
	const userData = req.body;
	const user = users.filter((user) => user.userId === userId);

	user.neame = userData.name;
	user.email = userData.email;
	user.phone = userData.phone;

	res.send('User was Updated Successfully');
};
