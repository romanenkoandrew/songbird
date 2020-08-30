import Main from './Main'
import { setCorrectAnswerID, changeActiveTab, showFinalWindow } from 'actions'
import { connect } from 'react-redux';
import selector from './selector'

const mapDispatchToProps = {
  setCorrectAnswerID,
  changeActiveTab,
  showFinalWindow,
}

export default connect(selector, mapDispatchToProps)(Main)