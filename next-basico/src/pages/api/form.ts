// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";


const usuarios: any[] = [];

type Data = {
  nome: string;
  idade: number
};

export default function form(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  if (req.method === 'POST') {
    postForm(req, res);
  } else if (req.method === 'GET') {
    getForm(req, res);
  } else {
    res.status(405).send(undefined)
  }
}


function postForm(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const usuario = JSON.parse(req.body);
  usuarios.push(usuario);
  res.status(200).send(undefined)
}

function getForm(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json(usuarios)
}