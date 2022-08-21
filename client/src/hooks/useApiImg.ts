const IMG_URL = 'https://image.tmdb.org/t/p/original';

export const useApiImg = () => {
    const getFullImgPath = (path: string) => {
        return `${IMG_URL}${path}`;
    };

    return { getFullImgPath };
};
