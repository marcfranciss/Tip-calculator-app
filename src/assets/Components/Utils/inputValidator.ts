export const inputValidator = (value: string): {errorMsg: string, sanitizedValue: string, isError: boolean} => {
    const leadingZero = /^0+/; /* check if value starts with zero */
     const regEx = /[^0-9.]+/g;
    const testRegEx = /^[1-9]\d*(\.\d+)?$/gm;

    let errorMsg = ''
    let isError = false;
    let sanitizedValue = value

    if (testRegEx.test(sanitizedValue)) {
      console.log(`sanitation is true`);
          sanitizedValue = value;
    } else {
      console.error(`sanitation is false (${sanitizedValue}), cleaning...`);
      if (value === "") {
          sanitizedValue = '';
          errorMsg = `Can't be blank`;
          isError = true;
        } else if (leadingZero.test(sanitizedValue)) {
          errorMsg = `Can't be zero`;
          isError = true;
          sanitizedValue = value.replace(regEx, "").trim();
        } else {
        sanitizedValue = value.replace(regEx, "").trim();
      }
      
    }
    return {errorMsg, sanitizedValue, isError}
}