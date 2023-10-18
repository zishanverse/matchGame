import './index.css'

const Item = props => {
  const {item, func} = props
  const {id, thumbnailUrl} = item

  const mathing = () => {
    func(id)
  }

  return (
    <li>
      <button type="button" className="thumbImg" onClick={mathing}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumb" />
      </button>
    </li>
  )
}

export default Item
