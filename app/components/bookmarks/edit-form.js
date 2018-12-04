import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  bookmark: null,
  router: service('-routing'),
  actions: {
    save(bookmark) { Console.log('save called');
    bookmark.save()
    .then(
      (value) => {
        Console.log(value);
        Console.log('hi');
        this.get('router').transitionTo('bookmarks');
      }
    )
    .catch(
      () => {
        Console.log('failure to save!');
      }
    )
  },
  cancel() {Console.log('Cancel called');}
  }
});
