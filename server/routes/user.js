const express = require("express")
const { handleCreateData, handleGetData } = require("../controllers/userData")
const router = express()

router.post("/create", handleCreateData);
router.get("/data", handleGetData);

module.exports = router
