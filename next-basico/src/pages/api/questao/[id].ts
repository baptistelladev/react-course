import { NextApiRequest, NextApiResponse } from "next";

export default function Questao(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  const id = req.query.id;

  console.log(id);

  if (req.method === 'GET') {
    Get(req, res);
  } else {
    res.status(405).send(null)
  }
}

export function Get(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  const id = req.query.id;

  res.status(200).json({
    id,
    enunciado: 'Qual é a sua cor preferida?',
    respostas: [
      'Branca', 'Vermelha', 'Amarela', 'Azul', 'Verde'
    ]
  })
}