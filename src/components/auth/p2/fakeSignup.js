async function fakeSignup(username, password, role) {
    console.log("Faking signup by sending request to badger chat...")
    const res = await fetch("https://www.cs571.org/s23/hw6/api/register", {
        method: "POST",
        credentials: "include",
        headers: {
            "X-CS571-ID": "bid_30e5ed25e99b26f8f91c",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "username": username,
            "password": password
        })
    })
    return res;
}

export default fakeSignup;