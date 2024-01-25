const express = require('express')
const app = express()
const axios = require('axios')
const API_KEY = '74317971-1324-4ebf-96a4-a06457bffeba'

/* app.get('/obterContatos', async (req, res) => {
    try {
      const response = await axios.get('https://api.hubapi.com/crm/v3/objects/contacts', {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json'
        }
      });
      console.log(response.data); // Trato os dados de resposta
      res.send(response.data); // Enviar dados de resposta de volta para o cliente
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao obter contatos da HubSpot');
    }
  });
  
  const PORT = 5173;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
         */

app.get('/', (req, res) => res.send('Boa tarde Cauzin!'))

app.listen(5173, () => console.log('Servidor rodando na porta 5173'))