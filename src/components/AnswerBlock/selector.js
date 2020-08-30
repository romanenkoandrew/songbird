import { activeTabSelector, defaultDescriptionSelector, birdPositionSelector } from 'selectors'
import {createStructuredSelector} from 'reselect'

export default createStructuredSelector({
  activeTab: activeTabSelector,
  defaultDescription: defaultDescriptionSelector,
  birdPosition: birdPositionSelector,
})
