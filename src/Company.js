import { useParams } from 'react-router-dom'

export const Company = () => {
  const params = useParams()

  return (
    <>
      <h2>Company</h2>
      <p>{params.name}</p>
    </>
  )
}
