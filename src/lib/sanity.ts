import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: '4wvrmfdc', // Wejdź na manage.sanity.io, tam go zobaczysz od razu
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: false, 
})