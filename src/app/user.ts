export class User {

    constructor(public login: string, public bio: string, public id: number, public avatar_url: string, public email: string, public location: string, public followers: number, public following: number, public created_at: Date){

    }
}
