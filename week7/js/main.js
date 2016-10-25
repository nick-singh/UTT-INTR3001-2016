(function(window, $, models) {




  // initialize personManager
  var personManager = new models.PersonManager();


  // loads the data from source
  function loadData(){
    services.user.get(function(res){

      var data = res,
      person;
      $.each(data, function(index, d){
        person = new models.Person();
        person.setDetails(d);
        personManager.addPerson(person);
      });
      createPersonList("#content");
      handleNewUser();
      removePerson();
    });
  }

  // creates a single card view
  function createCard(person){

    var profile = $('<div class="col-md-3 well profile"></div>'),

    row = $('<div class = "row">'+
      '<button type="button" data-id="'+person.id+'"class="close remove-profile" aria-label="Close">'+
      '<span aria-hidden="true">&times;</span>'+
      '</button></div>'),

    thumbnail = '<div class="col-md-4">'+
              '<div class="thumbnail">'+
                '<img class="img-thumbnail" src="'+person.picture+'" alt="">'+
              '</div>'+
            '</div>',
    details = '<div class="col-md-8">'+
              '<p> Name: '+person.firstName +' '+person.lastName+'</p>'+
              '<p> Gender: '+person.gender+'</p>'+
             ' <p> Company: '+person.company+'</p>'+
            '</div>';

    profile.append(row.append(thumbnail).append(details));
    return profile;
  };

  // removes a card from the view and deletes from the collection
  function removePerson(){
    $('.remove-profile').bind('click', function(e){
      e.preventDefault();
      var id = $(this).data(),
      index = _.findIndex(personManager.persons, id),
      that = this;
      console.log(index, id);

      if(index >= 0){
        // console.log(personManager.persons.length);
        personManager.deletePersonById(index, function(res){
          console.log(res);
          $(that).parent().parent().remove();
        });
        // console.log(personManager.persons.length);
      }else{
        console.log('error deleting person');
      }

    });
  }


  // uses the list of persons to create a list of cards
  function createPersonList(id){
    $.each(personManager.persons, function(index, data){
      $(id).append(createCard(data));
    });
  }


  function getFormData(id){
    var data = {},
    form = $(id),
    viewArr = form.serializeArray(),
    valid = true;
    $.each(viewArr, function(i,d){
      data[viewArr[i].name] = viewArr[i].value;
      if(viewArr[i].value === ""){
        $("input[name="+viewArr[i].name+"]").parent().parent().addClass("has-error");
        valid = false;
      }
    });
    if(valid){
      return data;
    }else{
      return {};
    }
  }

  function clearForm(id){
    $(id).find("input[type=text], textarea").val("");
  }


  function handleNewUser(){
    $("#save_user").click(function(){
        var data = getFormData("#new_user_form"),
        person = new models.Person();
        console.log(data);
        if (!_.isEmpty(data)) {
          person.save(data, function(res){
            person.setDetails(res.data);
            personManager.addPerson(person);
            $("#content").append(createCard(person));
            removePerson();
          });
          $('#myModal').modal('hide').on('hidden.bs.modal', function (e) {
            clearForm("#new_user_form");
          });
        }
    });
  }


  $('document').ready(function(){

    loadData();
    // $.each(peopleList, function(index, data){
    //   services.user.post(data);
    // });
  });

}(this, jQuery, this.models));