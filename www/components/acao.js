// This is a JavaScript file

$(document).ready(function(){
 //ao clickar em cadastrar restaurante ira ativar esta função
  $(document).on('submit','#cRestaurant',function(){
      //guardando informações dos inputs na variavel
      var dados = {
          "restaurants":$("#restaurants").val(),
          "localization":$("#localization").val()
      }
      // mandando as informações dos inputs via ajax Post
      $.ajax({
        type:"post",
        url:"https://crudrestaurante.000webhostapp.com/cadastrar.php",
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
   //ao clickar em cadastrar restaurante ira ativar esta função
  $(document).on('click','#cadastrarmenu',function(){
      //guardando informações dos inputs na variavel
      var dados = $("#cMenu").serialize();
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
    url:'ncrudrestaurante.000webhostapp.com/listar.php',
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