import React, { useContext } from "react";
import Styles from "../Pages/CSS/product.module.css";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import BreadCrums from "../Components/Breadcrums/BreadCrums";
import ProductDisplay from "../Components/ProductDisplay/Productdisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <>
      <BreadCrums product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </>
  );
};

export default Product;
