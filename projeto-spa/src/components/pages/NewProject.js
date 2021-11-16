import LinkButton  from '../layout/LinkButton.js'

function NewProject(){
    return (
        <div>
            <h1>Novo Projeto</h1>
           <LinkButton to="/projects" text="Projetos" />
        </div>
    )
}

export default NewProject;