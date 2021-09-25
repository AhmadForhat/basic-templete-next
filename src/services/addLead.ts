import axios from 'axios'

interface AddLeadProps {
  name: string
  email: string
  age: string
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const addLead = async ({ name, email, age }: AddLeadProps) => {
  const url = '/api/lead'
  await axios.post(url, { name, email, age })
}
