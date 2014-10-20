window.Journal = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Journal.Routers.Posts({
          $el: $("div#everything"),
          $elSidebar: $("div#sidebar") } );
    Backbone.history.start();
  }
};

$(document).ready(Journal.initialize);
