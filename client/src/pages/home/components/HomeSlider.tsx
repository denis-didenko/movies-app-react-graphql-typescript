import { FC } from 'react';
import { UpcomingMovie } from '../types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface IProps {
    slides: UpcomingMovie[];
}

const HomeSlider: FC<IProps> = ({ slides }) => {
    return (
        <Swiper>
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
    );
};

export default HomeSlider;
