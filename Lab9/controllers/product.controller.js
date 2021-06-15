const Product = require('../models/product.model');

const products = [];

exports.getAll = (req, res) => {
    res.status(200).send(products);
};

exports.add = (req, res) => {
  console.log(req.body);
  const product = new Product(req.body.name, req.body.description, req.body.price, req.body.id);
  products.push(product);
  res.status(201).send(product);
}

exports.update = (req, res) => {
  const update = new Product(req.body.name, req.body.description, req.body.price, req.body.id);
  const place = products.indexOf((p) => p.id === req.body.id);
  products.splice(place, 1, update);
  res.status(200).send(update);
}

exports.delete = (req, res) => {
  console.log(req.param.id);
  const place = products.indexOf((p) => p.id === req.param.id);
  const output = products.splice(place, 1);
  res.status(200).send(output);
}