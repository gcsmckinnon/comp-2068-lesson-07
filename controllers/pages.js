exports.doc = (_, res) => {
  res.status(200)
  .json([
    {
      path: "/characters",
      description: "Returns the first 100 characters in the database."
    },
    {
      path: "/characters/:startsWithName",
      description: "Returns a list of characters whose names start with :startsWithName value."
    },
    {
      path: "/characters/:id",
      description: "Returns the character with the specified ID."
    }
  ]);
};