'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Layout from '@/components/layout'
import Image from 'next/image'
import { tamanhosBolo, opcoesMassa, opcoesRecheio, opcoesCobertura } from '@/lib/dados-produtos'
import { formatarMensagemWhatsApp, enviarPedidoWhatsApp } from '@/lib/whatsapp-utils'

// Componente de Opção
const OpcaoItem = ({ item, selecionado, onClick }: { item: any, selecionado: boolean, onClick: () => void }) => {
  return (
    <div 
      className={`border rounded-lg p-4 cursor-pointer transition-all ${selecionado ? 'border-tiffany bg-tiffany bg-opacity-10' : 'border-gray-200 hover:border-tiffany'}`}
      onClick={onClick}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className={`font-medium ${selecionado ? 'text-tiffany' : 'text-gray-800'}`}>
            {item.nome}
            {item.destaque && (
              <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-happyred text-white">
                Novo
              </span>
            )}
          </h3>
          <p className="text-sm text-gray-600 mt-1">{item.descricao}</p>
        </div>
        <div className="text-happyred font-medium">
          {item.preco > 0 ? `+ R$ ${item.preco.toFixed(2)}` : 'Incluso'}
        </div>
      </div>
      {selecionado && (
        <div className="mt-2 flex justify-end">
          <div className="bg-tiffany text-white rounded-full p-1 w-6 h-6 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
      )}
    </div>
  )
}

