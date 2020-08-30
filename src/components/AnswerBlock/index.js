import AnswerBlock from "./AnswerBlock";
import {
  changeActiveTab,
  changeDefaultDescription,
  changeBirdPosition,
  setCorrectAnswerID,
  changeWasCorrectAnswer,
  changeButtonDisabled,
} from "actions";
import { connect } from "react-redux";
import selector from "./selector";

const mapDispatchToProps = {
  changeActiveTab,
  changeDefaultDescription,
  changeBirdPosition,
  setCorrectAnswerID,
  changeWasCorrectAnswer,
  changeButtonDisabled,
};

export default connect(selector, mapDispatchToProps)(AnswerBlock);
