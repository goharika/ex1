(function() {
    define(['require', 'jquery', 'underscore', 'bb', 'i/item/c','text!/html/index.html'], function(require, $, _, Backbone, Items) {
        return Backbone.View.extend({
            id: 'index',
            initialize: function(options) {
                var that = this;
                this.___ = options.___;
                this.items = new Items(null,{ s: this.___.so});
                var Home = require('text!/html/index.html');
                this.home = _.template(Home);
                that.render();
            },
            events: {
                'click .create':'crateItem'
            },
            render:function(){
                var that       = this;
                that.$el.html(this.home({}))
                that.items.fetch({
                    success:function(){
                        that.item.each(function(m){
                            that.$('.list').append("<li>"+m.get("body.first") + " "+m.get("body.last")+"</li">)
                        });
                    },data:{}
                })
                      
            },
            createItme: function (){
                var that = this;
                this.item.create({"path": "newjob", "title" : "I'm Bob", "group": "people", "body":{
                    "first" : "bob",
                    "last" : "bilder"
                }},{callback: function(json, m){
                        that.$('.message').html("created" + m.get("body.first") + " " + m.get("body.last"))
                }
            });
        },
    });
});

}).call(this);

