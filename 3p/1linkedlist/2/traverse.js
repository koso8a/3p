let r=new Node(0);
let p=new Node(1);
r.next=p;
for (let i=2;i<10;i++){
    let n = new Node(i);
    p.next = n;
    p=n;
}

traverse(r);
