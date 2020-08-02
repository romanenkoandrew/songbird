import { openSelector } from 'selectors'
import {createStructuredSelector} from 'reselect'

export default createStructuredSelector({
  open: openSelector
})
