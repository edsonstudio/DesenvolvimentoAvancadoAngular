import { fromEvent, merge, Observable } from 'rxjs';
import { ValidationMessages, GenericValidator, DisplayMessage } from './generic-form-validation';
import { Usuario } from './models/usuario';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormControlName } from '@angular/forms';
import { MASKS, NgBrazilValidators } from 'ng-brazil';
import { CustomValidators } from 'ng2-validation';

@Component({
	selector: 'app-cadastro',
	templateUrl: './cadastro.component.html',
	styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit, AfterViewInit {

	@ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

	hide = true;

	cadastroForm: FormGroup;
	usuario: Usuario;
	formResult: string = '';
	MASKS = MASKS;

	validationMessages: ValidationMessages;
	genericValidator: GenericValidator;
	displayMessage: DisplayMessage = {};

	constructor(private fb: FormBuilder) { 
		this.validationMessages = {
			nome: {
				required: 'O nome é requerido',
				minlength: 'O nome precisa ter no mínimo 2 caracteres',
				maxlength: 'O nome precisa ter no máximo 150 caracteres'
			},
			cpf: {
				required: 'Informe o CPF',
				cpf: 'CPF em formato inválido'
			},
			email: {
				required: 'Informe o e-mail',
				email: 'E-mail inválido'
			},
			senha: {
				required: 'Informe a senha',
				rangeLength: 'A senha deve possuir entre 6 e 15 caracteres'
			},
			senhaConfirmacao: {
				required: 'Informe a senha novamente',
				rangeLength: 'A senha deve possuir entre 6 e 15 caracteres',
				equalTo: 'As senhas não conferem'
			}
		};

		this.genericValidator = new GenericValidator(this.validationMessages);
	}
	
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
	
	ngAfterViewInit(): void {
		let controlBlurs: Observable<any>[] = this.formInputElements
		.map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

		merge(...controlBlurs).subscribe(() => {
			this.displayMessage = this.genericValidator.processarMensagens(this.cadastroForm);
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
