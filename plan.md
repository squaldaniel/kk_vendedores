# Plano de implementação

## Objetivo
Landing page pública, estática e responsiva para o Programa de Vendedores da Mentoria, em português, com foco em conversão transparente para o grupo de dúvidas e seleção.

## Arquitetura
- Vue 3 + Vite para uma SPA de rota única.
- Tailwind CSS + DaisyUI para utilitários, estados e componentes leves.
- Font Awesome via CDN para ícones profissionais.
- Conteúdo público no HTML inicial do app; sem backend, login, banco ou dados pessoais.
- Build estático em `dist` para publicação; ativos locais versionados e com nomes estáveis.

## Estrutura
- `src/App.vue`: composição das seções e dados de conteúdo.
- `src/main.js`: bootstrap do Vue.
- `src/style.css`: tema premium, tokens, microinterações e responsividade.
- `public/images/*`: imagens de banco selecionadas para hero e treinamento.
- `public/manus-routes.json`: manifesto da única rota pública.
- `public/favicon.svg` e `app.config.ts`: identidade da marca.

## Direção visual
Azul-marinho profundo como base de confiança, azul vibrante como sinal de energia e dourado como acento de comissão/progresso. Layout editorial com hero em duas colunas, cards brancos com bordas finas, textura de grade e círculos de luz, títulos compactos e CTAs dourados. Fotografia de treinamento e trabalho real, escolhida em resultados posteriores da busca, sem usar a primeira opção óbvia.

## Transparência
A página mostra R$ 100 por venda validada e bônus a cada 5 vendas, sempre com linguagem de potencial e desempenho. Inclui aviso claro de ausência de garantia, validação das vendas e apresentação das condições no grupo. Não inclui depoimentos, contadores, faturamento ou números não fornecidos.

## Entrega e verificação
A aplicação será servida como frontend estático. O check principal é `npm run build`, mais verificação HTTP do servidor de desenvolvimento e leitura de `/manus-routes.json`. SEO básico será incluído com título, descrição, Open Graph relativo e conteúdo semântico.
