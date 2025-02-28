const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/moviesController");

// Routes with corresponding functions (controller)
// Index
router.get("/", moviesController.index);

// Show
router.get("/:id", moviesController.show);

// Destroy
// router.delete("/:id", moviesController.destroy);

// export router
module.exports = router;