import { assertEquals, describe } from "./test.deps.ts";
import { add } from "../src/_exports.ts";

describe("Utils Tests", () => {
  describe("Add Test", () => {
    const added = add(1, 1);

    assertEquals(added, 2);
  });
});
