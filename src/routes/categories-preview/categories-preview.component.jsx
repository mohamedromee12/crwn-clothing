import './categories-preview.styles.scss';

import { useContext } from "react";

import { CategoriesContext } from "../../context/categories.context";

import { Fragment } from "react";



import CategoryPreview from "../../components/category-preview/category-preview.component";


const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products}></CategoryPreview>
          )
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
