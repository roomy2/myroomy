const Mailjet = require("node-mailjet");
const config = require("../../config/config");

const mailjet = Mailjet.apiConnect(
  config.MJ_API_KEY_PUBLIC,
  config.MJ_API_KEY_PRIVATE
);

module.exports = sendMail = (subject, text, html, toEmail, toName) => {
  return mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "myroomyapp@gmail.com",
          Name: "MyRoomy Support Team",
        },
        To: [
          {
            Email: toEmail,
            Name: toName,
          },
        ],
        Subject: subject,
        TextPart: text,
        HTMLPart: html,
      },
    ],
  });
};
