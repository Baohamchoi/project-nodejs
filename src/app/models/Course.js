const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Plugin
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');



const Course = new Schema({
    name: { type: String, required: true, maxLength: 255 },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    videoId: { type: String, required: true, maxLength: 255 },
    level: { type: String, maxLength: 255 },    
    slug: { type: String, slug: "name", unique: true} // Tạo ra một slug từ trường name và không cho phép trùng lặp thì có thể dùng unique: true, Nhưng nó đang bị lỗi và chưa sửa được
}, {    
    timestamps: true, // tự động tạo thêm 2 trường createAt và updateAt
});


// Kích hoạt plugin
mongoose.plugin(slug); // plugin slug
Course.plugin(mongooseDelete, { 
    deletedAt : true,
    overrideMethods: 'all'
}); // plugin mongoose-delete (soft delete) // overrideMethods: 'all' để ghi đè tất cả các phương thức


module.exports = mongoose.model('Course', Course); // Export ra một model có tên là Course