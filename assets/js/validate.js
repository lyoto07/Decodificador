
function validate(palavra){
    const regex = /^[a-z]+( [a-z]+)*$/;


    let isValidate = regex.test(palavra);

    return isValidate;
}


export { validate };