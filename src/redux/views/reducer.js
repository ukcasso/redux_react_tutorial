import { ADD_VIEW } from './types'
const initialState = {
  count: 0,
}

// action 안에는 우리가 넘긴 type과 payload가 있다.
const viewsReduver = (state=initialState, action) => {
  switch(action.type) {
    case ADD_VIEW:
      return {
        ...state,
        count: state.count + action.payload
      }
    default: return state
  }
}

export default viewsReduver