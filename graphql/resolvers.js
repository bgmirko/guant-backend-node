
const Performer = require('../models/performer');

module.exports = {
    getUser: async function({ email, password }) {
        const user = await User.findOne({ email: email });
        if (!user) {
            console.log("usao u error")
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
        console.log(age);
        const performer = new Performer({
          name: name,
          age: age,
          category: category
        });
        const createdPerformer = await performer.save();
        return { ...createdPerformer._doc, _id: createdPerformer._id.toString() };
    }

  };