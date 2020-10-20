import FinalWindow from './FinalWindow';
import { changeActiveTab } from 'actions';
import { connect } from 'react-redux';
import selector from './selector';

const mapDispatchToProps = {
  changeActiveTab,
}

export default connect(selector, mapDispatchToProps)(FinalWindow)