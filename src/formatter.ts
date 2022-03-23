import i18n from "./i18n";

const NOW = 10;
const MINUTE = 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const MONTH = DAY * 31;
const YEAR = MONTH * 12;

class Formatter {
  private from: Date;
  constructor(from: Date = new Date(Date.now())) {
    this.from = from;
  }

  format(to: Date): string {
    const diff = this.diff_(to);

    let message = i18n.t("now");
    if (diff >= NOW && diff < MINUTE) {
      message = i18n.t("second", { count: diff });
    } else if (diff >= MINUTE && diff < HOUR) {
      message = i18n.t("minute", { smart_count: Math.floor(diff / MINUTE) });
    } else if (diff >= HOUR && diff < DAY) {
      message = i18n.t("hour", { smart_count: Math.floor(diff / HOUR) });
    } else if (diff >= DAY && diff < MONTH) {
      const diffDay = Math.abs(to.getDate() - this.from.getDate());
      message = i18n.t("day", { smart_count: diffDay });
    } else if (diff >= MONTH) {
      message = i18n.t("month", { smart_count: Math.floor(diff / MONTH) });
    }
    Math.ceil;
    return message;
  }

  private diff_(to: Date): number {
    return (this.from.getTime() - to.getTime()) / 1000;
  }
}

export default Formatter;
