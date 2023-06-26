## 3. Explique o conceito de "renderização condicional" no React e forneça um exemplo de uso.

A renderização condicional no React consiste em exibir diferentes elementos ou componentes com base em uma condição específica. Isso permite que o aplicativo renderize diferentes partes da interface do usuário com base no estado.

Existem várias maneiras de uma renderização condicional no react, uma das mais utilizadas são:

```
import {useState, useEffect} from 'react';

const ExampleConditionalRendering = ({ isLoggedIn }) => (
  {isLoggedIn ? (
    <h1>Bem-vindo! Você está logado.</h1>
  ) : (
    <h1>Por favor, faça login para continuar.</h1>
  )}
)


// Exemplo de uso:
function App() {
  const [logged, setLogged] = useState(true)

  useEffect(() => {
    setLogged(false)
  }, [])

  return (
    <ExampleConditionalRendering isLoggedIn={logged} />
  );
}

```

## 4. Quais são as diferenças entre o uso de "redux-thunk" e "redux-saga" para lidar com ações assíncronas no Redux?

redux-thunk: É um middleware simples que permite que as actions creators retornem funções assíncronas em vez de objetos de ação. Essas funções podem ter acesso ao método dispatch e podem realizar chamadas assíncronas antes de despachar a ação real.

redux-saga: É uma biblioteca mais avançada que permite lidar com ações assíncronas de maneira mais complexa. Ele usa o conceito de "generators" do JavaScript para criar "sagas", que são funções que lidam com a lógica assíncrona de forma declarativa. As sagas podem monitorar ações específicas, realizar chamadas assíncronas e despachar outras ações como resultado.

Em resumo, o redux-thunk é mais simples e direto, permitindo o uso de funções assíncronas nas actions creators. Já o redux-saga é mais poderoso e flexível, permitindo um controle mais granular das ações assíncronas, mas com uma curva de aprendizado maior devido ao uso de generadores e conceitos mais avançados. A escolha entre os dois depende da complexidade das ações assíncronas que você precisa lidar e das necessidades específicas do seu aplicativo.

## 5. Suponha que você esteja enfrentando um problema de desempenho em uma aplicação React.

Começo fazendo uma analise das possíveis causa da perca de desempenho da aplicação utilizando a ferramenta de desenvolvedor chamada LightHouse em seguida procuro ir refatorando algumas funções, depois utilizo outra ferramenta de desenvolvedor como o DevTools para me ajudar a identificar qual componente esta causando problema de desempenho logo em seguida verifico se os componentes da aplicação estão sendo renderizado quando necessário,
em seguida procuro refatora os componentes grandes e complexos em partes menores.
