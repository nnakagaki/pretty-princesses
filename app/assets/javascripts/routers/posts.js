Journal.Routers.Posts = Backbone.Router.extend({
  initialize: function (options) {
    this.$el = options.$el;
    this.$elSidebar = options.$elSidebar;
  },

  routes: {
    "": "PostIndex",
    "posts/new": "create",
    "posts/:id": "show"
  },

  show: function (id) {
    this.PostIndex();

    var that = this;
    var postModel = Journal.posts.getOrFetch(id);
    var showView = new Journal.Views.PostShow({model: postModel});
    that.$el.html(showView.render().$el);
  },

  PostIndex: function () {
    var test = new Journal.Views.PostsIndex();
    Journal.posts.fetch();
    this.$elSidebar.html(test.render().$el)
    $("#everything").html("<h2>Hi there! Thank you for using our site!</h2>");
  },

  create: function () {
    this.PostIndex();

    var newPost = new Journal.Models.Post();
    var postForm = new Journal.Views.PostForm({
        model: newPost,
        collection: Journal.posts });
    this.$el.html(postForm.render().$el);
  }

});
