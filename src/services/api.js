import { get, post, del } from './request';

const URL = './api';
const IMAGES_URL = `${URL}/images`;
const ALBUMS_URL = `${URL}/albums`;

export const getImages = () => get(IMAGES_URL);
export const postImage = data => post(IMAGES_URL, data);
export const deleteImage = id => del(`${IMAGES_URL}/${id}`);

export const getAlbums = () => get(ALBUMS_URL);
export const postAlbum = data => post(ALBUMS_URL, data);
export const deleteAlbum = id => del(`${ALBUMS_URL}/${id}`);
