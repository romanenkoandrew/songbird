import Player from './Player';
import { connect } from 'react-redux';
import selector from './selector';

const mapDispatchToProps = {
}

export default connect(selector, mapDispatchToProps)(Player)