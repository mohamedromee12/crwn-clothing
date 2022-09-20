import "./category.styles.scss";

import { useParams } from "react-router-dom";

import { useContext, useState, useEffect } from "react";
import { CategoriesContext } from "../../context/categories.context";
import { Fragment } from "react";
import ProductCard from "../../components/product-card/product-card.component";
const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducst] = useState([]);

  useEffect(() => {
    setProducst(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
