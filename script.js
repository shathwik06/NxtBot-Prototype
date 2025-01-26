const crypto = require("crypto");

const secret = "guafv4d411zt82yry70wd7ptfus23bbl";
const userId = 1234567890;

const hash = crypto.createHmac("sha256", secret).update(userId).digest("hex");
