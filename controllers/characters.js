const Character = require("../models/character");

exports.index = async (_, res, next) => {
  try {
    const characters = await Character.find();

    res.status(200).json(characters);
  } catch (error) {
    next(error);
  }
};

exports.show = async (req, res, next) => {
  try {
    const id = req.params.id;

    const character = await Character.findById(id);

    res.status(200).json(character);
  } catch (error) {
    next(error);
  }
};

exports.search = async (req, res, next) => {
  try {
    const term = req.params.term;

    const characters = await Character.search(term);

    res.status(200).json(characters);
  } catch (error) {
    next(error);
  }
};