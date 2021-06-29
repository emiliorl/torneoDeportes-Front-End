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
        public points: Number,
        public players: [],
        public league: [],
    ){}  
}