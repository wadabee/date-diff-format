import Formatter from "../src";

describe("formatter", () => {
  it("1 second ago", () => {
    const ddf = new Formatter();

    expect(ddf.strictFormat()).toBe("1 second ago");
    expect(ddf.laxFormat()).toBe("few seconds ago");
  });

  it.todo("2 seconds ago");
  it.todo("1 minute ago");
  it.todo("2 minutes ago");
  it.todo("1 hour ago");
  it.todo("2 hours ago");
  it.todo("yesterday");
  it.todo("2 days ago");
  it.todo("last month");
  it.todo("2 months ago");
  it.todo("last year");
  it.todo("2 years ago");

  it.todo("i18n");
  it.todo("format customize");
  it.todo("global setting");
});
