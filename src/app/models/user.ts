export class User{

    constructor(
        public _id: string,
        public name: String,
        public lastname: String,
        public username: String,
        public rol: String,
        public phone: Number,
        public email: String,
        public password: String,
        public image: String
    ){}  
}