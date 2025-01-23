import { NextApiRequest, NextApiResponse } from "next"


interface Data {
  metodo: any,
  name: string
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  
  if (req.method === 'GET') {
    res.status(200).json({
      metodo: req.method,
      name: 'Felipe'
    });
  } else {
    res.status(200).json({
      metodo: req.method,
      name: 'Maria'
    });
  }

}
