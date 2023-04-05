
# Food Explorer

Frontend para a aplicação Food Explorer, um cardápio digital para um restaurante fictício desenvolvido no final do curso Explorer da Rocketseat. Esse projeto foi inteiramente construído por mim, com exceção do Layout que já é disponibilizado no Figma.

Nessa aplicação existem dois tipos de usuários, o admin, que é aquele responsável pelo restaurante, podendo ele criar, editar pratos e categorias além de cuidar dos pedidos que são realizados pelos outros usuários, e o usuário comum, que é quem faz os pedidos.
## Deploy

O deploy do frontend foi feito com o plano gratuito da plataforma Netlify.

O deploy do backend foi feito com o plano gratuito da plataforma Render. Por ser gratuito, existem algumas limitações. Quando a API fica muito tempo sem receber requisições ela entra em modo de stand by, então, quando recebe uma nova requisição ela liga novamente, mas inicia com a versão que está no repositório, com o banco de dados vazio. Isso significa que, depois de um tempo sem uso, quando usada novamente, a aplicação demora um pouco para responder, além de começar do zero, sem nada cadastrado.


🔗 Link do App: [Food Explorer](http://foodexplorer-app.netlify.app/)


## Como usar
Ao acessar a aplicação você é direcionado para a tela de login. Se você está acessando pela primeira vez ou algum tempo depois da última utilização, é provável que o servidor(backend) esteja em modo de stand by e não exista nada cadastrado no banco de dados.

Para cadastrar um usuário clique em criar conta e insira os dados requisitados. É importante lembrar que, quando um usuário é criado, a API verifica se existe algum usuário administrador, **caso não exista, o usuário que está sendo criado é automaticamente feito administrador**. Minha recomendação é que o primeiro usuário criado tenha o email e senha "admin", que ja é um padrão para usuários administradores, mas qualquer valor funciona também. Depois de criado o primeiro usuário como administrador, todos os usuários cadastrados serão usuários comuns.

Para simular um pedido, faça login com um usuário não administrador e incluia os pratos desejados. Com pelo menos um prato no pedido, clique na aba de pedidos. Você será redirecionado à uma página com os métodos de pagamentos. Para simular o pagamento, assim que a página é carregada é iniciado um timer de 20 segundos, que, é reiniciado quando o método de pagamento muda, ou cancelado quando o método de pagamento "Crédito" é selecionado. Sendo assim, espere 20 segundos nos modos de pagamento "PIX" ou "Dinheiro" ou clique em "Finalizar pagamento" no modo "Crédito" para iniciar o fluxo de pagamento. Assim que a aparência da página mudar seu pedido já foi enviado e mais 20 segundos depois ele é entregue. Caso queira realizar outro basta adicionar qualquer prato no pedido que um novo será gerado.

## Rodando localmente

Se você quiser baixar e executar o projeto em sua máquina,primeiro instale as dependências com
```bash
  npm install
```

Com as dependências instaladas, você pode rodar a aplicação em modo de desenvolvimento com

```bash
  npm run dev
```
## Backend

Não esqueça de verificar o repositório do Backend se quiser baixar o projeto para rodar em sua máquina!

🔗 Link: [FoodExplorer_Backend](https://github.com/sogbog/FoodExplorer_Backend)
