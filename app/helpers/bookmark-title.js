import { helper } from '@ember/component/helper';

//export function bookmarkTitle(params/*, hash*/) {
export function bookmarkTitle([title, about]/*, hash*/) {
  let returnStr = title;
  if (about != null) {
    returnStr += ' - ' + about
  }
  //return params;
  return returnStr;
}

export default helper(bookmarkTitle);
