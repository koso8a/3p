class Nodo{   
    constructor(data,left=null,right=null){         
        this.data=data         
        this.left=left
        this.right=right     
    } 
}
let array = []
let cont=0 , cont1=0, cont2=0

function Add(dato){
    
    node=new Nodo(dato)
    
    if(array[cont]==undefined){
        array[cont]=(node)
    }else{
        cont1++
        if(cont1==1){
            cont2++
            (array[cont].left)=(node)
            array[cont2]=(node)
        }
        if(cont1==2){
            (array[cont].right)=(node)
            cont2++
            array[cont2]=(node)
            cont1=0
            cont++
        }
    }
}
Add(10)
Add(8)
Add(4)
Add(20)
Add(25)
Add(2)
Add(13)
Add(7)
console.log(array)
