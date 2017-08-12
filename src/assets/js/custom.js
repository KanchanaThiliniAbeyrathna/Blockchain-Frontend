/**
 * Created by Nayomi on 8/12/2017.
 */
$(document).ready(function () {

  $(function () {
    $('#milestones').change(function () {
      var val = $(this).val();
      if (val) {

        for (var i = 1; i <= 5; i++) {
          if (i <= val) {
            $('#div' + i).slideDown();
          }
          else {
            $('#div' + i).slideUp();
          }
        }
      }
    });
  });

});
