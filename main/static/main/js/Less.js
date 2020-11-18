document.getElementById("LessBtn").classList.add("btn-activ");

var LessEnergyResField = document.getElementById("LessEnergyResField");
var LessHealthField = document.getElementById("LessHealthField");
var LessDamageResField = document.getElementById("LessDamageResField");


function LessСountEnergy() {
    var GunboatLevel = Number(document.getElementById("GunboatLevel").value);
    var EnergyBoost = Number(document.getElementById("EnergyBoost").value);

    var ArtilleryNum = Number(document.getElementById("ArtilleryNum").innerHTML.substring(1));
    var FlareNum = Number(document.getElementById("FlareNum").innerHTML.substring(1));
    var ShockNum = Number(document.getElementById("ShockNum").innerHTML.substring(1));
    var BarrageNum = Number(document.getElementById("BarrageNum").innerHTML.substring(1));
    var SmokeNum = Number(document.getElementById("SmokeNum").innerHTML.substring(1));
    var CrittersNum = Number(document.getElementById("CrittersNum").innerHTML.substring(1));

    var BattleOrdersNum = Number(document.getElementById("BattleOrdersNum").innerHTML.substring(1));
    var UniversalRemoteNum = Number(document.getElementById("UniversalRemoteNum").innerHTML.substring(1));
    var TauntNum = Number(document.getElementById("TauntNum").innerHTML.substring(1));
    var ShockKnucklesNum = Number(document.getElementById("ShockKnucklesNum").innerHTML.substring(1));

    var ScorcherNum = Number(document.getElementById("ScorcherNum").innerHTML.substring(1));
    var BombardierNum = Number(document.getElementById("BombardierNum").innerHTML.substring(1));


    var ArtilleryEnd = ((2 * Artillery + ArtilleryCoeff * (ArtilleryNum - 1)) * ArtilleryNum / 2);
    var FlareEnd = ((2 * Flare + FlareCoeff * (FlareNum - 1)) * FlareNum / 2);
    var ShockEnd = ((2 * Shock + ShockCoeff * (ShockNum - 1)) * ShockNum / 2);
    var BarrageEnd = ((2 * Barrage + BarrageCoeff * (BarrageNum - 1)) * BarrageNum / 2);
    var SmokeEnd = ((2 * Smoke + SmokeCoeff * (SmokeNum - 1)) * SmokeNum / 2);
    var CrittersEnd = ((2 * Critters + CrittersCoeff * (CrittersNum - 1)) * CrittersNum / 2);

    var BattleOrdersEnd = ((2 * BattleOrders + BattleOrdersCoeff * (BattleOrdersNum - 1)) * BattleOrdersNum / 2);
    var UniversalRemoteEnd = ((2 * UniversalRemote + UniversalRemoteCoeff * (UniversalRemoteNum - 1)) * UniversalRemoteNum / 2);
    var TauntEnd = ((2 * Taunt + TauntCoeff * (TauntNum - 1)) * TauntNum / 2)
    var ShockKnucklesEnd = ((2 * ShockKnuckles + ShockKnucklesCoeff * (ShockKnucklesNum - 1)) * ShockKnucklesNum / 2);
    var ScorcherEnd = Scorcher * ScorcherNum;
    var BombardierEnd = Bombardier * BombardierNum;


    // Общие затраты энергии
    var TotalEnergy = ArtilleryEnd + FlareEnd + ShockEnd + BarrageEnd + SmokeEnd + CrittersEnd + BattleOrdersEnd + UniversalRemoteEnd + TauntEnd + ShockKnucklesEnd + ScorcherEnd + BombardierEnd;

    // Рассчёт заряда канонерки по уроню
    Energy = Gunboat[GunboatLevel - 1]

    // Общая энергия
    EnergyEnd = Math.ceil(Energy * (1 + EnergyBoost / 100))


    // Вывод результата
    LessEnergyResField.innerHTML = "Затраты заряда: " + Rank(Math.ceil(TotalEnergy)) + "<br>Ваш заряд: " + Rank(EnergyEnd);


    document.getElementById("ArtilleryEnd").innerHTML = ArtilleryEnd;
    document.getElementById("FlareEnd").innerHTML = FlareEnd;
    document.getElementById("ShockEnd").innerHTML = ShockEnd;
    document.getElementById("BarrageEnd").innerHTML = BarrageEnd;
    document.getElementById("SmokeEnd").innerHTML = SmokeEnd;
    document.getElementById("CrittersEnd").innerHTML = CrittersEnd;

    document.getElementById("BattleOrdersEnd").innerHTML = BattleOrdersEnd;
    document.getElementById("UniversalRemoteEnd").innerHTML = UniversalRemoteEnd;
    document.getElementById("TauntEnd").innerHTML = TauntEnd;
    document.getElementById("ShockKnucklesEnd").innerHTML = ShockKnucklesEnd;
    document.getElementById("ScorcherEnd").innerHTML = ScorcherEnd;
    document.getElementById("BombardierEnd").innerHTML = BombardierEnd;
}