export default function Personalizar() {
  const router = useRouter()
  const [etapaAtual, setEtapaAtual] = useState(1)
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState<string | null>(null)
  const [massaSelecionada, setMassaSelecionada] = useState<number | null>(null)
  const [recheioSelecionado, setRecheioSelecionado] = useState<number | null>(null)
  const [recheioSecundarioSelecionado, setRecheioSecundarioSelecionado] = useState<number | null>(null)
  const [coberturaSelecionada, setCoberturaSelecionada] = useState<number | null>(null)
  const [observacoes, setObservacoes] = useState('')
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [dataEntrega, setDataEntrega] = useState('')
  const [precoTotal, setPrecoTotal] = useState(0)
  const [enviandoPedido, setEnviandoPedido] = useState(false)
  const [pedidoEnviado, setPedidoEnviado] = useState(false)
  
  // Calcular preço total
  useEffect(() => {
    let total = 0
    
    // Preço base pelo tamanho
    if (tamanhoSelecionado) {
      const tamanho = tamanhosBolo.find(t => t.id === tamanhoSelecionado)
      if (tamanho) total += tamanho.preco
    }
    
    // Adicionar preço da massa
    if (massaSelecionada !== null) {
      const massa = opcoesMassa.find(m => m.id === massaSelecionada)
      if (massa) total += massa.preco
    }
    
    // Adicionar preço do recheio principal
    if (recheioSelecionado !== null) {
      const recheio = opcoesRecheio.find(r => r.id === recheioSelecionado)
      if (recheio) total += recheio.preco
    }
    
    // Adicionar preço do recheio secundário (se selecionado)
    if (recheioSecundarioSelecionado !== null) {
      const recheioSec = opcoesRecheio.find(r => r.id === recheioSecundarioSelecionado)
      if (recheioSec) total += recheioSec.preco
    }
    
    // Adicionar preço da cobertura
    if (coberturaSelecionada !== null) {
      const cobertura = opcoesCobertura.find(c => c.id === coberturaSelecionada)
      if (cobertura) total += cobertura.preco
    }
    
    setPrecoTotal(total)
  }, [tamanhoSelecionado, massaSelecionada, recheioSelecionado, recheioSecundarioSelecionado, coberturaSelecionada])
  
  // Verificar se pode avançar para a próxima etapa
  const podeAvancar = () => {
    if (etapaAtual === 1) return tamanhoSelecionado !== null
    if (etapaAtual === 2) return massaSelecionada !== null
    if (etapaAtual === 3) return recheioSelecionado !== null
    if (etapaAtual === 4) return coberturaSelecionada !== null
    if (etapaAtual === 5) return nome !== '' && telefone !== '' && dataEntrega !== ''
    return true
  }
  
  // Avançar para a próxima etapa
  const avancarEtapa = () => {
    if (etapaAtual < 5 && podeAvancar()) {
      setEtapaAtual(etapaAtual + 1)
      window.scrollTo(0, 0)
    }
  }
  
  // Voltar para a etapa anterior
  const voltarEtapa = () => {
    if (etapaAtual > 1) {
      setEtapaAtual(etapaAtual - 1)
      window.scrollTo(0, 0)
    }
  }
  
  // Finalizar pedido
  const finalizarPedido = () => {
    if (podeAvancar()) {
      setEnviandoPedido(true)
      
      const tamanho = tamanhosBolo.find(t => t.id === tamanhoSelecionado)
      const massa = opcoesMassa.find(m => m.id === massaSelecionada)
      const recheio = opcoesRecheio.find(r => r.id === recheioSelecionado)
      const recheioSec = recheioSecundarioSelecionado !== null ? 
        opcoesRecheio.find(r => r.id === recheioSecundarioSelecionado) : null
      const cobertura = opcoesCobertura.find(c => c.id === coberturaSelecionada)
      
      const dadosPedido = {
        nome,
        telefone,
        dataEntrega,
        tamanho,
        massa,
        recheio,
        recheioSecundario: recheioSec,
        cobertura,
        observacoes,
        precoTotal
      }
      
      const mensagemFormatada = formatarMensagemWhatsApp('bolo', dadosPedido)
      
      // Simular um pequeno atraso para mostrar o estado de envio
      setTimeout(() => {
        enviarPedidoWhatsApp(mensagemFormatada)
        setEnviandoPedido(false)
        setPedidoEnviado(true)
        
        // Redirecionar para a página inicial após alguns segundos
        setTimeout(() => {
          router.push('/')
        }, 3000)
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
              Seu pedido foi enviado para o WhatsApp do Café Confeito. 
              Em breve entraremos em contato para confirmar os detalhes.
            </p>
            <p className="text-sm text-gray-500">Redirecionando para a página inicial...</p>
          </div>
        </div>
      </Layout>
    )
  }
  
  return (
    <Layout>
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-tiffany mb-4">Personalize seu Bolo</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Crie o bolo perfeito para sua celebração escolhendo cada detalhe. 
            Ao finalizar, seu pedido será enviado diretamente para nosso WhatsApp.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-12">
        {/* Etapas de personalização */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center w-full max-w-4xl">
            <div className={`flex-1 text-center ${etapaAtual >= 1 ? 'text-tiffany' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center ${etapaAtual >= 1 ? 'bg-tiffany text-white' : 'bg-gray-200'}`}>
                1
              </div>
              <p className="mt-2 text-sm">Tamanho</p>
            </div>
            <div className={`flex-1 border-t-2 ${etapaAtual >= 2 ? 'border-tiffany' : 'border-gray-200'}`}></div>
            <div className={`flex-1 text-center ${etapaAtual >= 2 ? 'text-tiffany' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center ${etapaAtual >= 2 ? 'bg-tiffany text-white' : 'bg-gray-200'}`}>
                2
              </div>
              <p className="mt-2 text-sm">Massa</p>
            </div>
            <div className={`flex-1 border-t-2 ${etapaAtual >= 3 ? 'border-tiffany' : 'border-gray-200'}`}></div>
            <div className={`flex-1 text-center ${etapaAtual >= 3 ? 'text-tiffany' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center ${etapaAtual >= 3 ? 'bg-tiffany text-white' : 'bg-gray-200'}`}>
                3
              </div>
              <p className="mt-2 text-sm">Recheio</p>
            </div>
            <div className={`flex-1 border-t-2 ${etapaAtual >= 4 ? 'border-tiffany' : 'border-gray-200'}`}></div>
            <div className={`flex-1 text-center ${etapaAtual >= 4 ? 'text-tiffany' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center ${etapaAtual >= 4 ? 'bg-tiffany text-white' : 'bg-gray-200'}`}>
                4
              </div>
              <p className="mt-2 text-sm">Cobertura</p>
            </div>
            <div className={`flex-1 border-t-2 ${etapaAtual >= 5 ? 'border-tiffany' : 'border-gray-200'}`}></div>
            <div className={`flex-1 text-center ${etapaAtual >= 5 ? 'text-tiffany' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center ${etapaAtual >= 5 ? 'bg-tiffany text-white' : 'bg-gray-200'}`}>
                5
              </div>
              <p className="mt-2 text-sm">Finalizar</p>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Etapa 1: Escolha do Tamanho */}
          {etapaAtual === 1 && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Escolha o Tamanho do Bolo</h2>
              
              <div className="mb-8">
                <Image 
                  src="/tamanhos-bolos.png" 
                  alt="Tamanhos de Bolos" 
                  width={800} 
                  height={400} 
                  className="mx-auto rounded-lg shadow-md"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {tamanhosBolo.map(tamanho => (
                  <div 
                    key={tamanho.id} 
                    className={`border rounded-lg p-4 cursor-pointer transition-all ${tamanhoSelecionado === tamanho.id ? 'border-tiffany bg-tiffany bg-opacity-10' : 'border-gray-200 hover:border-tiffany'}`}
                    onClick={() => setTamanhoSelecionado(tamanho.id)}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className={`text-xl font-medium ${tamanhoSelecionado === tamanho.id ? 'text-tiffany' : 'text-gray-800'}`}>
                          {tamanho.nome}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">{tamanho.peso} - {tamanho.pessoas}</p>
                        <p className="text-sm text-gray-600">{tamanho.diametro} de diâmetro</p>
                      </div>
                      <div className="text-happyred font-medium">
                        R$ {tamanho.preco.toFixed(2)}
                      </div>
                    </div>
                    {tamanhoSelecionado === tamanho.id && (
                      <div className="mt-2 flex justify-end">
                        <div className="bg-tiffany text-white rounded-full p-1 w-6 h-6 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Etapa 2: Escolha da Massa */}
          {etapaAtual === 2 && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Escolha a Massa</h2>
              <p className="text-gray-600 mb-6">Todos nossos bolos possuem 3 camadas de massa (escolha 1 sabor)</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {opcoesMassa.map(massa => (
                  <OpcaoItem 
                    key={massa.id} 
                    item={massa} 
                    selecionado={massaSelecionada === massa.id}
                    onClick={() => setMassaSelecionada(massa.id)}
                  />
                ))}
              </div>
            </div>
          )}
          
          {/* Etapa 3: Escolha do Recheio */}
          {etapaAtual === 3 && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Escolha o Recheio</h2>
              <p className="text-gray-600 mb-6">Todos nossos bolos possuem 2 camadas de recheio (escolha até 2 sabores)</p>
              
              <div className="mb-8">
                <h3 className="text-lg font-medium text-tiffany mb-3">Recheio Principal</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {opcoesRecheio.map(recheio => (
                    <OpcaoItem 
                      key={recheio.id} 
                      item={recheio} 
                      selecionado={recheioSelecionado === recheio.id}
                      onClick={() => setRecheioSelecionado(recheio.id)}
                    />
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-tiffany mb-3">Recheio Secundário (Opcional)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {opcoesRecheio.map(recheio => (
                    <OpcaoItem 
                      key={recheio.id} 
                      item={recheio} 
                      selecionado={recheioSecundarioSelecionado === recheio.id}
                      onClick={() => {
                        if (recheioSecundarioSelecionado === recheio.id) {
                          setRecheioSecundarioSelecionado(null)
                        } else {
                          setRecheioSecundarioSelecionado(recheio.id)
                        }
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {/* Etapa 4: Escolha da Cobertura */}
          {etapaAtual === 4 && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Escolha a Cobertura</h2>
              
              <div className="mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Image 
                      src="/bolos-vintages.png" 
                      alt="Exemplos de Bolos Vintage" 
                      width={400} 
                      height={300} 
                      className="rounded-lg shadow-md mb-4"
                    />
                    <p className="text-center text-gray-600">Exemplos de Bolos Vintage</p>
                  </div>
                  <div>
                    <Image 
                      src="/bolos-festivos.png" 
                      alt="Exemplos de Bolos Festivos" 
                      width={400} 
                      height={300} 
                      className="rounded-lg shadow-md mb-4"
                    />
                    <p className="text-center text-gray-600">Exemplos de Bolos Festivos</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {opcoesCobertura.map(cobertura => (
                  <OpcaoItem 
                    key={cobertura.id} 
                    item={cobertura} 
                    selecionado={coberturaSelecionada === cobertura.id}
                    onClick={() => setCoberturaSelecionada(cobertura.id)}
                  />
                ))}
              </div>
              
              <div className="mt-8">
                <label className="block text-gray-700 mb-2">Observações Adicionais</label>
                <textarea 
                  className="w-full p-3 border border-gray-300 rounded-md"
                  rows={3}
                  placeholder="Informe detalhes adicionais, como decoração especial, mensagem no bolo, etc."
                  value={observacoes}
                  onChange={(e) => setObservacoes(e.target.value)}
                ></textarea>
              </div>
            </div>
          )}
          
          {/* Etapa 5: Finalização */}
          {etapaAtual === 5 && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Finalize seu Pedido</h2>
              
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-lg font-semibold text-tiffany mb-4">Dados para Entrega</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Nome Completo</label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-gray-300 rounded-md"
                      placeholder="Seu nome completo"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2">Telefone (WhatsApp)</label>
                    <input 
                      type="tel" 
                      className="w-full p-3 border border-gray-300 rounded-md"
                      placeholder="(11) 99999-9999"
                      value={telefone}
                      onChange={(e) => setTelefone(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2">Data de Entrega</label>
                    <input 
                      type="date" 
                      className="w-full p-3 border border-gray-300 rounded-md"
                      value={dataEntrega}
                      onChange={(e) => setDataEntrega(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-tiffany mb-4">Resumo do Pedido</h3>
                
                <div className="space-y-4">
                  {/* Detalhes do Bolo */}
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">Tamanho:</span>
                      <span className="font-medium">
                        {tamanhosBolo.find(t => t.id === tamanhoSelecionado)?.nome} 
                        ({tamanhosBolo.find(t => t.id === tamanhoSelecionado)?.pessoas})
                      </span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">Massa:</span>
                      <span className="font-medium">{opcoesMassa.find(m => m.id === massaSelecionada)?.nome}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">Recheio Principal:</span>
                      <span className="font-medium">{opcoesRecheio.find(r => r.id === recheioSelecionado)?.nome}</span>
                    </div>
                    {recheioSecundarioSelecionado !== null && (
                      <div className="flex justify-between py-2">
                        <span className="text-gray-600">Recheio Secundário:</span>
                        <span className="font-medium">{opcoesRecheio.find(r => r.id === recheioSecundarioSelecionado)?.nome}</span>
                      </div>
                    )}
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">Cobertura:</span>
                      <span className="font-medium">{opcoesCobertura.find(c => c.id === coberturaSelecionada)?.nome}</span>
                    </div>
                    
                    {observacoes && (
                      <div className="py-2">
                        <span className="text-gray-600">Observações:</span>
                        <p className="mt-1 text-gray-800">{observacoes}</p>
                      </div>
                    )}
                  </div>
                  
                  {/* Preço Total */}
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">Valor Total:</span>
                      <span className="text-xl font-bold text-happyred">R$ {precoTotal.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Botões de Navegação */}
          <div className="mt-8 flex justify-between">
            {etapaAtual > 1 ? (
              <button 
                className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                onClick={voltarEtapa}
                disabled={enviandoPedido}
              >
                Voltar
              </button>
            ) : (
              <div></div>
            )}
            
            {etapaAtual < 5 ? (
              <button 
                className={`px-6 py-2 rounded-md ${podeAvancar() ? 'bg-tiffany text-white hover:bg-opacity-90' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                onClick={avancarEtapa}
                disabled={!podeAvancar() || enviandoPedido}
              >
                Continuar
              </button>
            ) : (
              <button 
                className={`px-6 py-3 rounded-md flex items-center ${podeAvancar() ? 'bg-happyred text-white hover:bg-opacity-90' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                onClick={finalizarPedido}
                disabled={!podeAvancar() || enviandoPedido}
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
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Enviar Pedido via WhatsApp
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}
