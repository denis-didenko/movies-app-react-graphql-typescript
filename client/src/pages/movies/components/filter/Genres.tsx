import { FC } from 'react';
import { useQuery } from '@apollo/client';
import { GET_GENRES } from '../../queries';
import { IGenre } from '../../types';
import FormSelect from '../../../../components/Form/select';

interface IGenreData {
    genres: [IGenre];
}

interface IProps {
    setGenreId: (genreId: string) => void;
}

const Genres: FC<IProps> = ({ setGenreId }) => {
    const { data } = useQuery<IGenreData>(GET_GENRES);

    const mappedGenres = data?.genres.map(genre => ({
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
