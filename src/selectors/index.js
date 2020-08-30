import { createSelector } from 'reselect';
import get from 'lodash/get'

export const mainSelector = state => get(state, 'main');

export const activeTabSelector = createSelector(mainSelector, main => main.activeTab);
export const defaultDescriptionSelector = createSelector(mainSelector, main => main.defaultDescription);
export const birdPositionSelector = createSelector(mainSelector, main => main.birdPosition);
export const correctAnswerIDSelector = createSelector(mainSelector, main => main.correctAnswerID);
export const wasCorrectAnswerSelector = createSelector(mainSelector, main => main.wasCorrectAnswer);
export const buttonDisabledSelector = createSelector(mainSelector, main => main.buttonDisabled);
export const gameScoreSelector = createSelector(mainSelector, main => main.gameScore);
export const levelScoreSelector = createSelector(mainSelector, main => main.levelScore);
