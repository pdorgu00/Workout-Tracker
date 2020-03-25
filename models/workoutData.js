const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutData = new Schema({
    day: {
        type: Date,
        default: Date.now,
    },
    workouts: [{
        type: {
            type: String,
            trim: true,
            require: "enter type of exercise"
        },
        name: {
            type: String,
            trim: true,
            require: "enter name of exercise"
        },
        duration: {
            type: Number,
            require: "enter duration of workout"
        },
        weight: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        sets: {
            type: Number,
        }
    }]
},
    
);




const WorkoutData = mongoose.model("Workout", workoutData);

module.exports = WorkoutData;