const router = require("express").Router();
const apiController = require("../../controllers/controller");

// Matches with "/api/articles"
router.route("/")
  .get(apiController.findAll)
  .post(apiController.create);

// Matches with "/api/articles/:id"
router
  .route("/:id")
  .get(apiController.findById)
  .put(apiController.update)
  .delete(apiController.remove);

module.exports = router;
