import { Button } from '../Components/Button';
import './styles.scss';

export const Footer = () => (
  <footer>
    <h1>Entre em contato</h1>
    <div className="footer-content">
      <form action="">
        <input type="text" name="name" id="name" placeholder="Nome" />
        <input type="text" name="email" id="email" placeholder="Email" />
        <input type="text" name="phone" id="phone" placeholder="Telefone" />
        <textarea name="message" id="message" cols="30" rows="10"></textarea>
      </form>
      <Button title="Enviar mensagem" />
    </div>
  </footer>
);
