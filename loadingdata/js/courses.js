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
      createPersonList("#tableBody");
      handleNewUser();
      // removePerson();
      editRow();
    });
  }

  // creates a single card view
  function createCard(person){

    var tr = $('<tr class="edit-row" data-id="'+person.id+'"></tr>');
    $.each(person, function(index, col){
      if (typeof person[index] !== 'function') {
        tr.append("<td>"+col+"</td>");
      };
    })
    return tr;
  };


  function editRow(){
    $('.edit-row').click(function(e){
      e.preventDefault();
      var id = $(this).data(),
      index = _.findIndex(personManager.persons, id);
      console.log(index, personManager.persons[index]);
      $('#myModal').modal('show');
    });
  }

  // removes a card from the view and deletes from the collection
  function removePerson(){
    $('.remove-row').click(function(e){
      e.preventDefault();
      var id = $(this).data(),
      index = _.findIndex(personManager.persons, id),
      remove_person_context = this;
      console.log(index, id);

      if(index >= 0){
        // console.log(personManager.persons.length);
        personManager.deletePersonById(index, function(res){
          console.log(res);
          $(remove_person_context).parent().parent().remove();
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
            $("#tableBody").append(createCard(person));
            // removePerson();
          });
          $('#myModal').modal('hide').on('hidden.bs.modal', function (e) {
            clearForm("#new_user_form");
          });
        }
    });
  }

  window.loadPage = loadData;

}(this, jQuery, this.models));