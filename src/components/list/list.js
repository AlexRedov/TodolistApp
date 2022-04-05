import ListItem from './list-item'
import css from './list.module.css'
import {useState} from 'react'

export default function List(props) {
	
	const {todos} = props
	
	const prevState = {
		todosList: todos
	}

	const [todosList, setState] = useState(prevState)

	const handleDeleteItemClick = () => {
		setState((todosList) => {
			
			return {
				todosList:[]
			}
		})
	}

	return (
		<div className={css.cards}>
			{todos.map(todo => (
				<div className={css.card} key={todo.title}>
					<h3 className={css.cardTitle}>{todo.title}</h3>
					<ul className={css.list}>
						{todo.items.map(item => <ListItem key={item.id} text={item.content} checked={item.completed} />)}
					</ul>
					<button className={css.button} onClick={handleDeleteItemClick}>Delete</button>
				</div>
			))}
		</div>
	)
}