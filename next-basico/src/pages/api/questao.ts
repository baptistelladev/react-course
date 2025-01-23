import { NextApiRequest, NextApiResponse } from "next";

export default function Questao(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === 'GET') {
    
  } else {
    res.status(405).send({})
  }
}