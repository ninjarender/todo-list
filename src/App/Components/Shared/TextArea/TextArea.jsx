import "./TextArea.scss"

export default (props) => {
  return(
    <label>
      <span>{props.title}</span>
      <textarea></textarea>
    </label>
  )
}
