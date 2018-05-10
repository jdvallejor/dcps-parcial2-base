import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.get('store').findRecord('author', params.id, {include: 'posts'});
  },
  actions:{
    delete(author_id, post_id){
      let author = this.get('store').peekRecord('author', author_id);
      let blogPost = this.get('store').peekRecord('blog-post', post_id);
      author.get('posts').removeObject(blogPost);
      if (author.get('posts').length === 0){
        author.set('hasPosts', false);
      }
      author.save();

      this.get('store').findRecord('blog-post', post_id, { backgroundReload: false }).then(function(post) {
        post.deleteRecord();
        post.get('isDeleted');
        post.save();
      });
    }
  }
});
