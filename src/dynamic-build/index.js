import { version } from "../../package.json";

export default function () {
  import("./foo").then((res) => {
    console.log(res);
  });
  console.log(version);
}
