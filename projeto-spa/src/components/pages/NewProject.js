import { Link} from "react-router-dom";

function NewProject(){
    return (
        <div>
            <h1>Novo Projeto</h1>
            <Link to="/projects" > Projetos</Link>
        </div>
    )
}

export default NewProject;