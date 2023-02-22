import React from "react";
const Modal = ({isOpen}) => {
  function closeModal() {
    return null;
  }

  if(isOpen) {
    return(
      <div className="box_modal modal-dialog modal-dialog-centered">
        <div className="modal-dialog box_modal_dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-3">Dados do projeto</h1>
              <button type="button" className="btn-close" aria-label="Close"></button>
            </div>
            
            <hr />
            <div className="modal-body">
              <div className="row">              
                <div className="col-6 box_modal_lef">
                  <div>
                    <label for="name" className="col-form-labe fw-bold">Nome*:</label>
                    <input type="text" className="form-control" id="name" />
                  </div>

                  <div>
                    <label for="cliente" className="col-form-labe fw-bold">Cliente*:</label>
                    <input type="text" className="form-control" id="cliente" />
                  </div>

                  <div>
                    <label for="dataInicio" className="col-form-labe fw-bold">Data de início:</label>
                    <input type="date" className="form-control" id="dataInicio" />
                  </div>

                  <div>
                    <label for="deadline" className="col-form-labe fw-bold">Deadline:</label>
                    <input type="date" className="form-control" id="deadline" />
                  </div>

                  <div>
                    <label for="budget" className="col-form-labe fw-bold">Budget*:</label>
                    <input type="text" className="form-control" id="budget" />
                  </div>

                </div>
                <div className="col-4">
                  <div>
                    <label for="projetos" className="col-form-label fw-bold">Tipo de projeto:</label>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="projetoFechado" id="projetoFechado" />
                      <label class="form-check-label" for="projetoFechado">
                        Projeto com escopo fechado
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="projetoRecorrente" id="projetoRecorrente" checked />
                      <label class="form-check-label" for="projetoRecorrente">
                        Projeto recorrente
                      </label>
                    </div>
                  </div>
                  <div>
                    <hr />
                    <label for="categorias" className="col-form-label fw-bold">Categorias:</label>
                    
                    <div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" role="switch" id="marketingDigital" />
                      <label className="form-check-label" for="marketingDigital">Marketing Digital</label>
                    </div>

                    <div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" role="switch" id="desenvolvimento" />
                      <label className="form-check-label" for="desenvolvimento">Desenvolvimento</label>
                    </div>

                    <div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" role="switch" id="hospedagem" />
                      <label className="form-check-label" for="hospedagem">Hospedagem</label>
                    </div>

                    </div>
                  </div>
                </div>
            </div>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-primary">Salvar</button>
            </div>
          </div>
        </div>
    );
  }

  return null;
  
}

export default Modal;