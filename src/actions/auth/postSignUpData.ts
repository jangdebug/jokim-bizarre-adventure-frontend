import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const response = await fetch(`${process.env.API_BASE_URL}/v1/auth/sign-up/simple`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: req.body,
      })

      if (response.ok) {
        res.status(200).json({ success: true })
      } else {
        res.status(response.status).json({ success: false })
      }
    } catch (error) {
      res.status(500).json({ success: false, message: 'Internal server error' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
