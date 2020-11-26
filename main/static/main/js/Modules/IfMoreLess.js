function IfLess (InputID, Value, Less, Res=Less, Type=true) {
    if (Value < Less || Value == "" & Type == true) {
        Value = Res;
        document.getElementById(InputID).value = Res;
    }
}


function IfMore (InputID, Value, More, Res=More) {
    if (Value > More) {
        Value = Res;
        document.getElementById(InputID).value = Res;
    }
}