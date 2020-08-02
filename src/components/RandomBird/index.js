import RandomBird from './RandomBird';
import { setToStore } from 'actions';
import { connect } from 'react-redux';
import selector from './selector';

const mapDispatchToProps = {
  setToStore
}

export default connect(selector, mapDispatchToProps)(RandomBird)