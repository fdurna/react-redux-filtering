import * as actions from '../constants/CardConstants';
import axios from 'axios';

export const fetchCards = () => async (dispatch) => {
    dispatch({type:actions.FETCH_CARD_REQUEST})
    try {
        const data = await axios.get('https://jsonplaceholder.typicode.com/posts');
        dispatch({
            type:actions.FETCH_CARD_SUCCESS,
            payload:data
        });
    }   catch(error){
        dispatch({
            type:actions.FETCH_CARD_FAILED,
            payload:error.message
        });
        console.log(error.message)
    }
}
export const searchCard = (query) => async (dispatch,getState) => {
    const { CardReducers } = getState();
    const searchResults = CardReducers.searchResults.filter((card)=>
        card.title.toLowerCase().includes(query.toLowerCase())
    );
    console.log(searchResults)
    dispatch({
        type:actions.SEARCH_CARDS,
        payload:searchResults
    })
}