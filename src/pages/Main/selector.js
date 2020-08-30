import { correctAnswerIDSelector, openFinalWindowSelector } from 'selectors'
import {createStructuredSelector} from 'reselect'

export default createStructuredSelector({
  correctAnswerID: correctAnswerIDSelector,
  openFinalWindow: openFinalWindowSelector,
})
