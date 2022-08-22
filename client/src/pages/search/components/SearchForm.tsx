import { FC } from 'react';

interface IProps {
    setQuery: (query: string) => void;
}

const SearchForm: FC<IProps> = ({ setQuery }) => {
    return (
        <form action='/search' className='search-form'>
            <div className='form-field with-icon'>
                <input type='text' name='query' placeholder='Search' onChange={e => setQuery(e.target.value)} />
            </div>
        </form>
    );
};

export default SearchForm;
