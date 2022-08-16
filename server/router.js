const router = require('express').Router();
const organizationController = require('./controllers/organization');
const userController = require('./controllers/user');
const chatController = require('./controllers/chat');
const authMiddleware = require('./middleware/auth');

//Organization routes
router.post('/organization/create', organizationController.createNewOrganization);
router.post('/organization/users', authMiddleware, organizationController.addUserToOrganization);
router.get('/organization/users', authMiddleware, organizationController.getOrganizationUsers);
router.delete('/organization/user/:userId', authMiddleware, organizationController.deleteOrganizationUser);


//User routes
router.post('/login', userController.login);
router.get('/user/:id', authMiddleware, userController.getProfile);
router.put('/user', authMiddleware, userController.editProfile);
router.get('/suggestion', authMiddleware, userController.getSuggestions);


//Chat routes
router.get('/chats', authMiddleware, chatController.getUserChats);
router.get('/chat/:id', authMiddleware, chatController.getChatMessages);

module.exports = router;