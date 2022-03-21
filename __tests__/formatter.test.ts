import Formatter from "../src";

describe("formatter", () => {
  it("1 second ago", () => {
    const ddf = new Formatter();

    expect(ddf.strictFormat()).toBe("1 second ago");
    expect(ddf.laxFormat()).toBe("few seconds ago");
  });
});
