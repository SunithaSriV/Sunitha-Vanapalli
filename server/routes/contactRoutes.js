const { Router } = require("express");
const contactController = require("./../controllers/contactController");

const router = new Router();

router.route("/").post(contactController.contactMe);

module.exports = router;
