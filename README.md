![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
<img src="https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white">

<div align="center" ><img alt="Logo Uollet" width="1000"  height="200" src="./src/assets/uollet-logo.svg"></div>

<h2>Descrição</h2>
<p>Uollet é um projeto desenvolvido totalmente por mim (e desenhado por <a href="https://www.linkedin.com/search/results/all/?keywords=bianca%20bicalho&origin=RICH_QUERY_SUGGESTION&position=0&searchId=164792c1-ce6b-4509-8a59-f96950795146&sid=mMP">Bianca</a>) em React Native.<br>
Este é meu primeiro projeto pessoal nessa tecnologia, e sua proposta é simular uma plataforma de criptomoedas. O prazo de desenvolvimento é de 2 semanas.</p>

<h2>Objetivos</h2>
<p>Por meio deste projeto pretendo estudar principalmente recorte das telas, rotas e navegação da aplicação, além de chamadas de API para mostrar o valor de algumas criptomoedas. Ainda pretendo criar um gráfico mostrando a variação de determinada criptomoeda em um intervalo de tempo.</p>

<h2>Bônus</h2>
<p>Como bônus gostaria de acrescentar a possibilidade de compra e venda de criptomoedas, além de adicionar uma forma de login (provavelmente apenas login social com a conta da google ou a conta apple).</p>

<h2>Ferramentas</h2>
<p><strong>Pretendo usar as seguintes ferramentas:</strog></p>
<ul>
  <li>Styled-Components: para a estilização dos componentes</li>
  <li>React Navigation: para criar a nevegação entre as telas</li>
  <li>Axios: para a realização de chamadas de API</li>
  <li>React Native Gesture Handler: para criar botões com efeitos nativos no app</li>
  <li>React Responsive Font Size: para criar layouts responsivos</li>
  <li>React Native Svg: para usar svgs em aplicações react native</li>
  <li>Victory: para plotar gráficos</li>
  <li>Redux: para compartilhamento de estado na aplicação</li>
  <li>Entre outras bibliotecas</li>
</ul>

<h2>API</h2>
<p>Para pegar as informações sobre criptomoedas usei a API <strong>CoinGecko</strong>.<br>
Os end-points usados são:</p>
<ul>
  <li><strong>GET/coins/list</strong>: para ver o nome e o id de todas as criptos disponíveis na API</li>
  <li><strong>GET/coins/markets</strong>: para retornar informações sobre as criptomoedas</li>
  <li><strong>GET/coins/{id}/market_chart</strong>: para pegar informações sobre uma única cripto para plotar seu gráfico</li>
</ul>
