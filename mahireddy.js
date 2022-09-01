data = [{
    version: "3.1.3",
    releaseDate: new Date("02-02-2010"),
    bugID: "BUG1",
    features: ["Enhanced accessibility", "Expandable notifications."],
    author: ["Apple", "Vivo"],
    versionType: "patch"
},
{
    version: "4.2.1",
    releaseDate: new Date("05-11-2010"),
    bugID: "BUG2",
    features: ["Enhanced accessibility.", "Multichannel audio"],
    author: ["Oppo", "Samsung"],
    versionType: "Enhancement"
},
{
    version: "5.1.1",
    releaseDate: new Date("07-05-2012"),
    bugID: "BUG3",
    features: ["Calendar provider enhancements.", "Accessibility refinements such as improved content access for screen readers"],
    author: ["Apple", "Samsung"],
    versionType: "patch"
},
{
    version: "6.1.6",
    releaseDate: new Date("01-02-2014"),
    bugID: "BUG4",
    features: ["Stability improvements", "Better camera performance"],
    author: ["Apple", "Xiomi"],
    versionType: "major"
},
{
    version: "7.1.2",
    releaseDate: new Date("09-06-2014"),
    bugID: "BUG5",
    features: ["Smoother screen rotation", "Stability improvements"],
    author: ["Xiomi"],
    versionType: "patch"
}
]
// Bug list
const bugList = [{
    bugID: "BUG1",
    bug: ["Fix issue", "performance enhancements bug."]
}, {
    bugID: "BUG2",
    bug: ["Fix Bluetooth audio streaming bugs.", "Maps navigation and alarms"]
}, {
    bugID: "BUG3",
    bug: ["Fixed a bug in the People application where December was not displayed on the date selector when adding an event to a contact"]
}, {
    bugID: "BUG4",
    bug: ["audio profile for speakerphone bugs", "video playback and password failures"]
}, {
    bugID: "BUG5",
    bug: ["file-based encryption bugs."]
}
]
// Find by Released Year
function findByReleaseYear(year) {
    console.log("---------------------------------------------------------------------------")
    filteredYear = data.filter(n => n.releaseDate.toString().includes(year))
    console.log(`${filteredYear.length} versions were released in Year ${year}`)
    console.table(filteredYear)
    console.log("---------------------------------------------------------------------------")
}
// Find By BugID
function findByBug(str) {
    console.log("---------------------------------------------------------------------------")
    console.log("Bugs :")
    bugList.forEach(element => {
        if (element.bugID == str) {
            console.log(element.bug)
        }
    })
    findBug = data.filter(n => n.bugID.includes(str))
    console.log(`The version which have "${str}" ID...`)
    console.table(findBug)
    console.log("---------------------------------------------------------------------------")

}
// Find by Type
function findByType(type) {
    console.log("---------------------------------------------------------------------------")
    findType = data.filter(n => n.versionType.includes(type))
    console.log(`${findType.length} versions have ${type} type...`)
    console.table(findType)
    console.log("---------------------------------------------------------------------------")
}
// Find by Feature
function findByFeatures(str) {
    console.log("---------------------------------------------------------------------------")
    count = 0
    data.forEach(element => {
        for (i of element.features) {
            if (i.includes(str)) {
                console.log(element)
                count++
            }
        }
    })
    console.log(`${count} versions includes "${str}" feature...`)
    console.log("---------------------------------------------------------------------------")
}
// Finding which author had more Updated
function findHighestUpdatedByAuthor() {
    authorNames = []
    data.forEach(element => {
        for (i of element.author) {
            authorNames.push(i)
        }
    });
    m = 1
    authorName = 0;
    mostFrequent = 1
    for (i = 0; i < authorNames.length; i++) {
        for (j = 1; j < authorNames.length; j++) {
            if (authorNames[i] == authorNames[j]) {
                m++
            }
            if (mostFrequent < m) {
                mostFrequent = m
                authorName = authorNames[i]
            }
        }
        m = 0
    }
    console.log("---------------------------------------------------------------------------")
    console.log(`The author ${authorName} has worked on more no of releases, the count is ${mostFrequent}`)
    console.log("---------------------------------------------------------------------------")
}


//---------------------------------------------------------------------------------------
// Question 1
// How many releases were made in year
console.log("Question 1")
findByReleaseYear(2010)

// Question 2
// In which release specific bugid is present
console.log("Question 2")
findByBug("BUG4")

// Question 3
// Which author has worked in many releases
console.log("Question 3")
findHighestUpdatedByAuthor()

// Question 4
// How many releases were type of major
console.log("Question 4")
findByType("major")

// Question 5
// How many versions have the specific feature name
console.log("Question 5")
findByFeatures("Stability")

//---------------------------------------------------------------------------------------
