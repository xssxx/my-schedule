const crypto = require("crypto");
const axios = require("axios");
require("dotenv").config();

// @desc        Post Login request to ku api
// @route       POST localhost:9000/login
// @access      Private
exports.login = async (req, res) => {
  try {
    const encodedBody = {
      username: encryptString(req.body.username),
      password: encryptString(req.body.password),
    };
    const response = await axios.post(
      "https://myapi.ku.th/auth/login",
      encodedBody,
      {
        headers: {
          "Content-Type": "application/json",
          "app-key": "txCR5732xYYWDGdd49M3R19o1OVwdRFc",
        },
      }
    );
    res.status(200).json(response.data);
  } catch (err) {
    res.status(400).json({ success: false });
    console.log(err);
  }
};

// encrypt function used in controllers
function encryptString(data) {
  return crypto
    .publicEncrypt(
      {
        key: process.env.kuPublicKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      },
      Buffer.from(data, "utf-8")
    )
    .toString("base64");
}
