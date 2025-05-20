export default async function handler(req, res) {
  console.log('test');
  if (req.method === 'POST') {
    const body = req.body;

    // Se precisar fazer algo com os dados:
    console.log('Dados recebidos:', body);

    return res.status(200).json({ sucesso: true });
  }

  return res.status(405).json({ erro: 'Método não permitido' });
}