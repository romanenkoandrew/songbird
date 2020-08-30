import React from "react";
import { css } from "@emotion/core";
import Header from "components/Header";
import RandomBird from "components/RandomBird";
import AnswerBlock from "components/AnswerBlock";
import birdsData from "data/birdsData";

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
  componentDidMount() {
    this.props.changeActiveTab({activeTab: -1})
    this.props.setCorrectAnswerID({ correctAnswerID: birdsData[0].map(e=>e).sort(() => Math.random() - 0.5)[0].id})
  }
  render() {
    return (
      <div css={container}> 
        <Header />
        <RandomBird />
        <AnswerBlock />
      </div>
    )
  }
}

export default Main;
