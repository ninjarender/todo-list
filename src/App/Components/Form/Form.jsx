import './Form.scss'
import Input from '../Shared/Input/Input.jsx'
import TextArea from '../Shared/TextArea/TextArea.jsx'
import Button from '../Shared/Button/Button.jsx'

export default () => {
  return(
    <form>
      <div className="input_wrapper">
        <div className="title_wrapper">
          <Input title="Title" type="text" required="required" />
          <Input title="Estimate" type="text" required="required" />
        </div>
        <TextArea title="Description" />
      </div>
      <Button name='Add' />
    </form>
  )
}
