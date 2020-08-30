import React from 'react';
import { css } from '@emotion/core';
import BirdDescription from 'components/BirdDescription';
import birdsData from 'data/birdsData';

const button = (disabled) => css`
  width: 100%;
  padding: 0.5rem;
  margin: 1.5rem 0;
  border-radius: 3px;
  background-color: ${disabled ? "#303030" : "#00bc8c"};
  cursor: pointer;
  outline: none;
  border: ${disabled ? "1px solid #555" : "none"};
  color: #fff;
  transition: 0.3s;
  &:hover {
    background-color: ${disabled ? "" : "#00efb2"};
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
  max-height: 320px;
  flex: 0 0 48%;
  list-style: none;
  background-color: #303030;
  border: 1px solid #555;
  border-radius: 5px;
  cursor: pointer;
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
const listItemsSpan = () => css`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #444;
  margin-right: 1rem;
`;
const wrong = () => css`
  background-color: red;
`;
const correct = () => css`
  background-color: #00bc8c;
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
`;

class AnswerBlock extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { pressedTabs: [] };
  }
  handleButton = () => {
    this.props.changeActiveTab({ activeTab: this.props.activeTab });
    this.props.changeDefaultDescription({ defaultDescription: true });
    this.props.changeBirdPosition({ birdPosition: null });
    this.props.changeWasCorrectAnswer({ wasCorrectAnswer: false });
    this.props.changeButtonDisabled({ buttonDisabled: true });
    this.props.setLevelScore({ levelScore: 6 });
    this.setState({ pressedTabs: [] });
    this.createCorrectAnswer();
    this.finalWindow();
  };
  handleAnswerBlock = (e) => {
    this.props.changeDefaultDescription({ defaultDescription: false });
    this.props.changeBirdPosition({
      birdPosition: Number(e.target.dataset.id),
    });

    if (!this.state.pressedTabs.includes(Number(e.target.dataset.id))) {
      this.setState({
        pressedTabs: this.state.pressedTabs.concat(Number(e.target.dataset.id)),
      });
      if (Number(e.target.dataset.id) === this.props.correctAnswerID) {
        this.props.changeWasCorrectAnswer({ wasCorrectAnswer: true });
        this.props.changeButtonDisabled({ buttonDisabled: false });
        this.props.setGameScore({
          gameScore: Number(this.props.gameScore + this.props.levelScore),
        });
      }
      this.props.setLevelScore({ levelScore: this.props.levelScore });
    }
  };
  createCorrectAnswer = () => {
    this.props.setCorrectAnswerID({
      correctAnswerID: birdsData[this.props.activeTab].map(e=>e).sort(() => Math.random() - 0.5)[0].id,
    });
  };
  checkAnswer = (id) => {
    const styles = [listItemsSpan()];
    if (this.state.pressedTabs.includes(id) ) {
      if (Number(id) === this.props.correctAnswerID) {
        styles.push(correct());
      } else {
        styles.push(wrong());
      }
    }
    return () => styles;
  };
  finalWindow = () => {
    // if (this.props.activeTab === 5) this.props.showFinalWindow({finalWindow: true})
    if (this.props.activeTab === 5) window.location.reload(); 
  }
  render() {
    return (
      <div css={answerContainer}>
        <ul css={listItems} onClick={this.handleAnswerBlock}>
          {birdsData[this.props.activeTab].map((el) => {
            return (
              <li key={el.name.toString()} data-id={el.id}>
                <span css={this.checkAnswer(el.id)} />
                {el.name.toString()}
              </li>
            );
          })}
        </ul>
        <div css={description}>
          <BirdDescription />
        </div>
        <button
          css={button(this.props.buttonDisabled)}
          onClick={this.handleButton}
          disabled={this.props.buttonDisabled}
        >
          {" "}
          Next Level
        </button>
      </div>
    );
  }
}

export default AnswerBlock;
