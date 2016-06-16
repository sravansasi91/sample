<html>
<head>
<script>
function removespl(){
  var data = document.getElementById("te1");
  var i,c;
  var text = "";
 for (i = 0; i < data.length; i++) {
  c = data.charAt(i);
  if(c == "[^a-z0-9 ]"){
    text +=c;
   //console.log(data);
   }
  }
 console.log(text);
}
</script>
</head>
<body>

<input type="text" name="t1" id="te1"></input>
<button onclick="removespl()">Click</button>







</body>
</html>
