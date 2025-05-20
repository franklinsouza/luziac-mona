export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { nome, email, tel_celular} = req.body;

    try {
      const crmResponse = await fetch('http://lopesdialogo.hypnobox.com.br', {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          nome,
          email,
          tel_celular
        })
      });

      if(crmResponse.ok){
        console.log('CRM Response:', crmResponse);
        
        let data = await crmResponse.json();
        console.log(data);

        return res.status(200).json(data);
      }else{
        console.log('CRM Response:', crmResponse);
        return res.status(400).json({ sucesso: false });
      }

    }catch(err){
      console.log(err);
    }

    // Se precisar fazer algo com os dados:
    console.log('Dados recebidos:', body);

    return res.status(200).json({ sucesso: true });
  }

  return res.status(405).json({ erro: 'Método não permitido' });
}