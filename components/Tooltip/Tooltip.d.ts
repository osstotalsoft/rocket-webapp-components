import { TooltipProps as BaseProps } from "@material-ui/core/Tooltip"

export interface TooltipProps extends BaseProps {
  /**
   * Tooltip title. Zero-length titles string are never displayed.
   */
  title: React.ReactNode
  /**
   * @default false
   * If true, adds an arrow to the tooltip.
   */
  arrow?: boolean
  /**
   * @default false
   * Makes a tooltip interactive, i.e. will not close when the user hovers over the tooltip before the leaveDelay is expired.
   */
  interactive?: boolean
  /**
   * @default 0
   * The number of milliseconds to wait before hiding the tooltip. This prop won't impact the leave touch delay (leaveTouchDelay).
   */
  leaveDelay?: number
  /**
   * If true, the tooltip is shown.
   */
  open?: boolean
  /**
   * @default 'bottom'
   * Tooltip placement.
   */
  placement?: 'bottom-end' | 'bottom-start' | 'bottom' | 'left-end' | 'left-start' | 'left' | 'right-end' | 'right-start' | 'right' | 'top-end' | 'top-start' | 'top'
}
/**
 *
 * Demos:
 *
 * - to be added
 *
 *  Take a look over the code for further information:https://github.com/osstotalsoft/rocket-webapp-components/blob/master/components/Tooltip/Tooltip.js
 * 
 *  Material UI components used:
 * 
 * - Tooltip: https://material-ui.com/api/tooltip/
 * 
 */
export default function Tooltip(props: TooltipProps): JSX.Element