//渐变颜色
var detailColor = new Array();
detailColor[0] = "linear-gradient(120deg, #F82D2D, #FF0000)";
detailColor[1] = "linear-gradient(120deg, #F5D72F, #F8D301)";
detailColor[2] = "linear-gradient(120deg, #F5FF31, #F7BFF0)";
detailColor[3] = "linear-gradient(120deg, #23F79E, #23DEF7)";
detailColor[4] = "linear-gradient(120deg, #237FF7, #5123F7)";
detailColor[5] = "linear-gradient(120deg, #A223F7, #F723C9)";
detailColor[6] = "linear-gradient(120deg, #F72362, #F7232D)";
//获取指定日历数据
var days = function(cyear, cmonth) {
        $("#nowMonth").html("<p>" + cyear + " " + cmonth + " " + "</p>");
        var m = 0,
            n = 0;
        //var k = "linear-gradient(120deg, #155799, #159957)"; //日历颜色表

        var cData = new Date(cyear, cmonth - 1, 1);
        var cweek = cData.getDay(); //当前星期
        $("#detailData tr").each(function(i) {
            $(this).css("background-image", detailColor[i - 1]);
            // 本月一号是什么时候
            if (i > 0) {
                $(this).children("th").each(function(j) {
                    if (daysLong(cyear, cmonth) == m) {
                        $(this).html(" ");
                    } else {
                        if ((j >= cweek) || (m > 0)) {
                            m++;
                            $(this).attr("id", m);
                            $(this).hover(function() {
                                $(this).css("background-image", "linear-gradient(120deg, #FA003E, #E9FA00)");
                                console.log($(this).attr("id"));
                            }, function() {
                                $(this).css("background-image", "linear-gradient(120deg, #155799, #159957)")
                            });
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