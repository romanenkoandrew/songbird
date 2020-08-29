import AnswerBlock from './AnswerBlock';
import { setToStore } from 'actions';
import { connect } from 'react-redux';
import selector from './selector';

const mapDispatchToProps = {
  setToStore
}

export default connect(selector, mapDispatchToProps)(AnswerBlock)