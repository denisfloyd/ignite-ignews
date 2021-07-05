import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Denis' },
    { id: 2, name: 'Jessica' },
    { id: 1, name: 'Luzia' }
  ]

  return response.json(users);
}