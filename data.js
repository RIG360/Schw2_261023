var APP_DATA = {
  "scenes": [
    {
      "id": "0-eg_vorplatz",
      "name": "EG_Vorplatz",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -3.0977944284959946,
        "pitch": 0.00603540172752659,
        "fov": 1.4958743550059372
      },
      "linkHotspots": [
        {
          "yaw": -3.1195884271576233,
          "pitch": -0.003046219196892963,
          "rotation": 0,
          "target": "1-eg_windfang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-eg_windfang",
      "name": "EG_Windfang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -3.0538940947470934,
        "pitch": 0.005130703418998905,
        "fov": 1.4958743550059372
      },
      "linkHotspots": [
        {
          "yaw": 0.06477901570221789,
          "pitch": 0.01944949655085182,
          "rotation": 0,
          "target": "0-eg_vorplatz"
        },
        {
          "yaw": -3.0506534947732344,
          "pitch": -0.014159799755166347,
          "rotation": 0,
          "target": "2-eg_eingang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-eg_eingang",
      "name": "EG_Eingang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -3.0511043493261845,
        "pitch": 0.019510213054145353,
        "fov": 1.4958743550059372
      },
      "linkHotspots": [
        {
          "yaw": -3.0511043493261845,
          "pitch": 0.019510213054145353,
          "rotation": 0,
          "target": "3-eg_lichthof_01"
        },
        {
          "yaw": 0.12224264280483155,
          "pitch": 0.051017551206495426,
          "rotation": 0,
          "target": "1-eg_windfang"
        },
        {
          "yaw": -1.4666756529612517,
          "pitch": 0.009489386814845346,
          "rotation": 0,
          "target": "15-eg_stgh-rechts"
        },
        {
          "yaw": 1.6592882231642658,
          "pitch": 0.012327369914263642,
          "rotation": 0,
          "target": "10-eg_stgh-links"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-eg_lichthof_01",
      "name": "EG_Lichthof_01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -3.10586129515392,
        "pitch": -0.002273660042163783,
        "fov": 1.4958743550059372
      },
      "linkHotspots": [
        {
          "yaw": -3.10586129515392,
          "pitch": -0.002273660042163783,
          "rotation": 0,
          "target": "4-eg_lichthof_02"
        },
        {
          "yaw": 0.05363808266071146,
          "pitch": 0.002912856796239538,
          "rotation": 0,
          "target": "2-eg_eingang"
        },
        {
          "yaw": -1.3858215431403966,
          "pitch": -0.10458403946619299,
          "rotation": 0,
          "target": "8-eg_rechte-seite_01"
        },
        {
          "yaw": 2.062108416843266,
          "pitch": -0.0548423746947595,
          "rotation": 17.27875959474387,
          "target": "6-eg_linke-seite_01"
        },
        {
          "yaw": 2.3048909414984315,
          "pitch": -0.05218358661558753,
          "rotation": 4.71238898038469,
          "target": "7-eg_linke-seite_02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-eg_lichthof_02",
      "name": "EG_Lichthof_02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 3.131855785858141,
        "pitch": -0.0004025803769813763,
        "fov": 1.4958743550059372
      },
      "linkHotspots": [
        {
          "yaw": 3.131855785858141,
          "pitch": -0.0004025803769813763,
          "rotation": 0,
          "target": "5-eg_besprechungszone"
        },
        {
          "yaw": -0.1748599052282831,
          "pitch": 0.04183181304943773,
          "rotation": 0,
          "target": "3-eg_lichthof_01"
        },
        {
          "yaw": 1.4714740796744046,
          "pitch": -0.03165738378314842,
          "rotation": 0,
          "target": "6-eg_linke-seite_01"
        },
        {
          "yaw": -0.9446129999614783,
          "pitch": -0.06162952385410492,
          "rotation": 0,
          "target": "8-eg_rechte-seite_01"
        },
        {
          "yaw": 1.727782125808723,
          "pitch": -0.039656807641271996,
          "rotation": 0,
          "target": "7-eg_linke-seite_02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-eg_besprechungszone",
      "name": "EG_Besprechungszone",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 3.049410800572094,
        "pitch": -0.021435897082557887,
        "fov": 1.4958743550059372
      },
      "linkHotspots": [
        {
          "yaw": -0.12863631221055805,
          "pitch": 0.06768702651973513,
          "rotation": 0,
          "target": "4-eg_lichthof_02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-eg_linke-seite_01",
      "name": "EG_linke-Seite_01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 3.0451923957784857,
        "pitch": 0.035660279316580556,
        "fov": 1.4958743550059372
      },
      "linkHotspots": [
        {
          "yaw": -1.6551519866044089,
          "pitch": -0.007887935520296097,
          "rotation": 0,
          "target": "4-eg_lichthof_02"
        },
        {
          "yaw": 1.5769122323268636,
          "pitch": -0.022553519576373304,
          "rotation": 1.5707963267948966,
          "target": "7-eg_linke-seite_02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-eg_linke-seite_02",
      "name": "EG_linke-Seite_02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 3.007156842562347,
        "pitch": 0.005335092793785634,
        "fov": 1.4958743550059372
      },
      "linkHotspots": [
        {
          "yaw": -1.5979868191508455,
          "pitch": 0.0233223772510307,
          "rotation": 0,
          "target": "4-eg_lichthof_02"
        },
        {
          "yaw": -0.588027520411984,
          "pitch": 0.04676545880015226,
          "rotation": 10.995574287564278,
          "target": "6-eg_linke-seite_01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-eg_rechte-seite_01",
      "name": "EG_rechte-Seite_01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -3.0670610306717716,
        "pitch": -0.005821943912931005,
        "fov": 1.4958743550059372
      },
      "linkHotspots": [
        {
          "yaw": 1.6981424450575906,
          "pitch": 0.06400381506856156,
          "rotation": 0,
          "target": "3-eg_lichthof_01"
        },
        {
          "yaw": -1.459014656151572,
          "pitch": 0.020279066038938254,
          "rotation": 0,
          "target": "9-eg_rechte-seite_02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-eg_rechte-seite_02",
      "name": "EG_rechte-Seite_02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 3.078359150138878,
        "pitch": 0.007415858879827653,
        "fov": 1.4958743550059372
      },
      "linkHotspots": [
        {
          "yaw": 1.5792544354004008,
          "pitch": 0.06363696866547208,
          "rotation": 0,
          "target": "8-eg_rechte-seite_01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-eg_stgh-links",
      "name": "EG_STGH-links",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 3.1275395915155375,
        "pitch": 0.003974433013979706,
        "fov": 1.4958743550059372
      },
      "linkHotspots": [
        {
          "yaw": -1.5601405243570987,
          "pitch": 0.053649354155034246,
          "rotation": 0,
          "target": "2-eg_eingang"
        },
        {
          "yaw": 1.7704612225825933,
          "pitch": -0.40257085925865255,
          "rotation": 0.7853981633974483,
          "target": "11-1og_stgh-links"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-1og_stgh-links",
      "name": "1OG_STGH-links",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -3.140161741365139,
        "pitch": -0.006146195810075028,
        "fov": 1.4958743550059372
      },
      "linkHotspots": [
        {
          "yaw": 1.5348693204837636,
          "pitch": 0.047078524070375494,
          "rotation": 3.9269908169872414,
          "target": "10-eg_stgh-links"
        },
        {
          "yaw": 1.522847456009254,
          "pitch": -0.4322414708228237,
          "rotation": 0.7853981633974483,
          "target": "12-2og_stgh-links"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-2og_stgh-links",
      "name": "2OG_STGH-links",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -3.0741037128452753,
        "pitch": 0.006963925070234467,
        "fov": 1.4958743550059372
      },
      "linkHotspots": [
        {
          "yaw": 1.5780911164954787,
          "pitch": 0.0733211117007091,
          "rotation": 3.9269908169872414,
          "target": "11-1og_stgh-links"
        },
        {
          "yaw": 1.5918340359771115,
          "pitch": -0.6079867382224169,
          "rotation": 0.7853981633974483,
          "target": "13-3og_stgh-links"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-3og_stgh-links",
      "name": "3OG_STGH-links",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -3.0981604131241927,
        "pitch": 0.009929209293684238,
        "fov": 1.4958743550059372
      },
      "linkHotspots": [
        {
          "yaw": 1.5349008575561243,
          "pitch": 0.03880119123674319,
          "rotation": 3.9269908169872414,
          "target": "12-2og_stgh-links"
        },
        {
          "yaw": 1.529775335732542,
          "pitch": -0.4512542175253156,
          "rotation": 0.7853981633974483,
          "target": "14-4og_stgh-links"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-4og_stgh-links",
      "name": "4OG_STGH-links",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -3.058528335871877,
        "pitch": 0.041844620023210766,
        "fov": 1.4958743550059372
      },
      "linkHotspots": [
        {
          "yaw": 1.720567236041079,
          "pitch": 0.08808447713243339,
          "rotation": 3.9269908169872414,
          "target": "13-3og_stgh-links"
        },
        {
          "yaw": -3.1135820335977744,
          "pitch": -0.311132870158783,
          "rotation": 0,
          "target": "23-dach_01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-eg_stgh-rechts",
      "name": "EG_STGH-rechts",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -2.9862098828393258,
        "pitch": 0.0025866007403863023,
        "fov": 1.4958743550059372
      },
      "linkHotspots": [
        {
          "yaw": 1.5362975483914862,
          "pitch": 0.06287635974812744,
          "rotation": 0,
          "target": "2-eg_eingang"
        },
        {
          "yaw": -1.5975966251045257,
          "pitch": 0.17264899064707784,
          "rotation": 0,
          "target": "16-kg-eg_stgh-rechts"
        },
        {
          "yaw": -1.4877045147071595,
          "pitch": -0.4579066818096571,
          "rotation": 5.497787143782138,
          "target": "18-1og_stgh-rechts"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-kg-eg_stgh-rechts",
      "name": "KG-EG_STGH-rechts",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 3.0069666818002823,
        "pitch": 0.0048193106887524095,
        "fov": 1.4958743550059372
      },
      "linkHotspots": [
        {
          "yaw": 1.8314566872815146,
          "pitch": -0.08515443713587345,
          "rotation": 4.71238898038469,
          "target": "15-eg_stgh-rechts"
        },
        {
          "yaw": 1.450276894184368,
          "pitch": 0.47473190382978814,
          "rotation": 0,
          "target": "17-kg_stgh-rechts"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-kg_stgh-rechts",
      "name": "KG_STGH-rechts",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -3.111654734736655,
        "pitch": 0.0013001541082289236,
        "fov": 1.4958743550059372
      },
      "linkHotspots": [
        {
          "yaw": -1.625141531491023,
          "pitch": -0.46688545578323115,
          "rotation": 0,
          "target": "16-kg-eg_stgh-rechts"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-1og_stgh-rechts",
      "name": "1OG_STGH-rechts",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 3.059492213107321,
        "pitch": 0.03999846755906944,
        "fov": 1.4958743550059372
      },
      "linkHotspots": [
        {
          "yaw": -1.6618860945392306,
          "pitch": 0.10868270076133513,
          "rotation": 2.356194490192345,
          "target": "15-eg_stgh-rechts"
        },
        {
          "yaw": -1.6559625404278417,
          "pitch": -0.4677728588264465,
          "rotation": 5.497787143782138,
          "target": "19-2og_stgh-rechts"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-2og_stgh-rechts",
      "name": "2OG_STGH-rechts",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -3.123839626177796,
        "pitch": 0.009933265343246234,
        "fov": 1.4958743550059372
      },
      "linkHotspots": [
        {
          "yaw": -1.6274855671749897,
          "pitch": 0.07665157560079905,
          "rotation": 2.356194490192345,
          "target": "18-1og_stgh-rechts"
        },
        {
          "yaw": -1.5287210344805402,
          "pitch": -0.6218230505318978,
          "rotation": 0,
          "target": "20-2og-3og_durchgang-stgh-rechts"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-2og-3og_durchgang-stgh-rechts",
      "name": "2OG-3OG_Durchgang-STGH-rechts",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 2.9699080335384114,
        "pitch": -0.001103479325852419,
        "fov": 1.4958743550059372
      },
      "linkHotspots": [
        {
          "yaw": 1.4794460851363311,
          "pitch": 0.7843545625341868,
          "rotation": 0,
          "target": "19-2og_stgh-rechts"
        },
        {
          "yaw": 1.4838279039318394,
          "pitch": -0.2659161056513035,
          "rotation": 0,
          "target": "21-3og_stgh-rechts"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-3og_stgh-rechts",
      "name": "3OG_STGH-rechts",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 3.090104622986207,
        "pitch": 0.024872401039786496,
        "fov": 1.4958743550059372
      },
      "linkHotspots": [
        {
          "yaw": -1.6171977860036293,
          "pitch": 0.2882197504477979,
          "rotation": 0,
          "target": "20-2og-3og_durchgang-stgh-rechts"
        },
        {
          "yaw": -1.5829365593953018,
          "pitch": -0.48103366977897544,
          "rotation": 5.497787143782138,
          "target": "22-4og_stgh-rechts"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-4og_stgh-rechts",
      "name": "4OG_STGH-rechts",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 3.1356231139460107,
        "pitch": 0.005708509344469093,
        "fov": 1.4958743550059372
      },
      "linkHotspots": [
        {
          "yaw": -1.6491519457648085,
          "pitch": 0.30387023185378936,
          "rotation": 8.63937979737193,
          "target": "21-3og_stgh-rechts"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-dach_01",
      "name": "Dach_01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 2.123520947962165,
        "pitch": 0.004016669790637195,
        "fov": 1.4958743550059372
      },
      "linkHotspots": [
        {
          "yaw": -0.7658153134825323,
          "pitch": 0.6676599352543828,
          "rotation": 0,
          "target": "14-4og_stgh-links"
        },
        {
          "yaw": 2.4651222653538394,
          "pitch": 0.504940007747436,
          "rotation": 0,
          "target": "24-dach_02"
        },
        {
          "yaw": 2.7824347236085867,
          "pitch": 0.21466636931614502,
          "rotation": 0,
          "target": "37-dach_15"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-dach_02",
      "name": "Dach_02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -0.21193807230960715,
        "pitch": 0.010925529243412058,
        "fov": 1.4958743550059372
      },
      "linkHotspots": [
        {
          "yaw": -2.6747217963993,
          "pitch": 0.5939471353898771,
          "rotation": 0,
          "target": "23-dach_01"
        },
        {
          "yaw": -0.9318782869718554,
          "pitch": 0.10760173996902367,
          "rotation": 0,
          "target": "25-dach_03"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-dach_03",
      "name": "Dach_03",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 3.1198217021748604,
        "pitch": -0.01810620518259043,
        "fov": 1.4958743550059372
      },
      "linkHotspots": [
        {
          "yaw": -0.7449728771111239,
          "pitch": 0.21420079783463208,
          "rotation": 0,
          "target": "24-dach_02"
        },
        {
          "yaw": 0.47312651473844625,
          "pitch": 0.2072029035527656,
          "rotation": 0,
          "target": "26-dach_04"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-dach_04",
      "name": "Dach_04",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 1.7156448965132949,
        "pitch": -0.0008000169036606053,
        "fov": 1.4958743550059372
      },
      "linkHotspots": [
        {
          "yaw": 2.0820563495546542,
          "pitch": 0.2777849683706215,
          "rotation": 0,
          "target": "25-dach_03"
        },
        {
          "yaw": -1.5614328268124034,
          "pitch": 0.09664124774610627,
          "rotation": 0,
          "target": "27-dach_05"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-dach_05",
      "name": "Dach_05",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -1.5801043495231735,
        "pitch": 0.025758690854878807,
        "fov": 1.4677294915981667
      },
      "linkHotspots": [
        {
          "yaw": -1.9686809920357113,
          "pitch": 0.2279227518240141,
          "rotation": 0,
          "target": "26-dach_04"
        },
        {
          "yaw": 0.6423554218658545,
          "pitch": -0.16839424113631551,
          "rotation": 0,
          "target": "28-dach_06"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-dach_06",
      "name": "Dach_06",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -2.8236258027032406,
        "pitch": -0.011069843199319251,
        "fov": 1.4677294915981667
      },
      "linkHotspots": [
        {
          "yaw": 2.576904363762363,
          "pitch": 0.6438668484054677,
          "rotation": 0,
          "target": "27-dach_05"
        },
        {
          "yaw": -1.7609943769276448,
          "pitch": 0.27555530401119555,
          "rotation": 0,
          "target": "29-dach_07"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-dach_07",
      "name": "Dach_07",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -2.627503373582085,
        "pitch": -0.017940571006668904,
        "fov": 1.4677294915981667
      },
      "linkHotspots": [
        {
          "yaw": 1.69545286185725,
          "pitch": 0.324143332295721,
          "rotation": 0,
          "target": "28-dach_06"
        },
        {
          "yaw": -0.5169826188156641,
          "pitch": 0.06441940527004064,
          "rotation": 0,
          "target": "30-dach_08"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-dach_08",
      "name": "Dach_08",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 1.000464918761784,
        "pitch": -0.002250286388100875,
        "fov": 1.4677294915981667
      },
      "linkHotspots": [
        {
          "yaw": -0.054839023007254184,
          "pitch": 0.08691537054993326,
          "rotation": 0,
          "target": "29-dach_07"
        },
        {
          "yaw": 0.7275290763851494,
          "pitch": 0.2847753897346763,
          "rotation": 0,
          "target": "31-dach_09"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-dach_09",
      "name": "Dach_09",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -1.311225669838656,
        "pitch": -0.010767273529676658,
        "fov": 1.4677294915981667
      },
      "linkHotspots": [
        {
          "yaw": 1.5608234285848628,
          "pitch": -0.015643311627094647,
          "rotation": 0,
          "target": "30-dach_08"
        },
        {
          "yaw": 0.3899364986621201,
          "pitch": -0.021487628916752044,
          "rotation": 0,
          "target": "32-dach_10"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-dach_10",
      "name": "Dach_10",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -2.1289927571856317,
        "pitch": -0.06090667245418402,
        "fov": 1.4677294915981667
      },
      "linkHotspots": [
        {
          "yaw": 2.553354771400958,
          "pitch": 0.19217000802106554,
          "rotation": 0,
          "target": "31-dach_09"
        },
        {
          "yaw": -2.0139465644754218,
          "pitch": 0.5716972410521493,
          "rotation": 0,
          "target": "33-dach_11"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "33-dach_11",
      "name": "Dach_11",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -1.2801493379703714,
        "pitch": -0.06211046715074886,
        "fov": 1.4677294915981667
      },
      "linkHotspots": [
        {
          "yaw": 1.8050816433227315,
          "pitch": -0.41328738493130324,
          "rotation": 0,
          "target": "32-dach_10"
        },
        {
          "yaw": -1.5589601737876375,
          "pitch": 0.3679245278009624,
          "rotation": 0,
          "target": "34-dach_12"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "34-dach_12",
      "name": "Dach_12",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 0.4173195685060378,
        "pitch": -0.06358928779718553,
        "fov": 1.4677294915981667
      },
      "linkHotspots": [
        {
          "yaw": -2.495673898028304,
          "pitch": 0.07567744234318141,
          "rotation": 0,
          "target": "33-dach_11"
        },
        {
          "yaw": 0.4730233891117237,
          "pitch": 0.12118723701659384,
          "rotation": 0,
          "target": "35-dach_13"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "35-dach_13",
      "name": "Dach_13",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 1.8761822017590717,
        "pitch": 0.012992917757763678,
        "fov": 1.4677294915981667
      },
      "linkHotspots": [
        {
          "yaw": -1.280272266929682,
          "pitch": 0.24081146982734936,
          "rotation": 0,
          "target": "34-dach_12"
        },
        {
          "yaw": -0.41218320473687164,
          "pitch": 0.27522233630933357,
          "rotation": 0,
          "target": "36-dach_14"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "36-dach_14",
      "name": "Dach_14",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 3.0418551770010573,
        "pitch": 0.010154614546177498,
        "fov": 1.4677294915981667
      },
      "linkHotspots": [
        {
          "yaw": -2.3636654448239547,
          "pitch": -0.04018517731094917,
          "rotation": 0,
          "target": "35-dach_13"
        },
        {
          "yaw": 2.180427963143247,
          "pitch": 0.24170276266066715,
          "rotation": 0,
          "target": "37-dach_15"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "37-dach_15",
      "name": "Dach_15",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -1.7032457101469625,
        "pitch": 0.027043193663203624,
        "fov": 1.4677294915981667
      },
      "linkHotspots": [
        {
          "yaw": 2.2927962296922892,
          "pitch": -0.11751167519194361,
          "rotation": 0,
          "target": "23-dach_01"
        },
        {
          "yaw": 0.13166500743311715,
          "pitch": -0.005611921824844046,
          "rotation": 0,
          "target": "36-dach_14"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Schw2_261023",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
