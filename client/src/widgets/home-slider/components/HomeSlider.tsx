import { FC } from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { IMovie } from '@entities/movies';
import { getImgUrl } from '@shared/api/tmdb';

import 'swiper/css';
import 'swiper/css/pagination';

interface IProps {
  slides: IMovie[];
}

export const HomeSlider: FC<IProps> = ({ slides }) => {
  return (
    <Swiper modules={[Pagination]} pagination={{ clickable: true }} slidesPerView={1}>
      {slides?.map(({ id, title, backdrop_path }) => (
        <SwiperSlide key={id}>
          <Link to={`/movies/${id}`}>
            <LazyLoadImage
              width='100%'
              height='100%'
              alt={title}
              src={getImgUrl(backdrop_path)}
              effect='blur'
            />
            <div className='slide-info'>
              <p>{title}</p>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
