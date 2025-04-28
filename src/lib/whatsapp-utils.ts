// Utilitário para formatação de mensagens WhatsApp
export const formatarMensagemWhatsApp = (tipo: 'bolo' | 'docinhos', dados: any) => {
  if (tipo === 'bolo') {
    const { 
      nome, 
      telefone, 
      dataEntrega, 
      tamanho, 
      massa, 
      recheio, 
      recheioSecundario, 
      cobertura, 
      observacoes, 
      precoTotal 
    } = dados;
    
    let mensagem = "🎂 *PEDIDO DE BOLO PERSONALIZADO* 🎂\n\n";
    mensagem += `*Nome:* ${nome}\n`;
    mensagem += `*Telefone:* ${telefone}\n`;
    mensagem += `*Data de Entrega:* ${dataEntrega}\n\n`;
    mensagem += `*Detalhes do Bolo:*\n`;
    mensagem += `- *Tamanho:* ${tamanho.nome} (${tamanho.peso} - serve ${tamanho.pessoas})\n`;
    mensagem += `- *Massa:* ${massa.nome}\n`;
    mensagem += `- *Recheio Principal:* ${recheio.nome}\n`;
    
    if (recheioSecundario) {
      mensagem += `- *Recheio Secundário:* ${recheioSecundario.nome}\n`;
    }
    
    mensagem += `- *Cobertura:* ${cobertura.nome}\n`;
    
    if (observacoes) {
      mensagem += `\n*Observações:* ${observacoes}\n`;
    }
    
    mensagem += `\n*Valor Total:* R$ ${precoTotal.toFixed(2)}`;
    
    return encodeURIComponent(mensagem);
  } else {
    const { itens, total } = dados;
    
    let mensagem = "🍬 *PEDIDO DE DOCINHOS* 🍬\n\n";
    mensagem += "*Itens do Pedido:*\n";
    
    itens.forEach((item: any) => {
      mensagem += `- ${item.nome} x${item.quantidade} = R$ ${(item.preco * item.quantidade).toFixed(2)}\n`;
    });
    
    mensagem += `\n*Valor Total:* R$ ${total.toFixed(2)}`;
    
    return encodeURIComponent(mensagem);
  }
};

// Configuração do WhatsApp
export const whatsappConfig = {
  numeroTelefone: '5511999999999', // Substitua pelo número real
  mensagemPadrao: 'Olá! Gostaria de fazer um pedido.'
};

// Função para enviar mensagem via WhatsApp
export const enviarPedidoWhatsApp = (mensagemFormatada: string) => {
  const url = `https://wa.me/${whatsappConfig.numeroTelefone}?text=${mensagemFormatada}`;
  window.open(url, '_blank');
};
