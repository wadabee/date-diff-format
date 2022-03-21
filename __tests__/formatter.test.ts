import Formatter from "../src";

describe("formatter", () => {
  let ddf: Formatter;
  beforeAll(() => {
    ddf = new Formatter(new Date("2022/01/01 00:00:00"));
  });

  it("1 second ago", () => {
    const to = new Date("2022/01/01 00:00:01");
    expect(ddf.strictFormat(to)).toBe("1 second ago");
    expect(ddf.laxFormat(to)).toBe("few seconds ago");
  });

  it("2 seconds ago", () => {
    const to = new Date("2022/01/01 00:00:02");
    expect(ddf.strictFormat(to)).toBe("2 seconds ago");
    expect(ddf.laxFormat(to)).toBe("few seconds ago");
  });

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
