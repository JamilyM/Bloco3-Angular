import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  user: User = new User
  confirmSenha: string
  tipoUsuario: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)  
  }

  confirmaSenha(event: any){
    this.confirmSenha= event.target.value
  }

  tipoUser(event: any){
    this.tipoUsuario = event.target.value
  }

  cadastrar(){
    this.user.tipo = this.tipoUsuario

    if (this.user.senha != this.confirmSenha) {
      alert('As senhas não são compatíveis, tente novamente.')
    } else {
      alert('Usuário cadastrado com sucesso!')
      this.router.navigate(['/login'])
      this.authService.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
      })
    }
    
  }

}
