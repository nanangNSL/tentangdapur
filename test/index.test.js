import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Login from "../components/form/login";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("With React Testing Library", () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;

  it("testing features link href", () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    const linkElement = screen.getByText(/Sign Up/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("testing features element form", () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    const formElement = screen.getByRole("form");
    expect(formElement).toBeInTheDocument();
  });

  it("testing features element input email", () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    const inputEmailElement = screen.getByRole("textbox");
    expect(inputEmailElement).toBeInTheDocument();
  });

  it("testing features element input password", () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    const inputEmailElement = screen.getByRole("password");
    expect(inputEmailElement).toBeInTheDocument();
  });

  it("testing features element button", () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    const buttonEl = screen.getByRole("button");
    expect(buttonEl).toBeInTheDocument();
  });

  it("testing features placeholder email", () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    const placeholderEmailElement = screen.getByPlaceholderText(
      "👤 examplexxx@gmail.com"
    );
    expect(placeholderEmailElement).toBeInTheDocument();
  });

  it("testing features placeholder passsword", () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    const placeholderPassElement = screen.getByPlaceholderText("🔒 Password");
    expect(placeholderPassElement).toBeInTheDocument();
  });

  it("testing features event user input email", () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    const placeholderEmailElement = screen.getByPlaceholderText(
      "👤 examplexxx@gmail.com"
    );
    const testValue = "";

    fireEvent.change(placeholderEmailElement, { target: { testValue } });
    expect(placeholderEmailElement.value).toBe(testValue);
  });

  it("testing features event user input password", () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    const placeholderPassElement = screen.getByPlaceholderText("🔒 Password");
    const testValue = "";

    fireEvent.change(placeholderPassElement, { target: { testValue } });
    expect(placeholderPassElement.value).toBe(testValue);
  });

  it("testing features event button loading", () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    const buttonEl = screen.getByRole("button");
    const placeholderEmailElement = screen.getByPlaceholderText(
      "👤 examplexxx@gmail.com"
    );
    const placeholderPassElement = screen.getByPlaceholderText("🔒 Password");
    const testValue = "";


    fireEvent.change(placeholderEmailElement, { target: { testValue } });
    fireEvent.change(placeholderPassElement, { target: { testValue } });
    fireEvent.click(buttonEl)

    expect(buttonEl).not.toHaveTextContent(/Loading.../i)
  });


});
