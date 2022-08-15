const router = require('express').Router();
const organizationController = require('./controllers/organization');

router.post('/organization/create', organizationController.createNewOrganization);
router.get('/organization/:id/users', organizationController.getOrganizationUsers);
router.delete('/organization/:id/user/:userId', organizationController.deleteOrganizationUser);

router.post('/login');

module.exports = router;