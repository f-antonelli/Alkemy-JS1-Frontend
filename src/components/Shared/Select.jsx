import {ErrorMessage, useField} from 'formik'
import {FormControl, TextField} from '@mui/material'

import styles from './reusable.module.css'

const Select = ({label, ...props}) => {
  const [field] = useField(props)

  return (
    <FormControl className={styles.container}>
      <TextField
        select
        className={styles.input}
        id="outlined-basic"
        label={label}
        variant="outlined"
        {...field}
        {...props}
      />
      <ErrorMessage className={styles.error} component="span" name={props.name} />
    </FormControl>
  )
}

export default Select