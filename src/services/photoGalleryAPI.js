import axios from 'axios';
import {photoListURL} from '../constants/constURL';

export const getPhotoList = (page, limits) => {
    try {
        return axios
            .get(`${photoListURL}?page=${page}&limit=${limits}`)
            .then(res => res);
    } catch (error) {
        return error.response;
    }
};
