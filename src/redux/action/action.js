import {ACTION} from "../Constant"

export const handleShowSearch = () =>{
    return {
     type : ACTION.SHOW_SEARCH
    }
}

export const handleHideSearch = () =>{
    return {
        type: ACTION.HIDE_SEARCH
    }
}

export const getHomePageVideos = (videos) =>{
    return {
        type: ACTION.HOME_PAGE_VIDEOS,
        payload: videos
    }
}

export const turnOnLoading = () =>{
    return{
        type: ACTION.LOADING_ON
    }
}

export const turnOffLoading = () =>{
    return{
        type: ACTION.LOADING_OFF
    }
}