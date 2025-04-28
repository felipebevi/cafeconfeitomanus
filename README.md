# Café Confeito - Website de Bolos Festivos Personalizados

Este repositório contém o código-fonte do website da confeitaria Café Confeito, desenvolvido com Next.js e Tailwind CSS.

## Visão Geral

O website Café Confeito permite que os clientes personalizem bolos festivos escolhendo massa, recheio e cobertura, além de poderem selecionar docinhos para complementar seus pedidos. Todos os pedidos são enviados diretamente para o WhatsApp da confeitaria.

## Tecnologias Utilizadas

- **Next.js 15.1.4**: Framework React para renderização do lado do servidor
- **Tailwind CSS**: Framework CSS para design responsivo
- **TypeScript**: Superset JavaScript com tipagem estática

## Funcionalidades Principais

1. **Sistema de Personalização de Bolos**
   - Seleção de tamanhos (PP, P, M, G, GG, XG)
   - Escolha de massas (Baunilha, Cacau Black, Coco, etc.)
   - Seleção de recheios (Brigadeiro, Beijinho, Frutas Vermelhas, etc.)
   - Opções de cobertura (Buttercream, Ganache, etc.)
   - Cálculo automático de preço com base nas escolhas

2. **Catálogo de Docinhos**
   - Visualização de todos os docinhos disponíveis
   - Sistema de carrinho para seleção de múltiplos itens
   - Filtros para facilitar a busca

3. **Integração com WhatsApp**
   - Envio de pedidos formatados diretamente para o WhatsApp
   - Mensagens personalizadas com todos os detalhes do pedido
   - Confirmação visual após o envio do pedido

## Estrutura do Projeto

- `/src/app`: Páginas da aplicação Next.js
- `/src/components`: Componentes React reutilizáveis
- `/src/lib`: Utilitários e funções auxiliares
- `/public`: Arquivos estáticos (imagens, ícones, etc.)

## Como Executar Localmente

1. Clone este repositório
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Acesse `http://localhost:3000` no seu navegador

## Implantação

O website está atualmente implantado em: https://oqbcixvl.manus.space

## Identidade Visual

O design segue as diretrizes do Brand Book do Café Confeito, utilizando as cores principais:
- **Tiffany**: RGB(22, 222, 208) / #16DED0
- **Happy Red**: RGB(255, 51, 109) / #FF336D

## Licença

Este projeto é proprietário e seu uso é restrito ao Café Confeito.
