// Generated by CoffeeScript 1.7.1
(function() {
  window.StitchFix || (window.StitchFix = {});

  window.StitchFix.ExpandText = {
    init: function() {
      return $('.read-more a').click(function(e) {
        e.preventDefault();
        console.dir($(e.target).parent());
        $(e.target).parents('.expandable').css({
          maxHeight: 'inherit'
        });
        return $(e.target).parents('.read-more').hide();
      });
    }
  };

  $(function() {
    return window.StitchFix.ExpandText.init();
  });

}).call(this);