function LessCountDamage() {
    var Troops = document.getElementById("Troop").classList.value;
    var TroopsNum = Number(document.getElementById("TroopsNum").value);
    var TroopsLevel = Number(document.getElementById("TroopsLevel").value);
    var ShockTime = Number(document.getElementById("ShockTime").value);
    var DamageBoost = Number(document.getElementById("DamageBoost").value);
    var BattleOrdersLevel = Number(document.getElementById("BattleOrdersLevel").value);

    var BaseHealth = Number(document.getElementById("BaseHealth").value);
    var Shield = Number(document.getElementById("Shield").value);
    var BuildingHealthBoost = Number(document.getElementById("BuildingHealthBoost").value);


    switch (Troops) {
        case "TroopZooka":
            var TroopsAttackDamage = ZooksAttackDamage;
            var TroopsAttackSpeed = ZooksAttackSpeed;
            var TroopsWeight = ZooksWeight;
            var TroopsLevelMax = ZooksAttackDamage.length;
            break;
        case "TroopWarrior":
            var TroopsAttackDamage = WarriorsAttackDamage;
            var TroopsAttackSpeed = WarriorsAttackSpeed;
            var TroopsWeight = WarriorsWeight;
            var TroopsLevelMax = WarriorsAttackDamage.length;
            break;
        case "TroopBombardier":
            var TroopsAttackDamage = BombardiersAttackDamage;
            var TroopsAttackSpeed = BombardiersAttackSpeed;
            var TroopsWeight = BombardiersWeight;
            var TroopsLevelMax = BombardiersAttackDamage.length;
            break;
        case "TroopTank":
            var TroopsAttackDamage = TanksAttackDamage;
            var TroopsAttackSpeed = TanksAttackSpeed;
            var TroopsWeight = TanksWeight;
            var TroopsLevelMax = TanksAttackDamage.length;
            break;
        case "TroopScorcher":
            var TroopsAttackDamage = ScorcherDamage;
            var TroopsAttackSpeed = ScorcherSpeed;
            var TroopsWeight = ScorcherWeight;
            var TroopsLevelMax = ScorcherDamage.length;
            break;
    }

    var TroopsNumMax = Math.floor(LandingCraftCapacity / TroopsWeight) * LandingCraftNum;


    // Рассчёт урона воинов
    var TroopsDamage = TroopsAttackDamage[TroopsLevel - 1] * TroopsNum

    
    // Когда используются боевые приказы
    // Итоговый урон
    if (BattleOrdersLevel > 0) 
        var TroopsDamageEnd = TroopsDamage * (1 + ((DamageBoost + BrickDamage[BattleOrdersLevel]) / 100))
    else
        var TroopsDamageEnd = TroopsDamage * (1 + (DamageBoost / 100))


    var TroopsSpeed = TroopsAttackSpeed / (1 + (BrickSpeed[BattleOrdersLevel] / 100))


     // Общий DPS воинов
    var TroopsDPSEnd = TroopsDamageEnd / TroopsSpeed

    var TroopsDamageTimeEnd = (TroopsDamageEnd * Math.floor(ShockTime / TroopsSpeed))


    // Рассчёт урона от горения у огневиков
    if (Troops == "TroopScorcher") {
        var BurnTime = (ShockTime - 2.5) / 0.5
        var BurnDamage = ScorcherBurn[TroopsLevel - 1]
        var BurnDamageFinish = 0
    
        if (BattleOrdersNum > 0)
            var BurnDamageEnd = BurnDamage * (1 + ((DamageBoost + BrickDamage[BattleOrdersLevel]) / 100))
        else
            var BurnDamageEnd = BurnDamage * (1 + (DamageBoost / 100))

        var TroopsDPSEnd = Math.floor((TroopsDamageEnd / TroopsSpeed) + (BurnDamageEnd * 2))

        if (ShockTime > 2.5) {
            BurnDamageFinish += BurnDamageEnd * BurnTime
        
            if (ShockTime > BattleTime - 5)
                BurnDamageFinish += BurnDamageEnd * (BattleTime - ShockTime) * 2
            else
                BurnDamageFinish += BurnDamageEnd * 10
        }

        // Итоговый урон
        TroopsDamageTimeEnd += Math.floor(BurnDamageFinish)
    }

    // Подсчёт здоровья базы
    var BaseHealthEnd = (BaseHealth + (BuildingHealthBoost * BaseHealth / 100)) * (1 + (Shield / 100));

    
    // Установка итогового текста
    LessDamageResField.innerHTML = "Скорость атаки: " + TroopsSpeed.toFixed(4) + "<br>Урон за залп: " + Rank(Math.ceil(TroopsDamageEnd)) + "<br>Урон в секунду: " + Rank(Math.ceil(TroopsDPSEnd)) + "<br>Урон за " + ShockTime + " с: " + Rank(Math.ceil(TroopsDamageTimeEnd));
    LessHealthField.innerHTML = "Здоровье базы: " + Rank(Math.ceil(BaseHealthEnd));
     
    return new Array(TroopsNumMax, TroopsLevelMax)
}


