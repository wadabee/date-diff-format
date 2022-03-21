class Formatter {
  private from: number;
  constructor() {
    this.from = Date.now();
  }

  format(): string {
    return "few seconds ago";
  }

  strictFormat(): string {
    return "1 second ago";
  }

  laxFormat(): string {
    return "few seconds ago";
  }
}

export default Formatter;
