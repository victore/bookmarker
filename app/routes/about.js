import Route from '@ember/routing/route';

let bookmars = [{
  id: 1,
  title: 'Linux',
  link: 'https:www.microsoft.com',
  about: 'At Linux....'
},
{
  id: 2,
  title: 'Linux 2',
  link: 'https://lin2.com',
  about: 'At Linux222....'
}];

export default Route.extend({
  model() {
    return bookmars;
  }
});
