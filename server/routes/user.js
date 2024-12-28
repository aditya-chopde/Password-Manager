const express = require("express")
const { handleCreateData } = require("../controllers/userData")
const router = express()

router.post("/create", handleCreateData);

module.exports = router
