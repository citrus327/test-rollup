var version = "1.0.0";

function index () {
  import('./foo-4608fd59.js').then((res) => {
    console.log(res);
  });
  console.log(version);
}

export { index as default };
