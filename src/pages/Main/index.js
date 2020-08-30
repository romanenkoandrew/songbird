import Main from './Main'
import { setCorrectAnswerID, changeActiveTab } from 'actions'
import { connect } from 'react-redux';
import selector from './selector'

const mapDispatchToProps = {
  setCorrectAnswerID,
  changeActiveTab,
}

export default connect(selector, mapDispatchToProps)(Main)