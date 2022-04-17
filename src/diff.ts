const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

// TODO: classifying
// TODO: diif module to npm package

export const diffSecond = (from: Date, to: Date) => {
  return (to.getTime() - from.getTime()) / SECOND;
};

export const diffMinute = (from: Date, to: Date) => {
  const from_ = new Date(
    from.getFullYear(),
    from.getMonth(),
    from.getDate(),
    from.getHours(),
    from.getMinutes()
  );
  const to_ = new Date(
    to.getFullYear(),
    to.getMonth(),
    to.getDate(),
    to.getHours(),
    to.getMinutes()
  );
  return (to_.getTime() - from_.getTime()) / MINUTE;
};

export const diffHour = (from: Date, to: Date) => {
  const from_ = new Date(
    from.getFullYear(),
    from.getMonth(),
    from.getDate(),
    from.getHours()
  );
  const to_ = new Date(
    to.getFullYear(),
    to.getMonth(),
    to.getDate(),
    to.getHours()
  );
  return (to_.getTime() - from_.getTime()) / HOUR;
};

export const diffDay = (from: Date, to: Date) => {
  const from_ = new Date(from.getFullYear(), from.getMonth(), from.getDate());
  const to_ = new Date(to.getFullYear(), to.getMonth(), to.getDate());
  return (to_.getTime() - from_.getTime()) / DAY;
};

export const diffMonth = (from: Date, to: Date) => {
  const diffYear_ = diffYear(from, to);
  return to.getMonth() - from.getMonth() + diffYear_ * 12;
};

export const diffYear = (from: Date, to: Date) => {
  return to.getFullYear() - from.getFullYear();
};
