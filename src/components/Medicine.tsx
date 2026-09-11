import axios from "axios"
import { useEffect, useState } from "react"

const Medicine = () => {
    // const [medicinePayload, setMedicinePayload] = useState({
    //     city: "Bengaluru",
    //     pincode: 560029,
    //     ignoreLoader: true,
    //     category: "Default",
    //     loadSubCategories: true,
    //     contractdIds: [10386],
    //     subCategory: "CENTRE VISIT"
    // })
    const [medicine, setMedicine] = useState([])
    const [subCategories, setSubcategories] = useState([])
    const fetchMedicine = async (filterval) => {
        const myHeaders = new Headers();
        myHeaders.append("accept", "application/json, text/plain, */*");
        myHeaders.append("accept-language", "en-US,en;q=0.9");
        myHeaders.append("accesstoken", "");
        myHeaders.append("booking_platform", "DESKTOP_WEB");
        myHeaders.append("browser_fingerprint_id", "1613542767222649776");
        myHeaders.append("city", "Bengaluru");
        myHeaders.append("content-type", "application/json;charset=UTF-8");
        myHeaders.append("mbaccesstoken", "");
        myHeaders.append("newrelic", "eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjMzNjQxNjAiLCJhcCI6IjMyMjU0ODY4NiIsImlkIjoiYzQ2NjMxZTU4MTM5Y2VmYSIsInRyIjoiYTQ3ODFjMDI4YWNiMzhiODc4ZDk4NDBlMDU3ZmQ0MTAiLCJ0aSI6MTc4OTEyOTAyMTI2N319");
        myHeaders.append("origin", "https://www.medibuddy.in");
        myHeaders.append("pincode", "560029");
        myHeaders.append("platform", "web");
        myHeaders.append("priority", "u=1, i");
        myHeaders.append("referer", "https://www.medibuddy.in/consumerLabs");
        myHeaders.append("sec-ch-ua", "\"Chromium\";v=\"152\", \"Not?A_Brand\";v=\"24\", \"Google Chrome\";v=\"152\"");
        myHeaders.append("sec-ch-ua-mobile", "?0");
        myHeaders.append("sec-ch-ua-platform", "\"Windows\"");
        myHeaders.append("sec-fetch-dest", "empty");
        myHeaders.append("sec-fetch-mode", "cors");
        myHeaders.append("sec-fetch-site", "same-origin");
        myHeaders.append("traceparent", "00-a4781c028acb38b878d9840e057fd410-c46631e58139cefa-01");
        myHeaders.append("tracestate", "3364160^@nr=0-1-3364160-322548686-c46631e58139cefa----1789129021267");
        myHeaders.append("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/152.0.0.0 Safari/537.36");
        myHeaders.append("Cookie", "_gcl_au=1.1.372415290.1788581510; trk-mb-session-id=1789127348704__WEB__YMYF; WZRK_G=436fc688f29b4e0a977dbda7b8bcbe0e; _gid=GA1.2.518491067.1789127356; _gat=1; spses.1305=*; _fbp=fb.1.1789127366542.814230388760667396; _hjSessionUser_2541634=eyJpZCI6IjY3YTFhOGMzLTgxZTYtNWI1Yy1hODkxLTA3MDA4ZmI4YTNiMCIsImNyZWF0ZWQiOjE3ODg1ODE1MTYxNjQsImV4aXN0aW5nIjp0cnVlfQ==; _hjSession_2541634=eyJpZCI6IjM3MzNlZTRhLWFkNjUtNDlmOS04OTViLWRlZTgzZTdmMDg4OSIsImMiOjE3ODkxMjczNjY4MTEsInMiOjAsInIiOjAsInNiIjowLCJzciI6MCwic2UiOjAsImZzIjowLCJzcCI6MH0=; isLoggedIn=false; maLinksVariant=A; __sts=eyJzaWQiOjE3ODkxMjczNTk3MzcsInR4IjoxNzg5MTI3MzU5NzM3LCJ1cmwiOiJodHRwcyUzQSUyRiUyRnd3dy5tZWRpYnVkZHkuaW4lMkYiLCJwZXQiOjE3ODkxMjczNTk3MzcsInNldCI6MTc4OTEyNzM1OTczN30=; __stp=eyJ2aXNpdCI6Im5ldyIsInV1aWQiOiJkODM3ZmZmNi0wN2VkLTQ4NGUtOTI2MS0zOWUyZjUzZDFjMjYifQ==; __stgeo=IjAi; __stbpnenable=MA==; __stdf=MA==; COOKIE_RESET=true; platform=WEB; _sp_ses.1305=*; latitude=12.935535; longitude=77.601536; city=Bengaluru; pincode=560029; x-global-config=%7B%22platform%22%3A%22WEB%22%2C%22viewport%22%3A%22Web%22%2C%22isMobile%22%3Afalse%2C%22isLoggedIn%22%3Afalse%7D; _sp_id.1305=c7aee635-a482-48a4-8753-974494868fb1.1788581515.2.1789128796.1788581532.a627f0df-16dd-46dd-ab58-6938146460f7.f0b5418e-9ac1-4e47-b4e8-5ba6efa424c9.4808b676-b2d0-4a27-8ef1-9a86727735eb.1789127400942.8; __stgeo=IjAi; __stbpnenable=MA%3D%3D; _ga=GA1.1.997198733.1788581509; spid.1305=f8487c06-fa75-4506-b32b-f69325a530f2.1789127359.1.1789128823..ede58b70-1cbe-40df-9bf7-1731f9d31ab4..dffac67c-832a-495b-9b65-f3b8b638d433.1789127359484.8; _ga_9ZX5K6Y9GT=GS2.1.s1789128190^$o4^$g1^$t1789129009^$j11^$l0^$h0; WZRK_S_649-47W-Z55Z=%7B%22p%22%3A7%2C%22s%22%3A1789127358%2C%22t%22%3A1789129010%7D");

        const raw = "{\"city\":\"Bengaluru\",\"pincode\":560029,\"ignoreLoader\":true,\"category\":\"Default\",\"loadSubCategories\":true,\"contractIds\":[10386],\"subCategory\":\"CENTRE VISIT\"}";

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("https://www.medibuddy.in/WAPI/Labs/v2/PackagesListing", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setMedicine(result.packages)
                const sub = result.packages.map((item) => item.subCategories[0])
                console.log(sub)
            }
            )
            .catch((error) => console.error(error));
        // const sub=new Set()

        // let url = `https://www.medibuddy.in/WAPI/Labs/v2/PackagesListing`
        // let { data } = await axios.post(url, { city: "Bengaluru", pincode: 560029, ignoreLoader: true, category: "Default", loadSubCategories: true, contractIds: [10386], subCategory: "CENTRE VISIT" }
        // {
        //     headers:{
        //         "Content-Type":"application/json;charset=UTF-8",
        //         "accept":"application/json, text/plain, */*",
        //         "accept-language":"en-US,en;q=0.9",
        //         "accesstoken":"",
        //         "booking_platform":"DESKTOP_WEB",
        //         "browser_fingerprint_id":"1613542767222649776",
        //         "city"



        //     }
        // }
    }
    useEffect(() => {
        fetchMedicine()
    }, [])
    return <>
        <div className="main">
            <p>Featured Health Check-up Packages</p>
            <div className="flex">
                <div className="bg-blue-100 px-3 py-2">Popular</div>
                <div className="bg-blue-100 px-3 py-2">Full Body Checkup</div>
                <div>Centre Visit</div>
            </div>
            <div className="flex flex-wrap">
                {
                    medicine?.map((item) => (
                        <div className="border-1 border-grey-300 rounded-lg shadow-sm gap-4 p-4 bg-grey-100 w-[200px]">
                            <div>{item.packageName}</div>
                            <div>{item.fastingHoursText}</div>
                            <div>{item.testCount}</div>
                            <div>
                                {
                                    item.testsSummary.map((test) => (
                                        <div>{test}</div>
                                    ))
                                }
                            </div>
                            <div>
                                <div>{item.fastingHoursText}</div>
                                <div>Available At: Home</div>
                            </div>
                            <div>
                                <span>{item.price}</span>
                                <span className="ms-4">3 % OFF</span>
                            </div>
                            <div>
                                <span>{item.price - (item.price * 3 / 100)}/-</span>
                                <span>Onwards</span>
                                <button >Add</button>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>

    </>
}
export default Medicine