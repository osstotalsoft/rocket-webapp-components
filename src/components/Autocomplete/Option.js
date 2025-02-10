import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { Checkbox, Tooltip, makeStyles } from '@material-ui/core'
import { CheckBox, CheckBoxOutlineBlank } from '@material-ui/icons'
import Typography from '../Typography'
import autoCompleteStyle from './autocompleteStyle'

const useStyles = makeStyles(autoCompleteStyle)

const Option = ({ optionLabel, createdLabel, selected, withCheckboxes }) => {
  const classes = useStyles()

  const optionRef = useRef(null)
  const [isOverflow, setIsOverflow] = useState(false)

  const label = createdLabel ? `${createdLabel} "${optionLabel}"` : optionLabel

  useEffect(() => {
    setIsOverflow(optionRef?.current?.scrollWidth > optionRef?.current?.clientWidth)
  }, [])

  return withCheckboxes ? (
    <>
      <Checkbox
        icon={<CheckBoxOutlineBlank fontSize='small' />}
        checkedIcon={<CheckBox fontSize='small' />}
        style={{ marginRight: 8 }}
        checked={selected}
      />
      {optionLabel}
    </>
  ) : (
    <Tooltip title={optionLabel} disableHoverListener={!isOverflow}>
        <div ref={optionRef} className={classes.option}>
          <Typography>{label}</Typography>
        </div>
    </Tooltip>
  )
}

Option.propTypes = {
  optionLabel: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  withCheckboxes: PropTypes.bool,
  createdLabel: PropTypes.string
}

export default Option