function LessMax() {
    document.getElementById("GunboatLevel").value = GunboatLevelMax;
    LessСountEnergy()

    var TroopsNumMax = LessCountDamage()[0];
    var TroopsLevelMax = LessCountDamage()[1];
    document.getElementById("TroopsNum").value = TroopsNumMax;
    document.getElementById("TroopsLevel").value = TroopsLevelMax;
    document.getElementById("BattleOrdersLevel").value = BattleOrdersLevelMax;
    document.getElementById("BaseHealth").value = PowerCore;
    LessCountDamage()
}


function LessChange(TroopsNumMax=Math.floor(LandingCraftCapacity / ZooksWeight) * LandingCraftNum, TroopsLevelMax=ZooksAttackDamage.length) {
    var Num = document.getElementById("TroopsNum").value;
    var Level = document.getElementById("TroopsLevel").value;
    if (Level == TroopsLevelMax && Num == TroopsNumMax) {
        var TroopsNumMax = LessCountDamage()[0];
        var TroopsLevelMax = LessCountDamage()[1];
        document.getElementById("TroopsNum").value = TroopsNumMax;
        document.getElementById("TroopsLevel").value = TroopsLevelMax;
    }
    else {
        document.getElementById("TroopsLevel").value = 1;
        document.getElementById("TroopsNum").value = 0;
    }
    LessCountDamage()
}


