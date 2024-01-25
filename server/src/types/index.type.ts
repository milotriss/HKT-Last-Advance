export interface ICategory {
    id?:number
    name:string
}
export interface IQuestion {
    id?:number
    categoryId:number
    content:string
    level:number
    createdAt?:string
}
export interface IAnswer {
    id?:number
    questionId:number
    isAnswer:number
    content:string
    createdAt?:string
}