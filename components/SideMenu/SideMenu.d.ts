export interface Props {
  /**
    * The content of the menu
    */
  content?: React.ReactNode
  /**
    * The icon to be displayed on the button
    */
  icon?: Object
  /**
    * Override or extend the styles applied to the side-menu
    */
  customSideMenuClass?: string
  /**
    * Override or extend the styles applied to the button
    */
  customButtonClass?: string
  /**
    * Override or extend the styles applied to the icon
    */
  customIconClass?: string
  /**
    * Override or extend the styles applied to the dropdown
    */
  customContainerClass?: string
}

export type SideMenuProps = Props

export default function SideMenu(props: SideMenuProps): JSX.Element