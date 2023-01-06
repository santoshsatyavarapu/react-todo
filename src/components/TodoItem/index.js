// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoItem, deleteItem} = props
  const {title, id} = todoItem

  const onDelete = () => {
    deleteItem(id)
  }
  return (
    <li className="list-item-container">
      <p className="todoItem">{title}</p>
      <button className="delete-button" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
