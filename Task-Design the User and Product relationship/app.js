const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database'); // number wise notes pdho
const Product = require('./models/product');//1)sabse pehle product aur user table ko import kro
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {//3) dekho yeh middleware har br call hoga khud se per server.listen hone ke bd he
  User.findByPk(1)          // coz npm start sequilize ko run krta hai, middlewares ko sirf register krta hai
    .then(user => {     //middlewares sirf tb he chlte hai jab request ati hai aur wio reques lister ke bd he ayegi 
                   //and jo conditions hmne niche dali hai uske hisab se ek na ek user pkka ban he jayga to yeh user pkka milega
      req.user = user;//very imp we are finding a user and then saving that user to every request as req.user object
      //but be carefull it is not just a javascripyt object with request data but it is  sequilize object with
      //all properties like destroy() etc stored in the object,hence we can use them later. 
      next(); //next() is used because hme iske bd baki requests per jana hai 
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });//2)options will be learn in more sql 
User.hasMany(Product);//and (belongs to,has many) has same meaning

sequelize
  // .sync({ force: true }) force:true is used when we want to replace our already table in our database to new table
  .sync()                                   //it will drop the existing table and make a new table
  .then(result => {
    return User.findByPk(1); //ese he hmne bs find kia hai ki yeh userid wala ager nhi hai table m to create kro vrna mt kro
    // console.log(result);   //now go to admin.js controllers
  })
  .then(user => {
    if (!user) {
      return User.create({ name: 'Max', email: 'test@test.com' });
    }
    return user;
  })
  .then(user => {
    // console.log(user);
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
