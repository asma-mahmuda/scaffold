import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

const configureRootStore= () =>(
     configureStore({
        reducer,
    })
);
export default configureRootStore;