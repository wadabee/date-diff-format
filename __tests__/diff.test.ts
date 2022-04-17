import {
  diffDay,
  diffHour,
  diffMinute,
  diffMonth,
  diffSecond,
  diffYear,
} from "../src/diff";

describe("diff", () => {
  describe("diffSecond", () => {
    it("same", () => {
      const from = new Date("2022/01/01 00:00:00");
      const to = new Date("2022/01/01 00:00:00");

      const actual = diffSecond(from, to);
      expect(actual).toBe(0);
    });

    it("1 second ago", () => {
      const from = new Date("2022/01/01 00:00:00");
      const to = new Date("2022/01/01 00:00:01");

      const actual = diffSecond(from, to);
      expect(actual).toBe(1);
    });

    it("1 second later", () => {
      const from = new Date("2022/01/01 00:00:01");
      const to = new Date("2022/01/01 00:00:00");

      const actual = diffSecond(from, to);
      expect(actual).toBe(-1);
    });
  });

  describe("diffMinute", () => {
    it("same", () => {
      const from = new Date("2022/01/01 00:00:00");
      const to = new Date("2022/01/01 00:00:00");

      const actual = diffMinute(from, to);
      expect(actual).toBe(0);
    });

    it("1 minute ago", () => {
      const from = new Date("2022/01/01 00:00:00");
      const to = new Date("2022/01/01 00:01:00");

      const actual = diffMinute(from, to);
      expect(actual).toBe(1);
    });

    it("1 minute later", () => {
      const from = new Date("2022/01/01 00:01:00");
      const to = new Date("2022/01/01 00:00:00");

      const actual = diffMinute(from, to);
      expect(actual).toBe(-1);
    });

    it("1 minute ago and difference hour", () => {
      const from = new Date("2022/01/01 00:59:00");
      const to = new Date("2022/01/01 01:00:00");

      const actual = diffMinute(from, to);
      expect(actual).toBe(1);
    });

    it("1 minute later and difference hour", () => {
      const from = new Date("2022/01/01 01:00:00");
      const to = new Date("2022/01/01 00:59:00");

      const actual = diffMinute(from, to);
      expect(actual).toBe(-1);
    });

    it("fraction", () => {
      const from = new Date("2022/01/01 00:59:01");
      const to = new Date("2022/01/01 01:00:00");

      const actual = diffMinute(from, to);
      expect(actual).toBe(1);
    });
  });

  describe("diffHour", () => {
    it("same", () => {
      const from = new Date("2022/01/01 00:00:00");
      const to = new Date("2022/01/01 00:00:00");

      const actual = diffHour(from, to);
      expect(actual).toBe(0);
    });

    it("1 hour ago", () => {
      const from = new Date("2022/01/01 00:00:00");
      const to = new Date("2022/01/01 01:00:00");

      const actual = diffHour(from, to);
      expect(actual).toBe(1);
    });

    it("1 hour later", () => {
      const from = new Date("2022/01/01 01:00:00");
      const to = new Date("2022/01/01 00:00:00");

      const actual = diffHour(from, to);
      expect(actual).toBe(-1);
    });

    it("1 hour ago and difference day", () => {
      const from = new Date("2022/01/01 23:00:00");
      const to = new Date("2022/01/02 00:00:00");

      const actual = diffHour(from, to);
      expect(actual).toBe(1);
    });

    it("1 hour later and difference day", () => {
      const from = new Date("2022/01/02 00:00:00");
      const to = new Date("2022/01/01 23:00:00");

      const actual = diffHour(from, to);
      expect(actual).toBe(-1);
    });

    it("fraction", () => {
      const from = new Date("2022/01/01 00:59:59");
      const to = new Date("2022/01/01 01:00:00");

      const actual = diffHour(from, to);
      expect(actual).toBe(1);
    });
  });

  describe("diffDay", () => {
    it("same", () => {
      const from = new Date("2022/01/01 00:00:00");
      const to = new Date("2022/01/01 00:00:00");

      const actual = diffDay(from, to);
      expect(actual).toBe(0);
    });

    it("1 day ago and same month", () => {
      const from = new Date("2022/01/10 00:00:00");
      const to = new Date("2022/01/11 00:00:00");

      const actual = diffDay(from, to);
      expect(actual).toBe(1);
    });

    it("1 day ago and different month", () => {
      const from = new Date("2022/01/31 00:00:00");
      const to = new Date("2022/02/01 00:00:00");

      const actual = diffDay(from, to);
      expect(actual).toBe(1);
    });

    it("30 day ago and different month", () => {
      const from = new Date("2022/02/01 00:00:00");
      const to = new Date("2022/03/03 00:00:00");

      const actual = diffDay(from, to);
      expect(actual).toBe(30);
    });

    it("30 day ago in leap year", () => {
      const from = new Date("2020/02/01 00:00:00");
      const to = new Date("2020/03/02 00:00:00");

      const actual = diffDay(from, to);
      expect(actual).toBe(30);
    });

    it("365 day ago", () => {
      const from = new Date("2021/02/01 00:00:00");
      const to = new Date("2022/02/01 00:00:00");

      const actual = diffDay(from, to);
      expect(actual).toBe(365);
    });

    it("366 day ago in leap year", () => {
      const from = new Date("2020/02/01 00:00:00");
      const to = new Date("2021/02/01 00:00:00");

      const actual = diffDay(from, to);
      expect(actual).toBe(366);
    });

    it("fraction", () => {
      const from = new Date("2022/01/31 23:00:00");
      const to = new Date("2022/02/01 00:00:00");

      const actual = diffDay(from, to);
      expect(actual).toBe(1);
    });
  });

  describe("diffMonth", () => {
    it("same", () => {
      const from = new Date("2022/01/01 00:00:00");
      const to = new Date("2022/01/01 00:00:00");

      const actual = diffMonth(from, to);
      expect(actual).toBe(0);
    });

    it("1 month ago and same year", () => {
      const from = new Date("2022/01/01 00:00:00");
      const to = new Date("2022/02/01 00:00:00");

      const actual = diffMonth(from, to);
      expect(actual).toBe(1);
    });

    it("1 month ago and different year", () => {
      const from = new Date("2021/12/01 00:00:00");
      const to = new Date("2022/01/01 00:00:00");

      const actual = diffMonth(from, to);
      expect(actual).toBe(1);
    });

    it("1 month later and different year", () => {
      const from = new Date("2022/01/01 00:00:00");
      const to = new Date("2021/12/01 00:00:00");

      const actual = diffMonth(from, to);
      expect(actual).toBe(-1);
    });

    it("2 months ago and different year", () => {
      const from = new Date("2021/12/01 00:00:00");
      const to = new Date("2022/02/01 00:00:00");

      const actual = diffMonth(from, to);
      expect(actual).toBe(2);
    });

    it("13 months ago", () => {
      const from = new Date("2021/01/01 00:00:00");
      const to = new Date("2022/02/01 00:00:00");

      const actual = diffMonth(from, to);
      expect(actual).toBe(13);
    });

    it("13 months later", () => {
      const from = new Date("2022/01/01 00:00:00");
      const to = new Date("2020/12/01 00:00:00");

      const actual = diffMonth(from, to);
      expect(actual).toBe(-13);
    });

    it("25 months ago", () => {
      const from = new Date("2020/01/01 00:00:00");
      const to = new Date("2022/02/01 00:00:00");

      const actual = diffMonth(from, to);
      expect(actual).toBe(25);
    });
  });

  describe("diffYear", () => {
    it("same", () => {
      const from = new Date("2022/01/01 00:00:00");
      const to = new Date("2022/01/01 00:00:00");

      const actual = diffYear(from, to);
      expect(actual).toBe(0);
    });

    it("1 second ago", () => {
      const from = new Date("2022/01/01 00:00:00");
      const to = new Date("2023/01/01 00:00:00");

      const actual = diffYear(from, to);
      expect(actual).toBe(1);
    });

    it("1 second later", () => {
      const from = new Date("2022/01/01 00:00:00");
      const to = new Date("2021/01/01 00:00:00");

      const actual = diffYear(from, to);
      expect(actual).toBe(-1);
    });
  });
});
