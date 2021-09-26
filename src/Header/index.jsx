import './styles.scss';
import img from '../assets/image.svg';
import { Button } from '../Components/Button';

export const Header = ({
  title = 'Lorem ipsum dolor sit amet',
  content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu massa sit amet augue consectetur ullamcorper non ac massa.',
}) => (
  <header className="header-component">
    <div className="header-content">
      <div className="text-content">
        <h1>{title}</h1>
        <p>{content}</p>
        <div className="btn-content">
          <Button />
        </div>
      </div>
      <img src={img} alt="Presente com personagens em volta" />
    </div>
  </header>
);
