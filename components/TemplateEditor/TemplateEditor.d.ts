export interface TemplateEditorProps {
    /**
     *The disabled property can dynamically switch the editor between a “disabled” (read-only) mode (true) and the standard editable mode (false)
     */
    disabled?: boolean
    /**
     * This property allows the editor to be used as a controlled component by setting the value property and using the onEditorChange event
     */
    value?: string
    /**
     * Initial content of the editor when the editor is initialized.
     */
    initialValue?: string
    /**
     * Your API Key is a unique token that links your TinyMCE instances to your account. It grants you access to all of the Premium Plugins
     */
    apiKey?: string
    /**
     * Used to store the state of the editor outside the editor React component.
     */
    onEditorChange?: () => void
    /**
     * Sets the height of the entire editor, including the menu bar, toolbars, and status bar.
     */
    height?: number
    /**
     * This option allows you to specify which menus should appear and the order that they appear in the menu bar at the top
     * If set to false, the menubar will not be visible
     */
    menubar?: boolean | string
    /**
     * This option allows you to specify which plugins will attempt to load when starting up the editor.
     * They will be specified as strings inside an array
     */
    plugins?: []
    /**
     * This option allows you to specify the buttons and the order that they will appear on toolbar.
     * They will be specified in a string separated by white spaces
     */
    toolbar?: string
    /**
     * Use the branding option to enable or disable the “Powered by Tiny” link displayed in the status bar
     */
    branding?: boolean
    /**
      * This option allows you to show or not the selected element and its html path
      */
    elementpath?: boolean
    /**
    * Demos:
    * 
    * - https://bit.dev/totalsoft_oss/react-mui/template-editor
    * 
    *  Take a look over the code for further information:https://github.com/osstotalsoft/rocket-webapp-components/blob/master/components/TemplateEditor/TemplateEditor.js
    * 
    * Component used:
    * 
    * - Editor: https://www.tiny.cloud/docs/integrations/react/
    * 
    */
}

export default function TemplateEditor(props: TemplateEditorProps): JSX.Element