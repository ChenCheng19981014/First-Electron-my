/**
 * @description 时间日期处理库
 */

/**
 * @description 获取当前日期字符串 "yy-mm-dd"
 * @parma date (Date) 时间戳 [default=new Date()]
 * @retrun time (String) 时间戳转换字符串
 */
const getDate = (date = new Date()) => {
  let today = date

  let month = today.getMonth() + 1;

  month = month < 10 ? '0' + month : month;

  let day = today.getDate() < 10 ? '0' + today.getDate() : today.getDate();

  let now1 = today.getFullYear() + '/' + month + '/' + day;

  return now1
}

/**
 * @description 获取指定时间字符串 "hh-mm-ss"
 * @parma date (Date) 时间戳 [default=new Date()]
 * @retrun time (String) 时间戳转换字符串
 */
const getTime = (date = new Date()) => {
  let today = date

  let hours = today.getHours() < 10 ? '0' + today.getHours() : today.getHours();

  let mins = today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes();

  let secs = today.getSeconds() < 10 ? '0' + today.getSeconds() : today.getSeconds();

  let now1 = + hours + ":" + mins + ":" + secs
  return now1
}

export {
  getDate, getTime
}