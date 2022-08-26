import { FC } from 'react';

interface IProps {
    query: string;
    setQuery: (query: string) => void;
}

const SearchForm: FC<IProps> = ({ query, setQuery }) => {
    return (
        <form action='/search' className='search-form'>
            <div className='form-field'>
                <input type='text' name='query' placeholder='Search' value={query} onChange={e => setQuery(e.target.value)} />
            </div>
        </form>
    );
};

export default SearchForm;
