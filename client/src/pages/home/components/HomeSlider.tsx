import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useApiImg } from '../../../hooks/useApiImg';
import { IMovie } from '../../movies/types';
import 'swiper/css';
import 'swiper/css/pagination';

interface IProps {
    slides: IMovie[] | undefined;
}

const HomeSlider: FC<IProps> = ({ slides }) => {
    const { getFullImgPath } = useApiImg();

    return (
        <Swiper modules={[Pagination]} pagination={{ clickable: true }} slidesPerView={1}>
            {slides?.map(({ id, title, backdrop_path }) => {
                return (
                    <SwiperSlide key={id}>
                        <Link to={`/movie/${id}`}>
                            <LazyLoadImage width={'100%'} height={'100%'} alt={title} src={getFullImgPath(backdrop_path)} effect='blur' />
                            <div className='slide-info'>
                                <p>{title}</p>
                            </div>
                        </Link>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default HomeSlider;
