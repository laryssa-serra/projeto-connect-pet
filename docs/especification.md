# Especificações do Projeto
A etapa de especificação do projeto tem como objetivo definir um diagrama de personas, histórias de usuários, requisitos funcionais e não - funcionais, além das restrições do projeto. Para além disso, é na etapa em liça que são elaborados os requisitos que definem a estrutura e o comportamento do software desenvolvido, citando, a exemplo, os dados gerados esperados, o processo e as restrições de funcionamento.

A estrutura analítica de requisitos fornece uma compreensão completa dos objetivos específicos do projeto transformando-as em tarefas acionáveis que são refinadas o suficiente para serem realizadas pelos usuários, tendo como objetivo fomentar a compreensão de conceitos abstratos, bem como a compreensão do ambiente do usuário, atendendo, dessa maneira, o objetivo global do software.

Importa ressaltar que as etapas da especificação do projeto são as seguintes: o diagrama de personas que consiste na representação fictícia baseada em dados reais sobre comportamento e características dos seus usuários; as histórias de usuários que são um recurso de software escrito a partir da perspectiva do usuário final; os requisitos funcionais que definem o comportamento do sistema e como funcionará cada item do requisito não – funcional; os requisitos não - funcionais que definem características e impõem limites ao sistema como método de desenvolvimento e, por último, as restrições do projeto que especificam pontos que podem comprometer a execução do projeto.

Abaixo segue com mais detalhes toda a especificação para o desenvolvimento do nosso projeto. Estabelecidas com base nas necessidades dos
clientes, que definem nossas metas (valores quantitativos) e requisitos de projeto do produto.


## Personas
<div align="center">
<img src="https://user-images.githubusercontent.com/101751863/161173317-827cbc6d-9b04-4d9b-a777-03aeb3aafef4.png" width="600px" />
</div>
<div align="center">
<img src="https://user-images.githubusercontent.com/101751863/161173318-3e0c7827-099a-47ce-bbd9-1776cf3705c4.png" width="600px" />
</div>
<div align="center">
<img src="https://user-images.githubusercontent.com/101751863/161173322-d9e66162-7a3f-4f70-acbe-e8d863592714.png" width="600px" />
</div>
<div align="center">
<img src="https://user-images.githubusercontent.com/101751863/161173325-f75347d2-a403-468f-8ce5-68b30fa65e1f.png" width="600px" />
</div>
<div align="center">
<img src="https://user-images.githubusercontent.com/101751863/161173326-22f3eecd-ed7c-44ab-b261-813c2a7e217f.png" width="600px" />
</div>

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|       EU COMO                 |           QUERO/PRECISO            |               PARA                                                         |
|-------------------------------|------------------------------------|-----------------------------------------------------------------------------|
| Maria Clara Rodrigues, interessada em adotar um animal | Uma plataforma que me ajude a encontrar ONGs próximas a mim | Ajudar a encontrar meu novo animal de estimação |
| Eduardo Muniz, uma pessoa que quer adotar mais animais, porém não possui espaço em casa | Um lugar que me ajude a encontrar ONGs confiáveis | Apadrinhar animais e ser voluntário |
| Juliana Santos, interessada em me tornar voluntária em uma ONG e por questões pessoais, não consigo mais manter minha cachorra chamada Malú | Uma ONG que eu sinta confiança e consiga deixar a Malú | Para que assim consiga me tornar voluntária e deixar a Malú em um lugar bom até que encontre um lar cheio de amor |
| Helena Medeiros, responsável por administrar uma ONG | Uma plataforma que ajude a arrecadar doações  | Que ajude a melhorar a condição de vida dos animais que vivem na ONG |
| Murilo Ribeiro, interessado em me tornar um voluntário | Um espaço em que consiga encontrar ONGs próximas a mim | Para que possa ajudar me tornando voluntário em algo que seja de minha expertise |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|:----:|
|RF-001| Permitir o cadastro de ONGs de proteção animal | ALTA | 
|RF-002| Permitir ao usuario já cadastrado, fazer login na pagina | ALTA |
|RF-003| Permitir que as ONGs cadastradas realizem cadastro de animais para adoção ou apadrinhamento | ALTA |
|RF-004| Permitir que os usuários preencham formulário de manifestação de interesse em apadrinhar | ALTA |
|RF-005| Permitir que os usuários preencham formulário de manifestação de interesse em trabalho voluntário | ALTA |
|RF-006| Permitir que os usuários preencham formulário de manifestação de interesse em adotar | ALTA |
|RF-007| Exibir galeria de exposição dos animais | ALTA |
|RF-008| Permitir que os usuários encontrem ONGs de proteção animal próximas à localização desejada | ALTA |
|RF-009| Permitir que os usuários encontrem ONGs de proteção animal a partir de pesquisa por termos | ALTA |
|RF-010| Permitir que os usuários preencham um formulário para entrar em contato com a Connect.Pet | ALTA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|:---------:|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | ALTA |
|RNF-002| Deve processar requisições do usuário em no máximo 3s | BAIXA |
|RNF-003| O sistema deve ser desenvolvido com a utilização das linguagens HTML, CSS e JavaScript | ALTA |
|RNF-004| O sistema deve estar em compliance com a LGPD | ALTA |
|RNF-005| A aplicação deverá ser submetida a verificações para assegurar a conformidade com as especificações do projeto | ALTA |
|RNF-006| Para o desenvolvimento da interface e programação das funcionalidades da aplicação deve ser utilizado o Visual Studio Code | ALTA |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Será sintetizado somente no idioma Português |
|03| O projeto estará restrito as ferramentas básicas do front-end |
