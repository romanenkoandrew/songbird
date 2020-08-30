import React from "react";
import { css } from "@emotion/core";
import Player from "components/Player";
import birdsData from "data/birdsData";

const randomBird_container = () => css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  background-color: #303030;
  border-radius: 3px;
  padding: 1rem 0;
  margin-top: 1.5rem;
  @media (max-width: 720px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const randomBird_image = () => css`
  width: 200px;
  height: 150px;
  border-radius: 5px;
  margin-left: 1rem;
`
const randomBird = () => css`
  flex-basis: 60%;
  margin-right: 2rem;
  height: 150px;
  @media (max-width: 720px) {
    width: 90%;
    margin-right: 0;
  }
`
const randomBird_name = () => css`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2rem;
  padding: 1rem 0;
  margin-bottom: 1rem;
  border-bottom: 1px solid #555;
  @media (max-width: 720px) {
    text-align: center;
  }
`

class RandomBird extends React.Component {
  // componentDidUpdate() {
  //   console.log(birdsData[this.props.activeTab][this.props.correctAnswerID-1])
  // }
  render() {
    return (
      <div css={randomBird_container}>
        <img css={randomBird_image}  alt='img' src='./assets/image/defaultBird.jpg' />
        <div css={randomBird}> 
          <div css={randomBird_name}> Birds name</div>
          <Player src='https://www.xeno-canto.org/sounds/uploaded/WIPMNWUHXI/XC421078-Zwooi(j)_Karula_20180612_1656.mp3' />
        </div>
      </div>
    );
  }
}

export default RandomBird;
