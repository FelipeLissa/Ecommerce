import { Container } from './styles';
interface EProps {
   name: string;
   review: string;
   rate: number;
   date: string;
   avatar: string;
}
export function Avaliacoes({ name, review, rate, date, avatar }: EProps) {
   return (
      <Container>
         <div className="content-div">
            <div className="content-avatar">
               <img
                  className="content-avatar"
                  src={avatar}
                  alt="Foto de Perfil"
               ></img>
            </div>

            <div className="content-review">
               <a className="content-name">{name}</a>
               <a className="content-text">{review}</a>
               <a className="content-date">Data: {date}</a>
               <a className="content-rate">Avaliação: {rate}/10</a>
            </div>
         </div>
      </Container>
   );
}
