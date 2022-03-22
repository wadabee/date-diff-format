import i18n from "./i18n";

class Formatter {
  private from: Date;
  constructor(from: Date = new Date(Date.now())) {
    this.from = from;
  }

  // format(to: Date): string {
  //   return "few seconds ago";
  // }

  strictFormat(to: Date): string {
    const diff_ = this.diff(to);

    return i18n.t("second", { smart_count: diff_ });
  }

  laxFormat(to: Date): string {
    return "few seconds ago";
  }

  private diff(to: Date): number {
    return (to.getTime() - this.from.getTime()) / 1000;
  }
}

export default Formatter;
