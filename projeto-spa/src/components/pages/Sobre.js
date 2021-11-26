import styles from './Sobre.module.css'

function Company(){
    return (
        <div className={styles.sobre_container}>
            <h1>Sobre</h1>

            <table>
                <tr>
                    <td><span>Motivação do site:</span> </td>
                    <td>Este site refere-se a um projeto SPA (Single Page Application)</td>
                </tr>

                <tr>
                    <td><span>Disciplina:</span> </td>
                    <td>Desenvolvimento Web II <a href="https://tadsgabrieltrindade.github.io/DW2A4_Disciplina/" target="__new">(Repositório)</a></td>
                </tr>

                <tr>
                    <td><span>Curso:</span> </td>
                    <td>Tecnólogo em Análise e Desenvolvimento de Sistemas</td>
                </tr>

                <tr>
                    <td><span>Faculdade:</span> </td>
                    <td>Instituto Federal de São Paulo (IFSP)</td>
                </tr>

                <tr>
                    <td><span>Docente:</span> </td>
                    <td>Johnata S. Santicioli</td>
                </tr>

                <tr>
                    <td><span>Discente:</span> </td>
                    <td>Gabriel R. Trindade</td>
                </tr>

                <tr>
                    <td><span>Descrição do projeto:</span> </td>
                    <td>Este projeto SPA foi feito em React e hospedado no Netlify que, por sua vez, se comunica com um servidor no backend hospedado no <a href="https://projeto-dw2a4.herokuapp.com/" target="__new">Heroku.</a> Com esta aplicação SPA é possível <strong>cadastrar</strong>, <strong>editar</strong> e <strong>remover</strong> projetos com categorias já cadastradas, além de associar serviços aos projetos. Nessa associação, <strong>não é possível ter o custo do serviço, ou um somatório dos custos dos serviços relacionados ao projeto, maior do que o orçamento do projeto</strong>, cadastrado momento de sua criação.  </td>
                </tr>

                <tr>
                    <td><span>Código fonte do projeto:</span> </td>
                    <td><a href="https://github.com/tadsgabrieltrindade/DW2A4_Disciplina/tree/main/projeto-spa" target="__new"> Clique aqui.</a></td>
                </tr>
                

            </table>
        </div>
    )
}

export default Company;