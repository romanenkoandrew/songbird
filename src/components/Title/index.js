import Title from './Title'
import { connect } from 'react-redux';
import selector from './selector'


export default connect(selector, {})(Title)