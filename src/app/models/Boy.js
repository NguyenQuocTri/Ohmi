const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Boy = new Schema({
    name: { type: String},
    description: { type: String},
    price: { type: Number, },
    image: { type: String, },
    slug: { type: String,  slug: 'name', unique: true,},
 },{
    timestamps: true,
}
 );
                                     
 module.exports = mongoose.model('Boy', Boy);