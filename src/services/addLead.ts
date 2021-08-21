import axios from 'axios'

interface AddLeadProps {
  name: string
  email: string
}

const token = 'Bearer 0586907c4f941f17ceca3742d85b94e1'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const addLead = async ({ name, email }: AddLeadProps) => {
  const listId = '1342c1d376'
  const url = `https://us2.api.mailchimp.com/3.0/lists/${listId}/members`
  const data = {
    email_adress: email,
    status: 'subscribed',
    tags: ['arquetipos'],
    full_name: name
  }
  await axios.post(url, data, {
    headers: {
      Authorization: token,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      'Content-Type': 'application/json'
    }
  })
}
