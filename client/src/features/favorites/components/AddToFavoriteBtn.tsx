import { FC, useEffect, useState } from 'react';
import { MdFavoriteBorder, MdOutlineFavorite } from 'react-icons/md';

import { TFavoriteItem, TFavoriteItems } from '../types';

interface IProps {
  favoriteItem: TFavoriteItem;
}

const AddToFavoriteBtn: FC<IProps> = ({ favoriteItem }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [items, setItems] = useState<TFavoriteItems>([]);

  const addItem = (item: TFavoriteItem) => {
    const newItems = [...items, item];
    setItems(newItems);
    localStorage.setItem('watchlist', JSON.stringify(newItems));
  };

  const hasItem = (id: string) => items.find(item => String(item.id) === id);

  const removeItem = (id: string) => {
    const newItems = items.filter(item => String(item.id) !== id);
    setItems(newItems);
    localStorage.setItem('watchlist', JSON.stringify(newItems));
  };

  useEffect(() => {
    const watchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');

    setItems(watchlist);
    localStorage.setItem('watchlist', JSON.stringify(watchlist));

    const hasMountedItem = watchlist.find(
      (watchItem: TFavoriteItem) => String(watchItem.id) === String(favoriteItem.id),
    );
    if (hasMountedItem) {
      setIsFavorite(true);
    }
  }, []);

  useEffect(() => {
    if (isFavorite && !hasItem(String(favoriteItem.id))) {
      addItem(favoriteItem);
    }
    if (!isFavorite && hasItem(String(favoriteItem.id))) {
      removeItem(String(favoriteItem.id));
    }
  }, [isFavorite]);

  return (
    <button
      type='button'
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
