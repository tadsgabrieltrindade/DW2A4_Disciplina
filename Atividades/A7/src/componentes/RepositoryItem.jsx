function RepositoryItem(props) {
    


  return (
    <li>
      {/* O ?. significa 'se existe' e o ?? indica caso não exita tenha um padrão */} 
      <strong>{props.repository?.name ?? 'Repositório padrão'}</strong>
      <p>{props.repository?.description}</p>
      <a href={props.repository?.link} target="__new">Acessar repositório</a>
    </li>
  );
}

export default RepositoryItem;
