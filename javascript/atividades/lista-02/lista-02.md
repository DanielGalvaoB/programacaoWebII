# Lista de Tarefas — Questões e Respostas

## Questão 01 
- O que precisamos fazer para adicionar um script na seção `<head>` de uma página HTML e definir que ele só deve ser executado ao finalizar o carregamento da página?
``` 
defer
```

## Questão 02 
- Considere os métodos de seleção de elementos do DOM (Document Object Model) em JavaScript listados abaixo. Relacione cada método à definição correta.

    I. document.getElementById`(B)`

    II. document.querySelector`(C)`

    III. document.getElementsByTagName`(A)`

    A. Retorna todos os elementos do DOM que possuem o mesmo nome de tag especificado.

    B. Retorna um único elemento do DOM com base no valor do atributo id.

    C. Retorna o primeiro elemento do DOM que corresponde ao seletor CSS especificado.

## Questão 03 
- Qual método foi utilizado para adicionar a classe input-erro ao campo de entrada no trecho acima? O que é esse atributo classList?

    O método foi o `classList.add()`

## Questão 04

- O que o método createElement() faz e que informação ele precisa receber como argumento?

    Ele cria um novo elemento HTML via JavaScript.
    O argumento é o nome da tag que você quer criar, como `li`, `span`, `button`.

## Questão 05 
- Em JavaScript, ao manipular elementos do DOM, os atributos innerText e innerHTML são frequentemente utilizados. Qual das alternativas abaixo descreve corretamente a diferença entre esses dois atributos?

    a — innerText somente exibe o conteúdo HTML do elemento, enquanto innerHTML somente exibe o texto visível ao usuário.

   ```
    b — innerText retorna ou define apenas o texto visível ao usuário, enquanto innerHTML retorna ou define o conteúdo HTML do elemento, incluindo tags.
   ``` 
    c — innerText é utilizado apenas para leitura, enquanto innerHTML pode ser utilizado tanto para leitura quanto para modificação do conteúdo do elemento.
    
    d — Ambos os atributos são sinônimos e podem ser usados de forma intercambiável para manipular texto e HTML.

## Questão 06 
- O evento de clique foi definido de que forma para os elementos span e btnExcluir (qual atributo foi usado e o 
que precisamos passar para esse atributo)?

   ```
    O evento foi definido diretamente usando o atributo onclick, atribuindo a ele uma função que será executada quando o clique acontecer.
    ```

## Questão 07 
- Os manipuladores dos eventos de clique no botão de adicionar e pressionamento da tecla enter foram definidos de forma diferente agora, usando o método addEventListener( ). Explique o funcionamento desse método e o que ele precisa receber como parâmetro.


        um jeito de adicionar eventos a um elemento.
        Ele não substitui outros ouvintes de evento, e permite adicionar vários eventos do mesmo tipo.

        O nome do evento por exemplo `click`, `submit`, `keydown`

        A função que deve ser executada quando o evento ocorrer.