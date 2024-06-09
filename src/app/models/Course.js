const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);

const Course = new Schema({
    name: { type: String, required: true, maxLength: 255 },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    videoId: { type: String, required: true, maxLength: 255 },
    level: { type: String, maxLength: 255 },
    slug: { type: String, slug: "name" } // Tạo ra một slug từ trường name và không cho phép trùng lặp thì có thể dùng unique: true, Nhưng nó đang bị lỗi và chưa sửa được
    // createAt: { type: Date, default: Date.now },  // Dùng để lưu thời gian tạo ra đối tượng trong database
    // updateAt: { type: Date, default: Date.now },  // Dùng để lưu thời gian cập nhật đối tượng trong database
}, {    
    timestamps: true, // tự động tạo thêm 2 trường createAt và updateAt
});

module.exports = mongoose.model('Course', Course); // Export ra một model có tên là Course