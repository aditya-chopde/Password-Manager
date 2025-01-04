const express = require("express")
const { handleCreateData, handleGetData, handleDeleteData, getSingleData, handleEditPost } = require("../controllers/userData")
const router = express()

router.post("/create", handleCreateData);
router.get("/data", handleGetData);
router.post("/delete-data/:id", handleDeleteData);
router.post("/edit/:id", handleEditPost);
router.get('/single-data/:id', getSingleData);

module.exports = router
