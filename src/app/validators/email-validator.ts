import { AbstractControl, ValidationErrors } from "@angular/forms";

export function emailValidator(control: AbstractControl): ValidationErrors | null {

    // Match one or more: alphanumeric, dot, underscore, percent, plus, hyphen
    // ends with literal string "@wilder.school"
    const emailRegex = /^[a-zA-Z0-9._%+-]+@wilder\.school$/;
    const valid = emailRegex.test(control.value)

    const errors = {
        email: {
            rules: "not of type email or does not end with wilder.school"
        }
    }

    return !valid ? errors : null
}