import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { useApiImg } from '../../../hooks/useApiImg';
import { IMovie } from '../../movies/types';
import 'swiper/css';
import 'swiper/css/pagination';

interface IProps {
    slides: IMovie[];
}

const HomeSlider: FC<IProps> = ({ slides }) => {
    const { getFullImgPath } = useApiImg();

    return (
        <Swiper modules={[Pagination]} pagination={{ clickable: true }} slidesPerView={1}>
            {slides.map(({ id, title, backdrop_path }) => {
                return (
                    <SwiperSlide key={id}>
                        <img src={getFullImgPath(backdrop_path)} alt={title} />
                        <div className='slide-info'>
                            <p>{title}</p>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default HomeSlider;
