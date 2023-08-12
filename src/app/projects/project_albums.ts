import {graph} from "@/api/graph_api/page_api";
import PageAlbumHandler, {getAlbums, getSingleAlbum} from "@/app/projects/api/getAlbums";

export interface ProjectAlbum{
    id:string;
    name:string;
    cover_photo:string;
    photos:string[];
    description: string;
}

export const getProjectAlbums = async ():Promise<{
    albums:ProjectAlbum[];
}> => {
    const res = await getAlbums(true);
    const albums = res?.albums?.map(album => {
        const handler = new PageAlbumHandler(album);
        return {
            id: handler.id,
            name: handler.name,
            cover_photo: handler.cover_photo_url,
            photos: handler.photos_url,
            description: album.description
        }
    });
    return {
        albums
    }
}

export const getSingleProjectAlbum = async (
    album_id:string
):Promise<{
    album:ProjectAlbum;
}> => {
    const res = await getSingleAlbum(album_id,true);
    const album = new PageAlbumHandler(res.album);
    return {
        album: {
            id: album.id,
            name: album.name,
            cover_photo: album.cover_photo_url,
            photos: album.photos_url,
            description: res.album.description
        }
    }
}