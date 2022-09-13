import Link from 'next/link';
import { Container } from './styles';


export function Header() {
  return (
    <Container>
      <div className='header-div'>
        <Link href={'/'}>
        <a className='header-a'>Menu</a>
        </Link>
        <Link href={'/SobreNos'}>
        <a className='header-a'>Sobre Nós</a>
        </Link>
        <Link href={'/Kits'}>
        <a className='header-a'>Kits</a>
        </Link>
        <Link href={'/Promocao'}>
        <a className='header-a'>Promoção</a>
        </Link>
      </div>
    </Container>
  );
}
