import {graph} from "@/api/graph_api/page_api";

export const getAlbums = async (
    withPhotos:boolean = false
): Promise<{
    albums: PageAlbum[];
}> => {
    const res = await graph.get(`${graph.page_id}/albums?fields=id,name,created_time,type,cover_photo{webp_images},
        ${withPhotos ? "photos{webp_images}" : ""}`);
    return {
        albums: res.data
    }
}

export const getSingleAlbum = async (
    album_id:string,
    withPhotos:boolean = false
): Promise<{
    album: PageAlbum;
}> => {
    const res = await graph.get(`${album_id}?fields=id,name,description,cover_photo{webp_images},
        ${withPhotos ? "photos{webp_images}" : ""}`);
    return {
        album: res
    }
}

export default class PageAlbumHandler{
    private readonly album:PageAlbum;
    constructor(album:PageAlbum){
        this.album = album;
    }
    get id(){
        return this.album.id;
    }
    get name(){
        return this.album.name;
    }
    get cover_photo(){
        return this.album.cover_photo;
    }
    get photos(){
        return this.album.photos;
    }
    get cover_photo_url(){
        return this.album.cover_photo?.webp_images[0].source;
    }
    get photos_url(){
        return this.album.photos?.data.map(photo => photo.webp_images[0].source);
    }

    get thumbnails_url(){
        return this.album.photos?.data.map(photo =>
            photo.webp_images[photo.webp_images.length - 1].source);
    }
}

