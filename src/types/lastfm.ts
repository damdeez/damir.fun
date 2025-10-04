export interface AlbumArtwork {
  size: string;
  "#text": string;
}

export interface Artist {
  mbid?: string;
  "#text"?: string;
}

export interface Track {
  "@attr"?: {
    nowplaying?: string | boolean;
  };
  image?: AlbumArtwork[];
  artist?: Artist;
  name?: string;
}
