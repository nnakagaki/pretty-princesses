Journal.Views.PostShow = Backbone.View.extend({
  initialize: function () {
     this.listenTo(this.model, "sync remove add change:title reset", this.render);
  },

  template: JST['post'],

  render: function () {
    var renderedContent = this.template({ post: this.model });
    this.$el.html(renderedContent);
    return this;
  },

  events: {
    "dblclick h3": "editTitle",
    "dblclick p": "editBody",
    "blur input.title": "refreshTitle",
    "blur textarea.body": "refreshBody"
  },

  editTitle: function (event) {
    var title = event.currentTarget;
    var currentTitle = $(title).text()
    currentTitle = currentTitle.substring(4, currentTitle.length-4).replace(/ +/g, "&nbsp;");
    $(title).html("<input class='title' value=" + currentTitle + ">");
  },

  refreshTitle:  function (event) {
    var newTitle = $(event.currentTarget).val();
    this.model.set({title: newTitle});
    this.model.save({
      success: this.render
    });

  },

  editBody: function (event) {
    var body = event.currentTarget;
    var currentBody = $(body).text()
    currentBody = currentBody.replace(/ +/g, "&nbsp;");
    $(body).html("<textarea class='body'>" + currentBody + "</textarea>");
  },

  refreshBody:  function (event) {
    var newBody = $(event.currentTarget).val();
    this.model.set({body: newBody});
    this.model.save({
      success: this.render
    });

  }


});