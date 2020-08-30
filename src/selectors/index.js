import { createSelector } from 'reselect';
import get from 'lodash/get'

export const mainSelector = state => get(state, 'main');

export const openSelector = createSelector(mainSelector, main => main.open);
export const titleSelector = createSelector(mainSelector, main => main.title);
export const activeTabSelector = createSelector(mainSelector, main => main.activeTab);
export const defaultDescriptionSelector = createSelector(mainSelector, main => main.defaultDescription);
export const birdPositionSelector = createSelector(mainSelector, main => main.birdPosition);
