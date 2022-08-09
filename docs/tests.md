# Plano de Testes de Software

Os requisitos para realização dos testes de software são:

- Site publicado na Internet.
- Navegador da Internet - Chrome
- Conectividade de Internet.

# Os testes funcionais a serem realizados na pagina são descritos a seguir:

| Caso de Teste | CT - 01 - Cadastro de ONG|
|---------------------|:-----------------------------------------------------:|
| Requisito associado | RF-002	Permitir o cadastro de ONGs de proteção animal |
| Objetivo do Teste | Verificar se a ONG consegue se cadastrar na Connect.Pet |
| Passos | Index > Clicar em "login" > Inserir, em "Cadastrar", e-mail de usuário já cadastrado > Clicar em "Prosseguir" > Inserir, em "Cadastrar",  novo e-mail > Clicar em "Prosseguir" > Preencher campos do formulário > Clicar em "Enviar" > Clicar em ok no alerta de cadastro realizado > Clicar em "ONGs parceiras" |
| Critério de Êxito | A tentativa de cadastro com e-mail já cadastrado deve ser interrompida; após cadastrar uma nova ONG, um novo card com suas informaçãos deve aparecer na página "ONGs parceiras" |
|                                                                             |
| Caso de Teste | CT - 02 - Login de Usuário Cadastrado |
| Requisito associado | RF-001 Permitir ao usuario já cadastrado, fazer login na pagina |
| Objetivo do Teste | Verificar se o usuário já previamente cadastrado consegue realizar o login |
| Passos |  Index > Clicar em "login" > Inserir e-mail de usuário cadastrado > Inserir senha > Clicar em "Acessar" |                                                   
| Critério de Êxito | Após clicar em "acessar" deve abrir a página inicial da ONG cadastrada  |
|                                                                                             |
| Caso de Teste | CT - 03 - Cadastro de Pet |
| Requisito associado | RF-003	Permitir que as ONGs cadastradas realizem cadastro de animais para adoção ou apadrinhamento |
| Objetivo do Teste | Verificar se as ONGs que tem cadastro feito na pagina conseguem cadastrar animais para adoção |
| Passos | Index > Clicar em "login" > Inserir e-mail de usuário cadastrado > Inserir senha > Clicar em "Acessar" > Clicar em "Adicionar pet" > Preencher os campos do formulário > clicar em Enviar. |                                                                   |
| Critério de Êxito | Após adicionar um novo pet, um novo card com as informaçãos do pet deve aparecer no perfil da ONG e na pagina inicial, seção "Encontre seu pet". |
|                                                                              |
| Caso de Teste | CT - 04 Quero Apadrinhar |
| Requisito associado | RF-004	Permitir que os usuários preencham formulário de manifestação de interesse em apadrinhamento |
| Objetivo do Teste |Verificar se o usuário consegue enviar o formulário Quero apadrinhar   |
| Passos |Index > Clicar em encontre seu pet> Quero apadrinhar> Preencher os campos do formulário > clicar em Enviar.|                                                 
| Critério de Êxito | Após clicar em Enviar, deverá aparecer um alerta de "Cadastro concluído com sucesso!"                                                        |
|                                                                             |
| Caso de Teste | CT - 05 Cadastro de Voluntário |
| Requisito associado | RF-005	Permitir que os usuários preencham formulário de manifestação de interesse em trabalho voluntário |
| Objetivo do Teste | Verificar se os usuários conseguem preencher e enviar o formulário para manifestar interesse em ser voluntário |
| Passos |Index > Clicar em Ongs parceiras> escolher a Ong e clicar em ver mais> Quero ser voluntário> Preencher os campos do formulário > clicar em Enviar.            |
| Critério de Êxito |Após clicar em Enviar, deverá aparecer um alerta de "Cadastro concluído com sucesso!"                                                          |
|                                                                             |
| Caso de Teste | CT - 06 Adote |
| Requisito associado | RF-006	Permitir que os usuários preencham formulário de manifestação de interesse em adotar |
| Objetivo do Teste | Verificar se os usuários conseguem preencher e enviar o formulário para adotar um pet |
| Passos | >  Pagina Inicial >  Clicar em encontre seu pet >  Quero adotar >  Preencher o furmalário > Clicar em Enviar
| Critério de Êxito | Após clicar em Enviar, deverá aparecer um alerta de "Cadastro concluído com sucesso!" |
|                                                                             |
| Caso de Teste | CT - 07 Galeria de Pets |
| Requisito associado | RF-007	Exibir galeria de exposição dos animais |
| Objetivo do Teste | Verificar se os novos pets cadastrados pela ONG aparecem na galeria de pets da pagina inicial |
| Passos            | > Fazer login; > Adicionar um novo pet; > Ir a pagina encontre seu pet > Verificar se o novo card foi adicionado  |
| Critério de Êxito | Após adicionar um novo pet, um novo card com as informaçãos do pet deve aparecer na pagina inicial. |
|                                                                             |
| Caso de Teste | CT - 08 Lista de ONGs Parceiras - Filtro por localidade |
| Requisito associado | RF-008	Permitir que os usuários encontrem ONGs de proteção animal próximas à localização desejada |
| Objetivo do Teste | Verificar se é possível filtrar ONGs cadastradas por localidade |
| Passos | Index > Clicar em "ONGs parceiras" > No campo de filtro por localidade, selecionar localidade desejada |
| Critério de Êxito | O retorno do filtro deve exibir ONGs que pertençam à localidade selecionada e não exibir as que não pertençam |
|                                                                             |
| Caso de Teste | CT - 09 Lista de ONGs Parceiras - Pesquisa por termo |
| Requisito associado | RF-008	Permitir que os usuários encontrem ONGs de proteção animal próximas à localização desejada |
| Objetivo do Teste | Verificar se é possível pesquisar ONGs por termos informados |
| Passos | Index > Clicar em "ONGs parceiras" > No campo de pesquisa, digitar um termo em comum com uma ou mais ONGs cadastradas > Clicar em "Pesquisar" |
| Critério de Êxito | O retorno da pesquisa deve exibir ONGs que tenham correspondência com o termo e não exibir as que não tenham. |
|                                                                             |
| Caso de Teste | CT - 10 Formulário para Contato com a Connect.Pet |
| Requisito associado | RF-009	Permitir que os usuários preencham um formulário para entrar em contato com a Connect.Pet	|
| Objetivo do Teste | Verificar a função de envio de emails por meio de API |
| Passos |   Index > Clicar em "contato"> Preencher formulário > Clicar em "enviar" |
| Critério de Êxito |   Após clicar em "enviar" deve aparecer um alerta de "e-mail enviado com sucesso".|                                                     



