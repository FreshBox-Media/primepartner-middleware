const router = require("express").Router();
const AuthService = require("../service/auth.service");

router.get("/", checkResponse);
router.post("/login", AuthService.memberLogin);
router.post("/GetDashboardDetailsOfChemist", AuthService.getDashboardDetails);
router.post("/GetDefaultAccountByLogin", AuthService.getDefaultAccountByLogin);
router.post("/IsAlreadyRegisterChemist", AuthService.isAlreadyRegisterChemist);
router.post("/GetDetailsByType", AuthService.getDetailsByType);
router.post("/StoreCampaignImages", AuthService.storeCampaignImages);
router.post(
  "/UpdateOrderDeliveryByOrderReference",
  AuthService.updateOrderDeliveryByOrderReference
);

router.post(
  "/GetChemistCardNoByMobileNo",
  AuthService.getChemistCardNoByMobileNo
);

function checkResponse(req, res) {
  res.status(200).send({ status: true });
}

module.exports = router;
