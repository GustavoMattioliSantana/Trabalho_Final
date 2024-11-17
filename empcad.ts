//tsc empcad.ts
//npm install -g typescript
interface EmpresaConveniada {
    nome: string;
    cnpj: string;
    endereco: string;
    contato: string;
    servicos: string;
}

interface EmpresaSolicitante {
    nome: string;
    cnpj: string;
    contato: string;
}

interface Paciente {
    nome: string;
    cpf: string;
    dataNascimento: string;
    empresaVinculada: string;
    historicoMedico: string;
}

interface Agendamento {
    idSolicitante: string;
    idPaciente: string;
    tipoExame: string;
    dataExame: string;
}

const empresasConveniada: EmpresaConveniada[] = [];
const empresasSolicitante: EmpresaSolicitante[] = [];
const pacientes: Paciente[] = [];
const agendamentos: Agendamento[] = [];

function showSection(sectionId: string): void {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active');
    }
}

function cadastrarEmpresaConveniada(event: Event): boolean {
    event.preventDefault();
    const nome = (document.getElementById('nome-conveniada') as HTMLInputElement).value;
    const cnpj = (document.getElementById('cnpj-conveniada') as HTMLInputElement).value;
    const endereco = (document.getElementById('endereco-conveniada') as HTMLInputElement).value;
    const contato = (document.getElementById('contato-conveniada') as HTMLInputElement).value;
    const servicos = (document.getElementById('servicos-conveniada') as HTMLInputElement).value;

    empresasConveniada.push({ nome, cnpj, endereco, contato, servicos });
    mostrarInformacoes('info-conveniada', empresasConveniada);
    return false; // Para evitar o envio do formulário
}

function cadastrarEmpresaSolicitante(event: Event): boolean {
    event.preventDefault();
    const nome = (document.getElementById('nome-solicitante') as HTMLInputElement).value;
    const cnpj = (document.getElementById('cnpj-solicitante') as HTMLInputElement).value;
    const contato = (document.getElementById('contato-solicitante') as HTMLInputElement).value;

    empresasSolicitante.push({ nome, cnpj, contato });
    mostrarInformacoes('info-solicitante', empresasSolicitante);
    return false; // Para evitar o envio do formulário
}

function cadastrarPaciente(event: Event): boolean {
    event.preventDefault();
    const nome = (document.getElementById('nome-paciente') as HTMLInputElement).value;
    const cpf = (document.getElementById('cpf-paciente') as HTMLInputElement).value;
    const dataNascimento = (document.getElementById('data-nascimento-paciente') as HTMLInputElement).value;
    const empresaVinculada = (document.getElementById('empresa-vinculada-paciente') as HTMLInputElement).value;
    const historicoMedico = (document.getElementById('historico-medico-paciente') as HTMLTextAreaElement).value;

    pacientes.push({ nome, cpf, dataNascimento, empresaVinculada, historicoMedico });
    mostrarInformacoes('info-paciente', pacientes);
    return false; // Para evitar o envio do formulário
}

function agendarExame(event: Event): boolean {
    event.preventDefault();
    const idSolicitante = (document.getElementById('id-solicitante') as HTMLInputElement).value;
    const idPaciente = (document.getElementById('id-paciente') as HTMLInputElement).value;
    const tipoExame = (document.getElementById('tipo-exame') as HTMLInputElement).value;
    const dataExame = (document.getElementById('data-exame') as HTMLInputElement).value;

    agendamentos.push({ idSolicitante, idPaciente, tipoExame, dataExame });
    mostrarInformacoes('info-agendamento', agendamentos);
    return false; // Para evitar o envio do formulário
}

function mostrarInformacoes(elementId: string, lista: Array<any>): void {
    const infoDiv = document.getElementById(elementId);
    if (infoDiv) {
        infoDiv.innerHTML = `<h3>Informações Cadastradas:</h3>`;
        lista.forEach((item, index) => {
            // Verifica se item é um objeto
            if (typeof item === 'object' && item !== null) {
                infoDiv.innerHTML += `<p><strong>Registro ${index + 1}:</strong><br>
                ${Object.entries(item).map(([key, value]) => `${key}: ${value}`).join('<br>')}</p>`;
            } else {
                infoDiv.innerHTML += `<p><strong>Registro ${index + 1}:</strong><br>Dados inválidos</p>`;
            }
        });
    }
}