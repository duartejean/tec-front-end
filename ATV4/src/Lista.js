const Lista = ({ list }) => (
  <ul>
    {list.map((item) => (
      <li key={item.id}>{item.nome}</li>
    ))}
  </ul>
);

export default Lista;