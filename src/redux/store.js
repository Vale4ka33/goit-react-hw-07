import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const contactsPersistConfig = {
  key: "contacts",
  storage,
};

const contactPersistedReducer = persistReducer(
  contactsPersistConfig,
  contactsReducer
);

const store = configureStore({
  reducer: {
    contacts: contactPersistedReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
