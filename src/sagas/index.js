import { ActionTypes, getBannerDone } from "../actions";
import {takeEvery, put} from "redux-saga/effects"
import axios from '../utils/axios'
import requests from "../utils/requests";

export default function* rootSaga(){
    yield takeEvery(ActionTypes.GET_BANNER,getBannerWorker);
}

function* getBannerWorker(){
    const request = yield axios.get(requests.fetchNetflixOriginals);
    const bannerData = request.data.results[Math.floor(Math.random() * request.data.results.length-1)];
    yield put(getBannerDone(bannerData));
    
}
