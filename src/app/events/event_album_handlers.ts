import PageAlbumHandler, {
  getAlbums,
  getSingleAlbum,
} from "@/app/events/api/getAlbums";

export interface EventAlbum {
  id: string;
  name: string;
  cover_photo: string;
  photos: string[] | undefined;
  description: string;
  thumbnails?: string[];
}

export const getEventAlbums = async (): Promise<{
  albums: EventAlbum[];
}> => {
  const res = await getAlbums();
  console.log("Yo:",res);
  // album type is "normal" and sort be created_time
    const albums = res.albums?.filter(album => album.type === "normal")
            .sort((a, b) => {
                const dateA = new Date(a.created_time);
                const dateB = new Date(b.created_time);
                return dateB.getTime() - dateA.getTime();
            }).map(a => (getEventAlbumHelper(a)));
  return {
    albums,
  };
};

/*
* Gets the single album with the given id
*/
export const getSingleEventAlbum = async (
  album_id: string
): Promise<{
  album: EventAlbum;
}> => {
  const res = await getSingleAlbum(album_id, true);
  return {
    album: getEventAlbumHelper(res.album),
  };
};

const getEventAlbumHelper = (album: PageAlbum): EventAlbum => {
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