function LessClear() {
    document.getElementById("GunboatLevel").value = 1;
    document.getElementById("EnergyBoost").value = 0;

    document.getElementById("ArtilleryNum").innerHTML = "X0";
    document.getElementById("FlareNum").innerHTML = "X0";
    document.getElementById("ShockNum").innerHTML = "X0";
    document.getElementById("BarrageNum").innerHTML = "X0";
    document.getElementById("SmokeNum").innerHTML = "X0";
    document.getElementById("CrittersNum").innerHTML = "X0";

    document.getElementById("BattleOrdersNum").innerHTML = "X0";
    document.getElementById("UniversalRemoteNum").innerHTML = "X0";
    document.getElementById("TauntNum").innerHTML = "X0";
    document.getElementById("ShockKnucklesNum").innerHTML = "X0";
    document.getElementById("ScorcherNum").innerHTML = "X0";
    document.getElementById("BombardierNum").innerHTML = "X0";

    document.getElementById("TroopsNum").value = 0;
    document.getElementById("TroopsLevel").value = 1;

    document.getElementById("ShockTime").value = 0;
    document.getElementById("BattleOrdersLevel").value = 0;
    document.getElementById("DamageBoost").value = 0;

    document.getElementById("BaseHealth").value = StartBaseHealth;
    document.getElementById("BuildingHealthBoost").value = 0;
    document.getElementById("Shield").value = 0;

    LessEnergyResField.innerHTML = "Затраты заряда: 0<br>Ваш заряд: 12";
    LessDamageResField.innerHTML = "Скорость атаки: 0<br>Урон за залп: 0<br>Урон в секунду: 0<br>Урон за 0 с: 0";
    LessHealthField.innerHTML = "Здоровье базы: " + Rank(StartBaseHealth);
    
    LessСountEnergy()
    LessCountDamage()
}


function Plus(Block, index=0) {
    Block = document.getElementById(Block.id)
    Value = Block.innerHTML.substring(1);
    var Max = 20;

    if (index != 0) {
        switch (index) {
            case 1: var TroopsWeight = ScorcherWeight; break;
            case 2: var TroopsWeight = BombardierWeight; break;
        }
        Max = Math.floor(LandingCraftCapacity / TroopsWeight) * LandingCraftNum;
    }

    if (Value < Max) {
        Value++;
        Block.innerHTML = "X" + Value;
        LessСountEnergy()
        Color(Block.id.substring(0, Block.id.length-3), 0)
    }
}


function Minus(Block) {
    Block = document.getElementById(Block.id)
    Value = Block.innerHTML.substring(1);
    if (Value > 0) {
        Value--;
        Block.innerHTML = "X" + Value;
        LessСountEnergy()
        Color(Block.id.substring(0, Block.id.length-3), 1)
    }
}


function Color(id, color) {
    var Id = id + "Activ";
    var Block = document.getElementById(Id);

    if (color == 0)
        var Color = "Green";
    else
        var Color = "Red";

    function ChargeColor() {Block.classList.toggle(Color)}
    setTimeout(ChargeColor, 100)
    ChargeColor()
}


document.addEventListener('click', e => {
    var Button = document.getElementById("SelectedTroop");
    var Content = document.getElementById("TroopsSelect");
    var Target = e.target;
    if (Target === Button)
        Content.classList.toggle("hidden")
    else
        document.getElementById("TroopsSelect").classList.add("hidden")
});


function ClearTroop() {
    var Troops = new Array("TroopZooka", "TroopWarrior", "TroopBombardier", "TroopTank", "TroopScorcher");
    for (var i = 0; i < Troops.length; i++) {
        var id = Troops[i];
        var Block = document.getElementById(id);
        Block.classList.remove("Green");
    }
}


function SelectTroop(id) {
    var Block = document.getElementById(id.id);
    var Selector = document.getElementById("Troop");
    var TroopsNumMax = LessCountDamage()[0];
    var TroopsLevelMax = LessCountDamage()[1];
    var Img = document.getElementById("SelectedTroop");
    Selector.classList.remove(Selector.classList.value);
    ClearTroop();
    Block.classList.add("Green");

    switch (Block.id) {
            case "TroopZooka": Selector.classList.add("TroopZooka"); var Src = "ZookaIcon"; break;
            case "TroopWarrior": Selector.classList.add("TroopWarrior"); var Src = "WarriorIcon"; break;
            case "TroopBombardier": Selector.classList.add("TroopBombardier"); var Src = "BombardierIcon"; break;
            case "TroopTank": Selector.classList.add("TroopTank"); var Src = "TankIcon"; break;
            case "TroopScorcher": Selector.classList.add("TroopScorcher"); var Src = "ScorcherIcon"; break;
        }
    Img.src = "/static/main/img/Troops/" + Src + ".png";
    LessChange(TroopsNumMax, TroopsLevelMax)
}


