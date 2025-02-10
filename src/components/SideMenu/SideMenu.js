import React, { useCallback, useEffect, useRef, useState } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import MenuOpenIcon from '@material-ui/icons/MenuOpen'
import { makeStyles } from '@material-ui/core'
import sideMenuStyle from './sideMenuStyle'

const useStyles = makeStyles(sideMenuStyle)

const SideMenu = ({ icon: Icon, content, customSideMenuClass, customButtonClass, customIconClass, customContainerClass }) => {
  const classes = useStyles()

  const sideMenuClass =
    classes.sideMenu +
    ' ' +
    cx({
      [customSideMenuClass]: customSideMenuClass
    })

  const buttonClass =
    classes.moreButton +
    ' ' +
    cx({
      [customButtonClass]: customButtonClass
    })

  const iconClass =
    classes.sideMenuIcon +
    ' ' +
    cx({
      [customIconClass]: customIconClass
    })

  const menuContainerClass =
    classes.menuContainer +
    ' ' +
    cx({
      [customContainerClass]: customContainerClass
    })

  const [show, setShow] = useState(false)
  const sideMenuRef = useRef()

  const handleClickOutside = useCallback(e => {
    if (sideMenuRef.current && !sideMenuRef.current.contains(e.target)) {
      setShow(false)
    }
  }, [])

  const handleButtonClick = useCallback(() => {
    setShow(current => !current)
  }, [])

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div ref={sideMenuRef} className={sideMenuClass}>
      <div onClick={handleButtonClick} className={buttonClass}>
        <Icon fontSize='small' className={iconClass} />
      </div>
      <div className={show ? `${menuContainerClass} ${classes.menuShow}` : menuContainerClass}>{content}</div>
    </div>
  )
}

SideMenu.propTypes = {
  /**
   * The content of the menu
   */
  content: PropTypes.node,
  /**
   * The icon to be displayed on the button
   */
  icon: PropTypes.object,
  /**
   * Override or extend the styles applied to the side-menu
   */
  customSideMenuClass: PropTypes.string,
  /**
   * Override or extend the styles applied to the button
   */
  customButtonClass: PropTypes.string,
  /**
   * Override or extend the styles applied to the icon
   */
  customIconClass: PropTypes.string,
  /**
   * Override or extend the styles applied to the dropdown
   */
  customContainerClass: PropTypes.string
}

SideMenu.defaultProps = {
  icon: MenuOpenIcon
}

export default SideMenu
