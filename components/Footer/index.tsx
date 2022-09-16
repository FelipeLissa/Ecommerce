import { Container } from "./styles";

export function Footer() {
  return (
    <Container>
      <div className="content">
        <div className="content-logo">
          <img className="content-logo" src="/Grupo 46.png"></img>
        </div>
        <div className="column">
          <a className="title">Empresa</a>
          <a className="a" href="/sobrenos">Sobre Nós</a>
          <a className="a">Versão Mobile</a>
          <a className="a">Versão Mobile</a>
        </div>

        <div className="column">
          <a className="title">Contato</a>
          <a className="a">FAQ</a>
          <a className="a">Filiados e Produtos</a>
          <a className="a">Entrar em contato</a>
        </div>

        <div className="column">
          <a className="title">Mais</a>
          <a className="a">Airline fees</a>
          <a className="a">Airline</a>
          <a className="a">Low fare tips</a>
        </div>
      </div>
    </Container>
  );
}
