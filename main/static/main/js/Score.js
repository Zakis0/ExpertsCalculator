document.getElementById("ScoreBtn").classList.add("btn-activ");

var ScoreResField = document.getElementById("ScoreResField");


function Decrease(Num, Koef) {return Math.ceil(Num * (1 - Koef / 100))}


function CreateTable(Day, BeforeReset, AfterReset, Duble) {
    var table = document.getElementById("ScoreTable");
    var row = table.insertRow(Day);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = Day;
    cell2.innerHTML = BeforeReset;
    cell3.innerHTML = AfterReset;
    cell4.innerHTML = Duble;
}


function ClearTable() {
    var Block = document.getElementById("TableBlock");
    var Table = document.getElementById("ScoreTable");
    Table.parentNode.removeChild(Table);

    var Table = document.createElement("table");
    Table.id = "ScoreTable";
    Block.appendChild(Table)
}


function CountScore() {
    var TotalScore = Number(document.getElementById("TotalScore").value);
    var Operation = document.getElementById("Operations").value;
    var ExcelText = "День;После сброса;После оп;Дубль"
    var YesterdayScore = TotalScore;
    var AfterReset = Decrease(TotalScore, KoefOP);
    var BeforeReset;
    var Duble;
    var Day = 0;

    ZeroDel("TotalScore")

    switch (Operation) {
        case "Duplexity": var OperationID = 23; break;
        case "ForlornHope": var OperationID = 22; break;
        case "MassiveAttack": var OperationID = 21; break;
        case "DeepCut": var OperationID = 20; break;
        case "DeadEnd": var OperationID = 19; break;
        case "CurtainCall": var OperationID = 18; break;
        case "ChokePoint": var OperationID = 17; break;
        case "Stronghold": var OperationID = 16; break;
        case "Foxtrot": var OperationID = 15; break;
        case "Tinderbox": var OperationID = 14; break;
        case "Bottleneck": var OperationID = 13; break;
        case "SourGrapes": var OperationID = 12; break;
        case "Mambo": var OperationID = 11; break;
        case "PowderKeg": var OperationID = 10; break;
        case "UpperLip": var OperationID = 9; break;
        case "Hacksaw": var OperationID = 8; break;
        case "TankTango": var OperationID = 7; break;
        case "TickerTape": var OperationID = 6; break;
        case "Charleston": var OperationID = 5; break;
        case "Pencilneck": var OperationID = 4; break;
        case "FullMonty": var OperationID = 3; break;
        case "VenusFlytrap": var OperationID = 2; break;
        case "EarlyBird": var OperationID = 1; break;
        case "MilkRun": var OperationID = 0; break;
    }

    var Score = ScoreList[OperationID];
    var MaxScore = ScoreMax[OperationID];

    if (TotalScore > MaxOperationScore) {
        TotalScore = MaxOperationScore;
        document.getElementById("TotalScore").value = MaxOperationScore;
    }
    if (TotalScore < 0 || TotalScore == "") {
        TotalScore = 0;
        document.getElementById("TotalScore").value = 0;
    }

    ClearTable()

    CreateTable("День", "После сброса", "После оп", "Дубль")

    while (TotalScore != MaxScore) {
        TotalScore = Decrease(TotalScore, KoefOP);
        BeforeReset = TotalScore;
        TotalScore += Score;
        AfterReset = TotalScore;
        Duble = AfterReset + Score;
        Day += 1;

        CreateTable(Day, BeforeReset, AfterReset, Duble)
        ExcelText += "\n" + Day + ";" + BeforeReset + ";" + AfterReset + ";" + Duble;

        if (YesterdayScore == TotalScore || Day > 200)
            break;
        
        YesterdayScore = TotalScore;
    }
    if (TotalScore >= MaxScore)
        MaxScore = TotalScore;
    ScoreResField.innerHTML = "Максимальные очки (" + MaxScore + ") через " + Day + " " + Days(Day);
    return ExcelText
}


function ScoreClear() {
    document.getElementById("TotalScore").value = 0;
    CountScore()
}


function DownloadExcel () {
    var Link = document.createElement("a");
    Link.download = "ScoreTable.csv"
    Link.href = "data:text/csv;charset=utf-8," + encodeURIComponent('\ufeff' + CountScore());
    Link.click();
}

CountScore()