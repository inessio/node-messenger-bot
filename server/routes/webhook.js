import express from 'express'
import webhookController from '../components/webhook/webhookController';

var router = express.Router();

/* GET users listing. */
router.get('/', webhookController.verifyWebhook);
router.post('/',webhookController.postWebhook);

export default router;

