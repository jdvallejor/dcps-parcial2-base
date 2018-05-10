import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  username: DS.attr('string'),
  email: DS.attr('string'),
  profilePicture: DS.attr('string'),
  posts: DS.hasMany('blog-post'),
  hasPosts: computed('posts', function () {
    let np = 0
    this.get('posts').forEach(()=>{
      np = np + 1
    })
    return np !== 0;
  })
});
