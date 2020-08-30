import { defaultDescriptionSelector, activeTabSelector, birdPositionSelector } from 'selectors'
import {createStructuredSelector} from 'reselect'

export default createStructuredSelector({
  defaultDescription: defaultDescriptionSelector,
  activeTab: activeTabSelector,
  birdPosition: birdPositionSelector,

})
