import Link from 'next/link';
import { Container } from './styles';


export function Header() {
  return (
    <Container>
      <img className='header-logo' src='/Grupo 46.png'></img>
      <div className='header-div'>
        <Link href={'/'}>
        <a className='header-a'>Início</a>
        </Link>
        <Link href={'/sobrenos'}>
        <a className='header-a'>Sobre Nós</a>
        </Link>
        <Link href={'/Kits'}>
        <a className='header-a'>Kits em Promoção</a>
        </Link>
        <Link href={'/Promocao'}>
        <a className='header-a'>Todos os Produtos</a>
        </Link>
      </div>
    </Container>
  );
}
