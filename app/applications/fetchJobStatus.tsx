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
        return res; 
    })
    .catch((error) => console.log(error));

    return res; 
}

export function getData() : StatusJob[] {
    var applications = [];
    getDataRaw()
        .then((res) => localStorage.setItem("listAllApps", JSON.stringify(res["data"]["applications"])))
        .catch((error) => console.log(error)); 

    let results : StatusJob[] = [];
    if (localStorage.getItem("listAllApps") != null) {
        let rawData = JSON.parse(localStorage.getItem("listAllApps") as string); 
        for (let idx = 0; idx < rawData.length; idx++) {
            results.push({
                company: rawData[idx].labName, 
                position: rawData[idx].title, 
                date: rawData[idx].UpdatedAt.slice(0, 10), 
                status: rawData[idx].status, 
                sigma: true
            })
        }
    }

    console.log(results);

    // return [
    //         {
    //     company: "Telesec Labs", 
    //     position: "Data Analyst", 
    //     date: "4/13/2023", 
    //     status: "Rejected",
    //     sigma: true
    // }
    // ]; 

    return results; 
}