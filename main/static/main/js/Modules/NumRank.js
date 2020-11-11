function Rank(Num) {
    Num = String(Num);
    var List = new Array();
    var Length = Num.length;
    var i = 0;

    while (Length > 2) {
        Length -= 3;
        List[i] = Num.substring(Length);
        Num = Num.substring(0, Length);
        i++;
    }
    
    List[i] = Num;
    List = List.reverse()
    var Res = List.join(" ")
    return Res
}