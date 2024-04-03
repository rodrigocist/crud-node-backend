const {Router} = require('express');
const router = Router();

const { getUsers , createUser, getCoffees, getCoffeesDetailById} = require('../controllers/index.controller');


router.get('/users', getUsers);
router.post('/users', createUser);
router.get('/coffee', getCoffees);
router.get('/coffeedetail/:id', getCoffeesDetailById);

module.exports = router;