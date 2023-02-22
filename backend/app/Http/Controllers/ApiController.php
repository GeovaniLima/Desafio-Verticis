<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use App\Models\Projetos;

class ApiController extends Controller
{
    public function createProjeto(Request $request) {
        $array = ['error' => ''];

        $rules = [
            'nome' => 'required',
            'cliente' => 'required',
            'budget' => 'required'
        ];

        $validator = Validator::make($request->all(), $rules);

        if($validator->fails()) {
            $array['error'] = $validator->message();
            return $array;
        }

        $nome = $request->input('nome');
        $cliente = $request->input('cliente');
        $lider = $request->input('lider');
        $dataInicio = $request->input('data-inicio');
        $deadline = $request->input('deadline');
        $budget = $request->input('budget');
        $tipo = $request->input('tipo');
        $categoria = $request->input('categoria');

        $projeto = new Projetos();
        $projeto->nome = $nome;
        $projeto->cliente = $cliente;
        $projeto->lider = $lider;
        $projeto->dataInico = $dataInicio;
        $projeto->deadline = $deadline;
        $projeto->budget = $budget;
        $projeto->tipo = $tipo;
        $projeto->categoria = $categoria;
        $projeto->save();

        return $array;
    }

    public function readAllProjetos() {
        $array = ['error' => ''];

        // Listagem Padrão
        $array['list'] = Projetos::all();

        // Listagem com Paginação
        /*$projetos = Projetos::simplePaginate(1);

        $array['list'] = $projetos->items();
        $array['current_page'] = $projetos->currentPage();*/

        return $array;
    }

    public function readProjeto($id) {
        $array = ['error' => ''];

        $projeto = Projetos::find($id);

        if($projeto) {
            $array['projeto'] = $projeto;
        } else {
            $array['error'] = 'Projeto nao encontrado';
        }

        return $array;
    }

    public function updateProjeto($id, Request $request) {
        $array = ['error' => ''];

        $nome = $request->input('nome');
        $cliente = $request->input('cliente');
        $lider = $request->input('lider');
        $dataInicio = $request->input('data-inicio');
        $deadline = $request->input('deadline');
        $budget = $request->input('budget');
        $tipo = $request->input('tipo');
        $categoria = $request->input('categoria');

        // Atualizando
        $projeto = Projetos::find($id);

        if($projeto) {
            if($nome) {
                $projeto->nome = $nome;
            }

            if($cliente) {
                $projeto->cliente = $cliente;
            }

            if($lider) {
                $projeto->lider = $lider;
            }

            if($dataInicio) {
                $projeto->dataInicio = $dataInicio;
            }

            if($deadline) {
                $projeto->deadline = $deadline;
            }

            if($budget) {
                $projeto->budget = $budget;
            }

            if($tipo) {
                $projeto->tipo = $tipo;
            }

            if($categoria) {
                $projeto->categoria = $categoria;
            }

            $projeto->save();
        } else {
            $array['error'] = 'Projeto nao encontrado';
        }

        return $array;
    }

    public function deleteProjeto($id) {
        $array = ['error' => ''];

        $projeto = Projetos::find($id);
        $projeto->delete();

        return $array;
    }
}
