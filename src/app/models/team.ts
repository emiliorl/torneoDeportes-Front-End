export class Team{
    constructor(
        public _id: String,
        public nameTeam: String,
        public coach: String,
        public nameStadium: String,
        public adress: String,
        public country: String,
        public state: String,
        public city: String,
        public imageTeam: String,
        public points: Number,
        public goalsInFavor: Number,
        public goalsAgainst: Number,
        public matchPlayed: Number,
        public players: [],
        public league: []
    ){}  
}