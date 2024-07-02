import React, { useState } from "react";
import { Input } from "../UI/input/Input";
import Button from "../UI/button/Button";
import styled from "styled-components";

export const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    setIsFormValid(emailValue.includes("@") && password.length > 7);
  };

  const handlePasswordChange = (event) => {
    const passwordValue = event.target.value;
    setPassword(passwordValue);
    setIsFormValid(password.length > 7 && email.includes("@"));
  };

  return (
    <StyledFrom onSubmit={(e) => e.preventDefault()}>
      <Input
        type="email"
        placeholder="Введите электронную почту"
        value={email}
        onChange={handleEmailChange}
      />
      <Input
        type="password"
        placeholder="Введите пароль"
        value={password}
        onChange={handlePasswordChange}
      />

      <Button type="submit" onClick={onLogin} disabled={!isFormValid}>
        Войти
      </Button>
    </StyledFrom>
  );
};

const StyledFrom = styled.form`
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  background-color: aliceblue;
  border-radius: 12px;
  button {
    width: 340px;
  }
`;
