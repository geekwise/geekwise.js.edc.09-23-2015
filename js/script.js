var current_element;
var html_body;
var list_element;
var button;
var list_element_to_update;


function log(message_to_log_in_the_console){

    console.log(message_to_log_in_the_console);

};

function attach_element(element_name){

    document.body.appendChild(
        document.createElement(element_name)
    );

};


function create_list_elements(number_of_list_elements,element_name){
    
    
    for(var i=0;i<number_of_list_elements;i++){

       list_element =  document.body.appendChild(
                            document.createElement(element_name)
                        );
        
        list_element.textContent = i+1;
        list_element.addEventListener('contextmenu',function(event){
        
                this.remove(this);
                event.preventDefault();
                return false;
                
        },false);
        
        
    };
}


function ask_for_list_element(){
    list_element_to_update = prompt('which number to update?');
    return list_element_to_update;
}


function new_text_for_list_element(){

    var new_text = prompt('enter new text');
    return new_text;
};


function update_list_element(list_element_to_update){

        var list_elements = document.getElementsByTagName('li');
        list_elements[(list_element_to_update-1)].textContent = new_text_for_list_element();
    
};



document.addEventListener('DOMContentLoaded',function(){

    html_body = document.body;
        
    attach_element('h1');
    attach_element('button');
    
    button = document.getElementsByTagName('button');
    button = button[0];
    button.textContent = 'update text';
    
    button.addEventListener('click',function(){
    
        update_list_element(ask_for_list_element());
        
    });
    
    
    current_element = document.getElementsByTagName('h1');
    current_element = current_element[0];
    current_element.textContent = Date.now();

//    current_element.addEventListener('dblclick',function(){
//    
//    
//    });
    
    
    create_list_elements(10,'li');
    
    

});