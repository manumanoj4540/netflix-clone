import { ActionTypes } from "../actions";
import produce from "immer";
import {combineReducers} from "redux";
const initial_state = {
    bannerData: {},
}

const reducer = produce((draft, action) => {
    switch (action.type) {
      case ActionTypes.GET_BANNER_DONE:
          console.log("Action paload", action.payload)
        draft.bannerData = action.payload;
        break;
    }
  }, initial_state);

export default combineReducers({
    banner: reducer
})
