import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
    }
`;

export const Container = styled.div`
  height: 100vh;
  `;

export const Header = styled.div`
  background-color: blueviolet;
  height: 150px;
  text-align: center;
  `;

export const HeaderText = styled.h1`
  padding-top: 40px;
  color: white;
  margin: 0;
  `;

export const Body = styled.div`
  max-width: 950px;
  margin: 0 auto;
  background-color: #f0f2f5;
  border: 1px solid #f0f2f5;
  padding: 0 20px 20px;
`;
