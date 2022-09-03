import { FC, useEffect, useState } from 'react';
import { TFavoriteItem, TFavoriteItems } from '../types';
import { MdFavoriteBorder, MdOutlineFavorite } from 'react-icons/md';

interface IProps {
    item: TFavoriteItem;
}

const AddToFavoriteBtn: FC<IProps> = ({ item }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [items, setItems] = useState<TFavoriteItems>([]);

    const addItem = (item: TFavoriteItem) => {
        const newItems = [...items, item];
        setItems(newItems);
        localStorage.setItem('watchlist', JSON.stringify(newItems));
    };

    const hasItem = (id: string) => {
        return items.find(item => String(item.id) === id);
    };

    const removeItem = (id: string) => {
        const newItems = items.filter(item => String(item.id) !== id);
        setItems(newItems);
        localStorage.setItem('watchlist', JSON.stringify(newItems));
    };

    useEffect(() => {
        const watchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');

        setItems(watchlist);
        localStorage.setItem('watchlist', JSON.stringify(watchlist));

        const hasMountedItem = watchlist.find((watchItem: TFavoriteItem) => String(watchItem.id) === String(item.id));
        if (hasMountedItem) {
            setIsFavorite(true);
        }
    }, []);

    useEffect(() => {
        if (isFavorite && !hasItem(String(item.id))) {
            addItem(item);
        }
        if (!isFavorite && hasItem(String(item.id))) {
            removeItem(String(item.id));
        }
    }, [isFavorite]);

    return (
        <button
            className={`add-to-watchlist-btn ${isFavorite ? 'is-active' : ''}`}
            onClick={() => {
                setIsFavorite(!isFavorite);
            }}
        >
            {!isFavorite ? <MdFavoriteBorder /> : <MdOutlineFavorite />}
            <span>{isFavorite ? 'Додано' : 'Додати до улюблених'}</span>
        </button>
    );
};

export default AddToFavoriteBtn;
