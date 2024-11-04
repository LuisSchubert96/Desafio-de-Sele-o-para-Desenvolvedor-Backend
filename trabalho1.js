//Importando o express 
const express = require('express')
//criando uma instancia do aplicativo express
const app = express()
//Aqui iremos definir a rota para o endpoint('/')
//quando fazermos uma solicitação GET que será feita no '/' a função sera iniciada
app.get('/', function(request, response){
//retorna uma resposta no formato JSON com uma mensagem
return response.json({
    message: 'Palavras são, na minha não tão humilde opinião, nossa inesgotável fonte de magia. Capazes de ferir e de curar. J.K. Rowling'
    })
})
// Aqui iremos definir a rota para o endpoint 'livros'
// quando fazermos uma solicitação em GET '/livros', a funcao sera iniciada
app.get('/livros', function (request, response){
    return response.json([
        'Harry Potter e a Pedra Filosofal.',
        'Harry Potter e a Câmara Secreta.'
    ])
})
//aqui iremos definir uma rota para adcionarmos um novo livro
//quando uma solicitação do tipo POST é feita para '/livros'
app.post('/livros',function(request, response){
    //aqui ira retornar uma resposta com a lista de livros, incluindo o novo livro.
    return response.json([
        'Harry Potter e a Pedra Filosofal.',
        'Harry Potter e a Câmara Secreta.',
        'Harry Potter e o Prisioneiro de Azkaban.'
    ])
})
// definindo uma rota para atualizar um projeto especifico
// o ':id' é um parametro de rota
app.put('/livros/:id', function(request, response){
    // retorna uma resposta JSON com a lista de livros atualizada
    return response.json([
        'Harry Potter e o Cálice de Fogo.',
        'Harry Potter e a Pedra Filosofal.',
        'Harry Potter e o Prisioneiro de Azkaban.'
    ])
})
// definindo uma rota para deletar um livro especifico
app.delete('/livros/:id', function(request, response){
    // retorna uma resposta com a lista de livros após a exclusão de um deles
    return response.json([
        'Harry Potter e a Pedra Filosofal.',
        'Harry Potter e o Prisioneiro de Azkaban.'
    ])
})
//aqui iremos iniciar o servidor na porta 5000(e teremos uma mensagem informando que o terminal será iniciado)
app.listen(5000, () => {
    console.log('Servidor iniciando na porta 5000')
})