import { get } from 'lodash';
import { get as get$1 } from 'lodash-es';

var version = "1.0.0";

function index () {
  console.log(get);
  console.log(get$1);
  Promise.resolve().then(function () { return foo$1; }).then((res) => {
    console.log(res);
  });
  console.log(version);
}

var foo = "123";

var foo$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': foo
});

export { index as default };
