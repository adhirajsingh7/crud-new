const express = require('express')
const router = express.Router()

const controllers = require('../controllers')

router.get('/',controllers.userController.get_User)
router.get('/:id',controllers.userController.get_User_By_Id)
router.post('/add',controllers.userController.add_User)
router.put('/update/:id',controllers.userController.update_User)
router.delete('/delete/:id',controllers.userController.delete_User)


module.exports = router