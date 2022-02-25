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
  var message = "\n■月日:" + q0 + "\n■氏名:" + q1 + "\n■人数:" + q2 + "人\n■所在:" + q3 + "\n■Name:" + q4 + "\n■Number:" + q6 + "\n■Country:" + q5;
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
