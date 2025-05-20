// api/send.js

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { nome, email, tel_celular } = req.body;

  try {
    const response = await fetch('http://lopesdialogo.hypnobox.com.br/email.receber.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nome, email, tel_celular, id_produto: "281" })
    });

    const result = await response.json(); // ou .json() se preferir
    res.status(200).json({ success: true, result });
  } catch (error) {
    console.log('Erro ao enviar para Hypnobox:', error);
    res.status(500).json({ success: false, error: 'Erro no envio.' });
  }
}
