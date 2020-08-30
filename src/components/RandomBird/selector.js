import { activeTabSelector, correctAnswerIDSelector } from 'selectors'
import {createStructuredSelector} from 'reselect'

export default createStructuredSelector({
  activeTab: activeTabSelector,
  correctAnswerID: correctAnswerIDSelector
})
