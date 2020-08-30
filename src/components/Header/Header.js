import React from "react";
import { css } from "@emotion/core";
import tabsNameData from "data/tabsNameData";

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
const header_tabs = () => css`
  width: 100%;
  background-color: #008966;
  border-radius: 5px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
const tab = (active) => () => css`
  padding: 0.5rem;
  flex: auto;
  display: flex;
  justify-content: center;
  list-style: none;
  ${active ? 'background-color: red' : ''}
  `;

class Header extends React.Component {
  render() {
    return (
      <>
        <div css={header}>
          <img css={header_image} src='./assets/image/logo.svg' alt='img'/>
          <div>Score:</div>
        </div>
        <ul css={header_tabs}>
          {tabsNameData.map(el => {
            return (
            <li key={el.toString()} css={tab(Number(el) === this.props.activeTab)}>{el}</li>
            )
          })}
        </ul>
        
      </>
    );
  }
}

export default Header;
