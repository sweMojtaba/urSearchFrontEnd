const getOtherRole = (role) => {
    if (role === "individual") {
        return "lab";
    } else {
        return "individual";
    }
}

export default getOtherRole;