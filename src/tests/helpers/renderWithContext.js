import React from "react";
import { render } from "@testing-library/react";
import AppProvider from "../../context/AppProvider";

export const renderWithContext = (component) => ({
    ...render(<AppProvider>{component}</AppProvider>),
});