// Definição de classes para as principais entidades do sistema
class EmpresaConveniada {
    constructor(
        public id: number,
        public nome: string,
        public cnpj: string,
        public endereco: string,
        public contato: string,
        public servicosOferecidos: string[]
    ) {}
}

class EmpresaSolicitante {
    constructor(
        public id: number,
        public nome: string,
        public cnpj: string,
        public contato: string
    ) {}
}

class Paciente {
    constructor(
        public id: number,
        public nome: string,
        public cpf: string,
        public dataNascimento: Date,
        public empresaVinculada: string,
        public historicoMedico: string
    ) {}
}

class Agendamento {
    constructor(
        public id: number,
        public empresaSolicitanteId: number,
        public pacienteId: number,
        public tipoExame: string,
        public data: Date
    ) {}
}

// Simulação de "banco de dados" local
const empresasConveniadas: EmpresaConveniada[] = [];
const empresasSolicitantes: EmpresaSolicitante[] = [];
const pacientes: Paciente[] = [];
const agendamentos: Agendamento[] = [];

// Funções principais do sistema

// 1. Cadastro de Empresas Conveniadas
function cadastrarEmpresaConveniada(empresa: EmpresaConveniada): void {
    empresasConveniadas.push(empresa);
    console.log("Empresa conveniada cadastrada:", empresa);
}

// 2. Cadastro de Empresas Solicitantes de Exames
function cadastrarEmpresaSolicitante(empresa: EmpresaSolicitante): void {
    empresasSolicitantes.push(empresa);
    console.log("Empresa solicitante cadastrada:", empresa);
}

// 3. Cadastro de Pacientes
function cadastrarPaciente(paciente: Paciente): void {
    pacientes.push(paciente);
    console.log("Paciente cadastrado:", paciente);
}

// 4. Agendamento de Exames com validação de data
function agendarExame(agendamento: Agendamento): void {
    // Valida se já existe um agendamento para o paciente na mesma data
    const conflito = agendamentos.some(a => a.pacienteId === agendamento.pacienteId && a.data.getTime() === agendamento.data.getTime());
    
    if (conflito) {
        console.log("Erro: Já existe um agendamento para esse paciente na data selecionada.");
    } else {
        agendamentos.push(agendamento);
        console.log("Agendamento realizado:", agendamento);
    }
}

// Funções de edição e exclusão de dados

// Editar Empresa Conveniada
function editarEmpresaConveniada(id: number, dadosAtualizados: Partial<EmpresaConveniada>): void {
    const empresa = empresasConveniadas.find(e => e.id === id);
    if (empresa) {
        Object.assign(empresa, dadosAtualizados);
        console.log("Empresa conveniada editada:", empresa);
    } else {
        console.log("Empresa conveniada não encontrada.");
    }
}

// Editar Empresa Solicitante
function editarEmpresaSolicitante(id: number, dadosAtualizados: Partial<EmpresaSolicitante>): void {
    const empresa = empresasSolicitantes.find(e => e.id === id);
    if (empresa) {
        Object.assign(empresa, dadosAtualizados);
        console.log("Empresa solicitante editada:", empresa);
    } else {
        console.log("Empresa solicitante não encontrada.");
    }
}

// Editar Paciente
function editarPaciente(id: number, dadosAtualizados: Partial<Paciente>): void {
    const paciente = pacientes.find(p => p.id === id);
    if (paciente) {
        Object.assign(paciente, dadosAtualizados);
        console.log("Paciente editado:", paciente);
    } else {
        console.log("Paciente não encontrado.");
    }
}

// Excluir Empresa Conveniada
function excluirEmpresaConveniada(id: number): void {
    const index = empresasConveniadas.findIndex(e => e.id === id);
    if (index !== -1) {
        empresasConveniadas.splice(index, 1);
        console.log("Empresa conveniada excluída com sucesso.");
    } else {
        console.log("Empresa conveniada não encontrada.");
    }
}

// Excluir Empresa Solicitante
function excluirEmpresaSolicitante(id: number): void {
    const index = empresasSolicitantes.findIndex(e => e.id === id);
    if (index !== -1) {
        empresasSolicitantes.splice(index, 1);
        console.log("Empresa solicitante excluída com sucesso.");
    } else {
        console.log("Empresa solicitante não encontrada.");
    }
}

// Excluir Paciente
function excluirPaciente(id: number): void {
    const index = pacientes.findIndex(p => p.id === id);
    if (index !== -1) {
        pacientes.splice(index, 1);
        console.log("Paciente excluído com sucesso.");
    } else {
        console.log("Paciente não encontrado.");
    }
}
