import * as actions from '../constants/CardConstants';

const initialState = {
    cards:[],
    searchResults:[],
    page:1
}

export const CardReducers = (state = initialState,action) => {
    switch(action.type){
        case actions.FETCH_CARD_REQUEST:
            return{
                ...state,
                loading:true
            };
        case actions.FETCH_CARD_SUCCESS:
            return {
                ...state,
                loading:false,
                cards:action.payload.data,
                searchResults:action.payload.data,
            }
        case actions.FETCH_CARD_FAILED:
            return {
                ...state,
                loading:false,
                error:action.payload
            }
        default:
			return state;
    }
}
