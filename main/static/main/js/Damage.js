document.getElementById("DamageBtn").classList.add("btn-activ");

var DamageResField = document.getElementById("DamageResField");

function CountDamage() {
    // Войска
    var Troops = document.getElementById("Troop").classList.value;
    var TroopsNum = Number(document.getElementById("TroopsNum").value);
    var TroopsLevel = Number(document.getElementById("TroopsLevel").value);

    // Длительность шока
    var ShockTime = Number(document.getElementById("ShockTime").value);

    // Бовевые приказы
    var BattleOrdersNum = Number(document.getElementById("BattleOrdersNum").value);
    var BattleOrdersLevel = Number(document.getElementById("BattleOrdersLevel").value);

    // Канонерка
    var ArtilleryLevel = Number(document.getElementById("ArtilleryLevel").value);
    var ArtilleryNum = Number(document.getElementById("ArtilleryNum").value);
    var BarrageLevel = Number(document.getElementById("BarrageLevel").value);
    var BarrageNum = Number(document.getElementById("BarrageNum").value);

    // Бусты
    var BuildingHealthBoost = Number(document.getElementById("BuildingHealthBoost").value);
    var DamageBoost = Number(document.getElementById("DamageBoost").value);
    var SpeedBoost = Number(document.getElementById("SpeedBoost").value);
    var ArtilleryBoost = Number(document.getElementById("ArtilleryBoost").value);
    var BarrageBoost = Number(document.getElementById("BarrageBoost").value);

    // Здоровье базы и щитов
    var BaseHealth = Number(document.getElementById("BaseHealth").value);
    var Shield = Number(document.getElementById("Shield").value);


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
        case "TroopGrenadier":
            var TroopsAttackDamage = GrenadiersAttackDamage;
            var TroopsAttackSpeed = GrenadiersAttackSpeed;
            var TroopsWeight = GrenadiersWeight;
            var TroopsLevelMax = GrenadiersAttackDamage.length;
            break;
        case "TroopRifleman":
            var TroopsAttackDamage = RiflemansAttackDamage;
            var TroopsAttackSpeed = RiflemansAttackSpeed;
            var TroopsWeight = RiflemansWeight;
            var TroopsLevelMax = RiflemansAttackDamage.length;
            break;
        case "TroopHeavy":
            var TroopsAttackDamage = HeavysAttackDamage;
            var TroopsAttackSpeed = HeavysAttackSpeed;
            var TroopsWeight = HeavysWeight;
            var TroopsLevelMax = HeavysAttackDamage.length;
            break;
        case "TroopMech":
            var TroopsAttackDamage = MechDamage;
            var TroopsAttackSpeed = MechAttackSpeed;
            var TroopsWeight = MechWeight;
            var TroopsLevelMax = MechDamage.length;
            break;
        case "TroopScorcher":
            var TroopsAttackDamage = ScorcherDamage;
            var TroopsAttackSpeed = ScorcherSpeed;
            var TroopsWeight = ScorcherWeight;
            var TroopsLevelMax = ScorcherDamage.length;
            break;
        case "TroopCryoneer":
            var TroopsAttackDamage = CryoneerDamagePerClip;
            var TroopsAttackSpeed = CryoneerSpeed;
            var TroopsWeight = CryoneerWeight;
            var TroopsLevelMax = CryoneerDamage.length;
            break;
        case "TroopCritter":
            var TroopsAttackDamage = CrittersDamage;
            var TroopsAttackSpeed = CrittersSpeed;
            var TroopsLevelMax = 1;
            var TroopsNumMax = CrittersNumMax;
            break;
    }
    if (Troops != "TroopCritter")
        var TroopsNumMax = Math.floor(LandingCraftCapacity / TroopsWeight) * LandingCraftNum;

    
    // Рассчёт урона воинов
    var TroopsDamage = TroopsAttackDamage[TroopsLevel - 1] * TroopsNum;


    // Когда используются боевые приказы
    // Итоговый урон
    if (BattleOrdersNum > 0)
        var TroopsDamageEnd = TroopsDamage * (1 + ((DamageBoost + BrickDamage[BattleOrdersLevel]) / 100));
    else
        var TroopsDamageEnd = TroopsDamage * (1 + (DamageBoost / 100));

    // Корректировка буста
    var TimeDifferent = ShockTime - (BattleOrdersNum * 7.5);
    var TroopsOrdersSpeed = TroopsAttackSpeed / (1 + (BrickSpeed[BattleOrdersLevel] / 100));
    var TroopsBoostSpeed = TroopsAttackSpeed / (1 + (SpeedBoost / 100));

    // Скорость атаки воинов
    if (BattleOrdersNum > 0 && BrickSpeed[BattleOrdersLevel] > SpeedBoost)
        var TroopsSpeed = TroopsOrdersSpeed;
    else
        var TroopsSpeed = TroopsBoostSpeed;

    // Для случаяя, когда крик работает меньше шока
    if (BrickSpeed[BattleOrdersLevel] >= SpeedBoost) 
        if ((BattleOrdersNum * 7.5) < ShockTime)
            TroopsDamageTimeEnd = (TroopsDamageEnd * Math.floor((BattleOrdersNum * 7.5) / TroopsOrdersSpeed)) + ((TroopsDamage * (1 + (DamageBoost / 100))) * Math.floor(TimeDifferent / TroopsBoostSpeed + ((BattleOrdersNum * 7.5) / TroopsBoostSpeed) - Math.floor((BattleOrdersNum * 7.5) / TroopsBoostSpeed)));
        else
            TroopsDamageTimeEnd = (TroopsDamageEnd * Math.floor(ShockTime / TroopsOrdersSpeed));
    else
        TroopsDamageTimeEnd = (TroopsDamageEnd * Math.floor(ShockTime / TroopsSpeed));

    // Общий урон канонерки
    var ArtilleryDamageEnd = ArtilleryDamage[ArtilleryLevel-1] * ArtilleryNum * (1 + (ArtilleryBoost / 100));
    var BarrageDamageEnd = BarrageDamage[BarrageLevel-1] * BarrageNum * (1 + (BarrageBoost / 100));
    

    // Общий DPS воинов
    var TroopsDPSEnd = TroopsDamageEnd / TroopsSpeed;
    

    // Итоговый урон
    TroopsDamageTimeEnd += Math.floor(ArtilleryDamageEnd + BarrageDamageEnd);

    
    // Рассчёт урона от горения у огневиков
    if (Troops == "TroopScorcher") {
        var BurnTime = (ShockTime - 2.5) / 0.5;
        var BurnDamage = ScorcherBurn[TroopsLevel - 1];
        var BurnDamageFinish = 0;
    

        if (BattleOrdersNum > 0)
            var BurnDamageEnd = BurnDamage * (1 + ((DamageBoost + BrickDamage[BattleOrdersLevel]) / 100));
        else
            var BurnDamageEnd = BurnDamage * (1 + (DamageBoost / 100));

        var TroopsDPSEnd = Math.floor((TroopsDamageEnd / TroopsSpeed) + (BurnDamageEnd * 2));

        if (ShockTime > 2.5)
            BurnDamageFinish += BurnDamageEnd * BurnTime;
        
            if (ShockTime > BattleTime - 5)
                BurnDamageFinish += BurnDamageEnd * (BattleTime - ShockTime) * 2;
            else
                BurnDamageFinish += BurnDamageEnd * 10;

        // Итоговый урон
        TroopsDamageTimeEnd += Math.floor(BurnDamageFinish);
    }

    // Подсчёт здоровья базы
    var BaseHealthEnd = (BaseHealth + (BuildingHealthBoost * BaseHealth / 100)) * (1 + (Shield / 100));

    // Затраты заряда
    var ArtilleryEnd = ((Artillery * 2 + ArtilleryCoeff * (ArtilleryNum - 1)) * ArtilleryNum / 2);
    var BarrageEnd = ((Barrage * 2 + BarrageCoeff * (BarrageNum - 1)) * BarrageNum / 2);
    var TotalEnergy = Math.floor(ArtilleryEnd + BarrageEnd);


    // Хватает ли урона?
    TroopsDamageTimeEnd >= BaseHealthEnd ? DamageRes = "хватает" : DamageRes = "не хватает";

    
    // Установка итогового текста
    DamageResField.innerHTML = "Скорость атаки: " + TroopsSpeed.toFixed(2) + "<br>Урон за залп: " + Rank(Math.ceil(TroopsDamageEnd)) + "<br>Урон в секунду: " + Rank(Math.ceil(TroopsDPSEnd)) + "<br>Урон за " + ShockTime + " с: " + Rank(Math.ceil(TroopsDamageTimeEnd)) + "<br>Здоровье базы: " + Rank(Math.ceil(BaseHealthEnd)) + "<br>Урона " + DamageRes + "<br>Затраты заряда: " + Rank(TotalEnergy);
     
    return new Array(TroopsNumMax, TroopsLevelMax)
};


