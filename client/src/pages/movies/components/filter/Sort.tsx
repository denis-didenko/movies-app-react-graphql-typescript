import { FC } from 'react';
import FormSelect from '../../../../components/Form/select';

const sortTypes = [
  { id: 'popularity.desc', value: 'Популярність ↓' },
  { id: 'popularity.asc', value: 'Популярність ↑' },
  { id: 'release_date.desc', value: 'Дата виходу ↓' },
  { id: 'release_date.asc', value: 'Дата виходу ↑' },
  { id: 'vote_count.desc', value: 'Рейтинг ↓' },
  { id: 'vote_count.asc', value: 'Рейтинг ↑' },
  { id: 'original_title.desc', value: 'Назва ↓' },
  { id: 'original_title.asc', value: 'Назва ↑' },
];

interface IProps {
  setSortBy: (sortBy: string) => void;
}

const Sort: FC<IProps> = ({ setSortBy }) => (
  <FormSelect options={sortTypes} onChangeHandler={setSortBy} />
);

export default Sort;