function CheckCorrect () {
    var GunboatLevel = Number(document.getElementById("GunboatLevel").value);
    var EnergyBoost = Number(document.getElementById("EnergyBoost").value);

    var Troops = document.getElementById("Troop").classList.value;
    var TroopsNum = Number(document.getElementById("TroopsNum").value);
    var TroopsLevel = Number(document.getElementById("TroopsLevel").value);
    var ShockTime = Number(document.getElementById("ShockTime").value);
    var DamageBoost = Number(document.getElementById("DamageBoost").value);
    var BattleOrdersLevel = Number(document.getElementById("BattleOrdersLevel").value);

    var BaseHealth = Number(document.getElementById("BaseHealth").value);
    var Shield = Number(document.getElementById("Shield").value);
    var BuildingHealthBoost = Number(document.getElementById("BuildingHealthBoost").value);

    var TroopsNumMax = LessCountDamage()[0];
    var TroopsLevelMax = LessCountDamage()[1];


    IfMore("GunboatLevel", GunboatLevel, GunboatLevelMax);
    IfMore("EnergyBoost", EnergyBoost, 900);

    var ZeroDelList = new Array("EnergyBoost", "GunboatLevel", "TroopsNum", "ShockTime", "DamageBoost", "BattleOrdersLevel", "Shield", "BuildingHealthBoost")
    for (var input = 0; input < ZeroDelList.length; input++)
        ZeroDel(ZeroDelList[input])

    LessСountEnergy()


    ListLess0 = new Array("EnergyBoost", "TroopsNum", "ShockTime", "DamageBoost", "BattleOrdersLevel", "BuildingHealthBoost", "Shield");
    for (var i = 0; i < ListLess0.length; i++) {
        var Value = document.getElementById(ListLess0[i]).value;
        IfLess(ListLess0[i], Value, 0);
    }
    ListLess1 = new Array("GunboatLevel", "TroopsLevel");
    for (var i = 0; i < ListLess1.length; i++) {
        var Value = document.getElementById(ListLess1[i]).value;
        IfLess(ListLess1[i], Value, 1);
    }
    ListMore900 = new Array("EnergyBoost", "DamageBoost");
    for (var i = 0; i < ListMore900.length; i++) {
        var Value = document.getElementById(ListMore900[i]).value;
        IfMore(ListMore900[i], Value, 900);
    }
    ListMore9900 = new Array("Shield", "BuildingHealthBoost");
    for (var i = 0; i < ListMore9900.length; i++) {
        var Value = document.getElementById(ListMore9900[i]).value;
        IfMore(ListMore9900[i], Value, 9900);
    }


    IfMore("TroopsLevel", TroopsLevel, TroopsLevelMax);
    IfMore("TroopsNum", TroopsNum, TroopsNumMax);
    IfMore("ShockTime", ShockTime, BattleTime);
    IfMore("BattleOrdersLevel", BattleOrdersLevel, BattleOrdersLevelMax);

    IfLess("BaseHealth", BaseHealth, 0, StartBaseHealth);
    IfMore("BaseHealth", BaseHealth, MaxBaseHealth);


    // ListMax = new Array("ShockTime", "DamageBoost", "BuildingHealthBoost", "Shield");
    // for (var Max = 0; Max < ListMax.length; Max++) {
    //     var Input = document.getElementById(ListMax[Max]);
    //     if (Input.value > Input.max) {
    //         Input.value = Input.max;
    //     }
    // }

    LessCountDamage()
}

var Inputs = document.querySelectorAll('input')
for (var i = 0; i < Inputs.length; i++)
    Inputs[i].addEventListener("input", CheckCorrect);

LessСountEnergy()
LessCountDamage()
LessMax()
