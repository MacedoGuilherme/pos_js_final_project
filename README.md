<h1  align="center">💵 Locação de jogos</h1>

<p>Este projeto é um simples sistema de locação de jogos desenvolvido em NodeJS, possibilitando o cadastro de clientes, jogos e locações.</p>


## Requisitos

Antes de utilizar o sistema, é necessário instalar em sua máquina as seguintes ferramentas:

 - [Git](https://git-scm.com)
 - [Node.js](https://nodejs.org/en/)
 - [Xampp](https://www.apachefriends.org/pt_br/)

## Desenvolvendo

  

```bash

# Clone este repositório

$ git clone https://github.com/MacedoGuilherme/pos_js_final_project.git


# Acesse a pasta do projeto no terminal/cmd

$ cd pos_js_final_project


# Instale as dependências

$ npm install


# Execute a aplicação

$ npm start


```

## Banco de dados

Para a criação do banco de dados, basta acessar a pasta Database do projeto e utilizar o script do arquivo Locadora.sql.

Caso seja necessário alterar alguma informação para conexão ao banco de dados, basta editar o arquivo db.js localizado na pasta ./database

## Documentação

### Endpoints

<ul>
    <li>POST /registercustomer</li>
    <li>POST /registergame</li>
    <li>POST /registerlease</li>
    <li>GET /listgamegenre/:genre</li>
    <li>GET /listgameplatform/:platform</li>
    <li>GET /customerlease</li>
    <li>PUT /changegame</li>
    <li>PUT /changecustomer</li>
    <li>DELETE /deletegame/:id</li>
    <li>DELETE /deletelease/:id</li>
</ul>

### POST /registercustomer

Realiza o cadastro de um novo cliente caso o CPF sejá valido e já não tenha sido cadastrado.


#### Requisição:

```
{
    "name": "Guilherme",
    "cpf": "25239111081",
    "email": "guilherme@hotmail.com",
    "phone": "(41) 99999-9999"
}

```

#### Retorno:

status | descrição
-------|----------
200    |   OK

#### Erros


status  |    descrição                |             response body
--------|-----------------------------|--------------------------------------------------------------------------
400     |    parâmetros faltando      |             "message": "param is missing or the value is empty: customer"
401     |    CPF inválido             |             "message": "CPF is not valid"
422     |    CPF já cadastrado        |             "message": "CPF already registered"


### POST /registergame

Realiza o cadastro de um novo jogo.

#### Requisição:

```
{
    "name": "FIFA 21",
    "genre": "SPORT",
    "platform": "XBOX"
}
```

#### Retorno:

status | descrição
-------|----------
200    |   OK

#### Erros

status  |    descrição                |             response body
--------|-----------------------------|--------------------------------------------------------------------------
400     |    parâmetros faltando      |             "message": "param is missing or the value is empty: game"
422     |    game já cadastrado       |             "message": "game is already registered"


### POST /registerlease

Realiza o cadastro de uma nova locação:

#### Requisição:

```
{
    "id_customer": 31,
    "id_game": 18,
    "lease_dt": "05/05/2021",
    "return_dt": "12/05/2021",
    "lease_value": 17.99
}
```

#### Retorno:

status | descrição
-------|----------
200    |   OK

#### Erros

status  |    descrição                |             response body
--------|-----------------------------|--------------------------------------------------------------------------
400     |    parâmetros faltando      |             "message": "param is missing or the value is empty: lease"
422     |    locação já cadastrado    |             "message": "lease is already registered"


### listgameplatform/:genre

Retorna os jogos cadastrados, ordenados por categoria.

#### Retorno:
```
[
    {
        "NAME": "FIFA 21",
        "GENRE": "SPORT",
        "PLATFORM": "XBOX"
    },
    
    {
        "NAME": "PES 21",
        "GENRE": "SPORT",
        "PLATFORM": "PS"
    }
]
```

status | descrição
-------|----------
200    |   OK

#### Erros

status  |    descrição                |             response body
--------|-----------------------------|--------------------------------------------------------------------------
404     |    jogo não encontrado      |             "message": "register not found"


### /listgamegenre/:platform

Retorna os jogos cadastrados ordenados por plataforma.

#### Retorno:
```
[
    {
        "NAME": "GTA 5",
        "GENRE": "FPS",
        "PLATFORM": "XBOX"
    },
    {
        "NAME": "FIFA 21",
        "GENRE": "SPORT",
        "PLATFORM": "XBOX"
    }
]
```

status | descrição
-------|----------
200    |   OK

#### Erros

status  |    descrição                |             response body
--------|-----------------------------|--------------------------------------------------------------------------
404     |    jogo não encontrado      |             "message": "register not found"


### /customerlease

Retorna o nome do cliente e o valor total das locações do CPF informado.

Requisição:
```
{
    "cpf": "25239111081"
}
```

Retorno:
```
[
    {
        "NAME": "Guilherme",
        "TOTAL": 17.99
    }
]
```

status | descrição
-------|----------
200    |   OK

#### Erros

status  |    descrição                    |             response body
--------|---------------------------------|--------------------------------------------------------------------------
404     |    nenhuma locação cadastrada   |             "message": "register not found"


### PUT /changegame

Altera as informações cadastradas de um jogo.

#### Requisição:
```
{
    "id": 18,
    "name": "GTA 5",
    "genre": "FPS",
    "platform": "XBOX"
}
```

#### Retorno:

status | descrição
-------|----------
200    |   OK

#### Erros

status  |    descrição                    |             response body
--------|---------------------------------|--------------------------------------------------------------------------
400     |    parâmetros faltando          |             "message": "param is missing or the value is empty: game"
404     |    nenhuma locação cadastrada   |             "message": "register not found"


### PUT /changecustomer

Altera as informações cadastradas de um cliente.

#### Requisição:
```
{
    "name": "Guilherme",
    "cpf": "06401410990",
    "email": "gui@gmail.com",
    "phone": "(41) 88888-8888"
}
```

#### Retorno:
status | descrição
-------|----------
200    |   OK

#### Erros

status  |    descrição                    |             response body
--------|---------------------------------|--------------------------------------------------------------------------
400     |    parâmetros faltando          |             "message": "param is missing or the value is empty: customer"
404     |    cliente não cadastrado       |             "message": "register not found"


### DELETE /deletegame/:id

Deleta um jogo cadastrado.

#### Retorno:
status | descrição
-------|----------
200    |   OK

#### Erros

status  |    descrição                    |             response body
--------|---------------------------------|--------------------------------------------------------------------------
404     |    jogo não cadastrado          |             "message": "register not found"


### DELETE /deletelease/:id

Deleta uma locação cadastrada.

#### Retorno:
status | descrição
-------|----------
200    |   OK

#### Erros

status  |    descrição                    |             response body
--------|---------------------------------|--------------------------------------------------------------------------
404     |    locação não cadastrada       |             "message": "register not f


## Integrantes

<img  style="border-radius: 50%;"  src="https://user-images.githubusercontent.com/55069153/125345777-54c38580-e32f-11eb-8f88-c18614d308ed.jpeg"  width="100px;"  alt=""/>

<sub><b>Guilherme Macedo</b></sub>

Feito por Guilherme Macedo 👋🏽 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Guilherme-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/guilherme-macedo-4a5b75202/)](https://www.linkedin.com/in/guilherme-macedo-4a5b75202/)

[![Gmail Badge](https://img.shields.io/badge/-macedoguilherme96@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:macedoguilherme96@gmail.com)](mailto:macedoguilherme96@gmail.com)
