import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default (request: NextApiRequest, response: NextApiResponse) => {
  const { name, email } = request.body
  const listId = ''
  const leadData = {
    email_address: email,
    status: 'subscribed',
    full_name: name
  }
  axios.post(`/lists/${listId}/members`, leadData, {
    headers: {
      'content-type': 'text/json'
    }
  })
  return response.json(leadData)
}
