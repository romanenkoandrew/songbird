import AnswerBlock from './AnswerBlock';
import { changeActiveTab, changeDefaultDescription, changeBirdPosition } from 'actions';
import { connect } from 'react-redux';
import selector from './selector';

const mapDispatchToProps = {
  changeActiveTab,
  changeDefaultDescription,
  changeBirdPosition,
}

export default connect(selector, mapDispatchToProps)(AnswerBlock)