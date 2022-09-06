// team List
interface MatchOder{
    Round:string|number,
    player1:string,
    player2:string,
    MatchId:string,
    winner:string
}
let cricketTournamentTeamList =
 [{ teamID: "csk", team: "chennai superkings", Rank: 1 },
{ teamID: "mi", team: "mumbai indians", Rank: 2 },
{ teamID: "sun", team: "Sunrises", Rank: 3 },
{ teamID: "kkr", team: "kolkatha", Rank: 4 },
{ teamID: "rcb", team: "bangolre", Rank: 5 },
{ teamID: "xi", team: "punjub", Rank: 6 },
{ teamID: "dl", team: "Dehil", Rank: 7 },
{ teamID: "guj", team: "Gujarath", Rank: 8 }]

// Initial Match Schedule
let match = []
for (let i = 0; i < cricketTournamentTeamList.length / 2; i++) {
    let ob:any = {}
    ob["Team"] = cricketTournamentTeamList[i].team
    ob["Opponent"] = cricketTournamentTeamList[cricketTournamentTeamList.length - 1 - i].team
    match.push(ob)

}

// Scheduled Matches
let scheduledMatches:any = []
let poolList:any = []
for (let i=0;i<match.length;i++) {
    if (i % 2 == 0) {
        scheduledMatches.push(match[i])
    }

    else {
        poolList.push(match[i])
    }
}
for (let i of poolList.reverse()) {
    scheduledMatches.push(i)
}
// Finding Rank By Using team Name
function findingRankByUsingName(teamName:any) {
    let rank = 0;
    cricketTournamentTeamList.forEach(element => {
        if (element.team == teamName) {
            rank = element.Rank
        }
    });
    return rank
}
// Finding Probability By using team Rank
function probability(t1:any, t2:any) {
    let a = findingRankByUsingName(t1)
    let b = findingRankByUsingName(t2)
    let c = Math.round(100 / (Math.abs(a - b) + 1))
    b = c
    a = 100 - b
    let probList = []
    for (let d = 1; d <= 100; d++) {
        if (d <= a) {
            probList.push(t1)
        }
        else {
            probList.push(t2)
        }
    }
    let ran = Math.floor(Math.random() * 100)
    a = probList[ran]
    return a
}
let round = 1 // Calculating Round
let matchOrder:MatchOder[]= [] // Match List and winner too
// Function for Scheduling the Match Winner and Match Orders
function winner() {
    let winners = []
    let winnerList = []
    for (let i of scheduledMatches) {
        winners.push(probability(i.Team, i.Opponent))
    }
    for (let i = 0; i < scheduledMatches.length; i++) {
        let ob:any = {}
        ob["Round"] = round
        ob["team1"] = scheduledMatches[i].Team
        ob["team2"] = scheduledMatches[i].Opponent
        ob["MatchID"] = matchIdGenerator(scheduledMatches[i].Team, scheduledMatches[i].Opponent)
        ob["Winner"] = winners[i]
        matchOrder.push(ob)
    }
    for (let i = 0; i < winners.length; i = i + 2) {
        let ob:any = {}
        ob["Team"] = winners[i]
        ob["Opponent"] = winners[i + 1]
        winnerList.push(ob)
    }
    scheduledMatches = winnerList
    if (scheduledMatches.length != 1) {
        round++
        winner()
    }
    else {
        for (let i of scheduledMatches) {
            let ob:any = {}
            ob["Round"] = "Final"
            ob["team1"] = i.Team
            ob["team2"] = i.Opponent
            ob["MatchID"] = matchIdGenerator(i.Team, i.Opponent)
            ob["Winner"] = probability(i.Team, i.Opponent)
            matchOrder.push(ob)
        }
    }
}
winner()
console.table(matchOrder)

// Generating the Match Id 
function matchIdGenerator(str1:any, str2:any) {
    let rankOfStr1 = findingRankByUsingName(str1)
    let rankOfStr2 = findingRankByUsingName(str2)
    let idForStr1 = str1.toUpperCase().slice(0, 2)
    let idForStr2 = str2.toUpperCase().slice(0, 2)
    let id = idForStr1 + idForStr2 + rankOfStr1.toString() + rankOfStr2
    return id
}

// Finding Match Detials by Using Match ID
function findMatchDetailsByMatchId(str:any){
     matchOrder.forEach(element=>{
            console.log("---------------------------------------------------------------------------------------")
            console.log(`Match Details of "${str} Match ID"`)
            console.table([element])
            console.log("---------------------------------------------------------------------------------------")
        
    });
}
findMatchDetailsByMatchId("ROSV18")

// Finding Match Details By Round
function findMatchDetailsByRound(num:any){
    let list:any=[]
     matchOrder.forEach(element => {
        if(element.Round==num){
            list.push(element)
        }
    });
    console.log("---------------------------------------------------------------------------------------")
    console.log(`Match List for Round "${num}"`)
    console.table(list)
    console.log("---------------------------------------------------------------------------------------")
}
findMatchDetailsByRound(2)

// Finding team Details by using team ID
function findteamByUsingteamId(id:any){
    cricketTournamentTeamList.forEach(element => {
        if(element.teamID==id){
            console.log("---------------------------------------------------------------------------------------")
            console.log(`team Details of "${id} ID"`)
            console.table([element])
            console.log("---------------------------------------------------------------------------------------")
        }
    });
}