import React  from "react";
import { ERROR } from '../../config';
export function ErrorMessage(props) {
    return (
        <div className="error-message-generic">
            <p>
                {(props.message ? props.message : ERROR.SYSTEM_ERROR)}
            </p>
        </div>
    )

}

export function FieldError(props) {
    return (
        <div className="error-message-field-generic">
            <p>
                {(props.message ? props.message : ERROR.SYSTEM_ERROR)}
            </p>
        </div>
    )
}