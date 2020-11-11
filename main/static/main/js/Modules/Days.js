function Days(Num) {
    Num = String(Num)
    if (Num.endsWith("1") && !Num.endsWith("11"))
        var Edit = "день";
    else if (Num.endsWith("2") && !Num.endsWith("12") || Num.endsWith("3") && !Num.endsWith("13") || Num.endsWith("4") && !Num.endsWith("14"))
        var Edit = "дня";
    else
        var Edit = "дней";
    return Edit
}