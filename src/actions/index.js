import { createAction } from 'redux-actions';
import ActionTypes from 'actionTypes'

export const setToStore = createAction(ActionTypes.SET_TO_STORE)
export const changeTitle = createAction(ActionTypes.CHANGE_TITLE)
export const changeActiveTab = createAction(ActionTypes.CHANGE_ACTIVE_TAB)
export const changeDefaultDescription = createAction(ActionTypes.DEFAULT_DESCRIPTION)
export const changeBirdPosition = createAction(ActionTypes.BIRD_POSITION)
export const setCorrectAnswerID = createAction(ActionTypes.CORRECT_ANSWER_ID)
export const changeWasCorrectAnswer = createAction(ActionTypes.WAS_CORRECT_ANSWER)
export const changeButtonDisabled = createAction(ActionTypes.BUTTON_DISABLED)