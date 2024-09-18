import { configureStore } from "@reduxjs/toolkit";
import sideNavSlice from "./slices/sidenavSlice";
import deleteSaaSSlice from "./slices/deleteSaaSSlice";
import createSaaSSlice from "./slices/createSaaSSlice";
import editSaaSSlice from "./slices/editSaaSSlice";
import loginSlice from "./slices/loginSlice";
import currentPathSlice from "./slices/currentPathSlice";
import sideNavDocumentationSlice from "./slices/sidenavDocumentationSlice";
import nextWeekActivitySlice from "./slices/createNextWeekActivity";

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    sidenav: sideNavSlice.reducer,
    deleteSaaS: deleteSaaSSlice.reducer,
    createSaaS: createSaaSSlice.reducer,
    reroute: currentPathSlice.reducer,
    editSaaS: editSaaSSlice.reducer,
    sideNavDoc: sideNavDocumentationSlice.reducer,
    nextWeekActivity: nextWeekActivitySlice.reducer,
  },
});

export default store;

// Get the type of our store variable
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore["dispatch"];