function MaxDamage() {
    var TroopsNumMax = CountDamage()[0];
    var TroopsLevelMax = CountDamage()[1];
    document.getElementById("TroopsNum").value = TroopsNumMax;
    document.getElementById("TroopsLevel").value = TroopsLevelMax;
    document.getElementById("BattleOrdersLevel").value = BattleOrdersLevelMax;
    document.getElementById("ArtilleryLevel").value = ArtilleryLevelMax;
    document.getElementById("BarrageLevel").value = BarrageLevelMax;
    document.getElementById("BaseHealth").value = PowerCore;
    CountDamage()
}


function Change(TroopsNumMax=Math.floor(LandingCraftCapacity / ZooksWeight) * LandingCraftNum, TroopsLevelMax=ZooksAttackDamage.length) {
    var Num = Number(document.getElementById("TroopsNum").value);
    var Level = Number(document.getElementById("TroopsLevel").value);
    // Установка максимальных значений полей ввода при смене воина,
    // если до этого были максимальные значения
    if (Level == TroopsLevelMax && Num == TroopsNumMax) {
        var TroopsNumMax = CountDamage()[0];
        var TroopsLevelMax = CountDamage()[1];
        document.getElementById("TroopsNum").value = TroopsNumMax;
        document.getElementById("TroopsLevel").value = TroopsLevelMax;
    }
    else {
        document.getElementById("TroopsLevel").value = 1;
        document.getElementById("TroopsNum").value = 0;
    }
    CountDamage()
}


