import RepositoryItem from "./RepositoryItem";

import '../styles/repositories.scss'

    const repository = {
        name: 'Atividade',
        description: 'Descriçõa da atividade',
        link: 'http://github.com/tadsgabrieltrindade'
    }

function RepositoryList(){
    return(
        <section className="repository-list"> 
            <h1>Lista de Repositórios</h1>
            <ul>
               <RepositoryItem  repository={repository}/>
               <RepositoryItem  repository={repository}/>
               <RepositoryItem  repository={repository}/>
               <RepositoryItem  repository={repository}/>
               <RepositoryItem  repository={repository}/>
               
            </ul>

        </section>
    )
}

export default RepositoryList;