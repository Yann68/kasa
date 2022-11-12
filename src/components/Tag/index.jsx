import { useRef } from 'react'

function Tag(props) {
  const content = useRef(null)
  return <div ref={content}>{props.content}</div>
}

export default Tag
