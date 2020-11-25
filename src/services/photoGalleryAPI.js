import axios from 'axios';
import {photoListURL, photoInfoURL} from '../constants/constURL';

export const getPhotoList = (page, limits) => {
    try {
        return axios
            .get(`${photoListURL}?page=${page}&limit=${limits}`)
            .then(res => res);
    } catch (error) {
        return error.response;
    }
};

export const getPhoto = async (id) => {
    try {
        return await axios
            .get(`${photoInfoURL}/${id}/info`)
            .then(res => res);
    } catch (error) {
        return error.response;
    }
};
