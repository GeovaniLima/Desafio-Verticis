<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;

// Primeira rota de teste
Route::get('/ping', function() {
    return [
        'pong' => true
    ];
});

// CRUD do projeto
// POST /projeto = Inserir um projeto
// GET /projetos = Ler todos os projetos
// GET /projetos/2 = Ler um projeto especifico
// PUT /projetos/2 = Atualizar um projeto especifico
// DELETE /projetos/2 = Deletar um projeto especifico

Route::post('/projeto', [ApiController::class, 'createProjeto']);
Route::get('/projetos', [ApiController::class, 'readAllProjetos']);
Route::get('/projeto/{id}', [ApiController::class, 'readProjeto']);
Route::put('/projeto/{id}', [ApiController::class, 'updateProjeto']);
Route::delete('/projeto/{id}', [ApiController::class, 'deleteProjeto']);
