//Javascript for TP5


window.onload = function() {
  
  document.querySelector("#titleBanner h1").classList.add("tp");
  
  document.querySelector("#titleBanner h1").onclick = function() {
    
    this.classList.toggle("black");
    
  }
  
  document.querySelector("#recipeColomns #ingredients").onclick =function(){
    this.classList.toggle("tpShow");
  }
   document.querySelector("#recipeColomns #equiptment").onclick =function(){
    this.classList.toggle("tpShow");
   }
    document.querySelector("#recipeColomns #directions").onclick =function(){
    this.classList.toggle("tpShow");
    }
    
    
   document.querySelector("#recipeColomns #equiptment ul").innerHTML += "<li>An appetite for candy</li>";
    
} //end window.onload 