function ClearDamage() {
    document.getElementById("TroopsNum").value = 0;
    document.getElementById("TroopsLevel").value = 1;

    document.getElementById("BattleOrdersNum").value = 0;
    document.getElementById("BattleOrdersLevel").value = 1;

    document.getElementById("ArtilleryLevel").value = 1;
    document.getElementById("ArtilleryNum").value = 0;
    document.getElementById("BarrageLevel").value = 1;
    document.getElementById("BarrageNum").value = 0;

    document.getElementById("BuildingHealthBoost").value = 0;
    document.getElementById("DamageBoost").value = 0;
    document.getElementById("SpeedBoost").value = 0;
    document.getElementById("ArtilleryBoost").value = 0;
    document.getElementById("BarrageBoost").value = 0;

    document.getElementById("ShockTime").value = 0;

    document.getElementById("BaseHealth").value = StartBaseHealth;
    document.getElementById("Shield").value = 0;

    DamageResField.innerHTML = "Скорость атаки: 0<br>Урон за залп: 0<br>Урон в секунду: 0<br>Урон за 0 с: 0<br>Здоровье базы: " + Rank(StartBaseHealth) + "<br>Урона не хватает<br>Затраты заряда: 0";
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
    var Troops = new Array("TroopZooka", "TroopWarrior", "TroopBombardier", "TroopTank", "TroopGrenadier", "TroopRifleman", "TroopHeavy", "TroopMech", "TroopScorcher", "TroopCryoneer", "TroopCritter");
    for (var i = 0; i < Troops.length; i++) {
        var id = Troops[i];
        var Block = document.getElementById(id);
        Block.classList.remove("Green");
    }
}


