 //获取指定日历数据
 var days = function(cyear, cmonth) {
         $("#nowMonth").html("<p>" + cyear + " " + cmonth + " " + "</p>");
         var m = 0,
             n = 0;
         var cData = new Date(cyear, cmonth - 1, 1);
         var cweek = cData.getDay(); //当前星期
         var k = "linear-gradient(120deg, #155799, #159957)"; //日历颜色表
         $("#detailData tr").each(function(i) {
             $(this).css("background-image", k);
             // 本月一号是什么时候
             if (i > 0) {
                 $(this).children("th").each(function(j) {
                     if (daysLong(cyear, cmonth) == m) {
                         $(this).html(" ");
                     } else {
                         if ((j >= cweek) || (m > 0)) {
                             m++;
                             $(this).attr("id", m);
                             $(this).html("<p>" + m + "</p>");
                         } else {
                             $(this).html(" ");
                         }
                     }
                 });
             }
         });

     }
     // 返回当前月份所含天数
 var daysLong = function(cyear, cmonth) {
     if (cmonth == 2) {
         if (cyear % 4 == 0) {
             return 29;
         } else {
             return 28;
         }
     } else {
         if (cmonth == 1 || cmonth == 3 || cmonth == 5 || cmonth == 7 || cmonth == 8 || cmonth == 10 || cmonth == 12) {
             return 31;
         } else {
             return 30;
         }
     }
 }