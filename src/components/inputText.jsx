import React from 'react'
import TextField from '@material-ui/core/TextField';

//this is a deconstruction of the redux form field (essentially props coming in from redux-form)
//https://redux-form.com/6.5.0/docs/api/field.md/
const InputText = ({ input, ...value }) => {
  return (
    <TextField
      {...input}
      {...value}
      label={"Search A Beach"}
    />
  )
}

export default InputText