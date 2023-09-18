const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;


app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', (req, res) => {
  const produtos = [
    { nome: 'Garrafa verde', descricao: 'Uma bela garrafa verde', link: '/garrafa/verde' },
    { nome: 'Garrafa azul', descricao: 'Uma bela garrafa azul', link: '/garrafa/azul' },
    { nome: 'Garrafa vermelha', descricao: 'Uma bela garrafa vermelha', link: '/garrafa/vermelha' }
  ];
  res.render('home', { produtos });
});

app.get('/produto/:id', (req, res) => {
  const id = req.params.id;
  res.render('detalhes', { id });
});



app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
