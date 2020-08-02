import Header from './Header';
import { setToStore } from 'actions';
import { connect } from 'react-redux';
import selector from './selector';

const mapDispatchToProps = {
  setToStore
}

export default connect(selector, mapDispatchToProps)(Header)