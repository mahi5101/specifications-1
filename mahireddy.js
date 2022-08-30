data=[{
    version: "3.1.3" ,
    releaseDate:"February 2, 2010",
    bugs:["Fixes issue"],
    features:["67A","87Z"],
    author:["Apple","Vivo"],
    versionType:"patch"
},
{
version:"4.2.1",
    releaseDate:"November 22, 2010",
    bugs:["performance"],
    features:["67A","76K"],
    author:["Oppo","Samsung"],
    versionType:"Enhancement"
},
{
version:"5.1.1",
    releaseDate:"May 7, 2012",
    bugs:["Fixes battery drain bug."],
    features:["91A","55B"],
    author:["Apple","Samsung"],
    versionType:"patch"
},
{
version:"6.1.6",
    releaseDate:"February 21, 2014",
    bugs:["audio profile for speakerphone"],
    features:["56A","34A"],
    author:["Apple","Xiomi"],
    versionType:"major"
},
{
version:"7.1.2",
    releaseDate:"June 30, 2014",
    bugs:["Stability"],
    features:["45G","45J"],
    author:["Xiomi"],
    versionType:"patch"
}
]

function findByReleaseYear(year){
    console.log("---------------------------------------------------------------------------")
    filteredYear=data.filter(n=>n.releaseDate.includes(year))
    console.log(`${filteredYear.length} versions were released in Year ${year}`)
    console.table(filteredYear)
    console.log("---------------------------------------------------------------------------")
}
function findByBug(str){
    console.log("---------------------------------------------------------------------------")
    bug=data.filter(n=>n.bugs.includes(str))
    console.log(`${bug.length} version have ${str} Bug...`)
    console.table(bug)
    console.log(bug.length,"Bugs")
    console.log("---------------------------------------------------------------------------")
}
function findByType(type){
    console.log("---------------------------------------------------------------------------")
    findType=data.filter(n=>n.versionType.includes(type))
    console.log(`${findType.length} versions have ${type} type...`)
    console.table(findType)
    console.log("---------------------------------------------------------------------------")
}
function findByFeature(str){
    console.log("---------------------------------------------------------------------------")
    feature=data.filter(n=>n.features.includes(str))
    console.log(`${feature.length} versions have ${str} Feature...`)
    console.table(feature)
    console.log("---------------------------------------------------------------------------")
}
function findByAuthor(name){
    console.log("---------------------------------------------------------------------------")
    authorName=data.filter(n=>n.author.includes(name))
    console.log(`${authorName.length} version developed by ${name}...`)
    console.table(authorName)
    console.log("---------------------------------------------------------------------------")
}
function findByVersion(ver){
    console.log("---------------------------------------------------------------------------")
    version=data.filter(n=>n.version==ver)
    console.table(version)
    console.log("---------------------------------------------------------------------------")
}
findByType("patch")
findByBug("Stability")
findByReleaseYear(2010)
findByFeature("67A")
findByAuthor("Apple")
findByVersion("5.1.1")

