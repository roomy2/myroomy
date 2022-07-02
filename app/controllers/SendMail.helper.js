const Room = require("../models/Room.model");
const sendMail = require("./sendMail");

module.exports = {
  verify: (email, token, link) => {
    return new Promise((resolve, reject) => {
      let newlink = `${link}/user/verify/${email}/${token}`;

      let mailOptions = {
        from: "MyRoomy Support Team <myroomy@gmail.com>",
        to: email,
        subject: "Account Verify",
        text: `Verify Account Link <a href='${newlink}>Verify</a>'`,
        html: `
            <h1>Verify Account Link </h1>
            <a href=${newlink}>Verify</a>
          `,
      };

      return sendMail(
        mailOptions.subject,
        mailOptions.text,
        mailOptions.html,
        mailOptions.to,
        "User"
      );
    });
  },
  book: (id, email) => {
    return new Promise((resolve, reject) => {
      let mailOptions = {
        from: "MyRoomy Support Team <myroomy@gmail.com>",
        to: email,
        subject: "Room Booked",
        text: "Room Booked Successfully",
        html: `
            <h1>Room Booked Successfully</h1>
            <p>For enquiry Contact: +91 9876543210</p>
          `,
      };

      sendMail(
        mailOptions.subject,
        mailOptions.text,
        mailOptions.html,
        mailOptions.to,
        "User"
      );
      Room.findOneAndUpdate(
        { _id: id },
        {
          $set: {
            status: false,
          },
        }
      )
        .then((result) => {
          resolve(result);
          console.log("Room Status updated");
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
