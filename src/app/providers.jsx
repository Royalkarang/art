"use client"; // Mark this as a client component

import store from "../redux/store";
import { Provider } from "react-redux";

export default function ProviderWrapper({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
