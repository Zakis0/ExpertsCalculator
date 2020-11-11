EnergyResField = document.getElementById("EnergyResField")

function СountEnergy() {
    var GunboatLevel = Number(document.getElementById("GunboatLevel").value);
    var EnergyBoost = Number(document.getElementById("EnergyBoost").value);
    var DestroyedBuildings = Number(document.getElementById("DestroyedBuildings").value);
    // Артилерия
    var ArtilleryNum = Number(document.getElementById("ArtilleryNum").innerHTML.substring(1));
    var FlareNum = Number(document.getElementById("FlareNum").innerHTML.substring(1));
    var MedkitNum = Number(document.getElementById("MedkitNum").innerHTML.substring(1));
    var ShockNum = Number(document.getElementById("ShockNum").innerHTML.substring(1));
    var BarrageNum = Number(document.getElementById("BarrageNum").innerHTML.substring(1));
    var SmokeNum = Number(document.getElementById("SmokeNum").innerHTML.substring(1));
    var CrittersNum = Number(document.getElementById("CrittersNum").innerHTML.substring(1));
    // Брик
    var ClusterGrenadeNum = Number(document.getElementById("ClusterGrenadeNum").innerHTML.substring(1));
    var IronWillNum = Number(document.getElementById("IronWillNum").innerHTML.substring(1));
    var BattleOrdersNum = Number(document.getElementById("BattleOrdersNum").innerHTML.substring(1));
    // Каван
    var CrystalCrittersNum = Number(document.getElementById("CrystalCrittersNum").innerHTML.substring(1));
    var IceShieldsNum = Number(document.getElementById("IceShieldsNum").innerHTML.substring(1));
    var SecondWindNum = Number(document.getElementById("SecondWindNum").innerHTML.substring(1));

    // Эверспарк
    var CritterSwarmNum = Number(document.getElementById("CritterSwarmNum").innerHTML.substring(1));
    var ExplosiveChargesNum = Number(document.getElementById("ExplosiveChargesNum").innerHTML.substring(1));
    var UniversalRemoteNum = Number(document.getElementById("UniversalRemoteNum").innerHTML.substring(1));

    // Буллит
    var TauntNum = Number(document.getElementById("TauntNum").innerHTML.substring(1));
    var EnergyDrinkNum = Number(document.getElementById("EnergyDrinkNum").innerHTML.substring(1));
    var ShockKnucklesNum = Number(document.getElementById("ShockKnucklesNum").innerHTML.substring(1));

    // Войска
    var TankNum = Number(document.getElementById("TankNum").innerHTML.substring(1));
    var ScorcherNum = Number(document.getElementById("ScorcherNum").innerHTML.substring(1));
    var BombardierNum = Number(document.getElementById("BombardierNum").innerHTML.substring(1));
    var MechNum = Number(document.getElementById("MechNum").innerHTML.substring(1));
    var RocketChoppaNum = Number(document.getElementById("RocketChoppaNum").innerHTML.substring(1));
    var HeavyChoppaNum = Number(document.getElementById("HeavyChoppaNum").innerHTML.substring(1));
    var LazortronNum = Number(document.getElementById("LazortronNum").innerHTML.substring(1));
    var RainMakerNum = Number(document.getElementById("RainMakerNum").innerHTML.substring(1));
    var CritterCannonNum = Number(document.getElementById("CritterCannonNum").innerHTML.substring(1));
    
    List0 = new Array("EnergyBoost", "DestroyedBuildings");

    for (var L0 = 0; L0 < List0.length; L0++) {
        var Value0 = document.getElementById(List0[L0]).value;
        if (Value0 < 0 || Value0 == "")
            document.getElementById(List0[L0]).value = 0;
    }
    if (GunboatLevel < 1) {
        GunboatLevel = 1;
        document.getElementById("GunboatLevel").value = 1;
    }

    if (GunboatLevel > GunboatLevelMax) {
        GunboatLevel = GunboatLevelMax;
        document.getElementById("GunboatLevel").value = GunboatLevelMax;
    }
    if (EnergyBoost > 900) {
        EnergyBoost = 900;
        document.getElementById("EnergyBoost").value = 900;
    }
    if (DestroyedBuildings > 200) {
        DestroyedBuildings = 200;
        document.getElementById("DestroyedBuildings").value = 200;
    }


    // Рассчёт стоимости использования способностей определённое количество раз
    // Артилерия
    var ArtilleryEnd = ((2 * Artillery + ArtilleryCoeff * (ArtilleryNum - 1)) * ArtilleryNum / 2);
    var FlareEnd = ((2 * Flare + FlareCoeff * (FlareNum - 1)) * FlareNum / 2);
    var MedkitEnd = ((2 * Medkit + MedkitCoeff * (MedkitNum - 1)) * MedkitNum / 2);
    var ShockEnd = ((2 * Shock + ShockCoeff * (ShockNum - 1)) * ShockNum / 2);
    var BarrageEnd = ((2 * Barrage + BarrageCoeff * (BarrageNum - 1)) * BarrageNum / 2);
    var SmokeEnd = ((2 * Smoke + SmokeCoeff * (SmokeNum - 1)) * SmokeNum / 2);
    var CrittersEnd = ((2 * Critters + CrittersCoeff * (CrittersNum - 1)) * CrittersNum / 2);

    // Брик
    var ClusterGrenadeEnd = ((2 * ClusterGrenade + ClusterGrenadeCoeff * (ClusterGrenadeNum - 1)) * ClusterGrenadeNum / 2);
    var IronWillEnd = ((2 * IronWill + IronWillCoeff * (IronWillNum - 1)) * IronWillNum / 2);
    var BattleOrdersEnd = ((2 * BattleOrders + BattleOrdersCoeff * (BattleOrdersNum - 1)) * BattleOrdersNum / 2);

    // Каван
    var CrystalCrittersEnd = ((2 * CrystalCritters + CrystalCrittersCoeff * (CrystalCrittersNum - 1)) * CrystalCrittersNum / 2);
    var IceShieldsEnd = ((2 * IceShields + IceShieldsCoeff * (IceShieldsNum - 1)) * IceShieldsNum / 2);
    var SecondWindEnd = ((2 * SecondWind + SecondWindCoeff * (SecondWindNum - 1)) * SecondWindNum / 2);

    // Эверспарк
    var CritterSwarmEnd = ((2 * CritterSwarm + CritterSwarmCoeff * (CritterSwarmNum - 1)) * CritterSwarmNum / 2);
    var ExplosiveChargesEnd = ((2 * ExplosiveCharges + ExplosiveChargesCoeff * (ExplosiveChargesNum - 1)) * ExplosiveChargesNum / 2);
    var UniversalRemoteEnd = ((2 * UniversalRemote + UniversalRemoteCoeff * (UniversalRemoteNum - 1)) * UniversalRemoteNum / 2);

    // Буллит
    var TauntEnd = ((2 * Taunt + TauntCoeff * (TauntNum - 1)) * TauntNum / 2)
    var EnergyDrinkEnd = ((2 * EnergyDrink + EnergyDrinkCoeff * (EnergyDrinkNum - 1)) * EnergyDrinkNum / 2);
    var ShockKnucklesEnd = ((2 * ShockKnuckles + ShockKnucklesCoeff * (ShockKnucklesNum - 1)) * ShockKnucklesNum / 2);

    // Войска
    var TankEnd = Tank * TankNum;
    var ScorcherEnd = Scorcher * ScorcherNum;
    var BombardierEnd = Bombardier * BombardierNum;
    var MechEnd = Mech * MechNum;
    var RocketChoppaEnd = RocketChoppa * RocketChoppaNum;
    var HeavyChoppaEnd = HeavyChoppa * HeavyChoppaNum;
    var LazortronEnd = Lazortron * LazortronNum;
    var RainMakerEnd = RainMaker * RainMakerNum;
    var CritterCannonEnd = CritterCannon * CritterCannonNum;


    // Общие затраты энергии
    var TotalEnergy = ArtilleryEnd + FlareEnd + MedkitEnd + ShockEnd + BarrageEnd + SmokeEnd + CrittersEnd + ClusterGrenadeEnd + IronWillEnd + BattleOrdersEnd + CrystalCrittersEnd + IceShieldsEnd + SecondWindEnd + CritterSwarmEnd + ExplosiveChargesEnd + UniversalRemoteEnd + TauntEnd + EnergyDrinkEnd + ShockKnucklesEnd + TankEnd + ScorcherEnd + BombardierEnd + MechEnd + RocketChoppaEnd + HeavyChoppaEnd + LazortronEnd + RainMakerEnd + CritterCannonEnd;


    // Рассчёт заряда канонерки по уроню
    Energy = Gunboat[GunboatLevel - 1]

    // Общая энергия
    EnergyEnd = Math.ceil(Energy * (1 + EnergyBoost / 100)) + Building * DestroyedBuildings


    // Хватает ли заряда?
    EnergyEnd >= TotalEnergy ? EnergyRes = "хватает" : EnergyRes = "не хватает";

    // Вывод результата
    EnergyResField.innerHTML = "Затраты заряда: " + Rank(Math.ceil(TotalEnergy)) + "<br>Ваш заряд: " + Rank(EnergyEnd) + "<br>Заряда " + EnergyRes;


    // Установка затраты заряда на каждую способность отдельно ***************************
    document.getElementById("ArtilleryEnd").innerHTML = ArtilleryEnd;
    document.getElementById("FlareEnd").innerHTML = FlareEnd;
    document.getElementById("MedkitEnd").innerHTML = MedkitEnd;
    document.getElementById("ShockEnd").innerHTML = ShockEnd;
    document.getElementById("BarrageEnd").innerHTML = BarrageEnd;
    document.getElementById("SmokeEnd").innerHTML = SmokeEnd;
    document.getElementById("CrittersEnd").innerHTML = CrittersEnd;

    document.getElementById("ClusterGrenadeEnd").innerHTML = ClusterGrenadeEnd;
    document.getElementById("IronWillEnd").innerHTML = IronWillEnd;
    document.getElementById("BattleOrdersEnd").innerHTML = BattleOrdersEnd;

    document.getElementById("CrystalCrittersEnd").innerHTML = CrystalCrittersEnd;
    document.getElementById("IceShieldsEnd").innerHTML = IceShieldsEnd;
    document.getElementById("SecondWindEnd").innerHTML = SecondWindEnd;

    document.getElementById("CritterSwarmEnd").innerHTML = CritterSwarmEnd;
    document.getElementById("ExplosiveChargesEnd").innerHTML = ExplosiveChargesEnd;
    document.getElementById("UniversalRemoteEnd").innerHTML = UniversalRemoteEnd;

    document.getElementById("TauntEnd").innerHTML = TauntEnd;
    document.getElementById("EnergyDrinkEnd").innerHTML = EnergyDrinkEnd;
    document.getElementById("ShockKnucklesEnd").innerHTML = ShockKnucklesEnd;

    document.getElementById("TankEnd").innerHTML = TankEnd;
    document.getElementById("ScorcherEnd").innerHTML = ScorcherEnd;
    document.getElementById("BombardierEnd").innerHTML = BombardierEnd;
    document.getElementById("RocketChoppaEnd").innerHTML = RocketChoppaEnd;
    document.getElementById("HeavyChoppaEnd").innerHTML = HeavyChoppaEnd;
    document.getElementById("LazortronEnd").innerHTML = LazortronEnd;
    document.getElementById("RainMakerEnd").innerHTML = RainMakerEnd;
    document.getElementById("CritterCannonEnd").innerHTML = CritterCannonEnd;
    document.getElementById("MechEnd").innerHTML = MechEnd;
}


