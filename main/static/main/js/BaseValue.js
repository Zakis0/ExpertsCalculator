// Boom Beach
var PowerCore = 200000;
var LandingCraftNum = 8;
var BattleTime = 240;
var MaxDestroyedBuildings = 200;
var GunboatSpellsNumMax = 30;

var SpeedBoostMin = -75;
// База
var StartBaseHealth = 10000;
var MaxBaseHealth = 220000;

// Лодки
var LandingCraftCapacity = 28;

// Базовые значения
var Building = 3;

// Артилерия
var Artillery = 3;
var Flare = 2;
var Medkit = 6;
var Shock = 7;
var Barrage = 10;
var Smoke = 2;
var Critters = 8;

// Брик
var ClusterGrenade = 3;
var IronWill = 6;
var BattleOrders = 6;

// Каван
var CrystalCritters = 8;
var IceShields = 6;
var SecondWind = 8;

// Эверспарк
var CritterSwarm = 8;
var ExplosiveCharges = 6;
var UniversalRemote = 8;

// Буллит
var Taunt = 3;
var EnergyDrink = 8;
var ShockKnuckles = 3;

// Войска
var Tank = 2;
var Scorcher = 8;
var Bombardier = 1;
var Mech = 6;
var RocketChoppa = 2;
var HeavyChoppa = 2;
var Lazortron = 18;
var RainMaker = 6;
var CritterCannon = 12;


// Коэффициенты прогрессии
// Артилерия
var ArtilleryCoeff = 2;
var FlareCoeff = 1;
var MedkitCoeff = 3;
var ShockCoeff = 5;
var BarrageCoeff = 6;
var SmokeCoeff = 1;
var CrittersCoeff = 5;

// Брик
var ClusterGrenadeCoeff = 3;
var IronWillCoeff = 12;
var BattleOrdersCoeff = 12;

// Каван
var CrystalCrittersCoeff = 7;
var IceShieldsCoeff = 8;
var SecondWindCoeff = 10;

// Эверспарк
var CritterSwarmCoeff = 7;
var ExplosiveChargesCoeff = 4;
var UniversalRemoteCoeff = 7;

// Буллит
var TauntCoeff = 2;
var EnergyDrinkCoeff = 8;
var ShockKnucklesCoeff = 6;

// Канонерка
var Gunboat = new Array(12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 51, 52, 53);
var GunboatLevelMax = Gunboat.length;

// Характеристики на разных уровнях
// Зуки
var ZooksAttackDamage = new Array(160, 176, 194, 212, 234, 258, 284, 312, 342, 378, 414, 456, 502, 552, 608, 668, 736, 808, 890, 978, 1076, 1166, 1256);
var ZooksAttackSpeed = 2;
var ZooksWeight = 2;

// Торы
var WarriorsAttackDamage = new Array(160, 169, 179, 189, 200, 212, 224, 237, 251, 266, 281, 297, 315, 333, 352, 373, 394, 417, 441, 467, 495, 525);
var WarriorsAttackSpeed = 1;
var WarriorsWeight = 3;

// Бомбардиры
var BombardiersAttackDamage = new Array(2420, 2860, 3300, 3740, 4180);
var BombardiersAttackSpeed = 2.2;
var BombardiersWeight = 8;

// Танки
var TanksAttackDamage = new Array(490, 535.5, 581, 633.5, 693, 752.5, 822.5, 896, 976.5, 1064, 1158.5, 1263.5, 1379, 1501.5, 1638, 1785, 1946, 2114, 2289)
var TanksAttackSpeed = 3.5;
var TanksWeight = 8;

// Гренадёры
var GrenadiersAttackDamage = new Array(200, 216, 232, 248, 268, 288, 308, 332, 356, 384, 412, 444, 476, 512);
var GrenadiersAttackSpeed = 2;
var GrenadiersWeight = 6;

// Стрелки
var RiflemansAttackDamage = new Array(30, 32, 35, 38, 41, 44, 48, 52, 56, 61, 66, 71, 77, 84, 90, 98, 106, 115, 124, 134, 145, 157, 170, 184);
var RiflemansAttackSpeed = 1;
var RiflemansWeight = 1;

// Горы
var HeavysAttackDamage = new Array(2.6, 2.8, 3.1, 3.3, 3.6, 3.9, 4.2, 4.6, 5.0, 5.4, 5.9, 6.4, 6.9, 7.5, 8.1, 8.8, 9.6, 10.4, 11.3, 12.3, 13.3, 14.4, 15.5, 16.7);
var HeavysAttackSpeed = 0.1;
var HeavysWeight = 4;

// Механики
var MechDamage = new Array(71.2, 73.2, 75.2, 77.2, 79.2, 81.2, 83.2);
var MechAttackSpeed = 0.1;
var MechWeight = 14;

// Огневики
var ScorcherDamage = new Array(175, 192.5, 212, 233, 256, 282, 310, 341, 375, 412, 452);
var ScorcherBurn = new Array(105, 115.5, 127.2, 139.8, 153.6, 169.2, 186, 204.6, 225, 247.2, 271.2);
var ScorcherSpeed = 0.5;
var ScorcherWeight = 14;

// Заморозки
var CryoneerDamage = new Array(7.12, 7.5, 7.87, 8.25, 8.62, 9.07, 9.52, 10.05, 10.57, 11.1);
var CryoneerSpeed = 2.9;
var CryoneerWeight = 4;
var CryoneerDamagePerClip = new Array(85.44, 90.0, 94.44, 99.0, 103.44, 108.84, 114.24, 120.6, 126.84, 133.2);

// Криттеры
var CrittersDamage = new Array(67.5, 0);
var CrittersSpeed = 0.5;
var CrittersNumMax = 500;

// Артилерия
var ArtilleryDamage = new Array(700, 777, 862, 957, 1063, 1180, 1309, 1453, 1613, 1791, 1988, 2206, 2449, 2718, 3017, 3349, 3718, 4127, 4580, 5084, 5644, 6264, 6884);
var ArtilleryLevelMax = ArtilleryDamage.length;

// Обстрел
var BarrageDamage = new Array(2850, 3135, 3450, 3795, 4170, 4590, 5055, 5550, 6105, 6720, 7395, 8130, 8940, 9840, 10830, 11910, 13095, 14400, 15705, 17010);
var BarrageLevelMax = BarrageDamage.length

// Боевые приказы
var BrickDamage = new Array(0, 15, 17, 19, 22, 25, 30);
var BrickSpeed = new Array(0, 40, 42, 45, 47, 50, 60);
var BattleOrdersLevelMax = BrickDamage.length - 1;
var BattleOrdersDuration = 7.5;
var BattleOrdersNumMax = Math.ceil(BattleTime / BattleOrdersDuration);

var BombardierWeight = 8;
var MechWeight = 14;
var RocketChoppaWeight = 14;
var HeavyChoppaWeight = 14;
var LazortronWeight = 14;
var RainMakerWeight = 14;
var CritterCannonWeight = 14;

// Операция
var KoefOP = 5;
var ScoreList = new Array(40, 60, 85, 115, 150, 185, 225, 265, 310, 360, 415, 475, 540, 610, 690, 780, 880, 990, 1110, 1250, 1410, 1600, 1820, 2160);
var ScoreMax = new Array(800, 1200, 1700, 2300, 3000, 3700, 4500, 5300, 6200, 7200, 8300, 9500, 10800, 12200, 13800, 15600, 17600, 19800, 22200, 25000, 28200, 32000, 36400, 43200);
var MaxOperationScore = ScoreList[ScoreList.length - 1] + ScoreMax[ScoreMax.length - 1];