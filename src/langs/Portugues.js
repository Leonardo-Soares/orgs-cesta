import logo from '../../assets/logo.png';
import imagemProduto from '../../assets/topo.png';

// Itens
import tomate from '../../assets/frutas/Tomate.png';
import brocolis from '../../assets/frutas/Brócolis.png';
import batata from '../../assets/frutas/Batata.png';
import pepino from '../../assets/frutas/Pepino.png';
import abobora from '../../assets/frutas/Abóbora.png';

const cesta = {
  topo: {
    imageCesta: imagemProduto,
    titulo: "Detalhes da cesta",
  },
  detalhes: {
    nomeCesta: "Cesta de verduras",
    logoFazenda: logo,
    nomeFazenda: "Jenny Jack Farm",
    descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha.",
    preco: "R$: 40,00",
    botaoComprar: "Comprar",
  },
  itens: {
    titulo: "Itens da cesta",
    lista: [
      {
        id: 1,
        nome: "Tomate",
        imagem: tomate,
      },
      {
        id: 2,
        nome: "Brócolis",
        imagem: brocolis,
      },
      {
        id: 3,
        nome: "Batata",
        imagem: batata,
      },
      {
        id: 4,
        nome: "Pepino",
        imagem: pepino,
      },
      {
        id: 5,
        nome: "Abóbora",
        imagem: abobora,
      }
    ]
  }
}

export default cesta;