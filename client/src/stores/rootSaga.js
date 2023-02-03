import { all, call } from "redux-saga/effects";

import { brandsSaga } from "./brands/brand.saga";
import { singleBrandSaga } from "./singleBrand/singleBrand.saga";
import { userSaga } from "./user/user.saga";

export function* rootSaga() {
  yield all([call(brandsSaga), call(userSaga), call(singleBrandSaga)]);
}