import express from 'express';

import {
	getUsers,
	getUser,
	createUser,
	deletUser,
	updateUser
} from '../controllers/users.js';

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:userId', getUser);
router.post('/users', createUser);
router.delete('/users/:userId', deletUser);
router.put('/users/:userId', updateUser);

export default router;
