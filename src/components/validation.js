


const validation = (userData, errors, setErrors) => {

    if (!userData.username)
        setErrors(oldErrors=>({...oldErrors, username: "el nombre de usuario no puede estar vacío" }))

    else if (userData.username.length > 35)
        setErrors(oldErrors=>({ ...oldErrors, username: "el nombre de usuario no puede tener más de 35 caracteres." }))

    else if (
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.username)) {
        setErrors(oldErrors=>({...oldErrors, username: "el nombre de usuario tiene que ser un email" }))
    } else {
        setErrors(oldErrors=>({...oldErrors, username: "" }))
    }

    if (userData.password.length< 6 || userData.password.length > 10) {
        setErrors(oldErrors=>({...oldErrors, password: "longitud de password inválida" }))
    }
    else if (!/\d/.test(userData.password)) {
        setErrors(oldErrors=>({...oldErrors, password: "Debe contener al menos un número" }))
    } else {
        setErrors(oldErrors=>({ ...oldErrors, password: "" }))
    }
};

export default validation;