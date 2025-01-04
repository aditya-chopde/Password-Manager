const express = require("express")
const { handleCreateData, handleGetData, handleDeleteData, getSingleData, handleEditPost } = require("../controllers/userData");
const { handleUserSignup, handleLoginUser } = require("../controllers/user");
const router = express()

// Routes related to data
router.post("/create", handleCreateData);
router.get("/data", handleGetData);
router.post("/delete-data/:id", handleDeleteData);
router.post("/edit/:id", handleEditPost);
router.get('/single-data/:id', getSingleData);

// Routes related to User Authentication
router.post("/signup", handleUserSignup);
router.post("/login", handleLoginUser);

module.exports = router
