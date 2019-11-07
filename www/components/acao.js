// This is a JavaScript file

$(document).ready(function(){
 //ao clickar em cadastrar restaurante ira ativar esta função
  $(document).on('click','#cadastrarrestaurante',function(){
      //guardando informações dos inputs na variavel
      var dados = {
          "restaurants":$("#restaurants").val(),
          "categories":$("#listaMenu").val(),
          "localization":$("#localization").val(),
           "login":$("#cadastrarlogin").val(),
            "password":$("#cadastrarsenha").val()
      }
      // mandando as informações dos inputs via ajax Post
      $.ajax({
        type:"post",
        url:"https://crudrestaurante.000webhostapp.com/cadastrar.php",
        data:dados,
        //se estiver concluido
        success:function(data){
          console.log('cadastrado com sucesso');
          document.location.href = 'listar.html';
        },
        //se tiver algum erro
        error:function(data){
          console.log(data);
        }
      });
  });
  //ao clickar em cadastrar restaurante ira ativar esta função
  $(document).on('click','#login',function(){
      //guardando informações dos inputs na variavel
      var dados = {
          "login":$("#login").val(),
          "senha":$("#senha").val()
      }
      // mandando as informações dos inputs via ajax Post
      $.ajax({
        type:"post",
        url:"https://crudrestaurante.000webhostapp.com/login.php",
        data:dados,
        //se estiver concluido
        success:function(data){
          document.location.href = 'restaurantes.html';
        },
        //se tiver algum erro
        error:function(data){
          console.log(data);
        }
      });
  });
   //ao clickar em cadastrar restaurante ira ativar esta função
  $(document).on('click','#cadastrarmenu',function(){
      //guardando informações dos inputs na variavel
      var dados = {
        "restaurants":$("#").val(),
        "items":$("#").val(),
        "prices":$("#").val()
      }
      // mandando as informações dos inputs via ajax Post
      $.ajax({
        type:"post",
        url:"crudrestaurante.000webhostapp.com/cadastrarMenu.php",
        data:dados,
        //se estiver concluido
        success:function(data){
          console.log('cadastrado com sucesso');
        },
        //se tiver algum erro
        error:function(data){
          console.log(data);
        }
      });
  });
  //função listar
  listar();
   listarMenu();
});
$(document).ready(function(){
  //funçãolistar restaurante   
  listarMenu();
});
function listar(){
    $.ajax({
    type:'post',
    url:'crudrestaurante.000webhostapp.com/listar.php',
    dataType:'json',
    success:function(data){
      let itemLista = '';
       $.each(data.restaurantes,function(i,dados){
          itemlista += "<option value='"+dados.codigo+"' nome='"+dados.nome+"' categoria='"+dados.cartegoria+"' localização='"+dados.localizacao+"' >"+dados.nome+"</option>";
       });
    }
  })
}
function listarMenu(){
  var  optionsCategories = [
    {name:'Fast-Food'},
    {name:'Food-Truck'},
    {name :'Buffet'}
  ]
  let itemListaCategoria = '';
  $.each(optionsCategories,function(i,optionsCategories){
      itemListaCategoria += "<option value='"+optionsCategories.name+"' name='categories'>"+optionsCategories.name+"</option>";
      });
  $("#listaMenu").html(itemListaCategoria);
}