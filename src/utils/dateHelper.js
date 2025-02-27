

export const formatDate = (dateString, locale= "en-US", options ={}) => {
    if(!dateString) return "Invalid Date";

    const defaultOptions  = {
        year: "numeric",
        month: "long",
        day : "numeric",
    }

    return new Date(dateString).toLocaleDateString(locale, {...defaultOptions, ...options});
}


