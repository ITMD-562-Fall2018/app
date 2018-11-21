const mongoose = require("mongoose");

// Import Model
const Sample = require("../models/Sample");

exports.getSamples = (req, res) => {
  Sample.find({}).then(samples => {
    res.json(samples);
  });
};

exports.postSample = (req, res) => {
  let newSample = new Sample({
    title: req.body.title
  });

  newSample.save().then(sample => {
    res.json(sample);
  });
};

exports.putSample = (req, res) => {
  let id = req.params.id;
  Sample.findOneAndUpdate({ _id: id }, { title: req.body.title }).then(
    sample => {
      sample.save().then(sample => {
        res.json(sample);
      });
    }
  );
};

exports.deleteSample = (req, res) => {
  let id = req.params.id;
  Sample.findByIdAndDelete({ _id: id }).then(() =>
    res.json({
      msg: "Removed successfully"
    })
  );
};
