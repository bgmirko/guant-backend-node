
const User = require('../models/user');

module.exports = {
    getUser: async function({ email, password }) {
        const user = await User.findOne({ email: email });
        if (!user) {
            console.log("usao u error")
            const error = new Error('User not found.');
            error.code = 401;
            throw error;
        }
        //   const isEqual = await bcrypt.compare(password, user.password);
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
    }
  };