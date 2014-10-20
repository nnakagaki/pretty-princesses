Journal.Collections.Posts = Backbone.Collection.extend({
  model: Journal.Models.Post,
  url: "/posts",
  getOrFetch: function (id) {
    var post = this.get(id);
    var that = this;

    if (post) {
      return post;
    } else {
      post = new Journal.Models.Post({id: id});
      post.fetch({
        success: function () {
          that.add(post);
        }
      });
    }
    return post;
  }
});

Journal.posts = new Journal.Collections.Posts();
