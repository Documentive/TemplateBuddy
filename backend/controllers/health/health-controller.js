const get_health = (_req, res, logger) => {
  logger.info("GET /health");
  res.status(200).json({
    status: "Ok",
  });
};

const HealthController = (app, logger) => {
  app.get("/", (req, res) => get_health(req, res, logger));
};

export default HealthController;
