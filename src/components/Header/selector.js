import { activeTabSelector, gameScoreSelector } from 'selectors'
import {createStructuredSelector} from 'reselect'

export default createStructuredSelector({
  activeTab: activeTabSelector,
  gameScore: gameScoreSelector,

})
