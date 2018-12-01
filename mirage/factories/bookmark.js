import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name() { return faker.internet.userName();},
  url() { return faker.internet.url();},
  hacker() {return faker.hacker.noun();},
  verb() {return faker.hacker.verb();}
});
