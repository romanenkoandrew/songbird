import { activeTabSelector } from 'selectors'
import {createStructuredSelector} from 'reselect'

export default createStructuredSelector({
  activeTab: activeTabSelector
})
