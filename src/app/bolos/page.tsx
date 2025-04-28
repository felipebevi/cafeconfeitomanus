'use client'
import Link from 'next/link'
import Layout from '@/components/layout'

// Dados temporários dos bolos (serão substituídos por dados reais posteriormente)
const bolos = [
  {
    id: 1,
    nome: 'Bolo de Chocolate',
    descricao: 'Massa de chocolate com recheio de brigadeiro e cobertura de ganache',
    preco: 'A partir de R$ 89,90',
    imagem: '/placeholder-bolo.jpg'
  },
  {
    id: 2,
    nome: 'Bolo Red Velvet',
    descricao: 'Massa red velvet com recheio de cream cheese e cobertura de buttercream',
    preco: 'A partir de R$ 99,90',
    imagem: '/placeholder-bolo.jpg'
  },
  {
    id: 3,
    nome: 'Bolo de Frutas Vermelhas',
    descricao: 'Massa branca com recheio de frutas vermelhas e cobertura de chantilly',
    preco: 'A partir de R$ 94,90',
    imagem: '/placeholder-bolo.jpg'
  },
  {
    id: 4,
    nome: 'Bolo de Coco',
    descricao: 'Massa branca com recheio de coco e cobertura de marshmallow',
    preco: 'A partir de R$ 89,90',
    imagem: '/placeholder-bolo.jpg'
  },
  {
    id: 5,
    nome: 'Bolo de Nozes',
    descricao: 'Massa de nozes com recheio de doce de leite e cobertura de ganache',
    preco: 'A partir de R$ 109,90',
    imagem: '/placeholder-bolo.jpg'
  },
  {
    id: 6,
    nome: 'Bolo de Limão',
    descricao: 'Massa branca com recheio de mousse de limão e cobertura de merengue',
    preco: 'A partir de R$ 94,90',
    imagem: '/placeholder-bolo.jpg'
  }
]

// Componente de Filtro
const Filtro = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h3 className="text-lg font-semibold text-tiffany mb-4">Filtrar Bolos</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">Tipo de Massa</label>
          <select className="w-full p-2 border border-gray-300 rounded-md">
            <option value="">Todos os tipos</option>
            <option value="chocolate">Chocolate</option>
            <option value="baunilha">Baunilha</option>
            <option value="redvelvet">Red Velvet</option>
            <option value="nozes">Nozes</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Recheio</label>
          <select className="w-full p-2 border border-gray-300 rounded-md">
            <option value="">Todos os recheios</option>
            <option value="brigadeiro">Brigadeiro</option>
            <option value="doce-de-leite">Doce de Leite</option>
            <option value="frutas">Frutas Vermelhas</option>
            <option value="creme">Creme</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Preço</label>
          <select className="w-full p-2 border border-gray-300 rounded-md">
            <option value="">Qualquer preço</option>
            <option value="ate-90">Até R$ 90,00</option>
            <option value="90-110">R$ 90,00 a R$ 110,00</option>
            <option value="acima-110">Acima de R$ 110,00</option>
          </select>
        </div>
        <button className="btn-primary w-full">Aplicar Filtros</button>
      </div>
    </div>
  )
}

// Componente de Card de Bolo
const BoloCard = ({ bolo }: { bolo: any }) => {
  return (
    <div className="cafe-product-card">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">Imagem do Bolo</span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-tiffany">{bolo.nome}</h3>
        <p className="text-gray-600 mt-2 h-20">{bolo.descricao}</p>
        <p className="text-happyred font-medium mt-2">{bolo.preco}</p>
        <div className="mt-4 flex space-x-2">
          <Link href={`/bolos/${bolo.id}`} className="btn-primary text-sm py-1 px-3">
            Ver Detalhes
          </Link>
          <Link href={`/personalizar?base=${bolo.id}`} className="btn-secondary text-sm py-1 px-3">
            Personalizar
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function Bolos() {
  return (
    <Layout>
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-tiffany mb-4">Nossos Bolos</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubra nossa seleção de bolos festivos preparados com ingredientes selecionados e muito carinho. 
            Você também pode personalizar qualquer um deles de acordo com seu gosto.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4">
            <Filtro />
          </div>
          <div className="md:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bolos.map(bolo => (
                <BoloCard key={bolo.id} bolo={bolo} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
