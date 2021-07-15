// error anzeigen
function showError(id, message) {
return`${id}: ${message}`;
}

// success anzeigen
function showSuccess(id) {
    return`${id}: successfully validated`;
}

// email überprüfen
function checkEmail(id, input) {
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(input.trim())) {
        result = {
            isNotValid: true,
            msg: showError(id, `E-Mail ist ungültig`)
        }
    }
    return result;
}

// leere felder
function checkRequired(id, input) {
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }

    if (input.trim() === '') {
        result = {
            isNotValid: true,
            msg: showError(id, `${input.toString()} muss angegeben werden`)

        }
    }
    return result;
}

// länge überprüfen
function checkLength(id, input, min, max) {
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    if (input.length < min) {
        result = {
            isNotValid: true,
            msg: showError(id, `${id} muss mehr als ${min} Buchstaben enthalten`)
        }
    } else if (input.length > max) {
        result = {
            isNotValid: true,
            msg: showError(id, `${id} muss weniger als ${max} Buchstaben enthalten`)
        }
    }
    return result;
}

// überprüfung passwort (equal)
function checkPassword (id, input1, input2) {
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    if ((input1.trim()) !== (input2.trim())) {
        result = {
            isNotValid: true,
            msg: showError(id, `Passwörter stimmen nicht überein`)
        }
    }
    return result;
}

// überprüfung nummer
function checkNumber(id, input) {
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    const re = /^(\+41|0041|0){1}(\(0\))?[0-9]{9}$/;
    if (!re.test(input.trim())) {
        result = {
            isNotValid: true,
            msg: showError(id, 'Telefonnummer ist ungültig')
        }
    }
    return result;
}

// überprüfung name
function checkName(id, input) {
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    const re = /^[a-z ,.'-]+$/i;
    if (!re.test(input.trim())) {
        result = {
            isNotValid: true,
            msg: showError(id, 'Name soll keine Sonderzeichen und Zahlen enthalten')
        }
    }
    return result;
}

module.exports = {
    checkRequired,
    checkLength,
    checkEmail,
    checkNumber,
    checkName,
    checkPassword
}