const Category = require('../models/category.model');

const categories = [];

exports.getAll = (req, res) => {
    res.status(200).send(categories);
};

exports.add = (req, res) => {
  console.log(req.body);
  const category = new Category(req.body.name, req.body.id);
  products.push(category);
  res.status(201).send(category);
}

exports.update = (req, res) => {
  const update = new Category(req.body.name, req.body.id);
  const place = categories.indexOf((c) => c.id === req.body.id);
  products.splice(place, 1, update);
  res.status(200).send(update);
}

exports.delete = (req, res) => {
  console.log(req.param.id);
  const place = categories.indexOf((c) => c.id === req.param.id);
  const output = categories.splice(place, 1);
  res.status(200).send(output);
}