import { Container } from './styles';
interface EProps {
   title: string;
   subtitle: string;
   price: string;
   image:string;
   oldPrice:string;
   href: string;
}
export function ProductCard({ href, oldPrice,image, title, subtitle, price }: EProps) {
   return (
      <Container>
               <div className="product-div">
                  <div className="product-img">
                     <img className="product-img1" src={image}></img>
                  </div>
                  <a className="product-title">{title}</a>
                  <a className="product-subtitle">{subtitle}</a>
                  <a className="product-price">
                     De <a className="product-oldprice">R$ {oldPrice}</a> <br/>
                     Por <a className='product-newprice'>R$ {price}</a></a>
                  <a className="product-button" href={href} target='blank'>COMPRAR</a>
               </div>
            
      </Container>
   );
}
