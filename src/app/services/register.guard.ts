import { CadastroComponent } from './../demos/reactiveForms/cadastro/cadastro.component';
import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";

@Injectable()
export class RegisterGuard implements CanDeactivate<CadastroComponent> {
    
    canDeactivate(component: CadastroComponent) {
        if(component.mudancasNaoSalvas) {
            return window.confirm('Tem certeza que deseja abandonar o preenchimento do formulário?');
        }
        return true
    }
}