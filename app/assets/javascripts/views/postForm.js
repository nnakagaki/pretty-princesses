Journal.Views.PostForm = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.model, "sync", this.render)
  },

  events: {
    "click button#new-diary": "makeDiary"
  },

  template: JST['post_form'],

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  },

  makeDiary: function (event) {
    event.preventDefault();
    var that = this;
    var params = $('form').serializeJSON()
    this.model = new Journal.Models.Post(params);
    if (this.model.isNew()) {
      this.collection.create(this.model, {
        success: function () {
          Backbone.history.navigate("posts/" + that.model.id, {trigger: true})
        },
        error: function (error) {
          that.render();
          $('form input').attr("value", params["post"]["title"])
          $('form textarea').html(params["post"]["body"])
        }
      });
    } else {
      this.model.save({}, {
        success: function () {
          Backbone.history.navigate("", {trigger: true})
        },
        error: function (error) {
          that.render();
          $('form input').attr("value", params["post"]["title"])
          $('form textarea').html(params["post"]["body"])
        }
      })
    }



  }
});