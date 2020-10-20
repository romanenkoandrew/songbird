import {
  activeTabSelector,
  defaultDescriptionSelector,
  birdPositionSelector,
  correctAnswerIDSelector,
  buttonDisabledSelector,
  wasCorrectAnswerSelector,
  gameScoreSelector,
  levelScoreSelector,
} from 'selectors';
import { createStructuredSelector } from 'reselect';

export default createStructuredSelector({
  activeTab: activeTabSelector,
  defaultDescription: defaultDescriptionSelector,
  birdPosition: birdPositionSelector,
  correctAnswerID: correctAnswerIDSelector,
  buttonDisabled: buttonDisabledSelector,
  wasCorrectAnswer: wasCorrectAnswerSelector,
  gameScore: gameScoreSelector,
  levelScore: levelScoreSelector,
});
