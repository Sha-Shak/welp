const router = require('express').Router();
const organizationController = require('./controllers/organization');
const userController = require('./controllers/user');
const authMiddleware = require('./middleware/auth');

router.post('/organization/create', organizationController.createNewOrganization);
router.post('/organization/:id/users', authMiddleware, organizationController.addUserToOrganization);
router.get('/organization/:id/users', authMiddleware, organizationController.getOrganizationUsers);
router.delete('/organization/:id/user/:userId', authMiddleware, organizationController.deleteOrganizationUser);

router.post('/login', userController.login);
router.get('/user/:id', authMiddleware, userController.getProfile);
router.put('/user', authMiddleware, userController.editProfile);

module.exports = router;