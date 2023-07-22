import axios from 'axios';
import {YOUTUBE_MAX_RESULT} from "../constants/api";
import {IVideos} from "../pages/Feed/types";

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options: any = {
  params: {
    maxResults: YOUTUBE_MAX_RESULT,
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url: string) => {
  const { data } = await axios.get<IVideos>(`${BASE_URL}/${url}`, options);

  return data;
};
