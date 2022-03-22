import Formatter from "../src";

describe("formatter", () => {
  let ddf: Formatter;
  beforeEach(() => {
    ddf = new Formatter(new Date("2022/01/01 00:00:00"));
  });

  it("1sec ago", () => {
    const to = new Date("2022/01/01 00:00:01");
    expect(ddf.format(to)).toBe("now");
  });

  it("9sec ago", () => {
    const to = new Date("2022/01/01 00:00:02");
    expect(ddf.format(to)).toBe("now");
  });

  it("10sec ago", () => {
    const to = new Date("2022/01/01 00:00:10");
    expect(ddf.format(to)).toBe("10 seconds ago");
  });

  it("1min ago", () => {
    const to = new Date("2022/01/01 00:01:00");
    expect(ddf.format(to)).toBe("1 minute ago");
  });

  it("1min 59sec ago", () => {
    const to = new Date("2022/01/01 00:01:59");
    expect(ddf.format(to)).toBe("1 minute ago");
  });

  it("59min 59sec ago", () => {
    const to = new Date("2022/01/01 00:59:59");
    expect(ddf.format(to)).toBe("59 minutes ago");
  });

  it("1hr ago", () => {
    const to = new Date("2022/01/01 01:00:00");
    expect(ddf.format(to)).toBe("1 hour ago");
  });

  it("1hr 59min 59sec ago", () => {
    const to = new Date("2022/01/01 01:59:59");
    expect(ddf.format(to)).toBe("1 hour ago");
  });

  it("23hr 59min 59sec ago", () => {
    const to = new Date("2022/01/01 23:59:59");
    expect(ddf.format(to)).toBe("23 hours ago");
  });

  it("1day ago", () => {
    const to = new Date("2022/01/02 00:00:00");
    expect(ddf.format(to)).toBe("yesterday");
  });

  it("1day 23hr 59min 59sec ago", () => {
    const to = new Date("2022/01/02 23:59:59");
    expect(ddf.format(to)).toBe("yesterday");
  });

  it("2days ago", () => {
    const to = new Date("2022/01/03 00:00:00");
    expect(ddf.format(to)).toBe("2 days ago");
  });

  it("30days ago", () => {
    const to = new Date("2022/01/31 00:00:00");
    expect(ddf.format(to)).toBe("30 days ago");
  });

  it("31days ago and last month", () => {
    const to = new Date("2022/02/01 00:00:00");
    expect(ddf.format(to)).toBe("last month");
  });

  it("31days ago and 2 months ago", () => {
    ddf = new Formatter(new Date("2022/01/31 00:00:00"));
    const to = new Date("2022/03/03 00:00:00");
    expect(ddf.format(to)).toBe("2 months ago");
  });

  it("less then 18months ago", () => {
    ddf = new Formatter(new Date("2020/01/01 00:00:00"));
    const to = new Date("2021/05/31 23:59:59");
    expect(ddf.format(to)).toBe("17 months ago");
  });

  it("18months ago and 1year ago", () => {
    ddf = new Formatter(new Date("2020/01/01 00:00:00"));
    const to = new Date("2021/06/01 00:00:00");
    expect(ddf.format(to)).toBe("last year");
  });

  it("18months ago and 2year ago", () => {
    ddf = new Formatter(new Date("2020/12/01 00:00:00"));
    const to = new Date("2022/06/30 00:00:00");
    expect(ddf.format(to)).toBe("2 years ago");
  });

  it("23months ago and 1year ago", () => {
    ddf = new Formatter(new Date("2020/01/01 00:00:00"));
    const to = new Date("2021/12/31 00:00:00");
    expect(ddf.format(to)).toBe("last year");
  });

  it("23months ago and 2year ago", () => {
    ddf = new Formatter(new Date("2020/01/01 00:00:00"));
    const to = new Date("2022/01/01 00:00:00");
    expect(ddf.format(to)).toBe("2 years ago");
  });

  it("23months ago and 3year ago", () => {
    ddf = new Formatter(new Date("2020/12/31 00:00:00"));
    const to = new Date("2023/01/01 00:00:00");
    expect(ddf.format(to)).toBe("2 years ago");
  });

  it("29months ago and 3year ago", () => {
    ddf = new Formatter(new Date("2020/12/31 00:00:00"));
    const to = new Date("2023/07/01 00:00:00");
    expect(ddf.format(to)).toBe("2 years ago");
  });

  it("30months ago and 3year ago", () => {
    ddf = new Formatter(new Date("2020/12/31 00:00:00"));
    const to = new Date("2023/08/01 00:00:00");
    expect(ddf.format(to)).toBe("3 years ago");
  });

  it.todo("i18n");
  it.todo("global setting");
});
