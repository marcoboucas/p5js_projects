var batiment=[];
var murs=[];
// Batiment 2C  -> Points (ETAGE 0)
batiment.push(cp( 0, 0, 0))//1
batiment.push(cp( 5, 0, 0))//2
batiment.push(cp( 5, 7, 0))//3
batiment.push(cp( 5, 9, 0))//4
batiment.push(cp( 5,11, 0))//5
batiment.push(cp( 5,13, 0))//6
batiment.push(cp( 5,15, 0))//7
batiment.push(cp( 4,15, 0))//8
batiment.push(cp( 3,15, 0))//9
batiment.push(cp( 2,15, 0))//10
batiment.push(cp( 1,15, 0))//11
batiment.push(cp( 0,15, 0))//11
batiment.push(cp( 0,13, 0))//13
batiment.push(cp( 0,11, 0))//14
batiment.push(cp( 0, 9, 0))//15
batiment.push(cp( 0, 7, 0))//16
batiment.push(cp( 3, 7, 0))//17
batiment.push(cp( 4, 7, 0))//18
batiment.push(cp( 4, 9, 0))//19
batiment.push(cp( 3, 9, 0))//20
batiment.push(cp( 2, 9, 0))//21
batiment.push(cp( 1, 9, 0))//22
batiment.push(cp( 2, 0, 0))//23
batiment.push(cp( 3, 0, 0))//24

// Batiment 2C -> Murs
murs.push([ 0,22])
murs.push([23, 1])
murs.push([ 1, 2])
murs.push([ 2, 3])
murs.push([ 3, 4])
murs.push([ 5, 6])
murs.push([ 6, 7])
murs.push([ 8, 9])
murs.push([10,11])
murs.push([11,12])
murs.push([13,14])
murs.push([14,15])
murs.push([15, 0])
murs.push([15,16])
murs.push([17, 2])
murs.push([ 3,18])
murs.push([19,20])
murs.push([21,14])
murs.push([16,19])



function cp(x,y,z){
	return {'x':x,'y':y,'z':z}
}
