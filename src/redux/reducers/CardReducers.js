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
        case actions.SORT_POSTS_ASC:
            const sortAsc = action.payload.sort((a,b)=>(a.title<b.title ? 1 : a.title>b.title ? -1:0))
            return {
                ...state,
                cards:sortAsc
            }
        case actions.SORT_POSTS_DESC:
            const sortDesc = action.payload.sort((a,b)=>(a.title<b.title ? -1 : a.title > b.title ? 1 : 0))
            return {
                ...state,
                cards:sortDesc
            }
        case actions.SEARCH_CARDS:
            return {
                ...state,
                cards:action.payload,
                page:1
            }
        default:
			return state;
    }
}
