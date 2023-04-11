const get_health = (_req, res) => {
  res.status(200).json({
    status: "Ok",
  });
};

const HealthController = (app) => {
  app.get("/", get_health);
};

export default HealthController;
