import ActionTypes from 'actionTypes'
import get from 'lodash/get'

export const initialState = {
  open: false,
  defaultDescription: true,
  activeTab: 0,
  birdPosition: null,
  correctAnswerID: null,
  wasCorrectAnswer: false,
  buttonDisabled: true,
}

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case ActionTypes.SET_TO_STORE: {
      const open = get(payload, 'open')
      return { ...state, open }
    }
    case ActionTypes.CHANGE_TITLE: {
      const title = get(payload, 'title')
      return { ...state, title }
    }
    case ActionTypes.CHANGE_ACTIVE_TAB: {
      let activeTab = get(payload, 'activeTab')
      activeTab += 1
      return { ...state, activeTab }
    }
    case ActionTypes.DEFAULT_DESCRIPTION: {
      const defaultDescription = get(payload, 'defaultDescription')
      return { ...state, defaultDescription }
    }
    case ActionTypes.BIRD_POSITION: {
      const birdPosition = get(payload, 'birdPosition')
      return { ...state, birdPosition }
    }
    case ActionTypes.CORRECT_ANSWER_ID: {
      const correctAnswerID = get(payload, 'correctAnswerID')
      return { ...state, correctAnswerID }
    }
    case ActionTypes.WAS_CORRECT_ANSWER: {
      const wasCorrectAnswer = get(payload, 'wasCorrectAnswer')
      return { ...state, wasCorrectAnswer }
    }
    case ActionTypes.BUTTON_DISABLED: {
      const buttonDisabled = get(payload, 'buttonDisabled')
      return { ...state, buttonDisabled }
    }


    default: {
      return state
    }
  }
}
