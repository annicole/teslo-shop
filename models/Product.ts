import mongoose, { Schema, model, Model } from "mongoose";
import { IProduct } from "../interfaces";

const productSchema = new Schema(
  {
    description: { type: String, required: true },
    images: [{ type: String }],
    inStock: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true, default: 0 },
    sizes: [
      {
        type: String,
        enum: {
          values: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
          message: "{VALUE} no es tamaño válido",
        },
        required: true,
      },
    ],
    slug: { type: String, required: true, unique: true },
    tags: [{ type: String, required: true }],
    title: { type: String, required: true },
    type: {
      type: String,
      enum: {
        values: ["shirts", "pants", "hoodies", "hats"],
        message: "{VALUE} no es tamaño válido",
      },
      required: true,
    },
    gender: {
      type: String,
      enum: {
        values: ["men", "women", "kid", "unisex"],
        message: "{VALUE} no es género válido",
      },
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

productSchema.index({title:'text',tags:'text'})

const Product: Model<IProduct> = mongoose.models.Product || model('Product',productSchema);

export default Product;
