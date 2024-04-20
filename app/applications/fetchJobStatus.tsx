type StatusJob = {
    company: string, 
    position: string, 
    date: string,
    status: string,
    sigma: boolean
    saved?: boolean
}

const baseUrl = "https://ursearch-api.salmonmeadow-33eeb5e6.westus2.azurecontainerapps.io/";
const url = baseUrl + "api/jobseeker/me/myapplications";

async function getDataRaw() {
    const res = await fetch(url, {
        method: "GET",
        headers: {
            "Authorization": "Basic " + btoa(localStorage.getItem("userName") + ":" + localStorage.getItem("password"))
        }, 
        credentials: "include"
    })
    .then((res) => res.json())
    .then((res) => {
        console.log(res);
        return res; 
    })
    .catch((error) => console.log(error));

    return res; 
}

export function getData() : StatusJob[] {
    var applications = [];
    const res = getDataRaw(); 
    console.log(res)
    return [
            {
        company: "Telesec Labs", 
        position: "Data Analyst", 
        date: "4/13/2023", 
        status: "Rejected",
        sigma: true
    }
    ]; 
}