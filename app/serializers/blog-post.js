import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  keyForAttribute(attr){
    switch (attr){
      case 'publishedAt':
        return 'published-at';
      default:
        return this._super(...arguments);
    }
  }
});
