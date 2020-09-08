const soapRequest = require("easy-soap-request");
const convert = require("xml-js");
const config = require("config");

const {
  memberLoginXML,
  chemistCardNoMyMobileXML,
  dashboardDetailsXML,
  defaultAccountXML,
  registeredChemistXMl,
  detailsByTypeXML,
  storeByTypeXML,
  orderDeliveryByOrderReferenceXML,
} = require("../xml/xml");

const url = config.get("baseurl");

const options = {
  ignoreComment: true,
  alwaysChildren: true,
  ignoreAttributes: true,
  ignoreDeclaration: true,
  compact: true,
  spaces: 4,
};

class AuthService {
  static async memberLogin(req, res) {
    try {
      const sampleHeaders = {
        "Content-Type": "text/xml;charset=UTF-8",
        soapAction: "http://tempuri.org/GetMemberByLogin",
      };
      const xml = memberLoginXML(req.body.memberLogin);
      const result = await soapRequestCall(sampleHeaders, xml);
      if (result) {
        const jsonData = convert.xml2json(result, options);
        return res
          .status(200)
          .send({ status: true, data: JSON.parse(jsonData), error: null });
      } else {
        return res.status(400).send({
          status: false,
          data: result,
          error: "Internal Server Error",
        });
      }
    } catch (error) {
      return res.status(400).send({ status: false, data: null, error: error });
    }
  }

  static async getChemistCardNoByMobileNo(req, res) {
    try {
      const sampleHeaders = {
        "Content-Type": "text/xml;charset=UTF-8",
        soapAction: "http://tempuri.org/GetChemistCardNoByMobileNo",
      };
      const xml = chemistCardNoMyMobileXML(req.body.mobile);
      const result = await soapRequestCall(sampleHeaders, xml);
      if (result) {
        const jsonData = convert.xml2json(result, options);
        return res
          .status(200)
          .send({ status: true, data: JSON.parse(jsonData), error: null });
      }
      return res
        .status(404)
        .send({ status: false, data: result, error: "Internal Server Error" });
    } catch (error) {
      return res.status(400).send({ status: false, data: null, error: error });
    }
  }

  static async getDashboardDetails(req, res) {
    try {
      const sampleHeaders = {
        "Content-Type": "text/xml; charset=UTF-8",
        soapAction: "http://tempuri.org/GetDashboardDetailsOfChemist",
      };
      const xml = dashboardDetailsXML(req.body.memberLogin);
      const result = await soapRequestCall(sampleHeaders, xml);
      if (result) {
        const jsonData = convert.xml2json(result, options);
        return res
          .status(200)
          .send({ status: true, data: JSON.parse(jsonData), error: null });
      } else {
        return res.status(400).send({
          status: false,
          data: result,
          error: "Internal Server Error",
        });
      }
    } catch (error) {
      return res.status(400).send({ status: false, data: null, error: error });
    }
  }

  static async getDefaultAccountByLogin(req, res) {
    try {
      const sampleHeaders = {
        "Content-Type": "text/xml; charset=UTF-8",
        soapAction: "http://tempuri.org/GetDefaultAccountByLogin",
      };
      const xml = defaultAccountXML(req.body.memberLogin);
      const result = await soapRequestCall(sampleHeaders, xml);
      if (result) {
        const jsonData = convert.xml2json(result, options);
        return res
          .status(200)
          .send({ status: true, data: JSON.parse(jsonData), error: null });
      } else {
        return res.status(400).send({
          status: false,
          data: result,
          error: "Internal Server Error",
        });
      }
    } catch (error) {
      return res.status(400).send({ status: false, data: null, error: error });
    }
  }

  static async isAlreadyRegisterChemist(req, res) {
    try {
      const sampleHeaders = {
        "Content-Type": "text/xml; charset=UTF-8",
        soapAction: "http://tempuri.org/IsAlreadyRegisterChemist",
      };
      const xml = registeredChemistXMl(req.body.mobile);
      const result = await soapRequestCall(sampleHeaders, xml);
      if (result) {
        const jsonData = convert.xml2json(result, options);
        return res
          .status(200)
          .send({ status: true, data: JSON.parse(jsonData), error: null });
      } else {
        return res.status(400).send({
          status: false,
          data: result,
          error: "Internal Server Error",
        });
      }
    } catch (error) {
      return res.status(400).send({ status: false, data: null, error: error });
    }
  }

  static async getDetailsByType(req, res) {
    try {
      const sampleHeaders = {
        "Content-Type": "text/xml; charset=UTF-8",
        soapAction: "http://tempuri.org/GetDetailsByType",
      };
      const xml = detailsByTypeXML(req.body.memberId, req.body.type);
      const result = await soapRequestCall(sampleHeaders, xml);
      if (result) {
        const jsonData = convert.xml2json(result, options);
        return res
          .status(200)
          .send({ status: true, data: JSON.parse(jsonData), error: null });
      } else {
        return res.status(400).send({
          status: false,
          data: result,
          error: "Internal Server Error",
        });
      }
    } catch (error) {
      return res.status(400).send({ status: false, data: null, error: error });
    }
  }

  static async storeCampaignImages(req, res) {
    try {
      const sampleHeaders = {
        "Content-Type": "text/xml; charset=UTF-8",
        soapAction: "http://tempuri.org/StoreCampaignImages",
      };
      const xml = storeByTypeXML({ ...req.body });
      const result = await soapRequestCall(sampleHeaders, xml);
      if (result) {
        const jsonData = convert.xml2json(result, options);
        return res
          .status(200)
          .send({ status: true, data: JSON.parse(jsonData), error: null });
      } else {
        return res.status(400).send({
          status: false,
          data: result,
          error: "Internal Server Error",
        });
      }
    } catch (error) {
      return res.status(400).send({ status: false, data: null, error: error });
    }
  }

  static async updateOrderDeliveryByOrderReference(req, res) {
    try {
      const sampleHeaders = {
        "Content-Type": "text/xml; charset=UTF-8",
        soapAction: "http://tempuri.org/UpdateOrderDeliveryByOrderReference",
      };
      const xml = orderDeliveryByOrderReferenceXML({ ...req.body });
      const result = await soapRequestCall(sampleHeaders, xml);
      if (result) {
        const jsonData = convert.xml2json(result, options);
        return res
          .status(200)
          .send({ status: true, data: JSON.parse(jsonData), error: null });
      } else {
        return res.status(400).send({
          status: false,
          data: result,
          error: "Internal Server Error",
        });
      }
    } catch (error) {
      return res.status(400).send({ status: false, data: null, error: error });
    }
  }
}

async function soapRequestCall(sampleHeaders, xml) {
  try {
    const { response } = await soapRequest({
      url: url,
      headers: sampleHeaders,
      xml: xml,
    });
    const { headers, body, statusCode } = response;
    if (statusCode == 200) {
      return body;
    } else {
      return null;
    }
  } catch (error) {
    return error;
  }
}
module.exports = AuthService;
