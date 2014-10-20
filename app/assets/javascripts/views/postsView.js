Journal.Views.PostsIndex = Backbone.View.extend({
  initialize: function () {
    this.listenTo(Journal.posts, "sync remove add change:title reset", this.render);
  },

  template: JST['postsIndex'],
  render: function () {
    var renderedContent = this.template({posts: Journal.posts});
    this.$el.html(renderedContent);
    return this;
  },

  events: {
    "click button.delete": "destroy"
  },

  destroy: function (event) {
    var postId = $(event.currentTarget).data("id");
    var postModel = Journal.posts.get(postId);
    postModel.destroy();
  }
});