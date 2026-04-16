import "../css/output.css";
import Annoying from "./header/annoying";
import Search from "./header/console";
import NavBar from "./header/navbar";
import Setting from "./header/setting";
Annoying();
Setting();
Search();
NavBar();

import './style.css';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

new Swiper('.mySwiper', {
  modules: [Navigation, Pagination],
  loop: true,
  spaceBetween: 20,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});