(function (window){
    'use strict'; //https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Functions_and_function_scope/Strict_mode
    var $ = window.jQuery,
        console = window.console,
        cache, operations,
        storage;

    cache = {
        "" : $('.default')
    };

    //Function to set up operations on ProfilePage
    function handleProfilePage(){
        console.log("Running Profile Page");
        if ($('#edit').length > 0){//Check to see if we are connected to the checkbox
            $('#edit').bind("change",function(){
                if ($('#edit').is(':checked')){ console.log("Check Box is in its checked State");}
                else {console.log("Check Box is in Unchecked State");}
            });
        }else {console.log("Did Not Find Edit Checkbox");}
    }



    function handleCoursePage(){
        console.log("Course Page");
    }

    operations = {
        "":function (){
            console.log("Home called");
        },
        "courses": window.loadPage,
        "profile": window.profilePage,
        "settings": function () {
            console.log ("Settings Called");
        }
    };

    function setUp(){
        var url = location.hash.substr(1); //Get the URL After the Fragment;
          url = url.toLowerCase();

          //2 Lines used to remove the active class and assign to the current scope so menu change reflect user position
          $( 'li.active' ).removeClass( 'active' );// Remove active class from any previously "active" link(s).
          $( 'a[href="#' + url + '"]' ).parent().addClass( 'active' );// Add the active class to the current link
          $( '#content' ).children( ':visible' ).hide();//Hide Current Content Shown (We Hide not Empty)
          //Check if we have loaded content before if not fetch and store
          if (cache[url]){
              cache[url].show(); // Display the Content
          }else{
              $('.loading').show();
              //Chaining Multiple Operations unto the section that will be loaded
              cache[ url ] = $( '<div class="col-md-12"/>' )
                                .appendTo( '#content' )// Add the Data received
                                .load( "sections/" + url + ".html", function(){ //Attempt to Load the first parameter from server, when loaded run the function in the second parameter
                                    $('.loading').hide();
                                    if (operations[url]){ operations[url].call(window); } //The Call function will actually execute function (https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Function/call)
                                });
          }
    }



    //Code Loads when Document Loads
    $(window.document).ready(function (){
        $(window).bind('hashchange',setUp); //Attach the function to the hash change event
        setUp();

    });



}(this));
