import Polyglot from "node-polyglot";

const i18n = new Polyglot();

i18n.extend({
  second: "%{smart_count} second ago |||| %{smart_count} seconds ago",
});

export default i18n;
