import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  usuario: Usuario = new Usuario()

  confirmarSenha: string
  tiposUsuario: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  confirmSenha(event: any){
    this.confirmarSenha = event.target.value
  }

  tipoUsuario(event: any){
    this.tipoUsuario = event.target.value 
  }

  cadastrar(){
    this.usuario.tipo = this.tiposUsuario

    if(this.usuario.senha != this.confirmarSenha){
      console.log(this.usuario.senha)
      console.log(this.confirmarSenha)

      alert('As senhas estão Diferentes')
    } 
    else{
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        this.router.navigate(['/login'])
        alert('Usuario Cadastrado com sucesso!')
      })
      }
    }
  }

