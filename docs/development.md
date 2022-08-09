# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Relacionando os requisitos atendidos com os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.


A tabela abaixo apresenta os requisitos funcionais com seus artefatos e os não funcionais, que foram atendidos no projeto:

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Artefato |
|------|-----------------------------------------|:----:|
|RF-001| Permitir o cadastro de ONGs de proteção animal | cadastro-ong.html | 
|RF-002| Permitir ao usuario já cadastrado, fazer login na pagina | login.html |
|RF-003| Permitir que as ONGs cadastradas realizem cadastro de animais para adoção ou apadrinhamento | cadastro-pet.html |
|RF-004| Permitir que os usuários preencham formulário de manifestação de interesse em apadrinhar | quero-apradrinhar.html |
|RF-005| Permitir que os usuários preencham formulário de manifestação de interesse em trabalho voluntário | cadastro-voluntario.html |
|RF-006| Permitir que os usuários preencham formulário de manifestação de interesse em adotar | adote.html |
|RF-007| Exibir galeria de exposição dos animais | index.html |
|RF-008| Permitir que os usuários encontrem ONGs de proteção animal próximas à localização desejada | ongs-parceiras.html |
|RF-009| Permitir que os usuários encontrem ONGs de proteção animal a partir de pesquisa por termos | ongs-parceiras.html |
|RF-010| Permitir que os usuários preenchem um formulário para entrar em contato com a Connect.Pet | contato .html |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  | Atendimento |
|-------|-------------------------|:----:|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | SIM |
|RNF-002| Deve processar requisições do usuário em no máximo 3s | SIM |
|RNF-003| O sistema deve ser desenvolvido com a utilização das linguagens HTML, CSS e JavaScript | SIM |
|RNF-004| O sistema deve estar em compliance com a LGPD | SIM |
|RNF-005| A aplicação deverá ser submetida a verificações para assegurar a conformidade com as especificações do projeto | SIM |
|RNF-006| Para o desenvolvimento da interface e programação das funcionalidades da aplicação deve ser utilizado o Visual Studio Code | SIM |

## Estruturas de dados utilizadas

### Cadastro de ONGs

| ID |  Nome fantasia  | Razão social | CNPJ | Telefone | E-mail | Facebook | Instagram | Estado | Cidade | Bairro | Endereço | Logo |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 0084 | Conecta Pets | Associação de Proteção Animal CP | 12.345.678/9012-34 | (31) 9 3210-2030 | conectapets@gmail.com | /conectapets | @conectapets | MG | Belo Horizonte | Santo Antônio | Rua Congonhas, 106 | (Anexo) |

### Cadastro de Pets

| ID |  ID ONG responsável | Nome | Espécie | Idade | Porte | Condição especial | Descrição | Imagem|
|---|---|---|---|---|---|---|---|---|
| 0084307076 | 0084 | Cheetos | Cachorro | 1 ano | Médio | Adoção conjunta | Cheetos é um cachorro alegre... | (Anexo) |

### Cadastro de voluntario

| CPF | Nome | E-mail | Telefone | Estado | Cidade | ID ONG |
|---|---|---|---|---|---|---|
| 012.345.678-90 | Lucas Lima | lucas.lima@email.com | (27) 9 1234-5678 | ES | Vila Velha | 0084 |

### Cadastro de pessoa adotante

| CPF | Nome | E-mail | Telefone | Estado | Cidade | ID Pet |
|---|---|---|---|---|---|---|
| 012.345.678-90 | Lucas Lima | lucas.lima@email.com | (27) 9 1234-5678 | ES | Vila Velha | 0084307076 |

### Cadastro de pessoa que quer apadrinhar

| CPF | Nome | E-mail | Telefone | Estado | Cidade | ID Pet |
|---|---|---|---|---|---|---|
| 012.345.678-90 | Lucas Lima | lucas.lima@email.com | (27) 9 1234-5678 | ES | Vila Velha | 0084307076 |

## Acesso a pagina da Connect.Pet

> - [Link] (https://connect-pet.herokuapp.com/src/index.html)

<!-- > **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm) -->
