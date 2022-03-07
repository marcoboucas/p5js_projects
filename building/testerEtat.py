import os
import re

Bornes=[
{
    'nom':'Iphone Thomas',
    'ip':'192.168.0.24'
},
{
    'nom':'Honor Marco',
    'ip':'192.168.0.43'
},
{
    'nom':'ChromeCast',
    'ip':'192.168.0.31'
},
{
    'nom':'Magics',
    'ip':'138.195.137.14'
}
]
def recuperer_informations(ligne):
    resultats=re.findall("([0-9]+)", ligne)
    print(resultats)
    
def testerEtat(borne):
    nom=borne['nom']
    ip=borne['ip']
    ping=os.popen("ping "+ip+" -n 5 -w 800","r")
    lignes=ping.readlines()[-1]
    informations=recuperer_informations(lignes)
    return lignes
    
responses=[]
for borne in Bornes:
    nom=borne['nom']
    print('Test de connexion sur {}'.format(nom))
    responses.append([nom,testerEtat(borne)])
    
print(responses)