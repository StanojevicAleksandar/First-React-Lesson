function TodoItem(props) {
    return (
        <div className="to-do__item">
        <input type = "checkbox" checked={props.item.completed}/>
        <p>{props.item.text}</p>
        </div>
        )
}

export default TodoItem