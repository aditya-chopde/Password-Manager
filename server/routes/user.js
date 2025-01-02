const express = require("express")
const { handleCreateData, handleGetData, handleDeleteData } = require("../controllers/userData")
const router = express()

router.post("/create", handleCreateData);
router.get("/data", handleGetData);
router.post("/delete-data/:id", handleDeleteData);

module.exports = router
