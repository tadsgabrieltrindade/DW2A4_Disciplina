import { useEffect, useState } from "react";

import Input from "../form/Input";
import Select from "../form/Select";
import styles from "./ProjectFom.module.css";
import SubmitButton from "../form/SubmitButton";

function ProjectForm({ handleSubmit, btnText, projectData }) {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {});

  useEffect(() => {
    fetch(
      "https://projeto-dw2a4.herokuapp.com/categories",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
      []
    )
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const submit = (e) => {
    e.preventDefault();
    //console.log(project);
    handleSubmit(project); //chama o createProject /post
  };

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value });
  }

  function handleCategory(e) {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
        handOnChange={handleChange}
        value={project.name ? project.name : ""}
      />
      <Input
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o orçamento total"
        handOnChange={handleChange}
        value={project.budget ? project.budget : ""}
      />

      
      <Select
        name="category_id"
        text="Selecione a categoria"
        options={categories}
        handOnChange={handleCategory}
        value={project.category ? project.category.id : ""}
      />
      
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjectForm;
