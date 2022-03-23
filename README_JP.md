# date-diff-format
JavaScriptの日付差異表示をフォーマットするライブラリ。

## Getting Started

## Example Usage
```javascript
/** 計算の基点となる日付を引数に設定 **/
// e.g. システム日付を基点に設定する事で、同一オブジェクトで再表示を行うことができる
ddf = new DateDiffFormat(new Date("2022/06/01 00:00:00"));

/** 引数に設定した日付との差異を取得する **/
ddf.format(new Date("2022/05/31 23:59:59");   // now
ddf.format(new Date("2022/05/31 23:59:51";   // now -> 差異が10秒以内の場合は"now"

ddf.format(new Date("2022/05/31 23:59:50");   // 10 seconds ago

ddf.format(new Date("2022/05/31 23:59:00");   // 1 minute ago
ddf.format(new Date("2022/05/31 23:00:01");   // 59 minutes ago -> 秒以下は切り捨て

ddf.format(new Date("2022/05/31 23:00:00");   // 1 hour ago
ddf.format(new Date("2022/05/31 00:00:01");   // 23 hours ago -> 分以下は切り捨て




```


## API Document


