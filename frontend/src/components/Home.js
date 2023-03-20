import React, { useEffect } from "react";
import MetaData from "./layouts/MetaData";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productActions";
import Product from "../product/Product";
import Loader from "./layouts/Loader";
import { useAlert } from "react-alert";
const Home = () => {
  const dispatch = useDispatch();
  const qlert = useAlert();
  const { loading, products, error, productsCount } = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    dispatch(getProducts());
    if (error) {
      alert.error(error);
    }
  }, [dispatch, error]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={"Buy Best Products Onlined"} />
          <div className="container container-fluid">
            <h1 id="products_heading">Latest Products</h1>
            <section id="products" className="container mt-5">
              <div className="row">
                {products &&
                  products.map((product) => {
                    return <Product key={product._id} product={product} />;
                  })}
              </div>
            </section>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
