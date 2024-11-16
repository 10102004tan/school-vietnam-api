
const fetchDistrictQuery = async (provinceId) => {
    const body = {
        "operationName": "fetchDistrictQ",
        "variables": {
            "province": provinceId
        },
        "query": "query fetchDistrictQ($province: String!) {\n  fetchDistrict(province: $province) {\n    id\n    name\n    __typename\n  }\n}\n"
    }
    const response = await fetch(`https://violympic.vn/graphql`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(body)
    });
    const data = await response.json();
    return JSON.stringify(data,null,2);
}

const fetchSchoolQuery = async (districtId) => {
    const body = {
        "operationName": "fetchSchoolQ",
        "variables": {
            "district": districtId
        },
        "query": "query fetchSchoolQ($district: String!) {\n  fetchSchool(district: $district) {\n    id\n    name\n    __typename\n  }\n}\n"
    }
    const response = await fetch(`https://violympic.vn/graphql`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(body)
    });
    const data = await response.json();
    return JSON.stringify(data,null,2);
}

// fetchDistrictQuery("59cdc41a9d2a1700271c2b0b").then(data => console.log(data));
// fetchSchoolQuery("59cdc41b9d2a1700271c2b7f").then(data => console.log(data));

