import Main from './Main'
import { setToStore, changeTitle } from 'actions'
import { connect } from 'react-redux';
import selector from './selector'

const mapDispatchToProps = {
  setToStore,
  changeTitle
}

export default connect(selector, mapDispatchToProps)(Main)