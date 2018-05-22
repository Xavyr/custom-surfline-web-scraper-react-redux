import React from 'react'
import { Field, reduxForm } from 'redux-form'
import InputText from './inputText.jsx'

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
      <button type="submit">Submit</button>
    </form>
  )
}

export default reduxForm({
  form: 'simpleForm',
  initialValues: {
    search: null
  }
})(SimpleForm);




