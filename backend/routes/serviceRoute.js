const express = require("express");
const {
  createService,
  getAllServices,
  updateService,
  deleteService,
  getServiceDetail,
} = require("../controllers/serviceController");

const router = express.Router();

router.route("/services").get(getAllServices);
router.route("/service/new").post(createService);
router
  .route("/service/:id")
  .put(updateService)
  .delete(deleteService)
  .get(getServiceDetail);

module.exports = router;
