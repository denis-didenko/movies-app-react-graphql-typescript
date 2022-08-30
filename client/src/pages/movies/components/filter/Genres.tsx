import { FC } from 'react';
import { IGenre } from '../../types';
import FormSelect from '../../../../components/Form/select';

interface IProps {
    genres: IGenre[] | undefined;
    setGenreId: (genreId: string) => void;
}

const Genres: FC<IProps> = ({ genres, setGenreId }) => {
    const mappedGenres = genres?.map(genre => ({
        id: genre.id,
        value: genre.name,
    }));
    mappedGenres?.unshift({ id: '', value: 'Всi' });

    return (
        <>
            <FormSelect options={mappedGenres} onChangeHandler={setGenreId} />
        </>
    );
};

export default Genres;
