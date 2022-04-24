// /*
//  * @Description:
//  * @Author: Kenzi
//  * @Date: 2021-08-03 07:12:55
//  * @LastEditTime: 2021-08-06 08:06:45
//  * @LastEditors: Kenzi
//  */
import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/navSlice";

export default configureStore({
  reducer: {
    nav: navReducer,
  },
});
