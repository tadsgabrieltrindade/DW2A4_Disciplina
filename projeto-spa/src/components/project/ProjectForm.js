//import styles from './ProjectFom.module.css'

function ProjectForm() {

  return (
    <form>
      <label>Nome do projeto: </label>
      <input type="text" />
      <label>Orçamento total: </label>
      <input type="number" />
      <label>Categoria: </label>
      <select name="category_id">
        <option disabled>Selecione a categoria</option>
      </select>

      <div>
        <input id="btnForm" type="submit" value="Criar projeto" />
      </div>
    </form>
  );
}

export default ProjectForm;
