const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// const errorController = require('./controllers/error');
const User = require('./models/user');

const app = express();

// app.set('view engine', 'ejs');
// app.set('views', 'views');

// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById('5e354cb21c9d440000602b97')
    .then(user => {
      console.log(user);
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

// app.use('/admin', adminRoutes);
// app.use(shopRoutes);

// app.use(errorController.get404);

mongoose
  .connect(
    'mongodb+srv://mirko:@cluster0-hpaeh.mongodb.net/quantox?retryWrites=true&w=majority'
  )
  .then(result => {
    console.log("connected to mongoDb")
    User.findOne().then(user => {
      if (!user) {
        const user = new User({
          name: 'mirko',
          email: 'mirko@test.fk',
          userName: 'mirko2020',
          password: 'password2020'
        });
        user.save();
      }
    });
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
