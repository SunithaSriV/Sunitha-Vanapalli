const express = require("express");
const helmet = require("helmet");
const xss = require("xss-clean");
const rateLimit = require("express-rate-limit");
const morgan = require("morgan");

const contactRouter = require("./routes/contactRoutes");
const globalErrorHandler = require("./controllers/errorController");
const AppError = require("./utils/appError");

const app = express();

// set security headers
app.use(helmet());

// limit req from same IP
app.use(
  rateLimit({
    max: 100,
    windowMs: 60 * 60 + 1000,
    message: "Too many requests from this IP,please try again in an hour",
  })
);

// sanitize against XSS
app.use(xss());

// dev logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json({ limit: "10kb" }));

// Routes
app.get("/", (req, res, next) => {
  res.status(200).json({
    status: "success",
  });
});

app.use("/api/v1/contact", contactRouter);

// 404 Handler
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`));
});

// Error Handler
app.use(globalErrorHandler);

module.exports = app;
