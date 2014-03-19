  function save_options() {
    var url = $('#url').val();
    var css = $('#css').val();

    localStorage[url] = css;

    $('#url').val('');
    $('#css').val('');
    restore_options();
  }

  function restore_options() {
    $('tbody').empty();
    for (var i = 0; i < localStorage.length; i++) {
      $('#list').append('<tr><td>'+ localStorage.key(i) +'</td><td><span class="edit">Edit</span></td><td><span class="delete">Delete</span></td></tr>');
    }
    bind();
  }

  function show_options() {
    console.log(localStorage);
  }

  function bind() {
      $("#save").click(function() {
        save_options();
      });

      $(".delete").click(function() {
        var url_tr = $(this).closest("tr").children()[0];
        var url = $(url_tr).text();

        localStorage.removeItem(url);
        restore_options();
      });

      $(".edit").click(function() {
        var url_tr = $(this).closest("tr").children()[0];
        var url = $(url_tr).text();
        var css = localStorage[url];

        $('#url').val(url);
        $('#css').val(css);
      });
  }

$(function() {
  restore_options();
});
