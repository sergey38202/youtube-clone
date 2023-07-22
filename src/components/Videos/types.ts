import {IVideoDto} from "../../pages/Feed/types";

export type TVideosProps = {
    videos: IVideoDto[] | null;
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
}