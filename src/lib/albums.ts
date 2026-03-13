export interface PagePhoto {
    id: string;
    webp_images: {
        height: number;
        source: string;
        width: number;
    }[];
}

export interface PageAlbum {
    id: string;
    name: string;
    cover_photo: PagePhoto;
    photos: {
        data: PagePhoto[];
    } | undefined;
    description: string;
    created_time: string;
    type: string;
    link: string;
}

export interface EventAlbum {
    id: string;
    name: string;
    cover_photo: string;
    photos: string[] | undefined;
    description: string;
    thumbnails?: string[];
    link: string;
}

const mapPageToEventAlbum = (album: PageAlbum): EventAlbum => {
    return {
        id: album.id,
        name: album.name,
        cover_photo: album.cover_photo?.webp_images?.[0]?.source || "",
        photos: album.photos?.data?.map(photo => photo.webp_images?.[0]?.source).filter(Boolean) as string[],
        thumbnails: album.photos?.data?.map(photo =>
            photo.webp_images?.[photo.webp_images.length - 1]?.source).filter(Boolean) as string[],
        description: album.description,
        link: album.link,
    };
};

export const getEventAlbums = async (): Promise<{
    albums: EventAlbum[];
}> => {
    const res = await fetch("/api/albums");
    const data = await res.json();
    
    if (data.error) {
        throw new Error(data.error);
    }

    const albumsData: PageAlbum[] = data.data || [];
    
    const albums = albumsData.filter(album => album.type === "normal")
        .sort((a, b) => {
            const dateA = new Date(a.created_time);
            const dateB = new Date(b.created_time);
            return dateB.getTime() - dateA.getTime();
        }).map(a => (mapPageToEventAlbum(a)));

    return {
        albums,
    };
};

export const getSingleEventAlbum = async (
    album_id: string
): Promise<{
    album: EventAlbum;
}> => {
    const res = await fetch(`/api/albums?id=${album_id}`);
    const data = await res.json();
    
    if (data.error) {
        throw new Error(data.error);
    }

    return {
        album: mapPageToEventAlbum(data),
    };
};
