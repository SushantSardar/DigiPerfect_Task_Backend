const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BookSchema = new Schema(
	{
        thumbnail:{type:String},
        title:{ type: String },
        publisher : { type: String },
        author:{ type: String },
        publishingYear:{ type: Number },
        eanCode:{ type: String },
        copiesInStock:{ type: Number },
	},
	{
		timestamps: true,
	}
);

const BookModel = mongoose.model('Book', BookSchema);
module.exports = BookModel;