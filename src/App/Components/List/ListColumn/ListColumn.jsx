import './ListColumn.scss'
import ListItem from './ListItem/ListItem'

export default (props) => {
  return(
    <div className="list_column">
      <h2>{props.name}</h2>
      <ul>
        <ListItem />
      </ul>
    </div>
  )
}
