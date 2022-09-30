const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetail,
} = require("../controllers/productController");
const {
  isAuthenticatedUser,
  authorizeRoles,
} = require("../middleware/authentication");

const router = express.Router();

router
  .route("/products")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAllProducts);
router.route("/product/new").post(createProduct);
router
  .route("/product/:id")
  .put(updateProduct)
  .delete(deleteProduct)
  .get(getProductDetail);

module.exports = router;
