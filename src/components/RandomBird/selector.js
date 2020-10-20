import { activeTabSelector, correctAnswerIDSelector, wasCorrectAnswerSelector, } from 'selectors'
import {createStructuredSelector} from 'reselect'

export default createStructuredSelector({
  activeTab: activeTabSelector,
  correctAnswerID: correctAnswerIDSelector,
  wasCorrectAnswer: wasCorrectAnswerSelector,
})
