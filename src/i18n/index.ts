import Polyglot from "node-polyglot";

const i18n = new Polyglot();

i18n.extend({
  now: "now",
  second: "%{count} seconds ago",
  minute: "%{smart_count} minute ago |||| %{smart_count} minutes ago",
  hour: "%{smart_count} hour ago |||| %{smart_count} hours ago",
  day: "yesterday |||| %{smart_count} days ago",
  month: "last month |||| %{smart_count} months ago",
  year: "last year |||| %{smart_count} years ago",
});

export default i18n;
