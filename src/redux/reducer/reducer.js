import {ACTION} from "../Constant";

const initialState = {
    showSearchBar : false,
    isLoading: false,
    homePageVideos : []
}

const actionReducer = (state=initialState, action) => {
    switch (action.type){
        case ACTION.SHOW_SEARCH:
            return {
                ...state,
                showSearchBar: true
            }
            break;
        case ACTION.HIDE_SEARCH:
            return{
                ...state,
                showSearchBar: false
            }
            break;
        case ACTION.HOME_PAGE_VIDEOS:
            return{
                ...state,
                isLoading: false,
                homePageVideos: action.payload
            }
            break;
        case ACTION.LOADING_ON:
            return{
                ...state,
                isLoading: true
            }
        break;
        case ACTION.LOADING_OFF:
            return{
                ...state,
                isLoading: false
            }
        default :
        return state
    }
}

export default actionReducer;