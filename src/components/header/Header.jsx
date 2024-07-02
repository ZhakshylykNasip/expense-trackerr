import React from "react";
import styled from "styled-components";
import Button from "../UI/button/Button";

export const Header = ({ isLogin, onLogout }) => {
  return (
    <StyledHeader>
      <h2>Expense Tracker</h2>

      {isLogin && (
        <ContainerButton>
          <Button>Expenses</Button>
          <Button>Users</Button>
          <Button onClick={onLogout}>Logout</Button>
        </ContainerButton>
      )}
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  height: 100px;
  background: #ad9be9;
  display: flex;
  justify-content: space-between;
  padding: 0 20px 0 40px;
  align-items: center;
  h2 {
    font-size: 22px;
    font-weight: bold;
    color: white;
  }
`;

const ContainerButton = styled("div")`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 20px;
`;
