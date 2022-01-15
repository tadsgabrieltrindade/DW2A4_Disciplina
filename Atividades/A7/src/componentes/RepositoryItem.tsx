interface RepositoryItemProps{
  repository?:{
    name: string,
    description: string,
    html_url: string
  }
}

function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      {/* O ?. significa 'se existe' e o ?? indica caso não exita tenha um padrão */} 
      <strong>{props.repository?.name ?? 'Repositório padrão'}</strong>
      <p>{props.repository?.description}</p>
      <a href={props.repository?.html_url} target="__new">Acessar repositório</a>
    </li>
  );
}

export default RepositoryItem;
