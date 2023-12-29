const uuid = require("uuid/v4");
const { validationResult } = require("express-validator");
const Model = require("./../models/model");
const HttpError = require("../../backend/httpError");

const getModels = async (req, res, next) => {
  let models;
  try {
    models = await Model.find();
  } catch (err) {
    const error = new HttpError(
      "Fetching models failed, please try again later.",
      500
    );
    return next(error);
  }
  res.json({
    models: models.map((model) => model.toObject({ getters: true })),
  });
};

exports.getModels = getModels;
