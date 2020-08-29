import React from "react";
import { css } from "@emotion/core";
import Player from "components/Player";
import BirdDescription from "components/BirdDescription";

const button = () => css`
  width: 100%;
  padding: 0.5rem;
  margin-top: 1.5rem;
  border-radius: 3px;
  background-color: #00bc8c;
  cursor: pointer;
  outline: none;
  border: none;
  color: #fff;
  transition: 0.3s;
  &:hover {
    background-color: #00efb2;
  }
`;
const answerContainer = () => css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 1.5rem;
`;
const listItems = () => css`
  max-width: 50%;
  max-height: 310px;
  flex: 0 0 48%;
  list-style: none;
  background-color: #303030;
  border: 1px solid #555;
  border-radius: 5px;
  cursor: pointer;
  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #444;
    margin-right: 1rem;
  }
  li {
    padding: 1rem;
    &:not(:last-child) {
      border-bottom: 1px solid #555;
    }
    &:hover {
      background-color: #444;
    }
  }
  @media (max-width: 720px) {
    max-width: 100%;
    flex: 0 0 100%;
  }
`;
const description = () => css`
  max-width: 50%;
  flex: 0 0 48%;
  background-color: #303030;
  border: 1px solid #555;
  border-radius: 5px;

  @media (max-width: 720px) {
    margin-top: 1.5rem;
    max-width: 100%;
    flex: 0 0 100%;
  }
`

class AnswerBlock extends React.Component {
  render() {
    return (
        <div css={answerContainer}>
          <ul css={listItems}>
            <li>
              <span />
              Птица 1
            </li>
            <li>
              <span />
              Птица 2
            </li>
            <li>
              <span />
              Птица 3
            </li>
            <li>
              <span />
              Птица 4
            </li>
            <li>
              <span />
              Птица 5
            </li>
            <li>
              <span />
              Птица 6
            </li>
          </ul>
          <div css={description}> 
            <BirdDescription  />
          </div>
          <button css={button}> Next Level</button>
        </div>
    );
  }
}

export default AnswerBlock;
