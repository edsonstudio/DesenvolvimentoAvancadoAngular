import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Filme } from './filme';
import { ImageFormaterPipe } from './image.pipe';

@Component({
	selector: 'app-filmes',
	templateUrl: './filmes.component.html',
	styleUrls: ['./filmes.component.css'],
	providers: [
		ImageFormaterPipe
	],
	animations: [
		trigger('detailExpand', [
			state('collapsed', style({ height: '0px', minHeight: '0' })),
			state('expanded', style({ height: '*' })),
			transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
		]),
	],
})
export class FilmesComponent {

	filmes: Filme[];
	mapped: Filme[];

	constructor(private imageformat: ImageFormaterPipe) {}

	columnsToDisplay = ['nome', 'lancamento', 'valor', 'tamanho'];
	expandedElement: Filme | null;

	ngOnInit() {
		this.filmes = [
			{
				nome: 'Poeira em alto-mar',
				lancamento: new Date('12/07/1984'),
				valor: 150.00,
				imagem: 'poeira.jpg',
				tamanho: '513326980',
				descricao: 'Ao fugirem de Santoval, Didi e Peteco embarcam em um navio e acabam substituindo a dupla de apresentadores. Eles não sabem é que Sandoval trabalha na embarcação. Didi também se depara com os criminosos que negociam a compra de um mapa do tesouro.'
			},
			{
				nome: 'Um Sonho de Liberdade',
				lancamento: new Date('12/07/1994'),
				valor: 150.00,
				imagem: 'sonhoLiberdade.jpg',
				tamanho: '513326980',
				descricao: 'Andy Dufresne é condenado a duas prisões perpétuas consecutivas pelas mortes de sua esposa e de seu amante. Porém, só Andy sabe que ele não cometeu os crimes. No presídio, durante dezenove anos, ele faz amizade com Red, sofre as brutalidades da vida na cadeia, se adapta, ajuda os carcereiros, etc.'
			},
			{
				nome: 'O Poderoso Chefão',
				lancamento: new Date('01/12/1972'),
				valor: 200.00,
				imagem: 'poderosoChefaoI.jpg',
				tamanho: '1342177280',
				descricao: 'A série de filmes The Godfather consiste em três filmes de drama e suspense policial dirigidos por Francis Ford Coppola com base no romance homônimo do ítalo-americano Mario Puzo. A trilogia narra as tramas envolvendo a Família Corleone, umas das mais poderosas famílias da Máfia italiana nos Estados Unidos'
			},
			{
				nome: 'Batman: O Cavaleiro das Trevas ',
				lancamento: new Date('08/01/2008'),
				valor: 70.00,
				imagem: 'Batman2008.jpg',
				tamanho: '719974720',
				descricao: 'Com a ajuda de Jim Gordon e Harvey Dent, Batman tem mantido a ordem na cidade de Gotham. Mas um jovem e anárquico criminoso conhecido como Coringa ganha força e decide instaurar um verdadeiro caos na cidade. O justiceiro será testado psicologicamente e fisicamente como nunca fora antes em um confronto bastante pessoal. Cabe a Batman encontrar uma maneira de deter o sádico vilão antes que mais vidas sejam perdidas.'
			},
			{
				nome: 'o poderoso chefão 2',
				lancamento: new Date('01/12/1974'),
				valor: 120.00,
				imagem: 'poderosoChefaoII.jpg',
				tamanho: '1254589899',
				descricao: 'Após a máfia matar sua família, o jovem Vito foge da sua cidade na Sicília e vai para a América. Vito luta para manter sua família. Ele mata Black Hand Fanucci, que exigia dos comerciantes uma parte dos seus ganhos. Com a morte de Fanucci, o poderio de Vito cresce, mas sua família é o que mais importa para ele. Agora baseado no Lago Tahoe, Michael planeja fazer incursões em Las Vegas e Havana instalando negócios ligados ao lazer, mas descobre que aliados como Hyman Roth estão tentando matá-lo.'
			},
			{
				nome: 'Pulp Fiction: Tempo de Violência ',
				lancamento: new Date('01/08/1994'),
				valor: 190.00,
				imagem: 'PulpFiction.jpg',
				tamanho: '773039680',
				descricao: 'Os caminhos de vários criminosos se cruzam nestas três histórias de Quentin Tarantino. Um pistoleiro se apaixona pela mulher de seu chefe, um boxeador não se sai bem em uma luta e um casal tenta executar um plano de roubo que foge do controle.'
			},
			{
				nome: 'Poeira em alto-mar',
				lancamento: new Date('12/07/1984'),
				valor: 150.00,
				imagem: 'poeira.jpg',
				tamanho: '513326980',
				descricao: 'Ao fugirem de Santoval, Didi e Peteco embarcam em um navio e acabam substituindo a dupla de apresentadores. Eles não sabem é que Sandoval trabalha na embarcação. Didi também se depara com os criminosos que negociam a compra de um mapa do tesouro.'
			},
			{
				nome: 'Um Sonho de Liberdade',
				lancamento: new Date('12/07/1994'),
				valor: 150.00,
				imagem: 'sonhoLiberdade.jpg',
				tamanho: '513326980',
				descricao: 'Andy Dufresne é condenado a duas prisões perpétuas consecutivas pelas mortes de sua esposa e de seu amante. Porém, só Andy sabe que ele não cometeu os crimes. No presídio, durante dezenove anos, ele faz amizade com Red, sofre as brutalidades da vida na cadeia, se adapta, ajuda os carcereiros, etc.'
			},
			{
				nome: 'O Poderoso Chefão',
				lancamento: new Date('01/12/1972'),
				valor: 200.00,
				imagem: 'poderosoChefaoI.jpg',
				tamanho: '1342177280',
				descricao: 'A série de filmes The Godfather consiste em três filmes de drama e suspense policial dirigidos por Francis Ford Coppola com base no romance homônimo do ítalo-americano Mario Puzo. A trilogia narra as tramas envolvendo a Família Corleone, umas das mais poderosas famílias da Máfia italiana nos Estados Unidos'
			},
			{
				nome: 'Batman: O Cavaleiro das Trevas ',
				lancamento: new Date('08/01/2008'),
				valor: 70.00,
				imagem: 'Batman2008.jpg',
				tamanho: '719974720',
				descricao: 'Com a ajuda de Jim Gordon e Harvey Dent, Batman tem mantido a ordem na cidade de Gotham. Mas um jovem e anárquico criminoso conhecido como Coringa ganha força e decide instaurar um verdadeiro caos na cidade. O justiceiro será testado psicologicamente e fisicamente como nunca fora antes em um confronto bastante pessoal. Cabe a Batman encontrar uma maneira de deter o sádico vilão antes que mais vidas sejam perdidas.'
			},
			{
				nome: 'o poderoso chefão 2',
				lancamento: new Date('01/12/1974'),
				valor: 120.00,
				imagem: 'poderosoChefaoII.jpg',
				tamanho: '1254589899',
				descricao: 'Após a máfia matar sua família, o jovem Vito foge da sua cidade na Sicília e vai para a América. Vito luta para manter sua família. Ele mata Black Hand Fanucci, que exigia dos comerciantes uma parte dos seus ganhos. Com a morte de Fanucci, o poderio de Vito cresce, mas sua família é o que mais importa para ele. Agora baseado no Lago Tahoe, Michael planeja fazer incursões em Las Vegas e Havana instalando negócios ligados ao lazer, mas descobre que aliados como Hyman Roth estão tentando matá-lo.'
			},
			{
				nome: 'Matadores de Vampiras Lésbicas',
				lancamento: new Date('03/10/2009'),
				valor: 1.99,
				imagem: '',
				tamanho: '773039680',
				descricao: 'Numa pequena cidade rural do interior britânico, uma maldição ancestral aterroriza a todos, mas sobretudo os homens. É que as esposas deles são há séculos escravizadas por vampiras lésbicas. Isso até o dia em que chega ao local dois jovens desafortunados que serão oferecidos às vampiras como sacrifício.'
			}
		];

		this.mapped = this.filmes.map(filme => {
			return {
				nome: filme.nome,
				lancamento: filme.lancamento,
				valor: filme.valor,
				tamanho: filme.tamanho,
				imagem: this.imageformat.transform(filme.imagem, 'default', true),
				descricao: filme.descricao
			}
		});
	}
}