const config = require("config");
const user = config.get("credentials");

const CRED = {
  user: user.user,
  password: user.password,
};

const memberLoginXML = (memberLoginID) => {
  return `<?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
        <soap:Body>
        <GetMemberByLogin xmlns="http://tempuri.org/">
            <user>${CRED.user}</user>
            <password>${CRED.password}</password>
            <memberLogin>${memberLoginID}</memberLogin>
        </GetMemberByLogin>
        </soap:Body>
    </soap:Envelope>`;
};

const chemistCardNoMyMobileXML = (mobile) => {
  return `<?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap:Body>
        <GetChemistCardNoByMobileNo xmlns="http://tempuri.org/">
        <user>${CRED.user}</user>
        <password>${CRED.password}</password>
          <MobileNo>${mobile}</MobileNo>
        </GetChemistCardNoByMobileNo>
      </soap:Body>`;
};

const dashboardDetailsXML = (memberLoginID) => {
  return `<?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap:Body>
        <GetDashboardDetailsOfChemist xmlns="http://tempuri.org/">
        <user>${CRED.user}</user>
        <password>${CRED.password}</password>
          <memberLogin>${memberLoginID}</memberLogin>
        </GetDashboardDetailsOfChemist>
      </soap:Body>
    </soap:Envelope>`;
};

const defaultAccountXML = (memberLoginID) => {
  return `<?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap:Body>
        <GetDefaultAccountByLogin xmlns="http://tempuri.org/">
        <user>${CRED.user}</user>
        <password>${CRED.password}</password>
          <memberLogin>${memberLoginID}</memberLogin>
        </GetDefaultAccountByLogin>
      </soap:Body>
    </soap:Envelope>`;
};

const registeredChemistXMl = (mobile) => {
  return `<?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap:Body>
        <IsAlreadyRegisterChemist xmlns="http://tempuri.org/">
        <user>${CRED.user}</user>
        <password>${CRED.password}</password>
          <MobileNo>${mobile}</MobileNo>
        </IsAlreadyRegisterChemist>
      </soap:Body>
    </soap:Envelope>`;
};

const detailsByTypeXML = (memberID, type) => {
  return `<?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap:Body>
        <GetDetailsByType xmlns="http://tempuri.org/">
        <user>${CRED.user}</user>
        <password>${CRED.password}</password>
          <MemberID>${memberID}</MemberID>
          <type>${type}</type>
        </GetDetailsByType>
      </soap:Body>
    </soap:Envelope>`;
};

const storeByTypeXML = (obj) => {
  return `<?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap:Body>
        <StoreCampaignImages xmlns="http://tempuri.org/">
        <user>${CRED.user}</user>
        <password>${CRED.password}</password>
          <MemberLogin>${obj["MemberLoginId"]}</MemberLogin>
          <CampaignID>${obj["CampaignID"]}</CampaignID>
          <ImageURL>${obj["ImageURL"]}</ImageURL>
        </StoreCampaignImages>
      </soap:Body>
    </soap:Envelope>`;
};

const orderDeliveryByOrderReferenceXML = (obj) => {
  return `<?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap:Body>
        <UpdateOrderDeliveryByOrderReference xmlns="http://tempuri.org/">
        <user>${CRED.user}</user>
        <password>${CRED.password}</password>
          <OrderReference>${obj["OrderReference"]}</OrderReference>
          <GiftReceiveImageUrl1>${obj["GiftReceiveImageUrl1"]}</GiftReceiveImageUrl1>
          <GiftReceiveImageUrl2>${obj["GiftReceiveImageUrl2"]}</GiftReceiveImageUrl2>
          <GiftReceiveImageUrl3>${obj["GiftReceiveImageUrl3"]}</GiftReceiveImageUrl3>
        </UpdateOrderDeliveryByOrderReference>
      </soap:Body>
    </soap:Envelope>`;
};

module.exports = {
  memberLoginXML,
  chemistCardNoMyMobileXML,
  dashboardDetailsXML,
  defaultAccountXML,
  registeredChemistXMl,
  detailsByTypeXML,
  storeByTypeXML,
  orderDeliveryByOrderReferenceXML,
};
