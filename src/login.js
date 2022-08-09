const seed = {
  idAutoIncrement: 4,
  ongs: [
    {
      id: 1,
      nomeFantasia: "Projeto Mi&Au",
      descricao: "Conectando pet aos verdadeiros donos",
      razaoSocial: "Associação de Proteção Animal PMA",
      cnpj: "21.123.321/0001-99",
      telefone: "(21) 3210-2030",
      email: "projetomiau@ongcp.com",
      facebook: "/projetomiauongcp",
      instagram: "@projetomiauongcp",
      estado: "RJ",
      cidade: "Rio de Janeiro",
      bairro: "Santo Antônio",
      endereço: "Rua Congonhas, 106",
      logo: "imagem-logo-ong1.png",
      senha: "123",
    },
    {
      id: 2,
      nomeFantasia: "SOS Animal",
      descricao: "Por você e seu pet!",
      razaoSocial: "Associação SOS Animal",
      cnpj: "91.101.797/0001-79",
      telefone: "(32) 3210-2030",
      email: "sosanimal@ongcp.com",
      facebook: "/sosanimalongcp",
      instagram: "@sosanimalongcp",
      estado: "MG",
      cidade: "Juiz de Fora",
      bairro: "Santo Antônio",
      endereço: "Rua Congonhas, 206",
      logo: "imagem-logo-ong2.jpg",
      senha: "123",
    },
    {
      id: 3,
      nomeFantasia: "ONG Animal",
      descricao: "Conectando os verdadeiros donos aos pets!",
      razaoSocial: "Associação ONG Animal",
      cnpj: "89.697.521/0001-53",
      telefone: "(11) 3210-2030",
      email: "onganimal@ongcp.com",
      facebook: "/onganimalongcp",
      instagram: "@onganimalongcp",
      estado: "SP",
      cidade: "São Paulo",
      bairro: "Santo Antônio",
      endereço: "Rua Congonhas, 306",
      logo: "imagem-logo-ong3.jpg",
      senha: "123",
    },
    {
      id: 4,
      nomeFantasia: "ONG OPAA",
      descricao: "Por seu pet e você!",
      razaoSocial: "Associação ONG OPAA",
      cnpj: "95.246.100/0001-09",
      telefone: "(81) 3210-2030",
      email: "ongopaa@ongcp.com",
      facebook: "/ongopaaongcp",
      instagram: "@ongopaaongcp",
      estado: "PE",
      cidade: "Recife",
      bairro: "Santo Antônio",
      endereço: "Rua Congonhas, 406",
      logo: "imagem-logo-ong4.jpg",
      senha: "123",
    },
  ],
};

var databaseOngs = {}; // variável para armazenar as informações de usuários, da carga inicial ou cadastrados
var emailCadastro = ""; // variável para gravar o e-mail incialmente informado para cadastro no localStorage, para que seja possível chamá-lo na página de cadastro

// carga inicial com os dados da constante seed no localStorage, caso a variável db_usuarios esteja vazia; se db_usuarios já estiver com conteúdo, ele é mantido
function initLogin() {
  var usuariosJSON = localStorage.getItem("databaseOngs");
  if (!usuariosJSON) {
    databaseOngs = seed;
    localStorage.setItem("databaseOngs", JSON.stringify(seed));
  } else {
    databaseOngs = JSON.parse(usuariosJSON);
  }
}

