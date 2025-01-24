import { NextApiRequest, NextApiResponse } from "next";

export default function Params(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json({
    dados: req.query
  })
}