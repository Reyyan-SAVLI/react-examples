import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProducts, saveProduct } from "../../redux/actions/productActions";
import { getCategories } from "../../redux/actions/categoryActions";
import ProductDetail from "./ProductDetail";

function AddOrUpdateProduct({
  products,
  categories,
  getProducts,
  getCategories,
  saveProduct,
  navigate,
  ...props
}) {
  const [product, setProduct] = useState({ ...props.product });
  const [errors, setErrors] = useState({});
  useEffect(() => {
    if (categories.length === 0) {
      getCategories();
    }
    if (products.length === 0) {
      getProducts();
    }
    setProduct({ ...props.product });
  }, [props.product]);

  function handleChange(event) {
    const { name, value } = event.target;
    setProduct((previousProduct) => ({
      ...previousProduct,
      [name]: name === "categoryId" ? parseInt(value, 10) : value,
    }));
    validate(name, value);
     
  }
  function validate(name, value){
     if (name==="productName" && value==="") {
      setErrors(previousErrors=>({...previousErrors, productName:"Product Name must have"}))
    }else{
       setErrors(previousErrors=>({...previousErrors, productName:""}))
    }
  }

  function handleSave(event) {
    event.preventDefault();
    saveProduct(product).then(() => {
      navigate("/");
    });
  }
  return (
    <ProductDetail
      product={product}
      categories={categories}
      onChange={handleChange}
      onSave={handleSave}
      errors={errors}
    ></ProductDetail>
  );
}
export function getProductById(products, productId) {
  let product = products.find((product) => product.id == productId) || null;
  return product;
}
function mapStateToProps(state, ownProps) {
  const productId = ownProps.productId;
  const product =
    productId && state.productListReducer.length > 0
      ? getProductById(state.productListReducer, productId)
      : {};
  return {
    product,
    products: state.productListReducer,
    categories: state.categoryListReducer,
  };
}
const mapDispatchToProps = {
  getCategories,
  getProducts,
  saveProduct,
};

const ConnectedAddOrUpdateProduct = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddOrUpdateProduct);

// React Router v6+ artık match/history prop'u geçmiyor, hook'larla alıp iletiyoruz
export default function AddOrUpdateProductPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  return (
    <ConnectedAddOrUpdateProduct productId={productId} navigate={navigate} />
  );
}
