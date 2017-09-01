
function view_mode(id){
     $("#"+id+'-edit-mode').addClass('hidden');
     $("#"+id).removeClass('hidden');
    }

    function toggle(id){
        if($("#"+id+'-plus-button').hasClass('fa-plus')){
            $("#"+id+'-plus-button').removeClass('fa-plus').addClass('fa-minus');
        }
        else{
            $("#"+id+'-plus-button').removeClass('fa-minus').addClass('fa-plus');   
        }
     if($("#"+id).hasClass('hidden')){
      $("#"+id).removeClass('hidden')
     }
     else{
      $("#"+id).addClass('hidden')
      }
}
    
    function hide_error(element){
        var validation_message_element =  $(element).parent();
        var p_element = $(validation_message_element).children('p');
        $(p_element).html('')
        $(p_element).css('display','none');
    }

    function show_error(element,error_statement){
        if(error_statement == undefined){
            error_statement = '';
        }
        var validation_message_element =  $(element).parent();
        var p_element = $(validation_message_element).children('p');
        $(p_element).html(error_statement)
        $(p_element).css('display','block');
        $(element).css({"border-color": "#ff6666"});
          
    }

    function edit_mode(id,count){
     console.log("#"+id+'-edit-mode');
     $("#"+id+'-edit-mode').removeClass('hidden');
     $("#"+id).addClass('hidden');
}   

    var current_expanded_client = "";
    var current_expanded_user_year = "";
    
    function hide_all_errors(element){
        var form_id = $(element).closest('form');
        var all_error_fields = $(form_id).find('.help-block');
        all_error_fields.each(function(){
            $(this).css('display','none');
        })
    }
    
    var min_length_validation = function(element,min_length,label){
       var value = $(element).val();
       if(value.length < min_length){
       var error_message = label + " minimum length has to be " + min_length;  
       show_error(element,error_message);
       return false;
       }
       return true;
      }
    
    function slide_down(div_id){

        
        if($("#"+div_id+'-slide-button').hasClass('fa-plus')){
            $("#"+div_id+'-slide-button').removeClass('fa-plus').addClass('fa-minus');
        }
        else{
            $("#"+div_id+'-slide-button').removeClass('fa-minus').addClass('fa-plus');   
        }
        if(current_expanded_client != ''){
            if(current_expanded_client == div_id){
                $('#'+div_id).toggle()
                 current_expanded_client = '';
            }
            else{
                $("#"+current_expanded_client+'-slide-button').removeClass('fa-minus').addClass('fa-plus');
                $('#'+div_id).toggle()
                $('#'+current_expanded_client).toggle()
                current_expanded_client = div_id;
            }
            
        }
        else{
            $('#'+div_id).toggle()
             current_expanded_client = div_id;
        }
    }


    function slide_down_financial_year(div_id){

        
        if($("#"+div_id+'-slide-button').hasClass('fa-plus')){
            $("#"+div_id+'-slide-button').removeClass('fa-plus').addClass('fa-minus');
        }
        else{
            $("#"+div_id+'-slide-button').removeClass('fa-minus').addClass('fa-plus');   
        }
        if(current_expanded_user_year != ''){
            if(current_expanded_user_year == div_id){
                $('#'+div_id).toggle()
                 current_expanded_user_year = '';
            }
            else{
                $("#"+current_expanded_user_year+'-slide-button').removeClass('fa-minus').addClass('fa-plus');
                $('#'+div_id).toggle()
                $('#'+current_expanded_user_year).toggle()
                current_expanded_user_year = div_id;
            }
            
        }
        else{
            $('#'+div_id).toggle()
             current_expanded_user_year = div_id;
        }
    }
    /*added this in bank profile function in project, not in common custom fun*/
current_currency = "";
    function currency_edit_mode(div_id){
  
  if(current_currency  != div_id){
    if(current_currency == ""){
      current_currency = div_id
    }
    else{
      view_mode(current_currency)
      current_currency  = div_id;
    }
    
  }
  else{
    current_currency = "";
    console.log("#"+div_id+"-edit-mode");
    view_mode(div_id)
  }
}