/*
Recuperation des données :
tt="[";for (key of Object.keys(individus)){tt+='{"name":"'+individus[key]['pseudo']+'"},'; };tt+="]"

tt="[\n";for (let relation of relations){tt+='\t{"source":"'+individus[relation[0]].pseudo+'","target":"'+individus[relation[1]].pseudo+'","value":1},\n';};tt+="]";
*/
individus={
	"malaclypse":{
		'nom':'client',
		'prenom':'1',
		'pseudo':"Malaclypse",
		'annee':"2018"
	},
	"paladorn":{
		'nom':'client',
		'prenom':'2',
		'pseudo':"Paladorn",
		'annee':"2018"
	},
	"prissy":{
		'nom':'client',
		'prenom':'3',
		'pseudo':'Prissy',
		'annee':"2018"
	},
	"kermill":{
		'nom':'client',
		'prenom':'3',
		'pseudo':'Kermill',
		'annee':"2018"
	},
	"aypee":{
		'nom':'client',
		'prenom':'3',
		'pseudo':'Aypee',
		'annee':"2018"
	},
	"pamplemouss":{
		'nom':'client',
		'prenom':'3',
		'pseudo':'Pamplemouss',
		'annee':"2018"
	},
	"kaynl":{
		'nom':'client',
		'prenom':'3',
		'pseudo':'Kaynl',
		'annee':"2018"
	},
	"manderesse":{
		'nom':'client',
		'prenom':'3',
		'pseudo':'Manderesse',
		'annee':"2018"
	},
	"cuisseDepoulet":{
		'nom':'client',
		'prenom':'3',
		'pseudo':'CuisseDePoulet',
		'annee':"2018"
	},
	"lully":{
		'nom':'client',
		'prenom':'3',
		'pseudo':'Lully',
		'annee':"2018"
	},
	"chiahetcho":{
		'nom':'client',
		'prenom':'3',
		'pseudo':'Chiahetcho',
		'annee':"2018"
	},
	"chiahetcho":{
		'nom':'client',
		'prenom':'3',
		'pseudo':'Chiahetcho',
		'annee':"2018"
	},
	"redarkyan":{
		'nom':'client',
		'prenom':'3',
		'pseudo':'Redarkyan',
		'annee':"2018"
	},
	"captFlam":{
		'nom':'client',
		'prenom':'3',
		'pseudo':'CaptFlam',
		'annee':"2018"
	},
	"vic":{
		'nom':'client',
		'prenom':'3',
		'pseudo':'Vic',
		'annee':"2018"
	},
	"remi":{
		'nom':'client',
		'prenom':'3',
		'pseudo':'Rémi',
		'annee':"2018"
	},




	"kagamino":{
		'nom':'client',
		'prenom':'3',
		'pseudo':'Kagamino',
		'annee':"2017"
	},
	"curlyboy":{
		'nom':'client',
		'prenom':'3',
		'pseudo':'Curlyboy',
		'annee':"2017"
	},
	"srykah":{
		'nom':'client',
		'prenom':'3',
		'pseudo':'Srykah',
		'annee':"2017"
	},
	"dric0":{
		'nom':'client',
		'prenom':'3',
		'pseudo':'Dric0',
		'annee':"2017"
	},
	/*
	"gradicule":{
		'nom':'client',
		'prenom':'3',
		'pseudo':'Gradicule',
		'annee':"2017"
	},
	*/
	"majora":{
		'nom':'client',
		'prenom':'3',
		'pseudo':'Majora',
		'annee':"2017"
	},
	"constant":{
		'nom':'client',
		'prenom':'3',
		'pseudo':'Constant',
		'annee':"2017"
	},
	"stickell":{
		'nom':'client',
		'prenom':'3',
		'pseudo':'Stickell',
		'annee':"2017"
	},




	"frost":{
		'nom':'client',
		'prenom':'3',
		'pseudo':'Frost',
		'annee':"2016"
	},
	"japillow":{
		'nom':'client',
		'prenom':'3',
		'pseudo':'Japillow',
		'annee':"2016"
	},
	"toadjaune":{
		'nom':'client',
		'prenom':'3',
		'pseudo':'ToadJaune',
		'annee':"2014"
	},
	"kv":{
		'nom':'client',
		'prenom':'3',
		'pseudo':'Kvykvzx',
		'annee':"2016"
	},
	"froux":{
		'nom':'client',
		'prenom':'3',
		'pseudo':'Froux',
		'annee':"2016"
	},
	"biret":{
		'nom':'client',
		'prenom':'3',
		'pseudo':'Biret',
		'annee':"2016"
	},
}
relations=[
	['kagamino','malaclypse'],
	['kagamino','paladorn'],
	['kagamino','prissy'],
	['kagamino','kermill'],
	['kagamino','lully'],

	['curlyboy','aypee'],
	['curlyboy','pamplemouss'],
	['curlyboy','redarkyan'],

	['stickell','cuisseDepoulet'],
	['stickell','kaynl'],
	['stickell','prissy'],

	['srykah','kaynl'],
	['srykah','manderesse'],
	['srykah','captFlam'],
	['srykah','cuisseDepoulet'],

	['dric0','chiahetcho'],
	['dric0','remi'],

	['frost','kagamino'],
	['frost','curlyboy'],
	['frost','srykah'],
	['frost','dric0'],
	['frost','redarkyan'],

	['japillow','kagamino'],
	['japillow','dric0'],
	['japillow','stickell'],

	['toadjaune','kagamino'],

	['kv','srykah'],
	['kv','majora'],

	['froux','curlyboy'],

	['biret','constant'],

	['constant','vic'],

	['majora','manderesse'],
	['majora','kaynl'],
]

colors={
	"2018":[ 245, 135, 3 ],
	"2017":[ 122, 218, 0 ],
	"2016":[ 0, 201, 198 ],
	"2014":[255, 215, 123]
}
