// Definição de classes para as principais entidades do sistema
var EmpresaConveniada = /** @class */ (function () {
    function EmpresaConveniada(id, nome, cnpj, endereco, contato, servicosOferecidos) {
        this.id = id;
        this.nome = nome;
        this.cnpj = cnpj;
        this.endereco = endereco;
        this.contato = contato;
        this.servicosOferecidos = servicosOferecidos;
    }
    return EmpresaConveniada;
}());
var EmpresaSolicitante = /** @class */ (function () {
    function EmpresaSolicitante(id, nome, cnpj, contato) {
        this.id = id;
        this.nome = nome;
        this.cnpj = cnpj;
        this.contato = contato;
    }
    return EmpresaSolicitante;
}());
var Paciente = /** @class */ (function () {
    function Paciente(id, nome, cpf, dataNascimento, empresaVinculada, historicoMedico) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.empresaVinculada = empresaVinculada;
        this.historicoMedico = historicoMedico;
    }
    return Paciente;
}());
var Agendamento = /** @class */ (function () {
    function Agendamento(id, empresaSolicitanteId, pacienteId, tipoExame, data) {
        this.id = id;
        this.empresaSolicitanteId = empresaSolicitanteId;
        this.pacienteId = pacienteId;
        this.tipoExame = tipoExame;
        this.data = data;
    }
    return Agendamento;
}());
// Simulação de "banco de dados" local
var empresasConveniadas = [];
var empresasSolicitantes = [];
var pacientes = [];
var agendamentos = [];
// Funções principais do sistema
// 1. Cadastro de Empresas Conveniadas
function cadastrarEmpresaConveniada(empresa) {
    empresasConveniadas.push(empresa);
    console.log("Empresa conveniada cadastrada:", empresa);
}
// 2. Cadastro de Empresas Solicitantes de Exames
function cadastrarEmpresaSolicitante(empresa) {
    empresasSolicitantes.push(empresa);
    console.log("Empresa solicitante cadastrada:", empresa);
}
// 3. Cadastro de Pacientes
function cadastrarPaciente(paciente) {
    pacientes.push(paciente);
    console.log("Paciente cadastrado:", paciente);
}
// 4. Agendamento de Exames com validação de data
function agendarExame(agendamento) {
    // Valida se já existe um agendamento para o paciente na mesma data
    var conflito = agendamentos.some(function (a) { return a.pacienteId === agendamento.pacienteId && a.data.getTime() === agendamento.data.getTime(); });
    if (conflito) {
        console.log("Erro: Já existe um agendamento para esse paciente na data selecionada.");
    }
    else {
        agendamentos.push(agendamento);
        console.log("Agendamento realizado:", agendamento);
    }
}
// Funções de edição e exclusão de dados
// Editar Empresa Conveniada
function editarEmpresaConveniada(id, dadosAtualizados) {
    var empresa = empresasConveniadas.find(function (e) { return e.id === id; });
    if (empresa) {
        Object.assign(empresa, dadosAtualizados);
        console.log("Empresa conveniada editada:", empresa);
    }
    else {
        console.log("Empresa conveniada não encontrada.");
    }
}
// Editar Empresa Solicitante
function editarEmpresaSolicitante(id, dadosAtualizados) {
    var empresa = empresasSolicitantes.find(function (e) { return e.id === id; });
    if (empresa) {
        Object.assign(empresa, dadosAtualizados);
        console.log("Empresa solicitante editada:", empresa);
    }
    else {
        console.log("Empresa solicitante não encontrada.");
    }
}
// Editar Paciente
function editarPaciente(id, dadosAtualizados) {
    var paciente = pacientes.find(function (p) { return p.id === id; });
    if (paciente) {
        Object.assign(paciente, dadosAtualizados);
        console.log("Paciente editado:", paciente);
    }
    else {
        console.log("Paciente não encontrado.");
    }
}
// Excluir Empresa Conveniada
function excluirEmpresaConveniada(id) {
    var index = empresasConveniadas.findIndex(function (e) { return e.id === id; });
    if (index !== -1) {
        empresasConveniadas.splice(index, 1);
        console.log("Empresa conveniada excluída com sucesso.");
    }
    else {
        console.log("Empresa conveniada não encontrada.");
    }
}
// Excluir Empresa Solicitante
function excluirEmpresaSolicitante(id) {
    var index = empresasSolicitantes.findIndex(function (e) { return e.id === id; });
    if (index !== -1) {
        empresasSolicitantes.splice(index, 1);
        console.log("Empresa solicitante excluída com sucesso.");
    }
    else {
        console.log("Empresa solicitante não encontrada.");
    }
}
// Excluir Paciente
function excluirPaciente(id) {
    var index = pacientes.findIndex(function (p) { return p.id === id; });
    if (index !== -1) {
        pacientes.splice(index, 1);
        console.log("Paciente excluído com sucesso.");
    }
    else {
        console.log("Paciente não encontrado.");
    }
}
