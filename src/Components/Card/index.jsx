import './styles.scss';

export const Card = ({
  color = 'orange',
  title = 'Título do card',
  content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.',
}) => (
  <div className="card">
    <header className={`${color}`}></header>
    <main>
      <h1>{title}</h1>
      <p>{content}</p>
    </main>
  </div>
);
