import React from "react";
import { css } from "@emotion/core";
import Player from "components/Player";

const birdDescription_container = () => css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  background-color: #303030;
  border-radius: 3px;
  padding: 1rem 0;
  @media (max-width: 992px) {
    flex-direction: column;
  }
  @media (max-width: 720px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const birdDescription_image = () => css`
  width: 200px;
  height: 150px;
  border-radius: 5px;
  margin: 0 1rem;
`;
const birdDescription = () => css`
  margin-right: 2.3rem;
  height: 150px;
  width: 80%;
  @media (max-width: 720px) {
    width: 90%;
    margin-right: 0;
  }
`;
const birdDescription_name = () => css`
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid #555;
`;
const birdDescription_nameEng = () => css`
  font-size: 1.2rem;
  line-height: 2rem;
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid #555;
`;
const birdDescription_descr = () => css`
  font-size: 1rem;
  padding: 0.5rem 1rem; 
`;

class BirdDescription extends React.Component {
  render() {
    return (
      <>
        <div css={birdDescription_container}>
          <img
            css={birdDescription_image}
            alt="img"
            src="./assets/image/defaultBird.jpg"
          />
          <div css={birdDescription}>
            <div css={birdDescription_name}> Birds name</div>
            <div css={birdDescription_nameEng}> Birds name Eng</div>
            <Player
              src={
                "https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3"
              }
            />
          </div>
        </div>
        <div css={birdDescription_descr}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          commodi officiis iure ut incidunt in, distinctio ea temporibus,
          repellendus porro harum aut illum deserunt deleniti aliquam iste
          maiores odio sint.
        </div>
      </>
    );
  }
}

export default BirdDescription;
