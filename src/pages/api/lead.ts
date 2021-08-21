import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

const token = 'Bearer 0586907c4f941f17ceca3742d85b94e1'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async (request: NextApiRequest, response: NextApiResponse) => {
  const listId = '1342c1d376'
  const url = `https://us2.api.mailchimp.com/3.0/lists/${listId}/members`
  const { name, email } = request.body
  const data = {
    email_address: email,
    status: 'subscribed',
    tags: ['arquetipos'],
    full_name: name
  }

  try {
    const result = await axios.post(url, data, {
      headers: { Authorization: token }
    })

    return response.json(result.data)
  } catch (error) {
    console.error({ error: error.response.data.errors })

    return response.json({ error: 'algo deu errado' })
  }
}