function SelectTroop(id) {
    var Block = document.getElementById(id.id);
    var Selector = document.getElementById("Troop");
    var TroopsNumMax = CountDamage()[0];
    var TroopsLevelMax = CountDamage()[1];
    var Img = document.getElementById("SelectedTroop");
    Selector.classList.remove(Selector.classList.value);
    ClearTroop();
    Block.classList.add("Green");

    switch (Block.id) {
            case "TroopZooka": Selector.classList.add("TroopZooka"); var Src = "ZookaIcon"; break;
            case "TroopWarrior": Selector.classList.add("TroopWarrior"); var Src = "WarriorIcon"; break;
            case "TroopBombardier": Selector.classList.add("TroopBombardier"); var Src = "BombardierIcon"; break;
            case "TroopTank": Selector.classList.add("TroopTank"); var Src = "TankIcon"; break;
            case "TroopGrenadier": Selector.classList.add("TroopGrenadier"); var Src = "GrenadierIcon"; break;
            case "TroopRifleman": Selector.classList.add("TroopRifleman"); var Src = "RiflemanIcon"; break;
            case "TroopHeavy": Selector.classList.add("TroopHeavy"); var Src = "HeavyIcon"; break;
            case "TroopMech": Selector.classList.add("TroopMech"); var Src = "MechIcon"; break;
            case "TroopScorcher": Selector.classList.add("TroopScorcher"); var Src = "ScorcherIcon"; break;
            case "TroopCryoneer": Selector.classList.add("TroopCryoneer"); var Src = "CryoneerIcon"; break;
            case "TroopCritter": Selector.classList.add("TroopCritter"); var Src = "Critters"; break;
        }
    Img.src = "/static/main/img/Troops/" + Src + ".png";
    Change(TroopsNumMax, TroopsLevelMax)
}


function CheckCorrect () {
    var TroopsNumMax = CountDamage()[0];
    var TroopsLevelMax = CountDamage()[1];

    ZeroDel(new Array("TroopsNum", "ShockTime", "DamageBoost", "SpeedBoost", "BattleOrdersLevel", "BattleOrdersNum", "ArtilleryNum", "BarrageNum", "ArtilleryLevel", "BarrageLevel", "ArtilleryBoost", "BarrageBoost", "Shield", "BuildingHealthBoost"))

    LimitCorrect("Less", new Array("TroopsNum", "SpeedBoost", "BattleOrdersNum", "ShockTime", "BattleOrdersLevel", "ArtilleryNum", "BarrageNum", "BuildingHealthBoost", "DamageBoost", "ArtilleryBoost", "BarrageBoost", "Shield"), 0)
    LimitCorrect("Less", new Array("TroopsLevel", "BattleOrdersLevel", "ArtilleryLevel", "BarrageLevel"), 1)

    LimitCorrect("More", new Array("DamageBoost", "SpeedBoost", "ArtilleryBoost", "BarrageBoost"), 900)
    LimitCorrect("More", new Array("Shield", "BuildingHealthBoost"), 9900)

    LimitCorrect("More", new Array("TroopsLevel"), TroopsLevelMax)
    LimitCorrect("More", new Array("TroopsNum"), TroopsNumMax)
    LimitCorrect("More", new Array("ShockTime"), BattleTime)

    LimitCorrect("More", new Array("BattleOrdersLevel"), BattleOrdersLevelMax)
    LimitCorrect("More", new Array("BattleOrdersNum"), BattleOrdersNumMax)

    LimitCorrect("More", new Array("ArtilleryLevel"), ArtilleryLevelMax)
    LimitCorrect("More", new Array("BarrageLevel"), BarrageLevelMax)

    LimitCorrect("More", new Array("ArtilleryNum", "BarrageNum"), GunboatSpellsNumMax)

    LimitCorrect("Less", new Array("BaseHealth"), 0, StartBaseHealth)
    LimitCorrect("More", new Array("BaseHealth"), MaxBaseHealth)

    CountDamage()
}

var Inputs = document.querySelectorAll('input')
for (var i = 0; i < Inputs.length; i++)
    Inputs[i].addEventListener("input", CheckCorrect);

CountDamage()
MaxDamage()
