import './Input.scss'

export default (props) => {  
  return(
    <label>
      <span>{props.title}</span>
      <input type={props.type} required={props.required} />
    </label>
  )
}
