import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import TagName from '../../components/TagName'
import listHousing from '../../list/listHousing.json'
 

function Logement(propsName) {
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
          <TagName key={id} props={propsName}>
            <p style={{ color: 'red' }}>{test.location}</p>
          </TagName>
        ))}
    </div>
  )
}

export default Logement
