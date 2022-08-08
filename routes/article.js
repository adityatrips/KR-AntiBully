const express = require("express");
const {
	getArticles,
	getOneArticle,
	addArticle,
} = require("../controllers/article");

const router = express.Router();

router.get("/articles", getArticles);
router.post("/a/:id", getOneArticle);
router.post("/add-article", addArticle);

module.exports = router;
