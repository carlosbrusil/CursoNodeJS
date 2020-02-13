var a,b,c=0;
process.stdout.write("ingrese a ");
process.stdin.on('data',function(data){
  a=data.toString();
  process.exit();
})
process.stdout.write("ingrese b ");