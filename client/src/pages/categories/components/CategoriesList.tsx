import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ICategory } from '../types';

interface IProps {
    categories: ICategory[];
}

const CategoriesList: FC<IProps> = ({ categories }) => {
    return (
        <ul className='categories-list'>
            {categories?.map(category => {
                return <li key={category.id}>categories</li>;
            })}
        </ul>
    );
};

export default CategoriesList;
