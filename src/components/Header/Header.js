import React from 'react';
import { css } from '@emotion/core';
import tabsNameData from 'data/tabsNameData';

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
`;
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
  &:first-of-type {
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
  }
  &:last-of-type {
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
  }
  background-color: ${active ?  '#00bc8c' : ''};
  @media (max-width: 720px) {
    &:first-of-type {
      border-bottom-left-radius: 0;
    }
    &:last-of-type {
      border-bottom-left-radius: 5px;
      border-top-right-radius: 0;
    }
  }
  @media (max-width: 525px) {
    &:last-of-type {
      border-bottom-left-radius: 0;
    }
  }
`;

class Header extends React.PureComponent {
  render() {
    return (
      <>
        <div css={header}>
          <img css={header_image} src='./assets/image/logo.svg' alt='img' />
          <div>Score: {this.props.gameScore}</div>
        </div>
        <ul css={header_tabs}>
          {tabsNameData.map((el, index) => {
            return (
              <li key={el.toString()} css={tab(index === this.props.activeTab)}>
                {el}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default Header;
