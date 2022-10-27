let a1 = [1,2,3];
let a2 = [1,2,'3'];
console.log(JSON.stringify(a1)==JSON.stringify(a2)); 

//==============================================================

function isEqual()
{
   let a = [1,2,3];
   let b = [1,2,3];
   if(a.length!=b.length)
   return "false";
   else
 {
   for(var i=0;i<a.length;i++)
   if(a[i]!=b[i])
   return "false";
   return "true";
 }
}
console.log(isEqual())