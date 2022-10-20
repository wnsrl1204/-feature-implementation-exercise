import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import RegisterForm from "./RegisterForm";

describe("<RegisterForm />", () => {
  it("has form that return username and password", () => {
    render(<RegisterForm />);

    fireEvent.input(screen.getByRole("textbox", { name: "username" }), {
      target: { value: "testUser" },
    });
    fireEvent.input(screen.getByRole("textbox", { name: "password" }), {
      target: { value: "testPw" },
    });

    expect(screen.getByRole("textbox", { name: "username" })).toHaveValue(
      "testUser"
    );
    expect(screen.getByRole("textbox", { name: "password" })).toHaveValue(
      "testPw"
    );

    expect(screen.getByRole("form", { name: "register" })).toHaveFormValues({
      username: "testUser",
      password: "testPw",
    });
  });
});
