import { createAction } from 'redux-actions';
import ActionTypes from 'actionTypes'

export const changeActiveTab = createAction(ActionTypes.CHANGE_ACTIVE_TAB)
export const changeDefaultDescription = createAction(ActionTypes.DEFAULT_DESCRIPTION)
export const changeBirdPosition = createAction(ActionTypes.BIRD_POSITION)
export const setCorrectAnswerID = createAction(ActionTypes.CORRECT_ANSWER_ID)
export const changeWasCorrectAnswer = createAction(ActionTypes.WAS_CORRECT_ANSWER)
export const changeButtonDisabled = createAction(ActionTypes.BUTTON_DISABLED)
export const setGameScore = createAction(ActionTypes.GAME_SCORE)
export const setLevelScore = createAction(ActionTypes.LEVEL_SCORE)
export const showFinalWindow = createAction(ActionTypes.FINAL_WINDOW)