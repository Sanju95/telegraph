const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.render("home", {
		meta: req.app.get("meta"),
	});
});

//TODO: Sepearte Router should be implemented to handle articles
router.get("/article/:article", (req, res) => {
	res.render("article", {
		article: req.app.get("article"),
		posts: req.app.get("posts"),
	});
});

module.exports = router;
