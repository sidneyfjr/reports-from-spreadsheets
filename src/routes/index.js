const router            = require('express').Router();
const grupo             = require('./api/grupo');
const publicador        = require('./api/publicador');
const relatorio         = require('./api/relatorio');
const pioneiro          = require('./api/pioneiro');
const apiKeyMiddleware  = require('../middleware/apiKey')

router.use(apiKeyMiddleware, grupo);
router.use(apiKeyMiddleware,publicador);
router.use(apiKeyMiddleware,relatorio);
router.use(apiKeyMiddleware,pioneiro);


module.exports = router;