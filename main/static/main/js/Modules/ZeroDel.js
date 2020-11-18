function ZeroDel(ID) {
    Value = String(document.getElementById(ID).value);
    Value = Value.replace(/^0+/, '');
    document.getElementById(ID).value = Value;
}