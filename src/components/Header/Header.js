import React from "react";
import { css } from "@emotion/core";

const header = () => css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  font-weight: 700;
  padding: 15px 0;
`;
const header_image = () => css`
  width: 200px;
  height: 50px;
`
const header_questions = () => css`
  width: 100%;
  background-color: #008966;
  border-radius: 5px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  flex-basis: 20%;

  li {
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    list-style: none;
  }
`;

class Header extends React.Component {
  render() {
    return (
      <>
        <div css={header}>
          <img css={header_image} src='./assets/image/logo.svg' />
          <div>Score:</div>
        </div>
        <ul css={header_questions}>
          <li>Разминка</li>
          <li>Воробьиные</li>
          <li>Лесные птицы</li>
          <li>Певчие птицы</li>
          <li>Хищные птицы</li>
          <li>Морские птицы</li>
        </ul>
        
      </>
    );
  }
}

export default Header;
