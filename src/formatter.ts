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

    if (diff_ === 1) {
      return "1 second ago";
    } else {
      return `${diff_} seconds ago`;
    }
  }

  laxFormat(to: Date): string {
    return "few seconds ago";
  }

  private diff(to: Date): number {
    return (to.getTime() - this.from.getTime()) / 1000;
  }
}

export default Formatter;
