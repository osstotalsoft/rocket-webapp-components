import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import PropTypes from 'prop-types'

const TemplateEditor = ({
  initialValue,
  apiKey,
  value,
  disabled,
  height,
  menubar,
  plugins,
  toolbar,
  branding,
  elementpath,
  onEditorChange,
  ...other
}) => (
  <Editor
    initialValue={initialValue}
    apiKey={apiKey}
    value={value}
    disabled={disabled}
    init={{
      height,
      menubar,
      plugins,
      toolbar,
      branding,
      elementpath,
      ...other
    }}
    onEditorChange={onEditorChange}
  />
)

TemplateEditor.defaultProps = {
  height: 500,
  menubar: false,
  branding: false,
  elementpath: false,
  plugins: ['table', 'hr', 'emoticons', 'wordcount', 'advlist', 'lists'],
  toolbar:
    'undo redo | formatselect | table| hr | bold italic backcolor |\
   alignleft aligncenter alignright alignjustify | \
   bullist numlist | outdent indent | removeformat | emoticons '
}

TemplateEditor.propTypes = {
  /**
   *The disabled property can dynamically switch the editor between a “disabled” (read-only) mode (true) and the standard editable mode (false)
   */
  disabled: PropTypes.bool,
  /**
   * This property allows the editor to be used as a controlled component by setting the value property and using the onEditorChange event
   */
  value: PropTypes.string.isRequired,
  /**
   * Initial content of the editor when the editor is initialized.
   */
  initialValue: PropTypes.string,
  /**
   * Your API Key is a unique token that links your TinyMCE instances to your account. It grants you access to all of the Premium Plugins
   */
  apiKey: PropTypes.string,
  /**
   * Used to store the state of the editor outside the editor React component.
   */
  onEditorChange: PropTypes.func,
  /**
   * Sets the height of the entire editor, including the menu bar, toolbars, and status bar.
   */
  height: PropTypes.number,
  /**
   * This option allows you to specify which menus should appear and the order that they appear in the menu bar at the top
   * If set to false, the menubar will not be visible
   */
  menubar: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /**
   * This option allows you to specify which plugins will attempt to load when starting up the editor.
   * They will be specified as strings inside an array
   */
  plugins: PropTypes.array,
  /**
   * This option allows you to specify the buttons and the order that they will appear on toolbar.
   * They will be specified in a string separated by white spaces
   */
  toolbar: PropTypes.string,
  /**
   * Use the branding option to enable or disable the “Powered by Tiny” link displayed in the status bar
   */
  branding: PropTypes.bool,
  /**
   * This option allows you to show or not the selected element and its html path 
   */
  elementpath: PropTypes.bool
}

export default TemplateEditor
