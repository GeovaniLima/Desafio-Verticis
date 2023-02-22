import { useState } from "react";
import  Modal  from "../../components/modal";

const Projetos = () => {
  const [openModal, setOpenModal] = useState(false);

  return(
    <div className="container-fluid h-100 bg-bgColor pt-4">
      <div className="container d-flex justify-content-between">
        <p className="fw-bold fs-3">Projetos</p>
        <button type="button" className="btn btn-primary btn-lg" onClick={() => setOpenModal(true)}>Novo Projeto</button>
      </div> 
      <div className="box container mt-5 bg-white">
        <div className="input_search_box">
          <input type="text" className="form-control form-control-lg mb-3 input_search" placeholder="Pesquisar projetos" />
        </div>

        <Modal isOpen={openModal} />
        
        <table className="table text-center">
          <thead>
            <tr>
              <th scope="col">Empresa</th>
              <th scope="col">Projeto</th>
              <th scope="col">Tipo de projeto</th>
              <th scope="col">Status</th>
              <th scope="col">Líder</th>
              <th scope="col">Tarefas abertas</th>
              <th scope="col">Situação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Verticis</th>
              <td>Desenvolvimento Dashboard</td>
              <td>Valor fixo</td>
              <td>Liberado</td>
              <td>André Brunelli</td>
              <td>9</td>
              <td className="highlighter_day">Em dia</td>
            </tr>
            <tr>
              <th scope="row">Verticis</th>
              <td>Manutenção de site</td>
              <td>Recorrente</td>
              <td>Liberado</td>
              <td>Alice</td>
              <td>6</td>
              <td className="highlighter_atention">Atenção</td>
            </tr>
            <tr>
              <th scope="row">Orbi</th>
              <td>Manutenção de site</td>
              <td>Valor fixo</td>
              <td>Liberado</td>
              <td>Larissa</td>
              <td>5</td>
              <td className="highlighter_day">Em dia</td>
            </tr>
            <tr>
              <th scope="row">Contrata Frete</th>
              <td>Desenvolvimento sistema</td>
              <td>Valor fixo</td>
              <td>Liberado</td>
              <td>João Zica</td>
              <td>9</td>
              <td className="highlighter_red">Crítico</td>
            </tr>
            <tr>
              <th scope="row">Verticis</th>
              <td>Desenvolvimento NPS</td>
              <td>Recorrente</td>
              <td>Liberado</td>
              <td>André Brunelli</td>
              <td>2</td>
              <td className="highlighter_day">Em dia</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Projetos;