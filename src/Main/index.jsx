import { Card } from '../Components/Card';
import './styles.scss';
export const Main = () => (
  <main className="main-content">
    <div className="cards-content">
      <Card />
      <Card color="cyan" />
      <Card color="pink" />
      <Card color="green" />
      <Card color="yellow" />
      <Card color="blue" />
    </div>
  </main>
);
