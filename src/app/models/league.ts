export class League{

    constructor(
        public _id: String,
        public nameLeague: String,
        public descriptionLeague: String,
        public startingDate: Date,
        public user: [],
        public share: String,
        public teams: [],
        public matches: [],
        public imageLeague: String
    ){}  
}