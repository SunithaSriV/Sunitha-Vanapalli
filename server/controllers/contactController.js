const fs = require("fs");
const path = require("path");
const sendEmail = require("./../utils/email");
const isemail = require("isemail");
const AppError = require("./../utils/appError");

exports.contactMe = (req, res, next) => {
  if (!isemail.validate(req.body.email)) {
    return next(new AppError("Invalid Email", 400));
  }

  fs.readFile(
    path.join(__dirname, "../assets/emailReply.txt"),
    "utf-8",
    (err, data) => {
      if (err)
        return next(
          new AppError(
            "I had trouble sending you an email, try again later!",
            500
          )
        );
      const message = data.replace("{NAME}", req.body.name);
      sendEmail(req.body.email, "Recieved your Enquiry", message);
    }
  );

  fs.readFile(
    path.join(__dirname, "../assets/emailNotification.txt"),
    "utf-8",
    (err, data) => {
      const message = data
        .replace("{NAME}", req.body.name)
        .replace("{MESSAGE}", req.body.message);
      sendEmail(
        "rohinchopra1212@gmail.com",
        "Got a new Sumbission on portfolio website",
        message
      );
    }
  );
  res.status(200).json({
    status: "success",
    message: "sent",
  });
};
