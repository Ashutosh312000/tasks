const path = require('path');

const rootDir = require('../util/path');

exports.addproductroute= (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  };

  exports.addpostroute=  (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
  };