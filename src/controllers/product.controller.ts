import productModel from '../models/product.model';

export const getProducts = async (req: any, res: any) => {
  const products = await productModel.find();
  res.json(products);
};

export const createProduct = async (req: any, res: any) => {
  const newProduct = new productModel (req.body);
  await newProduct.save();
  res.json(newProduct);
}

export const getProduct = async (req: any, res: any) => {
  try {
    const foundProduct = await productModel.findById(req.params?.id);
    if(!foundProduct) return res.status(404).json({message:"Product not found"});
    return res.json(foundProduct);
  } 
  catch (error: any) {
    return res.status(500).send(error);
  }
}

export const updateProduct = async (req: any, res: any) => {
  const updatedProduct = await productModel.findByIdAndUpdate(req.params?.id, req.body, {new: true})
  res.json(updatedProduct);
}

export const deleteProduct =async (req: any, res: any) => {
  try {
    const deletedProduct = await productModel.findByIdAndRemove(req.params?.id);
    if (!deletedProduct) return res.status(400).json({message: "Product not found"});
    return res.json(deletedProduct);
  } 
  catch (error: any) {
    return res.status(500).send(error);
  }
}