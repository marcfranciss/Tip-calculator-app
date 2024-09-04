export const inputValidator = (value: string): {errorMsg: string, sanitizedValue: string, isError: boolean} => {
    const leadingZero = /^0+/; /* check if value starts with zero */
    const regEx = /[^0-9.]+/g; /* RegEx for replacing alpha and special characters*/

    let errorMsg = ''
    let isError = false;
    let sanitizedValue = value
      if (value === "") {
        errorMsg = `Can't be blank`;
        isError = true;
      } else if (leadingZero.test(value)) {
        errorMsg = `Can't be zero`;
        isError = true;
      } else {
        sanitizedValue = value.replace(regEx, "").trim();
      }
    return {errorMsg, sanitizedValue, isError}
}