// Установка максимальных значений
function MaxEnergy() {
    document.getElementById("GunboatLevel").value = GunboatLevelMax;
    СountEnergy()
}


// Очистка полей ввода
function ClearEnergy() {
    // Установка бызовых значений полей ввода
    document.getElementById("GunboatLevel").value = 1;
    document.getElementById("EnergyBoost").value = 0;
    document.getElementById("DestroyedBuildings").value = 0;
    // Gunboat
    document.getElementById("ArtilleryNum").innerHTML = "X0";
    document.getElementById("FlareNum").innerHTML = "X0";
    document.getElementById("MedkitNum").innerHTML = "X0";
    document.getElementById("ShockNum").innerHTML = "X0";
    document.getElementById("BarrageNum").innerHTML = "X0";
    document.getElementById("SmokeNum").innerHTML = "X0";
    document.getElementById("CrittersNum").innerHTML = "X0";
    // Брик
    document.getElementById("ClusterGrenadeNum").innerHTML = "X0";
    document.getElementById("IronWillNum").innerHTML = "X0";
    document.getElementById("BattleOrdersNum").innerHTML = "X0";
    // Каван
    document.getElementById("CrystalCrittersNum").innerHTML = "X0";
    document.getElementById("IceShieldsNum").innerHTML = "X0";
    document.getElementById("SecondWindNum").innerHTML = "X0";
    // Эверспарк
    document.getElementById("CritterSwarmNum").innerHTML = "X0";
    document.getElementById("ExplosiveChargesNum").innerHTML = "X0";
    document.getElementById("UniversalRemoteNum").innerHTML = "X0";
    // Буллит
    document.getElementById("TauntNum").innerHTML = "X0";
    document.getElementById("EnergyDrinkNum").innerHTML = "X0";
    document.getElementById("ShockKnucklesNum").innerHTML = "X0";
    // Войска
    document.getElementById("TankNum").innerHTML = "X0";
    document.getElementById("ScorcherNum").innerHTML = "X0";
    document.getElementById("BombardierNum").innerHTML = "X0";
    document.getElementById("RocketChoppaNum").innerHTML = "X0";
    document.getElementById("HeavyChoppaNum").innerHTML = "X0";
    document.getElementById("LazortronNum").innerHTML = "X0";
    document.getElementById("RainMakerNum").innerHTML = "X0";
    document.getElementById("CritterCannonNum").innerHTML = "X0";
    document.getElementById("MechNum").innerHTML = "X0";
    // Установка базового текста
    EnergyResField.innerHTML = "Затраты заряда: 0<br>Ваш заряд: 12<br>Заряда хватает";
    СountEnergy()
}


