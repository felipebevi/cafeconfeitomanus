// Dados extraídos do menu do Café Confeito
export const tamanhosBolo = [
  { id: 'PP', nome: 'PP', peso: '1,0kg', pessoas: '5 a 8 pessoas', diametro: '14 cm', preco: 89.90 },
  { id: 'P', nome: 'P', peso: '1,5kg', pessoas: '10 a 15 pessoas', diametro: '16 cm', preco: 129.90 },
  { id: 'M', nome: 'M', peso: '2,0kg', pessoas: '15 a 20 pessoas', diametro: '18 cm', preco: 169.90 },
  { id: 'G', nome: 'G', peso: '3,0kg', pessoas: '20 a 30 pessoas', diametro: '21 cm', preco: 219.90 },
  { id: 'GG', nome: 'GG', peso: '4,0kg', pessoas: '30 a 40 pessoas', diametro: '24 cm', preco: 279.90 },
  { id: 'XG', nome: 'XG', peso: '5,0kg', pessoas: '40 a 50 pessoas', diametro: '26 cm', preco: 349.90 }
];

export const opcoesMassa = [
  { id: 1, nome: 'Baunilha', descricao: 'Massa tradicional de baunilha', preco: 0, destaque: false },
  { id: 2, nome: 'Cacau Black', descricao: 'Massa intensa de chocolate', preco: 10, destaque: true },
  { id: 3, nome: 'Coco', descricao: 'Massa com coco ralado', preco: 5, destaque: true },
  { id: 4, nome: 'Cenoura', descricao: 'Massa úmida de cenoura', preco: 0, destaque: false },
  { id: 5, nome: 'Chocolate', descricao: 'Massa de chocolate tradicional', preco: 5, destaque: false },
  { id: 6, nome: 'Churros', descricao: 'Massa com canela e doce de leite', preco: 10, destaque: false },
  { id: 7, nome: 'Nozes', descricao: 'Massa com pedaços de nozes', preco: 15, destaque: false },
  { id: 8, nome: 'Oreo®', descricao: 'Massa com pedaços de biscoito Oreo', preco: 12, destaque: false }
];

export const opcoesRecheio = [
  { id: 1, nome: 'Beijinho', descricao: 'Creme de coco tradicional', preco: 0, destaque: false },
  { id: 2, nome: 'Brigadeiro', descricao: 'Brigadeiro tradicional cremoso', preco: 0, destaque: false },
  { id: 3, nome: 'Brigadeiro duplo', descricao: 'Brigadeiro tradicional e brigadeiro de leite ninho', preco: 5, destaque: false },
  { id: 4, nome: 'Camafeu de nozes', descricao: 'Creme com nozes picadas', preco: 10, destaque: false },
  { id: 5, nome: 'Crème Brûlée', descricao: 'Brigadeiro de baunilha', preco: 8, destaque: false },
  { id: 6, nome: 'Doce de leite', descricao: 'Doce de leite argentino', preco: 5, destaque: false },
  { id: 7, nome: 'Frutas Vermelhas', descricao: 'Mix de frutas vermelhas', preco: 12, destaque: false },
  { id: 8, nome: 'Leite Ninho®', descricao: 'Creme de leite em pó', preco: 8, destaque: false },
  { id: 9, nome: 'Maracujá', descricao: 'Creme de maracujá', preco: 8, destaque: false },
  { id: 10, nome: 'Cereja', descricao: 'Creme com pedaços de cereja', preco: 15, destaque: true },
  { id: 11, nome: 'Ovomaltine®', descricao: 'Creme com Ovomaltine crocante', preco: 12, destaque: true }
];

export const opcoesCobertura = [
  { id: 1, nome: 'Buttercream', descricao: 'Cobertura de merengue suíço', preco: 0, destaque: false },
  { id: 2, nome: 'Ganache', descricao: 'Cobertura de chocolate meio amargo', preco: 10, destaque: false },
  { id: 3, nome: 'Chantilly', descricao: 'Cobertura leve de chantilly', preco: 5, destaque: false },
  { id: 4, nome: 'Pasta Americana', descricao: 'Cobertura de pasta americana', preco: 15, destaque: false }
];

export const bolosEspeciais = [
  { 
    id: 1, 
    nome: 'Ganache de chocolate com morangos', 
    descricao: 'Massa de chocolate, recheio de brigadeiro meio amargo e morangos, decorado com ganache de chocolate',
    imagem: '/bolos-especiais.png',
    preco: 189.90
  },
  { 
    id: 2, 
    nome: 'Red Velvet', 
    descricao: 'Massa amanteigada de red velvet, recheio de brigadeiro de Leite Ninho® ou brigadeiro de creamcheese, envolto no acetato com fita de cetim',
    imagem: '/bolos-especiais.png',
    preco: 199.90
  },
  { 
    id: 3, 
    nome: 'Pistacchio Cake', 
    descricao: 'Massa de baunilha, com recheio de brigadeiro de pistache, cobertura de buttercream decorado com pistache',
    imagem: '/bolos-especiais.png',
    preco: 219.90
  }
];

export const docinhos = [
  { id: 1, nome: 'Brigadeiro', descricao: 'Tradicional docinho de chocolate com granulado', preco: 3.50 },
  { id: 2, nome: 'Beijinho', descricao: 'Docinho de coco com cravo', preco: 3.50 },
  { id: 3, nome: 'Cajuzinho', descricao: 'Docinho de amendoim com formato de caju', preco: 3.50 },
  { id: 4, nome: 'Brigadeiro Gourmet', descricao: 'Brigadeiro especial com chocolate belga', preco: 4.50 },
  { id: 5, nome: 'Trufa de Chocolate', descricao: 'Trufa de chocolate meio amargo com recheio cremoso', preco: 4.50 },
  { id: 6, nome: 'Bombom de Morango', descricao: 'Morango coberto com chocolate branco ou ao leite', preco: 5.00 },
  { id: 7, nome: 'Bem-casado', descricao: 'Tradicional doce de casamento com recheio de doce de leite', preco: 6.00 }
];
