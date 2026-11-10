# Shisha Store — Proposta de loja online (demonstração)

Protótipo de loja online para a **Shisha Store** (Venda Nova, Amadora), criado como proposta.
Não é a loja oficial: os preços das essências e do carvão são de exemplo e não há pagamentos reais.

## O que inclui
- Página inicial com carrossel, categorias, novidades, packs e loja física (mapa e horário)
- Catálogo de shishas com filtros por marca, estilo e tamanho
- Secção própria de essências com escolha de tamanho
- Carvão, acessórios e packs
- Página de produto, favoritos, pesquisa e carrinho com encomenda por WhatsApp
- Verificação de idade (+18) e versão adaptada a telemóvel

## Ver localmente
```bash
node server.js
```
Abrir http://localhost:5173

## Back office (`admin.html`)
Painel de gestão em `/admin.html` (PIN de demonstração: **1234**).
- **Resumo:** vendas do mês, encomendas novas, gráfico dos últimos 7 dias, mais vendidos e produtos que precisam de atenção
- **Produtos:** criar, editar, duplicar e apagar; preço, foto (carregar ou link), stock, destaque, visibilidade
- **Encomendas:** pedidos feitos no carrinho da loja, com estados (Nova → Confirmada → Pronta → Entregue)
- **Dados da loja:** morada, telefone, WhatsApp, horário, aviso no topo e PIN
- **Cópias de segurança:** descarregar `data.js` com as alterações, cópia de segurança e restaurar
- **Fácil de usar:** ajuda na primeira visita, atalhos no Resumo, preços editáveis com um toque, "Desfazer" ao apagar e lista em cartões no telemóvel

Na demonstração os dados ficam guardados no navegador (localStorage), por isso o PIN não é segurança real.
Para uso real, o próximo passo é ligar o painel a uma base de dados com login (ex.: Supabase ou Firebase).

## Editar o catálogo
Tudo está em `js/data.js`: produtos, preços, fotos e dados da loja (ou pelo back office → Exportar data.js).

## Créditos
- Fotos de produtos: Instagram @shishaamadoraa
- Fotos de ambiente e de alguns produtos: [Unsplash](https://unsplash.com) (licença gratuita)
