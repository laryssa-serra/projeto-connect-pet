const seed = {
  idAutoIncrement: 8,
  pets: [
    {
      id: 1,
      nome: "Céu",
      especie: "Gato",
      idade: "6",
      porte: "médio",
      condicao: "",
      descricao: "Esperto, brincalhão e serelepe",
      foto: "foto-gato1.jpg",
      ong: "ONG Animalar",
      ongId: "1",
    },
    {
      id: 2,
      nome: "Cheetos",
      especie: "Cachorro",
      idade: "3",
      porte: "médio",
      condicao: "Doença do carrapato",
      descricao: "Esperto, brincalhão e serelepe",
      foto: "foto-cachorro1.jpg",
      ong: "SOS Animais",
      ongId: "1",
    },
    {
      id: 3,
      nome: "Rock",
      especie: "Gato",
      idade: "3",
      porte: "médio",
      condicao: "Doença do carrapato",
      descricao: "Esperto, brincalhão e serelepe",
      foto: "foto-cachorro2.jpg",
      ong: "SOS Animais",
      ongId: "1",
    },
    {
      id: 4,
      nome: "Lua",
      especie: "Gato",
      idade: "3",
      porte: "médio",
      condicao: "Doença do carrapato",
      descricao: "Esperto, brincalhão e serelepe",
      foto: "foto-gato2.jpg",
      ong: "ONG Animal",
      ongId: "2",
    },
    {
      id: 5,
      nome: "Suflê",
      especie: "Gato",
      idade: "3",
      porte: "médio",
      condicao: "Doença do carrapato",
      descricao: "Esperto, brincalhão e serelepe",
      foto: "foto-gato3.jpg",
      ong: "SOS Animais",
      ongId: "1",
    },
    {
      id: 6,
      nome: "Sashimi",
      especie: "Gato",
      idade: "3",
      porte: "médio",
      condicao: "Doença do carrapato",
      descricao: "Esperto, brincalhão e serelepe",
      foto: "foto-gato4.jpg",
      ong: "ONG Animal",
      ongId: "2",
    },
    {
      id: 7,
      nome: "Fred",
      especie: "Cachorro",
      idade: "3",
      porte: "médio",
      condicao: "Doença do carrapato",
      descricao: "Esperto, brincalhão e serelepe",
      foto: "foto-cachorro3.jpg",
      ong: "ONG Animal",
      ongId: "2",
    },
    {
      id: 8,
      nome: "Billy",
      especie: "Cachorro",
      idade: "3",
      porte: "médio",
      condicao: "Doença do carrapato",
      descricao: "Esperto, brincalhão e serelepe",
      foto: "foto-cachorro4.jpg",
      ong: "ONG Animalar",
      ongId: "2",
    },
  ],
};

var basePets = {};

function initEncontreSeuPet() {
  var petsCadastrados = localStorage.getItem("basePets");
  if (!petsCadastrados) {
    basePets = seed;
    localStorage.setItem("basePets", JSON.stringify(seed));
  } else {
    basePets = JSON.parse(petsCadastrados);
  }
}
