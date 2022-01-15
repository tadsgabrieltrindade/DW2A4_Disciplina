import RepositoryItem from "./RepositoryItem";
import { useState, useEffect } from "react";

import "../styles/repositories.scss";

const repository = {
  name: "Atividade",
  description: "Descriçõa da atividade",
  link: "http://github.com/tadsgabrieltrindade",
};

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  //toda vez que o segundo parâmetro mudar, a função será executada no primerio parâmetro. Se o 2_a parâmetro for um [] ele irá executar uma única vez. Ele é a 'dependênica'
  useEffect(() => {
    fetch("https://api.github.com/users/tadsgabrieltrindade/repos")
      .then((reponse) => reponse.json())
      .then((data) => setRepositories(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(repositories);

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>
      <ul>
        {repositories.map((repository) => {
          return <RepositoryItem repository={repository} key={repository.id} />;
        })}
      </ul>
    </section>
  );
}

export default RepositoryList;
