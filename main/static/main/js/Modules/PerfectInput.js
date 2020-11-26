function LimitCorrect(Type, Array, Limit, Set_=Limit, AllowVoid=false) {
    if (Type == "More") {
	    for (var i = 0; i < Array.length; i++) {
	        var Value = document.getElementById(Array[i]).value;
		        if (Value > Limit) {
		        Value = Set_;
		        document.getElementById(Array[i]).value = Set_;
		    }
	    }
	}
	else if (Type == "Less") {
	    for (var i = 0; i < Array.length; i++) {
	        var Value = document.getElementById(Array[i]).value;
		        if (Value < Limit || Value == "" & Value != "-") {
		        Value = Set_;
		        document.getElementById(Array[i]).value = Set_;
		    }
	    }
	}
}


function ZeroDel(Array) {
	for (var i = 0; i < Array.length; i++) {
	    Value = String(document.getElementById(Array[i]).value);
	    Value = Value.replace(/^0+/, '');
	    document.getElementById(Array[i]).value = Value;
	}
}
