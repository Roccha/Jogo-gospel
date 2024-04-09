const words = [
    { word: "Moises", clue: "Maior profeta da Bíblia" },
    { word: "Setenta", clue: "Quantidade dos filhos de Gideão" },
    { word: "sesenta e seis", clue: "Quantos livros tem a Bíblia" },
    { word: "Abraão", clue: "Pai de Isaque" },
    { word: "Sansão", clue: "Homem mais forte da Bíblia" },
    { word: "Setenta", clue: "Período do cativeiro de Israel" },
    { word: "João Batista", clue: "Homem que Batizou Jesus" },
    { word: "Maria Madalena", clue: "Liberta de sete demônios" },
    { word: "Paulo", clue: "Ministro do Evangelho" },
    { word: "Pedro", clue: "Discípulo que andou sob as águas" },
    { word: "Davi", clue: "Derrotou um gigante" },
    { word: "Neemias", clue: "Reedificou os muros de Jeruzalem" },
    { word: "Saul", clue: "Primeiro Rei de Israel" },
    { word: "jonatas", clue: "Primogênito de Saul" },
    { word: "Lucas ", clue: "Escreveu o livro de Atos" },
    { word: "Davi", clue: "Escreveu 73 Salmos " },
    { word: "Sara", clue: "Esposa de Abraão" },
    { word: "Salomão", clue: "Homem mas sábio na Bíblia" },
    { word: "João", clue: "Escreveu o Apocalipse" },
    { word: "Pedro", clue: "Foi crucificado decabeça para baixo" },



  ];
  
  export default function /* The `getWord` function is selecting a random object from the `words` array
  and returning it. Each object in the array contains a `word` property with
  a word and a `clue` property with a corresponding clue. The function
  generates a random index within the range of the array length and returns
  the object at that index. */
  getWord() {
    const index = Math.floor(Math.random() * words.length);
    return words[index];
  }