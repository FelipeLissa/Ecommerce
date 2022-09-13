import { Container } from "./styles";

export function Footer() {
  return (
    <Container>
      <div className="content">
        <div className="content-logo">
          <img className="content-logo" src="/logo43.png"></img>
        </div>
        <div className="column">
          <a className="title">Company</a>
          <a className="a">About</a>
          <a className="a">Careers</a>
          <a className="a">Mobile</a>
        </div>

        <div className="column">
          <a className="title">Contact</a>
          <a className="a">Help/FAQ</a>
          <a className="a">Press</a>
          <a className="a">Afiliates</a>
        </div>

        <div className="column">
          <a className="title">More</a>
          <a className="a">Airline fees</a>
          <a className="a">Airline</a>
          <a className="a">Low fare tips</a>
        </div>
      </div>
    </Container>
  );
}
