import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, A11y } from 'swiper';
import { ProductCard } from '../ProductCard';
import { Container } from './styles';

import 'swiper/css';

export function Menu() {
   return (
      <Container>
         <Swiper
            spaceBetween={20}
            slidesPerView={3}
            autoplay={{
               delay: 2000,
               disableOnInteraction: false,
            }}
            modules={[Autoplay, A11y]}
            className="mySwiper"
         >
            <SwiperSlide>
               {' '}
               <ProductCard
                  title={'Teclado Keycron V2K2'}
                  subtitle={'Teclado Keycron V2 K2 is the sweet and sedating union of two indica-dominant classics: Larry OG with Granddaddy Purple'}
                  price={'572,00'}
                  image={'/Teclado.jpg'}
                  oldPrice={'860,00'} href={''}               ></ProductCard>
            </SwiperSlide>

            <SwiperSlide>
               {' '}
               <ProductCard
                  title={'Teclado Keycron V2K2'}
                  subtitle={'Teclado Keycron V2 K2 is the sweet and sedating union of two indica-dominant classics: Larry OG with Granddaddy Purple'}
                  price={'572,00'}
                  image={'./Teclado.jpg'}
                  oldPrice={'860,00'} href={''}               ></ProductCard>
            </SwiperSlide>

            <SwiperSlide>
               {' '}
               <ProductCard
                  title={'Teclado Keycron V2K2'}
                  subtitle={'Teclado Keycron V2 K2 is the sweet and sedating union of two indica-dominant classics: Larry OG with Granddaddy Purple'}
                  price={'572,00'}
                  image={'./Teclado.jpg'}
                  oldPrice={'860,00'} href={''}               ></ProductCard>
            </SwiperSlide>

            <SwiperSlide>
               {' '}
               <ProductCard
                  title={'Teclado Keycron V2K2'}
                  subtitle={'Teclado Keycron V2 K2 is the sweet and sedating union of two indica-dominant classics: Larry OG with Granddaddy Purple'}
                  price={'572,00'}
                  image={'./Teclado.jpg'}
                  oldPrice={'860,00'} href={''}               ></ProductCard>
            </SwiperSlide>

            <SwiperSlide>
               {' '}
               <ProductCard
                  title={'Teclado Keycron V2K2'}
                  subtitle={'Teclado Keycron V2 K2 is the sweet and sedating union of two indica-dominant classics: Larry OG with Granddaddy Purple'}
                  price={'572,00'}
                  image={'./Teclado.jpg'}
                  oldPrice={'860,00'} href={''}               ></ProductCard>
            </SwiperSlide>

            <SwiperSlide>
               {' '}
               <ProductCard
                  title={'Teclado Keycron V2K2'}
                  subtitle={'Teclado Keycron V2 K2 is the sweet and sedating union of two indica-dominant classics: Larry OG with Granddaddy Purple'}
                  price={'572,00'}
                  image={'./Teclado.jpg'}
                  oldPrice={'860,00'} href={''}               ></ProductCard>
            </SwiperSlide>

            <SwiperSlide>
               {' '}
               <ProductCard
                  title={'Teclado Keycron V2K2'}
                  subtitle={'Teclado Keycron V2 K2 is the sweet and sedating union of two indica-dominant classics: Larry OG with Granddaddy Purple'}
                  price={'572,00'}
                  image={'./Teclado.jpg'}
                  oldPrice={'860,00'} href={''}               ></ProductCard>
            </SwiperSlide>

            <SwiperSlide>
               {' '}
               <ProductCard
                  title={'Teclado Keycron V2K2'}
                  subtitle={'Teclado Keycron V2 K2 is the sweet and sedating union of two indica-dominant classics: Larry OG with Granddaddy Purple'}
                  price={'572,00'}
                  image={'./Teclado.jpg'}
                  oldPrice={'860,00'} href={''}               ></ProductCard>
            </SwiperSlide>
         </Swiper>
      </Container>
   );
}
