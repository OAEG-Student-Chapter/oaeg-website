import axios from "axios";

export const getAlbums = async (
): Promise<{
    albums: PageAlbum[];
}> => {
    const res = await axios.get("https://oaeg-web-backend.oaegstudentchap.workers.dev/albums");
    const {data} = res.data;
    return {
        albums: data
    }
}

export const getSingleAlbum = async (
    album_id:string): Promise<{
    album: PageAlbum;
}> => {
    const res = await axios.get(
        `https://oaeg-web-backend.oaegstudentchap.workers.dev/album?id=${album_id}`);
    return {
        album: res.data
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

    get link(){
        return this.album.link;
    }

    get thumbnails_url(){
        return this.album.photos?.data.map(photo =>
            photo.webp_images[photo.webp_images.length - 1].source);
    }
}

