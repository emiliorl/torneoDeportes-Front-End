export class Player{

    constructor(
        public _id: String,
        public name: String,
        public lastname: String,
        public country: String,
        public age: Number,
        public height: Number,
        public weight: Number,
        public birthday: Date,
        public team: []
    ){}  
}