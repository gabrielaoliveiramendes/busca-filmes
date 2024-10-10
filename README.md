## Cinema: Guia de Filmes

### Descrição

Este projeto é um site web simples que permite aos usuários pesquisar por filmes de uma lista já criada, de forma rápida e fácil. Ao digitar um termo de busca, o site retorna uma filmes relevantes, com informações básicas e um link para mais detalhes.

### Funcionalidades

* Busca intuitiva: Pesquise por título, gênero, ator ou qualquer outra palavra-chave.
* Resultados personalizados: Obtenha resultados relevantes com base na sua pesquisa.
* Interface amigável: Navegue facilmente pelo site e encontre os filmes que você procura.

### Tecnologias

* Frontend: HTML, CSS, JavaScript
* Backend: Nenhum (aplicação estática)

### Aprendizados
* Separação de dados e lógica: Os dados da lista de filmes foram armazenados em um arquivo separado, facilitando a manutenção e a adição de novos filmes.
* Listas e objetos: A lista de filmes é representada por um array de objetos, onde cada objeto contém informações sobre um filme específico (título, descrição, gênero, palavras chaves, etc.).
* Laços de repetição: O laço `for` é utilizado para iterar sobre a lista de filmes e exibir os resultados da pesquisa.
* Manipulação de eventos: O evento `onclick` é utilizado para acionar a função de busca quando o usuário clica no botão.
* Manipulação de strings: As strings são utilizadas para comparar os termos de busca com os dados dos filmes, utilizando métodos como `.toLowerCase()` para garantir uma comparação case-insensitive.
* Condicionais: As condicionais `if` são utilizadas para verificar se a pesquisa retornou resultados e para exibir mensagens de erro caso necessário.
* Operadores lógicos: Os operadores `!` (negação), `||` (ou) e `&&` (e) são utilizados para criar expressões lógicas mais complexas.

### Link
[Projeto busca-filmes](https://busca-filmes-phi.vercel.app/)
