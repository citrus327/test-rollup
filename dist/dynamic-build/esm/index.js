import { get } from 'lodash';
import { get as get$1 } from 'lodash-es';

var version = "1.0.0";

function index () {
  console.log(get);
  console.log(get$1);
  import('./foo-20ebc20d.js').then((res) => {
    console.log(res);
  });
  console.log(version);
}

export { index as default };
