const data = `
CACHE MISS
GET /api/sales?year=2017&month=0 200 5545.491 ms - 21216800
CACHE MISS
GET /api/employees?year=2012&school=University%20of%20Toledo 200 1554.448 ms - 1157073
CACHE MISS
GET /api/sales?year=2019&month=2 200 868.434 ms - 2706223
CACHE MISS
GET /api/employees?year=2014&school=The%20Ohio%20State%20University 200 2714.295 ms - 6639135
CACHE MISS
GET /api/sales?year=2017&month=4 200 412.548 ms - 26
CACHE MISS
GET /api/employees?year=2016&school=University%20of%20Toledo 200 1650.632 ms - 1117739
CACHE MISS
GET /api/sales?year=2019&month=6 200 960.009 ms - 2729739
CACHE MISS
GET /api/employees?year=2018&school=University%20Of%20Cincinnati 200 1178.564 ms - 1098904
CACHE MISS
GET /api/sales?year=2017&month=8 200 799.775 ms - 2986486
CACHE MISS
GET /api/employees?year=2020&school=Kent%20State%20University 200 1113.208 ms - 897573
CACHE MISS
GET /api/sales?year=2019&month=10 200 730.543 ms - 2914649
CACHE MISS
GET /api/employees?year=2022&school=Kent%20State%20University 200 939.299 ms - 843265
CACHE MISS
GET /api/sales?year=2017&month=12 200 818.433 ms - 3207022
CACHE MISS
GET /api/employees?year=2012&school=Ohio%20University 200 1016.806 ms - 887641
CACHE MISS
GET /api/sales?year=2019&month=1 200 669.710 ms - 2728353
CACHE MISS
GET /api/employees?year=2014&school=University%20of%20Toledo 200 1172.464 ms - 1096175
CACHE MISS
GET /api/sales?year=2017&month=3 200 280.069 ms - 26
CACHE MISS
GET /api/employees?year=2016&school=Ohio%20University 200 987.347 ms - 763834
CACHE MISS
GET /api/sales?year=2019&month=5 200 780.587 ms - 2867478
CACHE HIT
GET /api/employees?year=2018&school=University%20Of%20Cincinnati 200 58.405 ms - 1098904
CACHE MISS
GET /api/sales?year=2017&month=7 200 900.925 ms - 2861401
CACHE MISS
GET /api/employees?year=2020&school=The%20Ohio%20State%20University 200 2443.735 ms - 7574194
CACHE MISS
GET /api/sales?year=2019&month=9 200 768.541 ms - 2747119
CACHE MISS
GET /api/employees?year=2022&school=University%20Of%20Cincinnati 200 1136.193 ms - 1116787
CACHE MISS
GET /api/sales?year=2017&month=11 200 775.274 ms - 3211850
CACHE HIT
GET /api/employees?year=2012&school=University%20of%20Toledo 200 56.335 ms - 1157073
CACHE MISS
GET /api/sales?year=2019&month=0 200 5752.869 ms - 30693730
CACHE HIT
GET /api/employees?year=2014&school=University%20of%20Toledo 200 55.070 ms - 1096175
CACHE MISS
GET /api/sales?year=2017&month=2 200 316.934 ms - 26
CACHE MISS
GET /api/employees?year=2016&school=The%20Ohio%20State%20University 200 2580.658 ms - 7278476
CACHE MISS
GET /api/sales?year=2019&month=4 200 935.725 ms - 2817522
CACHE MISS
GET /api/employees?year=2018&school=Kent%20State%20University 200 968.005 ms - 990324
CACHE MISS
GET /api/sales?year=2017&month=6 200 831.539 ms - 2995506
CACHE MISS
GET /api/employees?year=2020&school=Ohio%20University 200 960.343 ms - 653042
CACHE MISS
GET /api/sales?year=2019&month=8 200 667.726 ms - 2748101
CACHE MISS
GET /api/employees?year=2022&school=Ohio%20University 200 943.412 ms - 849651
CACHE MISS
GET /api/sales?year=2017&month=10 200 808.844 ms - 3011629
CACHE MISS
GET /api/employees?year=2012&school=University%20Of%20Cincinnati 200 1250.065 ms - 1474202
CACHE MISS
GET /api/sales?year=2019&month=12 200 241.263 ms - 26
CACHE MISS
GET /api/employees?year=2014&school=University%20Of%20Cincinnati 200 1189.231 ms - 1113333
CACHE MISS
GET /api/sales?year=2017&month=1 200 232.285 ms - 26
CACHE HIT
GET /api/employees?year=2016&school=Ohio%20University 200 42.667 ms - 763834
CACHE MISS
GET /api/sales?year=2019&month=3 200 798.697 ms - 2806332
CACHE HIT
GET /api/employees?year=2018&school=Kent%20State%20University 200 47.251 ms - 990324
CACHE MISS
GET /api/sales?year=2017&month=5 200 297.293 ms - 26
CACHE MISS
GET /api/employees?year=2020&school=University%20Of%20Cincinnati 200 1149.191 ms - 1156863
CACHE MISS
GET /api/sales?year=2019&month=7 200 690.159 ms - 2765427
CACHE HIT
GET /api/employees?year=2022&school=Ohio%20University 200 43.635 ms - 849651
CACHE MISS
GET /api/sales?year=2017&month=9 200 708.836 ms - 2942912
CACHE MISS
GET /api/employees?year=2012&school=The%20Ohio%20State%20University 200 1019.255 ms - 26
CACHE MISS
GET /api/sales?year=2019&month=11 200 791.528 ms - 2862797
CACHE MISS
GET /api/employees?year=2014&school=Kent%20State%20University 200 1154.654 ms - 988604
CACHE HIT
GET /api/sales?year=2017&month=0 200 756.366 ms - 21216800
CACHE HIT
GET /api/employees?year=2016&school=The%20Ohio%20State%20University 200 261.263 ms - 7278476
CACHE HIT
GET /api/sales?year=2019&month=2 200 87.355 ms - 2706223
CACHE MISS
GET /api/employees?year=2018&school=Ohio%20University 200 1101.044 ms - 742804
CACHE HIT
GET /api/sales?year=2017&month=4 200 1.501 ms - 14
CACHE HIT
GET /api/employees?year=2020&school=University%20Of%20Cincinnati 200 51.002 ms - 1156863
CACHE HIT
GET /api/sales?year=2019&month=6 200 104.793 ms - 2729739
CACHE HIT
GET /api/employees?year=2022&school=University%20Of%20Cincinnati 200 31.497 ms - 1116787
CACHE HIT
GET /api/sales?year=2017&month=8 200 112.377 ms - 2986486
CACHE HIT
GET /api/employees?year=2012&school=Ohio%20University 200 24.674 ms - 887641
CACHE HIT
GET /api/sales?year=2019&month=10 200 110.733 ms - 2914649
CACHE HIT
GET /api/employees?year=2014&school=Kent%20State%20University 200 14.293 ms - 988604
CACHE HIT
GET /api/sales?year=2017&month=12 200 59.336 ms - 3207022
CACHE MISS
GET /api/employees?year=2016&school=Kent%20State%20University 200 1030.824 ms - 1035484
CACHE HIT
GET /api/sales?year=2019&month=1 200 62.465 ms - 2728353
CACHE HIT
GET /api/employees?year=2018&school=Ohio%20University 200 40.161 ms - 742804
CACHE HIT
GET /api/sales?year=2017&month=3 200 1.697 ms - 14
CACHE HIT
GET /api/employees?year=2020&school=University%20Of%20Cincinnati 200 62.103 ms - 1156863
CACHE HIT
GET /api/sales?year=2019&month=5 200 115.249 ms - 2867478
CACHE MISS
GET /api/employees?year=2022&school=The%20Ohio%20State%20University 200 2958.396 ms - 9364776
CACHE HIT
GET /api/sales?year=2017&month=7 200 107.302 ms - 2861401
CACHE HIT
GET /api/employees?year=2012&school=University%20of%20Toledo 200 33.538 ms - 1157073
CACHE HIT
GET /api/sales?year=2019&month=9 200 54.054 ms - 2747119
CACHE HIT
GET /api/employees?year=2014&school=University%20Of%20Cincinnati 200 33.522 ms - 1113333
CACHE HIT
GET /api/sales?year=2017&month=11 200 69.828 ms - 3211850
CACHE MISS
GET /api/employees?year=2016&school=University%20Of%20Cincinnati 200 1085.109 ms - 1004521
CACHE HIT
GET /api/sales?year=2019&month=0 200 760.755 ms - 30693730
CACHE MISS
GET /api/employees?year=2018&school=University%20of%20Toledo 200 1293.184 ms - 929458
CACHE HIT
GET /api/sales?year=2017&month=2 200 1.517 ms - 14
CACHE HIT
GET /api/employees?year=2020&school=University%20Of%20Cincinnati 200 28.581 ms - 1156863
CACHE HIT
GET /api/sales?year=2019&month=4 200 57.325 ms - 2817522
CACHE HIT
GET /api/employees?year=2022&school=The%20Ohio%20State%20University 200 531.174 ms - 9364776
CACHE HIT
GET /api/sales?year=2017&month=6 200 128.244 ms - 2995506
CACHE HIT
GET /api/employees?year=2012&school=University%20of%20Toledo 200 49.465 ms - 1157073
CACHE HIT
GET /api/sales?year=2019&month=8 200 102.759 ms - 2748101
CACHE MISS
GET /api/employees?year=2014&school=Ohio%20University 200 1180.543 ms - 1275436
CACHE HIT
GET /api/sales?year=2017&month=10 200 112.048 ms - 3011629
CACHE HIT
GET /api/employees?year=2016&school=Kent%20State%20University 200 53.969 ms - 1035484
CACHE HIT
GET /api/sales?year=2019&month=12 200 1.203 ms - 14
CACHE HIT
GET /api/employees?year=2018&school=Ohio%20University 200 24.530 ms - 742804
CACHE HIT
GET /api/sales?year=2017&month=1 200 1.161 ms - 14
CACHE HIT
GET /api/employees?year=2020&school=Kent%20State%20University 200 44.799 ms - 897573
CACHE HIT
GET /api/sales?year=2019&month=3 200 123.475 ms - 2806332
CACHE MISS
GET /api/employees?year=2022&school=University%20of%20Toledo 200 1152.908 ms - 1076711
CACHE HIT
GET /api/sales?year=2017&month=5 200 1.545 ms - 14
CACHE HIT
GET /api/employees?year=2012&school=Ohio%20University 200 19.880 ms - 887641
CACHE HIT
GET /api/sales?year=2019&month=7 200 98.109 ms - 2765427
CACHE HIT
GET /api/employees?year=2014&school=University%20of%20Toledo 200 39.758 ms - 1096175
`;

// Dividimos el texto en líneas
const lines = data.trim().split('\n');

let hits = 0;
let misses = 0;

// Iteramos sobre cada línea
for (const line of lines) {
    // Verificamos si es un HIT o un MISS
    if (line.startsWith('CACHE HIT')) {
        hits++;
    } else if (line.startsWith('CACHE MISS')) {
        misses++;
    }
}

// Calculamos el número total de consultas
const totalQueries = hits + misses;

console.log('Número de hits:', hits);
console.log('Número de misses:', misses);
console.log('Número total de consultas:', totalQueries);