function Plus(Block, index=0) {
    Block = document.getElementById(Block.id)
    Value = Block.innerHTML.substring(1);
    var Max = 20;

    if (index != 0) {
        switch (index) {
            case 1: var TroopsWeight = TanksWeight; break;
            case 2: var TroopsWeight = ScorcherWeight; break;
            case 3: var TroopsWeight = BombardierWeight; break;
            case 4: var TroopsWeight = MechWeight; break;
            case 5: var TroopsWeight = RocketChoppaWeight; break;
            case 6: var TroopsWeight = HeavyChoppaWeight; break;
            case 7: var TroopsWeight = LazortronWeight; break;
            case 8: var TroopsWeight = RainMakerWeight; break;
            case 9: var TroopsWeight = CritterCannonWeight; break;
        }
        Max = Math.floor(LandingCraftCapacity / TroopsWeight) * LandingCraftNum;
    }

    if (Value < Max) {
        Value++;
        Block.innerHTML = "X" + Value;
        СountEnergy()
        Color(Block.id.substring(0, Block.id.length-3), 0)
    }
}


function Minus(Block) {
    Block = document.getElementById(Block.id)
    Value = Block.innerHTML.substring(1);
    if (Value > 0) {
        Value--;
        Block.innerHTML = "X" + Value;
        СountEnergy()
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