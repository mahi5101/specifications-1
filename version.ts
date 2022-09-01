const data=[{
    version: "4.1.3" ,
    releaseDate:"august 2, 2010",
    bugs:["Fixes issue"],
    features:["72A","95Z"],
    author:["samsung","apple"],
    versionType:"major"
},
{
version:"4.8.1",
    releaseDate:"september 22, 2010",
    bugs:["performance"],
    features:["64A","85K"],
    author:["vivo","xiamo"],
    versionType:"Enhancement"
},
{
version:"5.1.1",
    releaseDate:"May 7, 2012",
    bugs:["Fixes battery drain bug."],
    features:["78A","82B"],
    author:["xioam","poco"],
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

function findByUsingReleaseYear(year:any){
    console.log("---------------------------------------------------------------------------")
    let filteredYear=data.filter(n=>n.releaseDate.includes(year))
    console.log(`${filteredYear.length} versions were released in Year ${year}`)
    console.table(filteredYear)
    console.log("---------------------------------------------------------------------------")
}
function findByUsingBug(str:any){
    console.log("---------------------------------------------------------------------------")
    let bug=data.filter(n=>n.bugs.includes(str))
    console.log(`${bug.length} version have ${str} Bug...`)
    console.table(bug)
    console.log(bug.length,"Bugs")
    console.log("---------------------------------------------------------------------------")
}
function findByUsingType(type:any){
    console.log("---------------------------------------------------------------------------")
    let findType=data.filter(n=>n.versionType.includes(type))
    console.log(`${findType.length} versions have ${type} type...`)
    console.table(findType)
    console.log("---------------------------------------------------------------------------")
}
function findByUsingFeature(str:any){
    console.log("---------------------------------------------------------------------------")
    let feature=data.filter(n=>n.features.includes(str))
    console.log(`${feature.length} versions have ${str} Feature...`)
    console.table(feature)
    console.log("---------------------------------------------------------------------------")
}
function findByUsingAuthor(name:any){
    console.log("---------------------------------------------------------------------------")
    let authorName=data.filter(n=>n.author.includes(name))
    console.log(`${authorName.length} version developed by ${name}...`)
    console.table(authorName)
    console.log("---------------------------------------------------------------------------")
}
function findByUsingVersion(ver:any){
    console.log("---------------------------------------------------------------------------")
    let version=data.filter(n=>n.version==ver)
    console.table(version)
    console.log("---------------------------------------------------------------------------")
}
findByUsingType("patch")
findByUsingBug("Stability")
findByUsingReleaseYear(2010)
findByUsingFeature("67A")
findByUsingAuthor("Apple")
findByUsingVersion("5.1.1")

