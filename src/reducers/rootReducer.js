import actionTypes from '../action-types/action-types'

const initialState = {
    count:0
}

const rootReducer = (state=initialState, action) => {
    switch(action.type){
        case actionTypes.INCREMENT:
            return { count: state.count +1};
        case actionTypes.DECREMENT:
            return {count: state.count -1};
        default:
            return state
        
    }
}

export default rootReducer;