const { index, show, search } = require("../controllers/characters");

module.exports = router => {
  router.get("/characters", index);
  router.get("/characters/:id", show);
  router.get("/characters/search/:term", search);

  return router;
};