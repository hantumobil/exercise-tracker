const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/exercise-track' )

// define relationship
// https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose

const userScheme = new mongoose.Schema({
    username: { type: String, required: true },
    exercises: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'exercise'
        }
    ]
});
const exerciseScheme = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    description: String,
    duration: String,
    date: String
});

const User = mongoose.model('user', userScheme);
const Exercise = mongoose.model('exercise', exerciseScheme);

module.exports = {
    User: User,
    Exercise: Exercise
}
