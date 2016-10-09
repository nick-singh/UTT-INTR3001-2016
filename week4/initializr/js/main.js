(function(window, $){


    function giveButtonClickEvent(id, hidden_id){
        $(id).click(function() {
          $(hidden_id).show(600);
        });
    }


    function giveButtonHoverEvent(id){
        $(id).hover(function() {
          console.log("I was Hovered on");
        });
    }

    function giveRandomEvents(id){
        $(id).click(function() {
          console.log("I was clicked");
        }).hover(function(){
            console.log("I was Hovered on");
        })
    }


    $("document").ready(function(){
        // giveRandomEvents("#learn_more");
        giveButtonClickEvent("#learn_more", "#hidden_element");
        // giveButtonHoverEvent("#learn_more");
    });


}(this, jQuery));
