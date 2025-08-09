# Marvel HQ's Shop

## Índice
- [Descrição](#descrição)
- [Acesso](#acesso)
- [Funcionalidades principais](#funcionalidades-principais)
- [Uso da API](#uso-da-api)
- [Endpoints](#endpoints-utilizados)
- [Documentação](#documentação)

## Descrição
  **Marvel HQ's Shop** foi desenvolvido para simular uma loja oficial de quadrinhos da Marvel.

## Acesso
  ### https://marvel-hqs.vercel.app/

### Funcionalidades principais:
- Lista todos os quadrinhos com paginação
- Mostra os detalhes de cada revista
- Carrinho de compras

---

### Uso da API da `Marvel`

Este projeto utiliza a API pública da Marvel (https://gateway.marvel.com/v1/public/comics) para buscar hq's. 

### Endpoints utilizados

- `GET /` – lista todas os hq's
- `GET /info/:id` – mostras as informações de um hq específico

### Tecnologias Utilizadas

- **Styled-components**
- **React Js**
- **Axios**
- **Redux**
- **Cypress**

#### Documentação
Para mais detalhes sobre os endpoints disponíveis, consulte a documentação oficial.
https://developer.marvel.com/ 

#### Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

### ⚠️ Aviso de Segurança

Este projeto simula o consumo da Marvel API diretamente no frontend.  
Por questões de segurança, a **chave privada não está incluída no repositório**, e o hash de autenticação foi **pré-gerado** apenas para fins de demonstração.  

Em aplicações reais, o correto seria gerar esse hash num backend seguro, longe do navegador.