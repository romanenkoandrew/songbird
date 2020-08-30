import React from "react";
import { css } from "@emotion/core";

const modalWindow = () => css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  background-color: #303030;
  border-radius: 3px;
  padding: 1rem 0;
  border: 1px solid #555;
  @media (max-width: 720px) {
    h1{
      font-size: 1.7rem;
    }
  }
`;

const button = () => css`
  width: 50%;
  padding: 0.5rem;
  margin: 1rem 0;
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
const margin = () => css `
  margin: 0.5rem;
  text-align: center;
`

class FinalWindow extends React.Component {
  refreshPage = () => { 
    window.location.reload(); 
  }

  render() {
    console.log('score', this.props.gameScore)
    return (
      <div css={modalWindow}>
        <h1 css={margin}>Поздравляем!!!</h1>
        {this.props.gameScore === 30 ? <div css={margin}>Вы абсолютный <b>чемпион</b>, 
        набрали {this.props.gameScore} из 30 возможных! Теперь Вы почетный <b>орнитолог</b>!!!</div> : 
        <div css={margin}>Вы  прошли викторину и набрали {this.props.gameScore} из 30 возможных! Обязательно попробуйте еще раз!</div>}
        
        <button css={button} onClick={this.refreshPage}> Начать заново </button>
      </div>
    );
  }
}

export default FinalWindow;
