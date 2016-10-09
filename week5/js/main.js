(function(window, $, models) {

  // initialize personManager
  var personManager = new models.PersonManager();


  // loads the data from source
  function loadData(){
    var data = peopleList,
    person;
    $.each(data, function(index, d){
      person = new models.Person();
      person.setDetails(d);
      personManager.addPerson(person);
    });
  }

  // generates unique id
  function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
  };

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
             ' <p> Company: '+person.getCompany()+'</p>'+
            '</div>';

    profile.append(row.append(thumbnail).append(details));
    return profile;
  };

  // removes a card from the view and deletes from the collection
  function removePerson(){
    $('.remove-profile').bind('click', function(e){
      e.preventDefault();
      var id = $(this).data(),
      index = _.findIndex(personManager.persons, id);
      console.log(index);

      if(index >= 0){
        // console.log(personManager.persons.length);
        if(personManager.deletePersonById(index)){
          $(this).parent().parent().remove();
        }
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
        if (!_.isEmpty(data)) {
          data.id = generateUUID();
          data.picture = "http://web1.crafthub.me/assets/placeholder-50x50.png";
          person.setDetails(data)
          personManager.addPerson(person);
          $("#content").append(createCard(person));
          removePerson();
          $('#myModal').modal('hide').on('hidden.bs.modal', function (e) {
            clearForm("#new_user_form");
          });
        }
    });
  }


  $('document').ready(function(){
    loadData();
    createPersonList("#content");
    handleNewUser();

    removePerson();
  });

}(this, jQuery, this.models));