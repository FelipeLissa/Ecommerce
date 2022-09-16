import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, A11y, Navigation, FreeMode} from 'swiper';
import { Avaliacoes } from '../Avaliacoes';
import { Container, Container1 } from './styles';

export function MenuAvaliacoes() {
   return (
    <Container1>


      <div className='left-content'>
        <a className='left-content-title'>Avaliações dos nossos clientes</a>
        <a className='left-content-text'>A Eletro Em Promo atua no mercado desde 2018, conquistando milhares de clientes ao longo dos anos, veja alguma das avaliações que recebemos.</a>
      </div>


      <Container>
         <Swiper
            spaceBetween={300}
            slidesPerView={2}
            autoplay={{
               delay: 2000,
               disableOnInteraction: false,
            }}
            freeMode={{
              enabled: true,
              sticky:true,
            }}
            modules={[Autoplay, A11y, FreeMode]}
            className="mySwiper"
         >

            <SwiperSlide>
               <Avaliacoes
                  name={'Matheus Navarro dos Santos'}
                  review={
                     'Recomendo. Os produtos são originais.Infelizmente em outros mercados está saindo muito caro.Como aproveitei a promoção valeu a pena.'
                  }
                  rate={9}
                  date={'16/08/2020'}
                  avatar={'/Interseção 4.png'}
               ></Avaliacoes>
            </SwiperSlide>

            <SwiperSlide>
               <Avaliacoes
                  name={'Lisa Pacheco'}
                  review={
                     'Compro e recomendo para meus amigos, produtos de qualidade e pelo preço mais acessível que encontrei na internet'
                  }
                  rate={10}
                  date={'16/08/2020'}
                  avatar={'/Interseção 2.png'}
               ></Avaliacoes>
            </SwiperSlide>

            <SwiperSlide>
               <Avaliacoes
                  name={'Gabriel Herdy'}
                  review={
                     'Tenho uma loja de assistência técnica em Joinville e sempre aproveito as promoções para aumentar e variar meu estoque. '
                  }
                  rate={8}
                  date={'16/08/2020'}
                  avatar={'/Interseção 5.png'}
               ></Avaliacoes>
            </SwiperSlide>

            <SwiperSlide>
               <Avaliacoes
                  name={'Bruno Herbert Gava'}
                  review={
                     'Montei meu pc com voces pagando quase 3x menos do que eu iria pagar em outra loja. Recomendo com certeza. '
                  }
                  rate={10}
                  date={'16/08/2020'}
                  avatar={'/Interseção 6.png'}
               ></Avaliacoes>
            </SwiperSlide>

            <SwiperSlide>
               <Avaliacoes
                  name={'Fernanda Palocci'}
                  review={
                     'Comprei vários eletrônicos pra minha casa nova com a Eletro e consegui economizar muito, além de ter gostado muito dos produtos. Recomendo sim.'
                  }
                  rate={9}
                  date={'16/08/2020'}
                  avatar={'/Interseção 1.png'}
               ></Avaliacoes>
            </SwiperSlide>

            <SwiperSlide>
               <Avaliacoes
                  name={'Hiago Abner Gomes'}
                  review={
                     'Foi o melhor preço que eu encontrei na Internet, to sempre de olho nas promoções pra aproveitar e gastar menos.'
                  }
                  rate={8}
                  date={'16/08/2020'}
                  avatar={'/Interseção 3.png'}
               ></Avaliacoes>
            </SwiperSlide>
         </Swiper>
      </Container>
      </Container1>
   );
}
