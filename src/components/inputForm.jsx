import React from 'react'
import { Field, reduxForm } from 'redux-form'
import InputText from './inputText.jsx'
import Button from '@material-ui/core/Button';


const SimpleForm = (props) => {
  const submitBeach = (values) => (props.searchBeach(values));
  const { handleSubmit } = props;
  return (
    <form onSubmit={ handleSubmit(submitBeach) }>
      <div>
        <Field
          name="search"
          component={InputText}
        />
      </div>
      <Button variant="raised" color="primary" type="submit">Submit</Button>
    </form>
  )
}

export default reduxForm({
  form: 'simpleForm',
  initialValues: {
    search: null
  }
})(SimpleForm);




