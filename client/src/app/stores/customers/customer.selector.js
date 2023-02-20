import { createSelector } from "reselect";

const selectCustomersReducer = (state) => state.customers;

export const selectCustomersArray = createSelector(
  [selectCustomersReducer],
  (customersSlice) => customersSlice.customersArray
);

export const selectCustomer = createSelector(
  [selectCustomersReducer],
  (customersSlice) => customersSlice.customer
);

export const selectCustomersIsLoading = createSelector(
  [selectCustomersReducer],
  (customersSlice) => customersSlice.isLoading
);

export const selectCustomersSuccess = createSelector(
  [selectCustomersReducer],
  (customersSlice) => customersSlice.success
);
