import { get } from "lodash";
import { get as getEs } from "lodash-es";
import { version } from "../../package.json";

export default function () {
  console.log(get);
  console.log(getEs);
  import("./foo").then((res) => {
    console.log(res);
  });
  console.log(version);
}
