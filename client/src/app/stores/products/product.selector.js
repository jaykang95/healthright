import { createSelector } from "reselect";

// accesses the "products" slice of the store
const selectProductsReducer = (state) => state.products;

// returns the "productsArray" property from the "products" slice
export const selectProductsArray = createSelector(
  [selectProductsReducer],
  (productsSlice) => productsSlice.productsArray
);

// returns the "adminProductsArray" property from the "products" slice
export const selectAdminProductsArray = createSelector(
  [selectProductsReducer],
  (productsSlice) => productsSlice.adminProductsArray
);

// returns the "adminProduct" property from the "products" slice
export const selectAdminProduct = createSelector(
  [selectProductsReducer],
  (productsSlice) => productsSlice.adminProduct
);

// returns the "product" property from the "products" slice
export const selectProduct = createSelector(
  [selectProductsReducer],
  (productsSlice) => productsSlice.product
);

// returns the "filteredProductsArray" property from the "products" slice
export const selectProductsFilteredByVendorArray = createSelector(
  [selectProductsReducer],
  (productsSlice) => productsSlice.filteredProductsArray
);

// returns a map of vendors and their respective products
export const selectVendorsMap = createSelector(
  [selectProductsArray],
  (productsArray) => {
    // If there are no products, return an empty object
    if (!productsArray) return {};
    // Map the products array to an object where each vendor is a key, and their respective products are the values
    return productsArray.reduce((acc, product) => {
      if (!acc[product.vendor]) {
        acc[product.vendor] = [];
      }
      acc[product.vendor].push(product);
      return acc;
    }, {});
  }
);

// returns the "isLoading" property from the "products" slice
export const selectProductsIsLoading = createSelector(
  [selectProductsReducer],
  (productsSlice) => productsSlice.isLoading
);

// returns the "success" property from the "products" slice
export const selectProductsSuccess = createSelector(
  [selectProductsReducer],
  (productsSlice) => productsSlice.success
);

// returns the "searchedProducts" property from the "products" slice
export const selectSearchedProducts = createSelector(
  [selectProductsReducer],
  (productsSlice) => productsSlice.searchedProducts
);
