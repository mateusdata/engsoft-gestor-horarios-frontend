import RegisterUsers from "../pages/registerUsers";
import React from "react";
import { render } from "@testing-library/react";
import { GlobalContext } from "../context/globalContext";

jest.mock("../context/globalContext");
test("Renderiza a página de registro de usuários", () => {
  GlobalContext.contextHolder = "/* valor fictício */";
  GlobalContext.openNotificationWithIcon = jest.fn();
  const { getByText } = render(<RegisterUsers />);
  
  expect(getByText("Cadastro do professor")).toBeInTheDocument();
});