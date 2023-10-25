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
  // album type is "normal" and sort be created_time
    const albums = res.albums?.filter(album => album.type === "normal")
            .sort((a, b) => {
                const dateA = new Date(a.created_time);
                const dateB = new Date(b.created_time);
                return dateB.getTime() - dateA.getTime();
            }).map(a => (getProjectAlbum(a)));
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
