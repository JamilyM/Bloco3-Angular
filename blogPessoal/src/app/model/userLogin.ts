import { Postagem } from "./postagem"

export class UserLogin{
    public id: number
    public usuario: string
    public email: string
    public nome: string
    public senha: string
    public foto: string
    public tipo: string
    public token: string
    public postagem: Postagem[]
}