<!-- ## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7) -->

# Registro de Testes de Software

Os vídeos abaixo relacionados registram as evidências de testes de software realizados pela equipe, com base no plano de testes, e seus resultados.

## Testes - CT - 01  Cadastro de ONG 
https://user-images.githubusercontent.com/100076244/175824066-397cf57f-cd11-46ab-82b2-1fdd3aac2083.mp4

## Testes - CT - 02  Login de Usuário Cadastrado 
https://user-images.githubusercontent.com/90339211/175794329-75ad68eb-e709-40d9-bf01-06845c31e2b7.mp4  

## Testes - CT - 03  Cadastro de Pet 
https://user-images.githubusercontent.com/102624968/175819884-62da313f-bc09-42a5-a25a-e57627d724e8.mp4

## Testes - CT - 04  Quero Apadrinhar 
https://user-images.githubusercontent.com/101751863/175796096-54529c09-9c16-4ca8-9187-4bb903b27b30.mp4 

## Testes - CT - 05  Cadastro de Voluntario 
https://user-images.githubusercontent.com/101751863/175796181-d3162b4b-4e44-4b71-9dc2-132889c22fcb.mp4 

## Testes - CT - 06  Adote 
https://user-images.githubusercontent.com/91993343/175798285-2f9f7734-be67-4f80-bbcc-267d8f0395b6.mp 

## Testes - CT - 07  Encontre o seu pet 
https://user-images.githubusercontent.com/91993343/175799393-56f33a36-336b-43ce-bd71-ba921f2ccdd2.mp4

## Teste - CT - 08  Lista de ONGs Parceiras - Filtro por localidade
https://user-images.githubusercontent.com/100076244/175824115-838b01aa-c455-4c10-8f8d-6307c54d1bcd.mp4

## Teste - CT - 09  Lista de ONGs Parceiras - Pesquisa por termo
https://user-images.githubusercontent.com/100076244/175824175-20eab340-da0b-42c2-96e7-deb367d094a7.mp4

## Teste - CT - 10 Formulário para Contato com a Connect.Pet 
https://user-images.githubusercontent.com/90339211/175794515-122c57c1-9948-4dc6-a1fd-661b0a9f2aeb.mp4 


## Avaliação

Com a realização dos testes da aplicação, podemos verificar como pontos fortes:
- o design e identidade visual que transmitem a mensagem desejada;
- boa organização dos elementos das páginas;
- navegação simples e de fácil compreensão;
- funcionalidades que atendem a complexidade projetada para a solução.

Embora todas as funcionalidades estejam implementadas e cumprindo seus objetivos, foram identificados alguns pontos que devem ser ajustados:
- antes de ser realizado o cadastro do primeiro pet de uma nova ONG, a interface de sua página ong.html apresenta sobreposição de elementos; [RESOLVIDO]
- se utilizada tela de computador em baixa resolução, as logos das ONGs na página ongs-parceiras.html extrapolam os cards;
- há uma falha de exibição na descrição das ONGs quando utilizados os mecanismos de pesquisa e filtro;
- há redundâncias na inicialização de alguns dados pré-cadastrados, o que, embora não interfira na execução das funcionalidades, pode ser mais eficiente se utilizarmos uma função centralizada que inicializa todos eles e é chamada por todas as páginas em que seja necessária. [RESOLVIDO]
