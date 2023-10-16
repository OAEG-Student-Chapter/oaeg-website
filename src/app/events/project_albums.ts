import PageAlbumHandler, {
  getAlbums,
  getSingleAlbum,
} from "@/app/events/api/getAlbums";

export interface ProjectAlbum {
  id: string;
  name: string;
  cover_photo: string;
  photos: string[];
  description: string;
  thumbnails?: string[];
}

export const getProjectAlbums = async (): Promise<{
  albums: ProjectAlbum[];
}> => {
  const res = await getAlbums(true);
  const albums = res?.albums?.map((album) => getProjectAlbum(album));
  return {
    albums,
  };
};

export const getSingleProjectAlbum = async (
  album_id: string
): Promise<{
  album: ProjectAlbum;
}> => {
  const res = await getSingleAlbum(album_id, true);
  return {
    album: getProjectAlbum(res.album),
  };
};

const getProjectAlbum = (album: PageAlbum): ProjectAlbum => {
  const handler = new PageAlbumHandler(album);
  return {
    id: handler.id,
    name: handler.name,
    cover_photo: handler.cover_photo_url,
    photos: handler.photos_url,
    thumbnails: handler.thumbnails_url,
    description: album.description,
  };
};
