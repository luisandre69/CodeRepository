var jsonData = JSON.parse(responseBody);

let myMap = new Map()
let a = [];
let info;

for (j = 0; j < jsonData.data.length; j++) {

    let flowsdata = jsonData.data[j].data.flows.data;
    for (i = 0; i < flowsdata.length; i++) {
        info = flowsdata[i].data;
        a[i] = info;

    }
    console.log(a)
    var mostRecentDate = new Date(Math.max.apply(null, a.map(e => {
        return new Date(e.active_from);
    })));
    var mostRecentObject = a.filter(e => {
        var d = new Date(e.active_from);
        return d.getTime() == mostRecentDate.getTime();
    })[0];

    console.log(mostRecentObject);

    console.log("###########################")
}