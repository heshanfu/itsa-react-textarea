"use strict";

/**
 * Description here
 *
 *
 *
 * <i>Copyright (c) 2016 ItsAsbreuk - http://itsasbreuk.nl</i><br>
 * New BSD License - http://choosealicense.com/licenses/bsd-3-clause/
 *
 *
 * @module itsa-react-textarea
 * @class TextArea
 * @since 0.0.1
*/

const React = require("react"),
    PropTypes = require("prop-types"),
    Input = require("itsa-react-input");

const MAIN_CLASS = "itsa-textarea";

class Textarea extends React.Component {
    constructor(props) {
        super(props);
        const instance = this;
        instance.element = instance.element.bind(instance);
        instance.focus = instance.focus.bind(instance);
    }

    /**
     * componentDidMount will call `this.activatePlaces()`;
     *
     * @method componentDidMount
     * @since 0.0.1
     */

    /**
     * Returns the rendered React-Element that serves as the source dom-element
     *
     * @method element
     * @param props {Object} props to be passed through to the Component
     * @return ReactComponent
     * @since 0.0.4
     */
    element(inputProps) {
        return (<textarea {...inputProps} />);
    }

    /**
     * Sets the focus on the Component.
     *
     * @method focus
     * @param [transitionTime] {Number} transition-time to focus the element into the view
     * @chainable
     * @since 0.0.1
     */
    focus(transitionTime) {
        return this._inputElement.focus(transitionTime);
    }

    /**
     * Gets the Component"s internal state. Note, that the this is NOT Redux"s state.
     *
     * @method getInitialState
     * @return Object the Component internal initial state
     * @since 0.0.1
     */

    /**
     * Sets the focus on the Component.
     *
     * @method focus
     * @chainable
     * @since 0.0.1
     */

    /**
     * The method that is called whenever the input-Element changes its value.
     * Will update the Redux-store (signupuser.homeaddress);
     *
     * @method handleChange
     * @param e {Object} event-payload
     * @since 0.0.1
     */

    /**
     * The method that is called whenever the input-Element gets the focus.
     * It will change its internal state, so that the css looks right and
     * also any validation-messages disappear.
     *
     * @method handleFocus
     * @param e {Object} event-payload
     * @since 0.0.1
     */

    /**
     * The method that is called whenever the input-Element gets blurred.
     * It will change its internal state, so that the css looks right and
     * also any validation-messages appear.
     *
     * @method handleBlur
     * @param e {Object} event-payload
     * @since 0.0.1
     */

    /**
     * React render-method --> renderes the Component.
     *
     * @method render
     * @return ReactComponent
     * @since 0.0.1
     */
    render() {
        const instance = this,
            props = instance.props,
            className = (props.className ? props.className+" " : "") + MAIN_CLASS;
        return <Input {...props} className={className} element={instance.element} ref={node => instance._inputElement = node} />;
    }

}

Textarea.propTypes = {
    /**
     * Whether to autofocus the Component.
     *
     * @property autoFocus
     * @type Boolean
     * @since 0.0.1
    */
    autoFocus: PropTypes.bool,

    /**
     * The class that should be set on the element
     *
     * @property className
     * @type String
     * @since 0.0.1
    */
    className: PropTypes.string,

    /**
     * The error-message that appears when the element is wrong validated.
     *
     * @property errorMsg
     * @type String
     * @since 0.0.1
    */
    errorMsg: PropTypes.string,

    /**
     * Whether the parent-form has been validated.
     * This value is needed to determine if the validate-status should be set.
     *
     * @property formValidated
     * @type Boolean
     * @since 0.0.1
    */
    formValidated: PropTypes.bool,

    /**
     * The text that should appear when the element is wrong validated.
     *
     * @property helpText
     * @type String
     * @since 0.0.1
    */
    helpText: PropTypes.string,

    /**
     * The `id` of the element.
     *
     * @property id
     * @type String
     * @since 0.0.1
    */
    id: PropTypes.string,

    /**
     * Whether to mark the Component when successfully validated.
     *
     * @property markValidated
     * @type Boolean
     * @since 0.0.1
    */
    markValidated: PropTypes.bool,

    /**
     * Whether the Component should show an validate-reclamation (star)
     *
     * @property markValidated
     * @type Boolean
     * @since 0.0.1
    */
    markRequired: PropTypes.bool,

    /**
     * The `name` for the element.
     *
     * @property name
     * @type String
     * @since 0.0.1
    */
    name: PropTypes.string,

    /**
     * The `onChange` function, which should update the `state`.
     *
     * @property onChange
     * @type Function
     * @since 0.0.1
    */
    onChange: PropTypes.func.isRequired,

    /**
     * The `placeholder` for the element.
     *
     * @property placeholder
     * @type String
     * @since 0.0.1
    */
    placeholder: PropTypes.string,

    /**
     * Inline style
     *
     * @property style
     * @type object
     * @since 0.0.1
    */
    style: PropTypes.object,

    /**
     * The tabindex of the Component.
     *
     * @property type
     * @type Number
     * @since 0.0.1
    */
    tabIndex: PropTypes.number,

    /**
     * Whether the property is validated right.
     *
     * @property validated
     * @type Boolean
     * @since 0.0.1
    */
    validated: PropTypes.bool,

    /**
     * The `value` of the input-element.
     *
     * @property value
     * @type String
     * @since 0.0.1
    */
    value: PropTypes.string
};

module.exports = Textarea;
