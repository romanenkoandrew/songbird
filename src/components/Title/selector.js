import { openSelector, titleSelector } from 'selectors'
import {createStructuredSelector} from 'reselect'

export default createStructuredSelector({
  open: openSelector,
  title: titleSelector
})
