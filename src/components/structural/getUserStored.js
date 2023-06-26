export default function getUserStored() {
    const userStateStored = localStorage.getItem("userState");
    let state = parseInt(userStateStored);
    if (isNaN(state)) {
        state = 0;
    }
    let name = localStorage.getItem("userName");
    if (name === null || name === undefined) {
        name = "";
    }
    console.log("state:" + state + ", name:" + name);
    return {
        state,
        name
    }
}