var empresasConveniada = [];
var empresasSolicitante = [];
var pacientes = [];
var agendamentos = [];
function showSection(sectionId) {
    var sections = document.querySelectorAll('section');
    sections.forEach(function (section) {
        section.classList.remove('active');
    });
    var activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active');
    }
}
function cadastrarEmpresaConveniada(event) {
    event.preventDefault();
    var nome = document.getElementById('nome-conveniada').value;
    var cnpj = document.getElementById('cnpj-conveniada').value;
    var endereco = document.getElementById('endereco-conveniada').value;
    var contato = document.getElementById('contato-conveniada').value;
    var servicos = document.getElementById('servicos-conveniada').value;
    empresasConveniada.push({ nome: nome, cnpj: cnpj, endereco: endereco, contato: contato, servicos: servicos });
    mostrarInformacoes('info-conveniada', empresasConveniada);
    return false; // Para evitar o envio do formulário
}
function cadastrarEmpresaSolicitante(event) {
    event.preventDefault();
    var nome = document.getElementById('nome-solicitante').value;
    var cnpj = document.getElementById('cnpj-solicitante').value;
    var contato = document.getElementById('contato-solicitante').value;
    empresasSolicitante.push({ nome: nome, cnpj: cnpj, contato: contato });
    mostrarInformacoes('info-solicitante', empresasSolicitante);
    return false; // Para evitar o envio do formulário
}
function cadastrarPaciente(event) {
    event.preventDefault();
    var nome = document.getElementById('nome-paciente').value;
    var cpf = document.getElementById('cpf-paciente').value;
    var dataNascimento = document.getElementById('data-nascimento-paciente').value;
    var empresaVinculada = document.getElementById('empresa-vinculada-paciente').value;
    var historicoMedico = document.getElementById('historico-medico-paciente').value;
    pacientes.push({ nome: nome, cpf: cpf, dataNascimento: dataNascimento, empresaVinculada: empresaVinculada, historicoMedico: historicoMedico });
    mostrarInformacoes('info-paciente', pacientes);
    return false; // Para evitar o envio do formulário
}
function agendarExame(event) {
    event.preventDefault();
    var idSolicitante = document.getElementById('id-solicitante').value;
    var idPaciente = document.getElementById('id-paciente').value;
    var tipoExame = document.getElementById('tipo-exame').value;
    var dataExame = document.getElementById('data-exame').value;
    agendamentos.push({ idSolicitante: idSolicitante, idPaciente: idPaciente, tipoExame: tipoExame, dataExame: dataExame });
    mostrarInformacoes('info-agendamento', agendamentos);
    return false; // Para evitar o envio do formulário
}
function mostrarInformacoes(elementId, lista) {
    var infoDiv = document.getElementById(elementId);
    if (infoDiv) {
        infoDiv.innerHTML = "<h3>Informa\u00E7\u00F5es Cadastradas:</h3>";
        lista.forEach(function (item, index) {
            // Verifica se item é um objeto
            if (typeof item === 'object' && item !== null) {
                infoDiv.innerHTML += "<p><strong>Registro ".concat(index + 1, ":</strong><br>\n                ").concat(Object.entries(item).map(function (_a) {
                    var key = _a[0], value = _a[1];
                    return "".concat(key, ": ").concat(value);
                }).join('<br>'), "</p>");
            }
            else {
                infoDiv.innerHTML += "<p><strong>Registro ".concat(index + 1, ":</strong><br>Dados inv\u00E1lidos</p>");
            }
        });
    }
}
