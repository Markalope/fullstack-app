import axios from 'axios';
import {
  GET_IMAGES_SUCCESS,
  SET_TRANSLATE_VALUE,
  SET_INDEX,
} from './types';

export function getSliderImages() {
  return async(dispatch) => {
    try {
      let res = await axios.get('./slider-config.json');
      dispatch(getImagesSuccess(res.data)); // res.data will be an [] of images
    }
    catch(error) {
      console.error('Fetching images failed: ' + error);
    }
  };
}

export function getImagesSuccess(images) {
  return {
    type: GET_IMAGES_SUCCESS,
    payload: images
  };
}

export function setTranslateValue(value) {
  return {
    type: SET_TRANSLATE_VALUE,
    payload: value
  };
}

export function setIndex(value) {
  return {
    type: SET_INDEX,
    payload: value
  };
}
