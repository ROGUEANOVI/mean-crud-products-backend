import {Schema, model} from 'mongoose';

const productSchema = new Schema(
  {
    name: {type: String, required: true},
    category: {type: String, required: true},
    location: {type:String, required: true},
    price: {type: Number, required:true}
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default model("productModel", productSchema, "products");