import { Tema } from "./tema"
import { User } from "./user"

export class Postagem{
    public Id: number
    public titulo: string 
    public Texto: string
    public data: Date
    public usuario: User
    public tema:Tema 
}
