const { doc } = require("../controllers/pages");

module.exports = router => {
  router.get("/", doc);
  router.get("/doc", doc);

  return router;
};