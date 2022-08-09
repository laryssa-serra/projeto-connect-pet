// ONG
var db_ongs = {
  ong: [
    {
      id_ong: "0084", // inserido a partir de função geradora de id_ong
      nome_fantasia: "Conecta Pets",
      razao_social: "Associação de Proteção Animal CP",
      cnpj: "21.123.321/0001-99",
      telefone: "(31) 3210-2030",
      email: "conectapets@gmail.com",
      facebook: "/conectapets",
      instagram: "@conectapets",
      estado: "MG",
      cidade: "Belo Horizonte",
      bairro: "Santo Antônio",
      endereço: "Rua Congonhas, 106",
      logo: "",
    },
  ],
};

// pet
var db_pets = {
  pet: [
    {
      id_pet: "0084307076", // inserido a partir de função geradora de id_pet
      id_ong_responsavel: "0084", // identificada a partir do db_ongs.ong.id_ong
      nome: "Don",
      especie: "Cachorro",
      idade: "1 ano",
      porte: "Médio",
      condicao_especial: "",
      descricao: "Don é um cachorrinho muito arteiro, adora brincar e correr. ",
      imagem: "",
    },
  ],
};

// voluntariado
var db_voluntariado = {
  voluntario: [
    {
      cpf: "",
      nome: "Juliana Santos",
      email: "juliana.santos@hotmail.com",
      telefone: "(27) 98741-1234",
      estado: "ES",
      cidade: "Vila Velha",
      id_ong: "0084", // identificada a partir do db_ongs.ong.id_ong
    },
  ],
};

// adocao
var db_adocao = {
  adotante: [
    {
      cpf: "",
      nome: "Murilo Ribeiro",
      email: "murilofribeiro@gmail.com",
      telefone: "(21) 97895-0050",
      estado: "RJ",
      cidade: "Rio de Janeiro",
      id_pet: "0084307076", // identificado a partir do db_pets.pet.id_pet
    },
  ],
};

// apadrinhamento
var db_apadrinhamento = {
  padrinho: [
    {
      cpf: "",
      nome: "",
      email: "",
      telefone: "",
      estado: "",
      cidade: "",
      id_pet: "", // identificado a partir do db_pets.pet.id_pet
    },
  ],
};
