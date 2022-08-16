const router = require('express').Router();
const organizationController = require('./controllers/organization');
const userController = require('./controllers/user');
const chatController = require('./controllers/chat');
const authMiddleware = require('./middleware/auth');

router.post('/organization/create', organizationController.createNewOrganization);
router.post('/organization/:id/users', authMiddleware, organizationController.addUserToOrganization);
router.get('/organization/:id/users', authMiddleware, organizationController.getOrganizationUsers);
router.delete('/organization/:id/user/:userId', authMiddleware, organizationController.deleteOrganizationUser);

router.post('/login', userController.login);
router.get('/user/:id', authMiddleware, userController.getProfile);
router.put('/user', authMiddleware, userController.editProfile);
router.get('/suggestion', authMiddleware, userController.getSuggestions);


router.get('/chats', authMiddleware, chatController.getUserChats);
router.get('/chat/:id', authMiddleware, chatController.getChatMessages);

module.exports = router;