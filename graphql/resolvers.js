const Performer = require('../models/performer');

module.exports = {
    getUser: async function({ email, password }) {
        const user = await User.findOne({ email: email });
        if (!user) {
            const error = new Error('User not found.');
            error.code = 401;
            throw error;
        }
        if (password !== user.password) {
            const error = new Error('Password is incorrect.');
            error.code = 401;
            throw error;
        }
        return {
            _id: user._id.toString(),
            email: user.email,
            name: user.name,
            userName: user.userName,
            password: user.password
        }   
    },
    createUser: async function({ email, password, name, userName }, req) {
        const user = new User({
          email: email,
          name: name,
          password: password,
          userName: userName
        });
        const createdUser = await user.save();
        return { ...createdUser._doc, _id: createdUser._id.toString() };
    },
    createPerformer: async function({ name, age, category }, req) {
        const performer = new Performer({
          name: name,
          age: age,
          category: category
        });
        const createdPerformer = await performer.save();
        return { ...createdPerformer._doc, _id: createdPerformer._id.toString() };
    },
    getPerformers: async function() {
        const performers = await Performer.find();
        return {
            performers: performers.map(p => {
            return {
              ...p._doc,
              _id: p._id.toString(),
              name: p.name,
              age: p.age
            };
          })
        };
      },
      deletePerformer: async function(_id, req) {
        await Performer.deleteOne({_id: _id});
        return true
      },
      editPerformer: async function({_id, name, age, category}, req) {
        await Performer.updateMany(
            {'_id' : _id},
            {"$set":{"name" : name, "age" : age, "category" : category}});
        return true;
      }
  };