import { Swiper } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import settingSwiper from './settingSwiper';

export default function SwiperConstructor(props) {
  const setting = props?.setting;

  return (
    <Swiper
      {...settingSwiper[setting]}
      modules={[Navigation]}
      slidesPerView={"auto"}
      tabIndex="0" 
      aria-label="Слайдер"
      role='button'
    >
      {props?.children}
    </Swiper>
  );
};