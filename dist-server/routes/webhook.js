"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _webhookController = _interopRequireDefault(require("../components/webhook/webhookController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();
/* GET users listing. */


router.get('/', _webhookController["default"].verifyWebhook);
router.post('/', _webhookController["default"].postWebhook);
var _default = router;
exports["default"] = _default;