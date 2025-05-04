export const toPascalCase = (str: string) => {
    return str.replace(/(\w)(\w*)/g, (_, first, rest) => first.toUpperCase() + rest.toLowerCase()).replace(/\s+/g, '');
}

export const HaveValue = (str: string) => {
    if(str == null || str == undefined || str == '0' || str == "") {
        return false
    }

    return true
}