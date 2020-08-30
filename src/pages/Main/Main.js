import React from "react";
import { css } from "@emotion/core";
import Block from "components/Block";
import Header from "components/Header";
import RandomBird from "components/RandomBird";
import AnswerBlock from "components/AnswerBlock";

const container = () => css`
  height: 100vh;
  max-width: 1140px;
  width: 90%;
  margin: 0 auto;

  @media (max-width: 1200px) {
    max-width: 960px;
  }
  @media (max-width: 992px) {
    max-width: 720px;
  }
  @media (max-width: 720px) {
    max-width: 540px;
  }
`

class Main extends React.Component {
  render() {
    return (
      <div css={container}> 
        {/* <Block />; */}
        <Header />
        <RandomBird />
        <AnswerBlock />
      </div>
    )
  }
}

export default Main;