// função para verificação de dados de acesso, chamada pelo botão "acessar"
function acesso() {
  let email = document.querySelector("#input_email_login");
  let emailLabel = document.querySelector("#label_email_login");
  let senha = document.querySelector("#input_senha_login");
  let senhaLabel = document.querySelector("#label_senha_login");
  let listaUser = [];
  let userValid = {
    id: "",
    nome: "",
    email: "",
    senha: "",
  };

  let emailCad = document.querySelector("#input_email_cadastro");
  let emailLabelCad = document.querySelector("#label_email_cadastro");

  listaUser = JSON.parse(localStorage.getItem("databaseOngs"));
  listaUser = listaUser.ongs;

  listaUser.forEach((item) => {
    if (email.value == item.email && senha.value == item.senha) {
      userValid = {
        id: item.id,
        nomeFantasia: item.nomeFantasia,
        email: item.email,
        senha: item.senha,
      };
    }
  });

  if (
    email.value == userValid.email &&
    senha.value == userValid.senha &&
    email.value != ""
  ) {
    localStorage.setItem("idOngAutenticada", userValid.id);
    localStorage.setItem("idOngAtual", userValid.id);
    localStorage.setItem("nomeOngAutenticada", userValid.nomeFantasia);
    window.location.href = "ong.html";
  } else {
    emailLabel.setAttribute("style", "color:red");
    senhaLabel.setAttribute("style", "color:red");
    email.setAttribute("style", "border-color: red");
    senha.setAttribute("style", "border-color: red");
    msg_erro_acesso.setAttribute("style", "display: block");
    msg_erro_acesso.innerHTML = "Usuário ou senha incorretos";
    email.focus();

    emailLabelCad.removeAttribute("style", "color:red");
    emailCad.removeAttribute("style", "border-color: red");
    msg_erro_cadastro.removeAttribute("style", "display: block");
  }
}

function cadastro() {
  let emailCad = document.querySelector("#input_email_cadastro");
  let emailLabelCad = document.querySelector("#label_email_cadastro");
  let listaUserCad = [];
  let userValidCad = {
    id: "",
    nome: "",
    emailCad: "",
    senha: "",
  };

  let usuario = emailCad.value.substring(0, emailCad.value.indexOf("@"));
  let dominio = emailCad.value.substring(
    emailCad.value.indexOf("@") + 1,
    emailCad.value.length
  );

  let email = document.querySelector("#input_email_login");
  let emailLabel = document.querySelector("#label_email_login");
  let senha = document.querySelector("#input_senha_login");
  let senhaLabel = document.querySelector("#label_senha_login");

  listaUserCad = JSON.parse(localStorage.getItem("databaseOngs"));
  listaUserCad = listaUserCad.ongs;

  listaUserCad.forEach((item) => {
    if (emailCad.value == item.email) {
      userValidCad = {
        idCad: item.id,
        nomeCad: item.nome,
        emailCad: item.email,
        senhaCad: item.senha,
      };
    }
  });

  if (emailCad.value == userValidCad.emailCad && emailCad.value != "") {
    emailLabelCad.setAttribute("style", "color:red");
    emailCad.setAttribute("style", "border-color: red");
    msg_erro_cadastro.setAttribute("style", "display: block");
    msg_erro_cadastro.innerHTML = "E-mail já cadastrado";
    emailCad.focus();

    emailLabel.removeAttribute("style", "color:red");
    senhaLabel.removeAttribute("style", "color:red");
    email.removeAttribute("style", "border-color: red");
    senha.removeAttribute("style", "border-color: red");
    msg_erro_acesso.removeAttribute("style", "display: block");
  } else if (
    usuario.length >= 1 &&
    dominio.length >= 3 &&
    usuario.search("@") == -1 &&
    dominio.search("@") == -1 &&
    usuario.search(" ") == -1 &&
    dominio.search(" ") == -1 &&
    dominio.search(".") != -1 &&
    dominio.indexOf(".") >= 1 &&
    dominio.lastIndexOf(".") < dominio.length - 1
  ) {
    localStorage.setItem("emailCadastro", JSON.stringify(emailCad.value));
    window.location.href = "cadastro-ong.html";
  } else {
    emailLabelCad.setAttribute("style", "color:red");
    emailCad.setAttribute("style", "border-color: red");
    msg_erro_cadastro.setAttribute("style", "display: block");
    msg_erro_cadastro.innerHTML = "Favor informar um e-mail válido";
    emailCad.focus();

    emailLabel.removeAttribute("style", "color:red");
    senhaLabel.removeAttribute("style", "color:red");
    email.removeAttribute("style", "border-color: red");
    senha.removeAttribute("style", "border-color: red");
    msg_erro_acesso.removeAttribute("style", "display: block");
  }
}
