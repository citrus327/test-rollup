var bar = function () {
    return "ss";
};

// import foo, { a } from "./foo.js";
function index () {
  // console.log(foo, a);
  console.log(123, bar);
}
// import foo from './foo.js'
// export default foo

export { index as default };
