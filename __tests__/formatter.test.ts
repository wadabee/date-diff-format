import Formatter from "../src";

describe("formatter", () => {
  describe("second", () => {
    it("1sec ago", () => {
      const ddf = new Formatter(new Date("2022/06/01 00:00:00"));
      const to = new Date("2022/05/31 23:59:59");
      expect(ddf.format(to)).toBe("now");
    });

    it("9sec ago", () => {
      const ddf = new Formatter(new Date("2022/06/01 00:00:00"));
      const to = new Date("2022/05/31 23:59:51");
      expect(ddf.format(to)).toBe("now");
    });

    it("10sec ago", () => {
      const ddf = new Formatter(new Date("2022/06/01 00:00:00"));
      const to = new Date("2022/05/31 23:59:50");
      expect(ddf.format(to)).toBe("10 seconds ago");
    });
  });

  describe("minute", () => {
    it("1min ago", () => {
      const ddf = new Formatter(new Date("2022/06/01 00:00:00"));
      const to = new Date("2022/05/31 23:59:00");
      expect(ddf.format(to)).toBe("1 minute ago");
    });

    it("1min 59sec ago", () => {
      const ddf = new Formatter(new Date("2022/06/01 00:00:00"));
      const to = new Date("2022/05/31 23:58:01");
      expect(ddf.format(to)).toBe("1 minute ago");
    });

    it("59min 59sec ago", () => {
      const ddf = new Formatter(new Date("2022/06/01 00:00:00"));
      const to = new Date("2022/05/31 23:00:01");
      expect(ddf.format(to)).toBe("59 minutes ago");
    });
  });

  describe("minute", () => {
    it("1hr ago", () => {
      const ddf = new Formatter(new Date("2022/06/01 00:00:00"));
      const to = new Date("2022/05/31 23:00:00");
      expect(ddf.format(to)).toBe("1 hour ago");
    });

    it("1hr 59min 59sec ago", () => {
      const ddf = new Formatter(new Date("2022/06/01 00:00:00"));
      const to = new Date("2022/05/31 22:00:01");
      expect(ddf.format(to)).toBe("1 hour ago");
    });

    it("23hr 59min 59sec ago", () => {
      const ddf = new Formatter(new Date("2022/06/01 00:00:00"));
      const to = new Date("2022/05/31 00:00:01");
      expect(ddf.format(to)).toBe("23 hours ago");
    });
  });

  describe("day", () => {
    it("24hr ago", () => {
      const ddf = new Formatter(new Date("2022/06/01 00:00:00"));
      const to = new Date("2022/05/31 00:00:00");
      expect(ddf.format(to)).toBe("yesterday");
    });

    it("yesterday(47hr 59min 59sec agp)", () => {
      const ddf = new Formatter(new Date("2022/06/01 23:59:59"));
      const to = new Date("2022/05/31 00:00:00");
      expect(ddf.format(to)).toBe("yesterday");
    });

    it("2day ago(24hr 1sec ago)", () => {
      const ddf = new Formatter(new Date("2022/06/01 00:00:00"));
      const to = new Date("2022/05/30 23:59:59");
      expect(ddf.format(to)).toBe("2 days ago");
    });

    it("30days ago", () => {
      const ddf = new Formatter(new Date("2022/05/31 00:00:00"));
      const to = new Date("2022/05/01 00:00:00");
      expect(ddf.format(to)).toBe("30 days ago");
    });
  });

  describe("month", () => {
    // it("31days ago and last month", () => {
    //   const to = new Date("2022/02/01 00:00:00");
    //   expect(ddf.format(to)).toBe("last month");
    // });
    // it("31days ago and 2 months ago", () => {
    //   ddf = new Formatter(new Date("2022/01/31 00:00:00"));
    //   const to = new Date("2022/03/03 00:00:00");
    //   expect(ddf.format(to)).toBe("2 months ago");
    // });
    // it("less then 18months ago", () => {
    //   ddf = new Formatter(new Date("2020/01/01 00:00:00"));
    //   const to = new Date("2021/05/31 23:59:59");
    //   expect(ddf.format(to)).toBe("17 months ago");
    // });
  });

  // it("18months ago and 1year ago", () => {
  //   ddf = new Formatter(new Date("2020/01/01 00:00:00"));
  //   const to = new Date("2021/06/01 00:00:00");
  //   expect(ddf.format(to)).toBe("last year");
  // });

  // it("18months ago and 2year ago", () => {
  //   ddf = new Formatter(new Date("2020/12/01 00:00:00"));
  //   const to = new Date("2022/06/30 00:00:00");
  //   expect(ddf.format(to)).toBe("2 years ago");
  // });

  // it("23months ago and 1year ago", () => {
  //   ddf = new Formatter(new Date("2020/01/01 00:00:00"));
  //   const to = new Date("2021/12/31 00:00:00");
  //   expect(ddf.format(to)).toBe("last year");
  // });

  // it("23months ago and 2year ago", () => {
  //   ddf = new Formatter(new Date("2020/01/01 00:00:00"));
  //   const to = new Date("2022/01/01 00:00:00");
  //   expect(ddf.format(to)).toBe("2 years ago");
  // });

  // it("23months ago and 3year ago", () => {
  //   ddf = new Formatter(new Date("2020/12/31 00:00:00"));
  //   const to = new Date("2023/01/01 00:00:00");
  //   expect(ddf.format(to)).toBe("2 years ago");
  // });

  // it("29months ago and 3year ago", () => {
  //   ddf = new Formatter(new Date("2020/12/31 00:00:00"));
  //   const to = new Date("2023/07/01 00:00:00");
  //   expect(ddf.format(to)).toBe("2 years ago");
  // });

  // it("30months ago and 3year ago", () => {
  //   ddf = new Formatter(new Date("2020/12/31 00:00:00"));
  //   const to = new Date("2023/08/01 00:00:00");
  //   expect(ddf.format(to)).toBe("3 years ago");
  // });

  it.todo("i18n");
  it.todo("global setting");
});
