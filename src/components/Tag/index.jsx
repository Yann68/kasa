// import { useRef } from 'react'
//
function Tag({ tags }) {
  // const content = useRef(null)
  return (
    <ul>
      {tags.tags.map((tag, id) => (
        <li key={id}>{tag}</li>
      ))}
    </ul>
  )
}

export default Tag

/* <div ref={content}>{tag.content}</div> */
