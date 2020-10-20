import BirdDescription from './BirdDescription';
import { changeDefaultDescription, changeBirdPosition } from 'actions';
import { connect } from 'react-redux';
import selector from './selector';

const mapDispatchToProps = {
  changeDefaultDescription,
  changeBirdPosition,
}

export default connect(selector, mapDispatchToProps)(BirdDescription)