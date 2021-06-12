import axios from 'axios'

interface AddLeadProps {
  name: string
  email: string
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const addLead = async ({ name, email }: AddLeadProps) =>
  await axios.post('/api/lead', { name, email })
