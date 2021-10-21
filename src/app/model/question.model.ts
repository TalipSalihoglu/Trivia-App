// export interface Question{
//     id:number,
//     answer:string,
//     question:string,
//     value:number,
//     airdate:string,
//     created_at:string,
//     updated_at:string,
//     category_id:number,
//     // game_id:number,
//     invalid_count:number
// }

export class Question{
    id?:number
    answer?:string
    question?:string
    value?:number
    airdate?:string
    created_at?:string
    updated_at?:string
    category_id?:number
    game_id?:number
    invalid_count?:number

    constructor(){}
}


// {"id":48576,"answer":"Stephen King","question":"This author's \"Storm of the Century\" rained over the airwaves in February 1999","value":200,"airdate":"2002-05-21T12:00:00.000Z","created_at":"2014-02-11T23:15:22.034Z","updated_at":"2014-02-11T23:15:22.034Z","category_id":6062,"game_id":null,"invalid_count":null,"category":{"id":6062,"title":"february sweeps","created_at":"2014-02-11T23:15:21.866Z","updated_at":"2014-02-11T23:15:21.866Z","clues_count":5}}