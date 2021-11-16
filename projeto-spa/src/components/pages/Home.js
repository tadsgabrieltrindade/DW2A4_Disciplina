import { Link} from "react-router-dom";
import NewProject from "./NewProject";

function Home() {


  return (
    <div>
      <h1>
        Bem vindo ao <span>Costs</span>
      </h1>
      <h4>Começe a gerenciar seus projetos agora mesmo!</h4>


      <Link to="/newproject"> Criar projeto</Link>

      
    </div>
  );
}

export default Home;
