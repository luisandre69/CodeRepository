const a = [{
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


var mostRecentDate = new Date(Math.max.apply(null, a.map(e => {
    return new Date(e.date);
})));
var mostRecentObject = a.filter(e => {
    var d = new Date(e.date);
    return d.getTime() == mostRecentDate.getTime();
})[0];

console.log(mostRecentObject.id);