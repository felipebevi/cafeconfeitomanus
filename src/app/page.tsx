'use client'
import { useState } from 'react'
import Link from 'next/link'

// Componentes de navegação
const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-tiffany">Café Confeito</Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-tiffany transition-colors">Início</Link>
          <Link href="/bolos" className="text-gray-700 hover:text-tiffany transition-colors">Bolos</Link>
          <Link href="/docinhos" className="text-gray-700 hover:text-tiffany transition-colors">Docinhos</Link>
          <Link href="/personalizar" className="text-gray-700 hover:text-tiffany transition-colors">Personalizar</Link>
          <Link href="/contato" className="text-gray-700 hover:text-tiffany transition-colors">Contato</Link>
        </div>
        <div className="md:hidden">
          <button className="text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

// Componente de Hero
const Hero = () => {
  return (
    <div className="relative bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex flex-col items-start">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
            Bolos Festivos <span className="text-tiffany">Personalizados</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Crie o bolo perfeito para sua celebração escolhendo massa, recheio e cobertura. Entregamos doçura e alegria para seus momentos especiais.
          </p>
          <div className="flex space-x-4">
            <Link href="/personalizar" className="btn-primary">Personalizar Bolo</Link>
            <Link href="/bolos" className="btn-secondary">Ver Catálogo</Link>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <div className="relative w-full max-w-lg">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-tiffany rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-happyred rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
            <div className="relative">
              <div className="bg-white p-4 rounded-2xl shadow-xl">
                <div className="h-64 bg-gray-200 rounded-xl flex items-center justify-center">
                  <span className="text-gray-500">Imagem de Bolo Festivo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Componente de Recursos
const Features = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="cafe-header text-center">Por que escolher o Café Confeito?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div className="cafe-card">
            <div className="rounded-full bg-tiffany bg-opacity-10 p-3 w-12 h-12 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-tiffany" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="cafe-subheader">Personalização Completa</h3>
            <p className="text-gray-600">Escolha cada detalhe do seu bolo, desde a massa até a decoração final, para criar uma experiência única.</p>
          </div>
          <div className="cafe-card">
            <div className="rounded-full bg-tiffany bg-opacity-10 p-3 w-12 h-12 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-tiffany" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="cafe-subheader">Ingredientes Premium</h3>
            <p className="text-gray-600">Utilizamos apenas ingredientes de alta qualidade para garantir o melhor sabor e frescor em todos os nossos produtos.</p>
          </div>
          <div className="cafe-card">
            <div className="rounded-full bg-tiffany bg-opacity-10 p-3 w-12 h-12 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-tiffany" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="cafe-subheader">Entrega Pontual</h3>
            <p className="text-gray-600">Garantimos que seu pedido chegará no horário combinado, para que sua celebração seja perfeita do início ao fim.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Componente de Produtos Populares
const PopularProducts = () => {
  const products = [
    { id: 1, name: 'Bolo de Chocolate', description: 'Massa de chocolate com recheio de brigadeiro e cobertura de ganache' },
    { id: 2, name: 'Bolo Red Velvet', description: 'Massa red velvet com recheio de cream cheese e cobertura de buttercream' },
    { id: 3, name: 'Bolo de Frutas', description: 'Massa branca com recheio de frutas vermelhas e cobertura de chantilly' },
  ]

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="cafe-header text-center">Nossos Bolos Mais Pedidos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {products.map(product => (
            <div key={product.id} className="cafe-product-card">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Imagem do Bolo</span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-tiffany">{product.name}</h3>
                <p className="text-gray-600 mt-2">{product.description}</p>
                <div className="mt-4">
                  <Link href={`/personalizar?base=${product.id}`} className="text-happyred font-medium hover:underline">
                    Personalizar este bolo →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/bolos" className="btn-primary">Ver Todos os Bolos</Link>
        </div>
      </div>
    </div>
  )
}

// Componente de Depoimentos
const Testimonials = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="cafe-header text-center">O que Nossos Clientes Dizem</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-tiffany">
            <p className="text-gray-600 italic">"O bolo que encomendei para o aniversário da minha filha estava perfeito! Todos os convidados adoraram o sabor e a decoração. Com certeza vou pedir novamente!"</p>
            <div className="mt-4 flex items-center">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div className="ml-3">
                <p className="font-medium text-gray-800">Ana Paula</p>
                <p className="text-sm text-gray-500">São Paulo, SP</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-happyred">
            <p className="text-gray-600 italic">"Encomendei docinhos e um bolo para meu casamento e foi um sucesso absoluto. A personalização foi exatamente como eu queria e o sabor superou todas as expectativas!"</p>
            <div className="mt-4 flex items-center">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div className="ml-3">
                <p className="font-medium text-gray-800">Carlos Eduardo</p>
                <p className="text-sm text-gray-500">Rio de Janeiro, RJ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Componente de CTA
const CallToAction = () => {
  return (
    <div className="py-16 bg-tiffany">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Pronto para criar seu bolo dos sonhos?</h2>
        <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
          Personalize seu bolo agora mesmo e surpreenda seus convidados com uma criação única e deliciosa.
        </p>
        <Link href="/personalizar" className="bg-white text-tiffany px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
          Começar a Personalizar
        </Link>
      </div>
    </div>
  )
}

// Componente de Footer
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Café Confeito</h3>
            <p className="text-gray-300">
              Bolos festivos personalizados para todas as suas celebrações especiais.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Início</Link></li>
              <li><Link href="/bolos" className="text-gray-300 hover:text-white transition-colors">Bolos</Link></li>
              <li><Link href="/docinhos" className="text-gray-300 hover:text-white transition-colors">Docinhos</Link></li>
              <li><Link href="/personalizar" className="text-gray-300 hover:text-white transition-colors">Personalizar</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-300">
              <li>contato@cafeconfeito.com.br</li>
              <li>(11) 99999-9999</li>
              <li>São Paulo, SP</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">WhatsApp</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Café Confeito. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <PopularProducts />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
