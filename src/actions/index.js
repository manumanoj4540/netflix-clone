export const ActionTypes = {
    GET_BANNER: "components/GET_BANNER",
    GET_BANNER_DONE: "components/GET_BANNER_DONE",
    GET_SECTIONS: "components/GET_SECTIONS",
    GET_SECTIONS_DONE: "components/GET_SECTIONS_DONE",
};

export function getBanner(){
    return {
        type: ActionTypes.GET_BANNER,
    }
}

export function getBannerDone(data){
    return {
        type: ActionTypes.GET_BANNER_DONE,
        payload: data
    }
}