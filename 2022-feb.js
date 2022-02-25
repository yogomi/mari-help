function dateStringToJPDate(dateString) {
  var monthTable = {
    Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6,
    Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12
  };

  var weekTable = {
    Sun: '日', Mon: '月', Tue: '火', Wed: '水', Thu: '木', Fri: '金', Sat: '土'
  }

  var dateObj = {};
  [
    dateObj.dateOfWeek,
    dateObj.month,
    dateObj.date,
    dateObj.year,
    dateObj.time,
    dateObj.locale,
    dateObj.timeDelta,
    dateObj.timeDeltaString
  ] = dateString.split(' ');
   return `${dateObj.year}年${monthTable[dateObj.month]}月${dateObj.date}日（${weekTable[dateObj.dateOfWeek]}）`;
}

function checkUpdate(){
  var mySheet = SpreadsheetApp.getActiveSheet(); //シートを取得
  var myCell = mySheet.getActiveCell(); //アクティブセルを取得
  var row = myCell.getRow();
  var q0 = mySheet.getRange(row, 1).getValue(); //タイムスタンプ こちらが問題の箇所です。
  var q1 = mySheet.getRange(row, 3).getValue();
  var q2 = mySheet.getRange(row, 6).getValue();
  var q3 = mySheet.getRange(row, 11).getValue();
  var q4 = mySheet.getRange(row, 33).getValue();
  var q5 = mySheet.getRange(row, 28).getValue();
  var q6 = mySheet.getRange(row, 27).getValue();
  var message = "\n■月日:" + dateStringToJPDate(q0) + "\n■氏名:" + q1 + "\n■人数:" + q2 + "人\n■所在:" + q3 + "\n■Name:" + q4 + "\n■Number:" + q6 + "\n■Country:" + q5;
  sendLine(message);
}

function sendLine(msg){
  var token = "tAK9tzBT7W2xGyCJfBehYPQC6ZeCSfM8wXKBDzzBzFT";

  var options = {
    "method": "post",
    "Content-Type" : "application/x-www-form-urlencoded",
    "payload": "message=" + msg,
    "headers":{"Authorization" : "Bearer " + token}
  };
  UrlFetchApp.fetch("https://notify-api.line.me/api/notify",options);
}
