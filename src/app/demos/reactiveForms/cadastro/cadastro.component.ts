import { Usuario } from './models/usuario';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MASKS, NgBrazilValidators } from 'ng-brazil';
import { CustomValidators } from 'ng2-validation';

@Component({
	selector: 'app-cadastro',
	templateUrl: './cadastro.component.html',
	styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

	hide = true;

	cadastroForm: FormGroup;
	usuario: Usuario;
	formResult: string = '';
	MASKS = MASKS;

	constructor(private fb: FormBuilder) { }

	ngOnInit(): void {

		let password = new FormControl('', [Validators.required, CustomValidators.rangeLength([6, 15])]);
		let senhaConfirmacao = new FormControl('', [Validators.required, CustomValidators.rangeLength([6, 15]), CustomValidators.equalTo(password)]);

		this.cadastroForm = this.fb.group({
			nome: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
			cpf: ['', [Validators.required, NgBrazilValidators.cpf]],
			email: ['', [Validators.required, Validators.email]],
			senha: password,
			senhaConfirmacao: senhaConfirmacao
		});
	}

	adicionarUsuario() {
		if (this.cadastroForm.dirty && this.cadastroForm.valid) {
			this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);
			this.formResult = JSON.stringify(this.cadastroForm.value);
		} else {
			this.formResult = "Não submeteu!!!"
		}
	}
}
