/**
 * import { get } from "lodash-es"; // 511
 * import get from "lodash-es/get"; // 27
 * import { get } from "lodash"; // 561
 * import get from "lodash/get"; // 32
 */

import get from "lodash/get";

export const print = () => {
  console.log(get);
};
