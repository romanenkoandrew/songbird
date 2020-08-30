import { correctAnswerIDSelector, activeTabSelector } from 'selectors'
import {createStructuredSelector} from 'reselect'

export default createStructuredSelector({
  correctAnswerID: correctAnswerIDSelector,
  activeTab: activeTabSelector
})
