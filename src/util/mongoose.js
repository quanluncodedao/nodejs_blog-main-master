module.exports = {
    mutipleMongooseToObject: function (mongoose) {
        return mongoose.map(mongoose => mongoose.toObject());
    },
    mongoseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    }
};
