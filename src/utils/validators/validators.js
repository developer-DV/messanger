export const required = value => {
    if(value) return undefined
    else return "Field is required"
}

export const maxLength = (maxLength) => (value) => {
    if(value.length > maxLength) return `Max length is ${maxLength} ymbols`;
    else return undefined
}