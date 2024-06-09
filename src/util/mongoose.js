const { default: mongoose } = require("mongoose");

module.exports = {
    mutilpleMongoosetoObject: function (mongooses) {  // Chuyển đổi một mảng mongoose thành một mảng thông thường
        return mongooses.map(mongoose => mongoose.toObject());
    },

    mongooseToObject: function (mongoose) {   // Chuyển đổi một đối tượng mongoose thành một đối tượng thông thường
        return mongoose ? mongoose.toObject() : mongoose;
    }
}