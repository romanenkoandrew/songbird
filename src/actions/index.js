import { createAction } from 'redux-actions';
import ActionTypes from 'actionTypes'

export const setToStore = createAction(ActionTypes.SET_TO_STORE)
export const changeTitle = createAction(ActionTypes.CHANGE_TITLE)