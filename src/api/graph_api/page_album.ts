interface IPagePhoto {
    id:string;
    webp_images: {
        height: number;
        source: string;
        width: number;
    }[];
}

interface IPageAlbum {
    id:string;
    name:string;
    cover_photo: IPagePhoto;
    photos:{
        data: IPagePhoto[];
    };
    description: string;
}

class PageAlbum implements IPageAlbum{
    cover_photo: IPagePhoto;
    id: string;
    name: string;
    photos: { data: IPagePhoto[]; };
    description: string;

    constructor(album:IPageAlbum) {
        this.id = album.id;
        this.name = album.name;
        this.cover_photo = album.cover_photo;
        this.photos = album.photos;
        this.description = album.description;
    }

}

