const router = require('express').Router();

router.post('/organization/create');
router.post('/login');
router.get('/organization/:id/users');
router.delete('/organization/:id/user/:userId');


module.exports = router;