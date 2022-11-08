import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import listHousing from '../../list/listHousing.json'

function Logement() {
  const { id } = useParams()
  const [list, setList] = useState([id])
  useEffect(() => {
    setList(listHousing)
  }, [])

  return (
    <div>
      {list
        .filter((e) => e.id === id)
        .map((test, id) => (
          <div key={id}>
            <p style={{ color: 'red' }}>{test.location}</p>
            <img src={test.host.picture} alt="profil" />
          </div>
        ))}
    </div>
  )
}

export default Logement
