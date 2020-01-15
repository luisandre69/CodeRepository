var jsonData = JSON.parse(responseBody);

// console.log(jsonData.data)

// let myMap = new Map()
let id = "id";
let date = "date";
let info;

// for (j = 0; j < jsonData.data.length; j++) {

// let flowsdata = jsonData.data[j].data.flows.data;
// for(i = 0; i < flowsdata.length; i++) {
// info = flowsdata[i].data;

//     myMap.set(id, info.id);
//     myMap.set(date, info.active_from);

//         console.log("date", myMap.get(date));
// console.log("id:", myMap.get(id));

// }
const myMap = [{
        "date": "2018-08-24 00:00:00",
        "id": 2626
    },

    {
        "date": "2019-05-01 00:00:00",
        "id": 3721
    },
    {
        "date": "2019-11-15 00:00:00",
        "id": 3988
    }
]


myMap.forEach((myMap, index) => myMap.abc = index + 1);
console.log(myMap);




console.log("###########################")
// }