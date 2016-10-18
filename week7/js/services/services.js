(function(window, $){

    window.services = {

        user: {
            get: function(_callback){
                $.ajax({
                  url: "api/index.php/users",
                  method: "GET"
                }).done(function(res){
                    if (typeof _callback === 'function') {
                        _callback(JSON.parse(res));
                    }
                }).fail(function(res){
                    console.log(res);
                });
            },

            post: function(data, _callback){
                $.ajax({
                  url: "api/index.php/users",
                  method: "POST",
                  data:data
                }).done(function(res){
                    console.log(res);
                    if (typeof _callback === 'function') {
                        _callback(JSON.parse(res));
                    }
                }).fail(function(res){
                    console.log(res);
                });
            },

            get_by_id:function(id, _callback){
                $.ajax({
                  url: "api/index.php/users/"+id,
                  method: "GET"
                }).done(function(res){
                    if (typeof _callback === 'function') {
                        _callback(JSON.parse(res));
                    }
                }).fail(function(res){
                    console.log(res);
                });
            },

            update: function(id, data, _callback){
                $.ajax({
                  url: "api/index.php/users/"+id,
                  method: "PUT",
                  data:data
                }).done(function(res){
                    if (typeof _callback === 'function') {
                        _callback(JSON.parse(res));
                    }
                }).fail(function(res){
                    console.log(res);
                });
            },

            delete: function(id, _callback){
                $.ajax({
                  url: "api/index.php/users/"+id,
                  method: "DELETE"
                }).done(function(res){
                    if (typeof _callback === 'function') {
                        _callback(JSON.parse(res));
                    }
                }).fail(function(res){
                    console.log(res);
                });
            }
        }
    };


}(this, jQuery));