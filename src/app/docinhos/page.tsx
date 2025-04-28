'use client'
import { useState } from 'react'
import Layout from '@/components/layout'
import Link from 'next/link'
import Image from 'next/image'
import { docinhos } from '@/lib/dados-produtos'
import { formatarMensagemWhatsApp, enviarPedidoWhatsApp } from '@/lib/whatsapp-utils'

// Componente de Filtro
const Filtro = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h3 className="text-lg font-semibold text-tiffany mb-4">Filtrar Docinhos</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">Tipo</label>
          <select className="w-full p-2 border border-gray-300 rounded-md">
            <option value="">Todos os tipos</option>
            <option value="tradicional">Tradicional</option>
            <option value="gourmet">Gourmet</option>
            <option value="festa">Festa</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Preço</label>
          <select className="w-full p-2 border border-gray-300 rounded-md">
            <option value="">Qualquer preço</option>
            <option value="ate-4">Até R$ 4,00</option>
            <option value="4-5">R$ 4,00 a R$ 5,00</option>
            <option value="acima-5">Acima de R$ 5,00</option>
          </select>
        </div>
        <button className="btn-primary w-full">Aplicar Filtros</button>
      </div>
    </div>
  )
}

// Componente de Card de Docinho
const DocinhoCard = ({ docinho, onAdd }: { docinho: any, onAdd: () => void }) => {
  return (
    <div className="cafe-product-card">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">Imagem do Docinho</span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-tiffany">{docinho.nome}</h3>
        <p className="text-gray-600 mt-2 h-16">{docinho.descricao}</p>
        <p className="text-happyred font-medium mt-2">R$ {docinho.preco.toFixed(2)} (unidade)</p>
        <div className="mt-4 flex space-x-2">
          <button 
            className="btn-secondary text-sm py-1 px-3 w-full"
            onClick={onAdd}
          >
            Adicionar ao Pedido
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Docinhos() {
  const [carrinho, setCarrinho] = useState<{id: number, nome: string, quantidade: number, preco: number}[]>([])
  const [mostrarCarrinho, setMostrarCarrinho] = useState(false)
  const [enviandoPedido, setEnviandoPedido] = useState(false)
  const [pedidoEnviado, setPedidoEnviado] = useState(false)
  
  // Adicionar docinho ao carrinho
  const adicionarAoCarrinho = (docinho: any) => {
    const itemExistente = carrinho.find(item => item.id === docinho.id)
    
    if (itemExistente) {
      setCarrinho(carrinho.map(item => 
        item.id === docinho.id 
          ? { ...item, quantidade: item.quantidade + 1 } 
          : item
      ))
    } else {
      setCarrinho([...carrinho, { 
        id: docinho.id, 
        nome: docinho.nome, 
        quantidade: 1, 
        preco: docinho.preco 
      }])
    }
    
    // Mostrar o carrinho após adicionar
    setMostrarCarrinho(true)
  }
  
  // Remover docinho do carrinho
  const removerDoCarrinho = (id: number) => {
    const itemExistente = carrinho.find(item => item.id === id)
    
    if (itemExistente && itemExistente.quantidade > 1) {
      setCarrinho(carrinho.map(item => 
        item.id === id 
          ? { ...item, quantidade: item.quantidade - 1 } 
          : item
      ))
    } else {
      setCarrinho(carrinho.filter(item => item.id !== id))
    }
  }
  
  // Calcular total do carrinho
  const calcularTotal = () => {
    return carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0)
  }
  
  // Finalizar pedido
  const finalizarPedido = () => {
    if (carrinho.length > 0) {
      setEnviandoPedido(true)
      
      const dadosPedido = {
        itens: carrinho,
        total: calcularTotal()
      }
      
      const mensagemFormatada = formatarMensagemWhatsApp('docinhos', dadosPedido)
      
      // Simular um pequeno atraso para mostrar o estado de envio
      setTimeout(() => {
        enviarPedidoWhatsApp(mensagemFormatada)
        setEnviandoPedido(false)
        setPedidoEnviado(true)
      }, 1500)
    }
  }
  
  // Renderizar conteúdo com base no estado de envio do pedido
  if (pedidoEnviado) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center p-8 max-w-md">
            <div className="w-20 h-20 bg-tiffany rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Pedido Enviado com Sucesso!</h2>
            <p className="text-gray-600 mb-6">
              Seu pedido de docinhos foi enviado para o WhatsApp do Café Confeito. 
              Em breve entraremos em contato para confirmar os detalhes.
            </p>
            <Link href="/" className="btn-primary">
              Voltar para a Página Inicial
            </Link>
          </div>
        </div>
      </Layout>
    )
  }
  
  return (
    <Layout>
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-tiffany mb-4">Nossos Docinhos</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubra nossa seleção de docinhos preparados artesanalmente para complementar sua festa.
            Perfeitos para acompanhar seu bolo personalizado ou para servir em eventos especiais.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4">
            <Filtro />
            
            {/* Carrinho de Compras */}
            {mostrarCarrinho && (
              <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
                <h3 className="text-lg font-semibold text-tiffany mb-4">Seu Pedido</h3>
                
                {carrinho.length === 0 ? (
                  <p className="text-gray-500">Seu carrinho está vazio</p>
                ) : (
                  <div>
                    <div className="space-y-3 mb-4">
                      {carrinho.map(item => (
                        <div key={item.id} className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">{item.nome}</p>
                            <p className="text-sm text-gray-600">R$ {item.preco.toFixed(2)} x {item.quantidade}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button 
                              className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center"
                              onClick={() => removerDoCarrinho(item.id)}
                              disabled={enviandoPedido}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                              </svg>
                            </button>
                            <span>{item.quantidade}</span>
                            <button 
                              className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center"
                              onClick={() => adicionarAoCarrinho(docinhos.find(d => d.id === item.id))}
                              disabled={enviandoPedido}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="border-t border-gray-200 pt-3 mb-4">
                      <div className="flex justify-between font-medium">
                        <span>Total:</span>
                        <span className="text-happyred">R$ {calcularTotal().toFixed(2)}</span>
                      </div>
                    </div>
                    
                    <button 
                      className="btn-happyred w-full py-2 flex items-center justify-center"
                      onClick={finalizarPedido}
                      disabled={enviandoPedido}
                    >
                      {enviandoPedido ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processando...
                        </>
                      ) : (
                        <>
                          Finalizar Pedido
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
          
          <div className="md:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">Docinhos Disponíveis</h2>
              
              {!mostrarCarrinho && carrinho.length > 0 && (
                <button 
                  className="flex items-center space-x-2 bg-tiffany text-white px-4 py-2 rounded-md"
                  onClick={() => setMostrarCarrinho(true)}
                  disabled={enviandoPedido}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span>{carrinho.reduce((total, item) => total + item.quantidade, 0)} itens</span>
                </button>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {docinhos.map(docinho => (
                <DocinhoCard 
                  key={docinho.id} 
                  docinho={docinho} 
                  onAdd={() => adicionarAoCarrinho(docinho)}
                />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link href="/personalizar" className="btn-primary">
                Personalizar um Bolo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
