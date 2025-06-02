
interface PlatformInfo {
  id: number;
  name: string;
  slug: string;
  games_count?: number;
  image?: string | null;
  image_background?: string;
  year_end?: number | null;
  year_start?: number | null;
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background:string;
  games_count:number;
}

export interface Requirements {
  minimum?: string;
  recommended?: string;
}

export interface PlatformWrapper {
  platform: PlatformInfo;
  released_at?:string;
  requirements?: Requirements
}

 export interface Game {
  id: number;
  name?: string;
  genres?: Genre[];
  platforms?: PlatformWrapper[];
  rating?: number[];
  released?: string;
  background_image?: string;
  added?: number;
}

export interface Img{
    height?:number,
    id?:number,
    image?:string,
    width?:number
}
