const mongoose = require('mongoose');
const { findById } = require('./models/Shop-model');

const Shop = require('./models/Shop-model')
const User = require('./models/User-model')

mongoose.connect(
  'mongodb://localhost:27017/shop_aisle?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'
).then(() => {
    console.log('Connected to database!')
}).catch(() => {
    console.log('Connection failed!')
});

const addShop = async (req, res, next) => {
  const newShop = new Shop({
    name: req.body.name,
    area: req.body.area,
    category: req.body.category,
    opening: req.body.opening,
    closing: req.body.closing
  });
  
  const result = await newShop.save();
  res.json(result);
};

const editShops = async(req,res,next) => {
  const updatedShop = Shop.findByIdAndUpdate(req.params.id,{
    name: req.body.name || Shop.findById(req.params.id).name,
    area: req.body.area || Shop.findById(req.params.id).area,
    category: req.body.category || Shop.findById(req.params.id).category,
    opening: req.body.opening || Shop.findById(req.params.id).opening,
    closing: req.body.closing || Shop.findById(req.params.id).closing
  })

  const result = await updatedShop;
  res.json(result);
}

const getShops = async (req, res, next) => {
  const shops = await Shop.find().exec();
  res.json(shops);
}

const deleteShops = async(req,res,next) => {
    const newArr = await Shop.findByIdAndDelete(req.params.id)
    res.json(newArr)

}

const addUser = async (req, res, next) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  
  const result = await newUser.save();
  
  try {
    res.json(result);
  } catch (error) {
    res.json("Error occured in adding user")
  }
};

exports.addShop = addShop;
exports.getShops = getShops;
exports.deleteShops = deleteShops;
exports.addUser = addUser;
exports.editShops = editShops;