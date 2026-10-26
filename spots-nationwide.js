// 전국 명소 데이터: 한국관광공사 국문 관광정보 서비스(TourAPI)의 이름·주소·좌표를 바탕으로 정리
// 촬영 지점 좌표는 관광지 대표 좌표입니다. 현장 확인 후 실제 촬영 지점으로 다듬습니다.
(function (global) {
  'use strict';
  global.NATION_SPOTS_RAW = [
    {
      "id": "gyeongbokgung",
      "name": "경복궁",
      "sido": "서울",
      "address": "종로구 세종로",
      "fullAddress": "서울특별시 종로구 사직로 161 (세종로)",
      "areaKeywords": [
        "서울",
        "서울특별시",
        "종로구",
        "세종로",
        "경복궁"
      ],
      "description": "근정전과 경회루, 사계절 궁궐 풍경을 담는 곳",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "126508"
      },
      "points": [
        {
          "id": "gyeongbokgung-main",
          "name": "대표 위치",
          "lat": 37.57603,
          "lng": 126.97672,
          "radiusMeters": 500,
          "description": "경복궁 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "changdeokgung",
      "name": "창덕궁",
      "sido": "서울",
      "address": "종로구 와룡동",
      "fullAddress": "서울특별시 종로구 율곡로 99 (와룡동)",
      "areaKeywords": [
        "서울",
        "서울특별시",
        "종로구",
        "와룡동",
        "창덕궁"
      ],
      "description": "자연 지형을 살린 궁궐과 후원의 계절 빛",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "127642"
      },
      "points": [
        {
          "id": "changdeokgung-main",
          "name": "대표 위치",
          "lat": 37.57765,
          "lng": 126.99023,
          "radiusMeters": 500,
          "description": "창덕궁 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "deoksugung",
      "name": "덕수궁",
      "sido": "서울",
      "address": "중구 정동",
      "fullAddress": "서울특별시 중구 세종대로 99 (정동)",
      "areaKeywords": [
        "서울",
        "서울특별시",
        "중구",
        "정동",
        "덕수궁"
      ],
      "description": "돌담길과 석조전이 어우러진 도심 속 궁궐",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "126509"
      },
      "points": [
        {
          "id": "deoksugung-main",
          "name": "대표 위치",
          "lat": 37.56505,
          "lng": 126.97657,
          "radiusMeters": 500,
          "description": "덕수궁 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "seoul-forest",
      "name": "서울숲",
      "sido": "서울",
      "address": "성동구",
      "fullAddress": "서울특별시 성동구 뚝섬로 273",
      "areaKeywords": [
        "서울",
        "서울특별시",
        "성동구",
        "서울숲"
      ],
      "description": "숲길과 호수, 계절마다 색이 바뀌는 도심 숲",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "128611"
      },
      "points": [
        {
          "id": "seoul-forest-main",
          "name": "대표 위치",
          "lat": 37.54307,
          "lng": 127.0418,
          "radiusMeters": 700,
          "description": "서울숲 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "namsan-tower",
      "name": "남산서울타워",
      "sido": "서울",
      "address": "용산구",
      "fullAddress": "서울특별시 용산구 남산공원길 105",
      "areaKeywords": [
        "서울",
        "서울특별시",
        "용산구",
        "남산서울타워"
      ],
      "description": "서울 시내가 한눈에 내려다보이는 남산 전망",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "126535"
      },
      "points": [
        {
          "id": "namsan-tower-main",
          "name": "대표 위치",
          "lat": 37.55105,
          "lng": 126.98788,
          "radiusMeters": 500,
          "description": "남산서울타워 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "bukchon",
      "name": "북촌한옥마을",
      "sido": "서울",
      "address": "종로구 계동",
      "fullAddress": "서울특별시 종로구 계동길 37 (계동)",
      "areaKeywords": [
        "서울",
        "서울특별시",
        "종로구",
        "계동",
        "북촌한옥마을"
      ],
      "description": "한옥 지붕이 겹겹이 이어지는 골목 풍경",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "126537"
      },
      "points": [
        {
          "id": "bukchon-main",
          "name": "대표 위치",
          "lat": 37.579,
          "lng": 126.98669,
          "radiusMeters": 500,
          "description": "북촌한옥마을 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "seokchon-lake",
      "name": "석촌호수",
      "sido": "서울",
      "address": "송파구 잠실동",
      "fullAddress": "서울특별시 송파구 잠실동",
      "areaKeywords": [
        "서울",
        "서울특별시",
        "송파구",
        "잠실동",
        "석촌호수"
      ],
      "description": "봄 벚꽃 산책로로 이름난 잠실의 호수",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "754052"
      },
      "points": [
        {
          "id": "seokchon-lake-main",
          "name": "대표 위치",
          "lat": 37.50792,
          "lng": 127.09894,
          "radiusMeters": 500,
          "description": "석촌호수 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "haeundae",
      "name": "해운대해수욕장",
      "sido": "부산",
      "address": "해운대구",
      "fullAddress": "부산광역시 해운대구 해운대해변로 264",
      "areaKeywords": [
        "부산",
        "부산광역시",
        "해운대구",
        "해운대해수욕장"
      ],
      "description": "해변과 마천루, 겨울 바다까지 담기는 부산 대표 해변",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "126081"
      },
      "points": [
        {
          "id": "haeundae-main",
          "name": "대표 위치",
          "lat": 35.15908,
          "lng": 129.16028,
          "radiusMeters": 700,
          "description": "해운대해수욕장 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "gamcheon",
      "name": "감천문화마을",
      "sido": "부산",
      "address": "사하구",
      "fullAddress": "부산광역시 사하구 감내2로 203",
      "areaKeywords": [
        "부산",
        "부산광역시",
        "사하구",
        "감천문화마을"
      ],
      "description": "산비탈을 따라 알록달록 이어지는 마을",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "1997221"
      },
      "points": [
        {
          "id": "gamcheon-main",
          "name": "대표 위치",
          "lat": 35.09746,
          "lng": 129.0106,
          "radiusMeters": 500,
          "description": "감천문화마을 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "gwangalli",
      "name": "광안리해수욕장",
      "sido": "부산",
      "address": "수영구 광안동",
      "fullAddress": "부산광역시 수영구 광안해변로 219 (광안동)",
      "areaKeywords": [
        "부산",
        "부산광역시",
        "수영구",
        "광안동",
        "광안리해수욕장"
      ],
      "description": "광안대교 야경이 펼쳐지는 해변",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "126078"
      },
      "points": [
        {
          "id": "gwangalli-main",
          "name": "대표 위치",
          "lat": 35.15319,
          "lng": 129.11898,
          "radiusMeters": 700,
          "description": "광안리해수욕장 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "dadaepo",
      "name": "다대포해수욕장",
      "sido": "부산",
      "address": "사하구",
      "fullAddress": "부산광역시 사하구 몰운대1길 14",
      "areaKeywords": [
        "부산",
        "부산광역시",
        "사하구",
        "다대포해수욕장"
      ],
      "description": "넓은 모래사장과 낙조가 아름다운 해변",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "126079"
      },
      "points": [
        {
          "id": "dadaepo-main",
          "name": "대표 위치",
          "lat": 35.04625,
          "lng": 128.96315,
          "radiusMeters": 700,
          "description": "다대포해수욕장 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "taejongdae",
      "name": "태종대",
      "sido": "부산",
      "address": "영도구 동삼동",
      "fullAddress": "부산광역시 영도구 전망로 24 (동삼동)",
      "areaKeywords": [
        "부산",
        "부산광역시",
        "영도구",
        "동삼동",
        "태종대"
      ],
      "description": "절벽과 바다가 맞닿은 영도 끝자락",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "126658"
      },
      "points": [
        {
          "id": "taejongdae-main",
          "name": "대표 위치",
          "lat": 35.05969,
          "lng": 129.07981,
          "radiusMeters": 500,
          "description": "태종대 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "huinnyeoul",
      "name": "흰여울문화마을",
      "sido": "부산",
      "address": "영도구 영선동4가",
      "fullAddress": "부산광역시 영도구 절영로 194 (영선동4가)",
      "areaKeywords": [
        "부산",
        "부산광역시",
        "영도구",
        "영선동4가",
        "흰여울문화마을"
      ],
      "description": "바다를 내려다보는 절벽 위 하얀 골목 마을",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "2684712"
      },
      "points": [
        {
          "id": "huinnyeoul-main",
          "name": "대표 위치",
          "lat": 35.07989,
          "lng": 129.04354,
          "radiusMeters": 500,
          "description": "흰여울문화마을 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "dalmaji",
      "name": "해운대 달맞이길",
      "sido": "부산",
      "address": "해운대구",
      "fullAddress": "부산광역시 해운대구 달맞이길 190",
      "areaKeywords": [
        "부산",
        "부산광역시",
        "해운대구",
        "해운대",
        "달맞이길"
      ],
      "description": "바다를 따라 굽이진 벚꽃 언덕길",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "126674"
      },
      "points": [
        {
          "id": "dalmaji-main",
          "name": "대표 위치",
          "lat": 35.15768,
          "lng": 129.18254,
          "radiusMeters": 500,
          "description": "해운대 달맞이길 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "palgongsan",
      "name": "팔공산",
      "sido": "대구",
      "address": "동구 용수동",
      "fullAddress": "대구광역시 동구 용수동 27-5",
      "areaKeywords": [
        "대구",
        "대구광역시",
        "동구",
        "용수동",
        "팔공산"
      ],
      "description": "봄 신록과 가을 단풍이 깊은 대구의 명산",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "2744450"
      },
      "points": [
        {
          "id": "palgongsan-main",
          "name": "대표 위치",
          "lat": 35.98957,
          "lng": 128.69709,
          "radiusMeters": 1500,
          "description": "팔공산 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "apsan",
      "name": "앞산전망대",
      "sido": "대구",
      "address": "남구",
      "fullAddress": "대구광역시 남구 앞산순환로 574-87",
      "areaKeywords": [
        "대구",
        "대구광역시",
        "남구",
        "앞산전망대"
      ],
      "description": "대구 시내 야경이 펼쳐지는 전망대",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "126132"
      },
      "points": [
        {
          "id": "apsan-main",
          "name": "대표 위치",
          "lat": 35.82897,
          "lng": 128.58903,
          "radiusMeters": 500,
          "description": "앞산전망대 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "okyeonji",
      "name": "옥연지 송해공원",
      "sido": "대구",
      "address": "달성군 옥포읍",
      "fullAddress": "대구 달성군 옥포읍 기세리 306",
      "areaKeywords": [
        "대구",
        "대구광역시",
        "달성군",
        "옥포읍",
        "옥연지",
        "송해공원"
      ],
      "description": "저수지 위 둘레길과 출렁다리가 있는 공원",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "2606236"
      },
      "points": [
        {
          "id": "okyeonji-main",
          "name": "대표 위치",
          "lat": 35.78033,
          "lng": 128.48028,
          "radiusMeters": 500,
          "description": "옥연지 송해공원 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "daegu-arboretum",
      "name": "대구수목원",
      "sido": "대구",
      "address": "달서구 대곡동",
      "fullAddress": "대구광역시 달서구 화암로 342 (대곡동)",
      "areaKeywords": [
        "대구",
        "대구광역시",
        "달서구",
        "대곡동",
        "대구수목원"
      ],
      "description": "쓰레기 매립지를 숲으로 바꾼 도심 수목원",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "128120"
      },
      "points": [
        {
          "id": "daegu-arboretum-main",
          "name": "대표 위치",
          "lat": 35.80265,
          "lng": 128.52063,
          "radiusMeters": 500,
          "description": "대구수목원 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "jeondeungsa",
      "name": "강화 전등사",
      "sido": "인천",
      "address": "강화군 길상면",
      "fullAddress": "인천광역시 강화군 길상면 전등사로 37-41",
      "areaKeywords": [
        "인천",
        "인천광역시",
        "강화군",
        "길상면",
        "강화",
        "전등사"
      ],
      "description": "오래된 숲속에 자리한 강화의 고찰",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "125534"
      },
      "points": [
        {
          "id": "jeondeungsa-main",
          "name": "대표 위치",
          "lat": 37.63164,
          "lng": 126.4829,
          "radiusMeters": 500,
          "description": "강화 전등사 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "seongmodo",
      "name": "강화 석모도",
      "sido": "인천",
      "address": "강화군 삼산면",
      "fullAddress": "인천광역시 강화군 삼산면 석모리",
      "areaKeywords": [
        "인천",
        "인천광역시",
        "강화군",
        "삼산면",
        "강화",
        "석모도"
      ],
      "description": "갯벌과 노을이 아름다운 강화의 섬",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "127801"
      },
      "points": [
        {
          "id": "seongmodo-main",
          "name": "대표 위치",
          "lat": 37.69335,
          "lng": 126.36708,
          "radiusMeters": 1500,
          "description": "강화 석모도 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "incheon-chinatown",
      "name": "인천 차이나타운",
      "sido": "인천",
      "address": "제물포구",
      "fullAddress": "인천광역시 제물포구 차이나타운로59번길 20",
      "areaKeywords": [
        "인천",
        "인천광역시",
        "제물포구",
        "차이나타운"
      ],
      "description": "붉은 간판과 근대 건물이 이어지는 거리",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "264512"
      },
      "points": [
        {
          "id": "incheon-chinatown-main",
          "name": "대표 위치",
          "lat": 37.4756,
          "lng": 126.6179,
          "radiusMeters": 500,
          "description": "인천 차이나타운 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "incheon-gaehangjang",
      "name": "인천 개항장",
      "sido": "인천",
      "address": "제물포구",
      "fullAddress": "인천광역시 제물포구 관동1가",
      "areaKeywords": [
        "인천",
        "인천광역시",
        "제물포구",
        "개항장"
      ],
      "description": "개항기 근대 건축물이 남은 거리",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "947611"
      },
      "points": [
        {
          "id": "incheon-gaehangjang-main",
          "name": "대표 위치",
          "lat": 37.47288,
          "lng": 126.62099,
          "radiusMeters": 500,
          "description": "인천 개항장 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "songdo-central-park",
      "name": "송도센트럴파크",
      "sido": "인천",
      "address": "연수구",
      "fullAddress": "인천광역시 연수구 컨벤시아대로 160",
      "areaKeywords": [
        "인천",
        "인천광역시",
        "연수구",
        "송도센트럴파크"
      ],
      "description": "수로와 고층 빌딩이 어우러진 공원",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "2465107"
      },
      "points": [
        {
          "id": "songdo-central-park-main",
          "name": "대표 위치",
          "lat": 37.3929,
          "lng": 126.6383,
          "radiusMeters": 700,
          "description": "송도센트럴파크 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "sorae-wetland",
      "name": "소래습지생태공원",
      "sido": "인천",
      "address": "남동구",
      "fullAddress": "인천광역시 남동구 소래로154번길 77",
      "areaKeywords": [
        "인천",
        "인천광역시",
        "남동구",
        "소래습지생태공원"
      ],
      "description": "갈대와 풍차가 있는 갯벌 생태공원",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "1618031"
      },
      "points": [
        {
          "id": "sorae-wetland-main",
          "name": "대표 위치",
          "lat": 37.40736,
          "lng": 126.74633,
          "radiusMeters": 700,
          "description": "소래습지생태공원 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "wolmi-park",
      "name": "월미공원",
      "sido": "인천",
      "address": "제물포구 북성동1가",
      "fullAddress": "인천광역시 제물포구 월미로 131-31 (북성동1가)",
      "areaKeywords": [
        "인천",
        "인천광역시",
        "제물포구",
        "북성동1가",
        "월미공원"
      ],
      "description": "인천항과 바다를 내려다보는 숲 공원",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "879086"
      },
      "points": [
        {
          "id": "wolmi-park-main",
          "name": "대표 위치",
          "lat": 37.47575,
          "lng": 126.60415,
          "radiusMeters": 500,
          "description": "월미공원 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "yangnim",
      "name": "양림동 역사문화마을",
      "sido": "광주",
      "address": "남구 양림동",
      "fullAddress": "전남광주통합특별시 남구 백서로 92-8 (양림동)",
      "areaKeywords": [
        "광주",
        "광주광역시",
        "남구",
        "양림동",
        "역사문화마을",
        "전남광주"
      ],
      "description": "근대 선교사 건물과 골목 예술이 있는 마을",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "2603494"
      },
      "points": [
        {
          "id": "yangnim-main",
          "name": "대표 위치",
          "lat": 35.14018,
          "lng": 126.91628,
          "radiusMeters": 500,
          "description": "양림동 역사문화마을 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "acc",
      "name": "국립아시아문화전당",
      "sido": "광주",
      "address": "동구 광산동",
      "fullAddress": "전남광주통합특별시 동구 문화전당로 38 (광산동)",
      "areaKeywords": [
        "광주",
        "광주광역시",
        "동구",
        "광산동",
        "국립아시아문화전당",
        "전남광주"
      ],
      "description": "옛 전남도청 자리에 들어선 문화 공간",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "2009775"
      },
      "points": [
        {
          "id": "acc-main",
          "name": "대표 위치",
          "lat": 35.14605,
          "lng": 126.91928,
          "radiusMeters": 500,
          "description": "국립아시아문화전당 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "mudeungsan",
      "name": "무등산 증심사지구",
      "sido": "광주",
      "address": "동구",
      "fullAddress": "전남광주통합특별시 동구 증심사길 177",
      "areaKeywords": [
        "광주",
        "광주광역시",
        "동구",
        "무등산",
        "증심사지구",
        "전남광주"
      ],
      "description": "무등산 자락 계곡과 숲길이 시작되는 곳",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "126351"
      },
      "points": [
        {
          "id": "mudeungsan-main",
          "name": "대표 위치",
          "lat": 35.12876,
          "lng": 126.96976,
          "radiusMeters": 1000,
          "description": "무등산 증심사지구 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "gwangjuho",
      "name": "광주호 호수생태원",
      "sido": "광주",
      "address": "북구 충효동",
      "fullAddress": "전남광주통합특별시 북구 충효샘길 7 (충효동)",
      "areaKeywords": [
        "광주",
        "광주광역시",
        "북구",
        "충효동",
        "광주호",
        "호수생태원",
        "전남광주"
      ],
      "description": "호숫가 버드나무와 데크길이 있는 생태원",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "126329"
      },
      "points": [
        {
          "id": "gwangjuho-main",
          "name": "대표 위치",
          "lat": 35.18408,
          "lng": 127.00109,
          "radiusMeters": 500,
          "description": "광주호 호수생태원 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "hanbat-arboretum",
      "name": "한밭수목원",
      "sido": "대전",
      "address": "서구",
      "fullAddress": "대전광역시 서구 둔산대로 169",
      "areaKeywords": [
        "대전",
        "대전광역시",
        "서구",
        "한밭수목원"
      ],
      "description": "도심 한가운데 계절 정원이 펼쳐진 수목원",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "741658"
      },
      "points": [
        {
          "id": "hanbat-arboretum-main",
          "name": "대표 위치",
          "lat": 36.36858,
          "lng": 127.38625,
          "radiusMeters": 500,
          "description": "한밭수목원 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "daecheong-dam",
      "name": "대청댐",
      "sido": "대전",
      "address": "대덕구 미호동",
      "fullAddress": "대전광역시 대덕구 대청로 618-136 (미호동)",
      "areaKeywords": [
        "대전",
        "대전광역시",
        "대덕구",
        "미호동",
        "대청댐"
      ],
      "description": "대청호 물길과 댐 풍경이 시원한 곳",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "127663"
      },
      "points": [
        {
          "id": "daecheong-dam-main",
          "name": "대표 위치",
          "lat": 36.47443,
          "lng": 127.48154,
          "radiusMeters": 800,
          "description": "대청댐 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "sangso-forest",
      "name": "상소동 산림욕장",
      "sido": "대전",
      "address": "동구 상소동",
      "fullAddress": "대전광역시 동구 상소동 산 1-1",
      "areaKeywords": [
        "대전",
        "대전광역시",
        "동구",
        "상소동",
        "산림욕장"
      ],
      "description": "돌탑과 숲길, 오토캠핑장이 있는 산림욕장",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "1125480"
      },
      "points": [
        {
          "id": "sangso-forest-main",
          "name": "대표 위치",
          "lat": 36.23136,
          "lng": 127.4711,
          "radiusMeters": 600,
          "description": "상소동 산림욕장 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "jangtaesan",
      "name": "장태산자연휴양림",
      "sido": "대전",
      "address": "서구",
      "fullAddress": "대전광역시 서구 장안로 461",
      "areaKeywords": [
        "대전",
        "대전광역시",
        "서구",
        "장태산자연휴양림"
      ],
      "description": "메타세쿼이아 숲과 출렁다리가 있는 휴양림",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "129438"
      },
      "points": [
        {
          "id": "jangtaesan-main",
          "name": "대표 위치",
          "lat": 36.21591,
          "lng": 127.34126,
          "radiusMeters": 700,
          "description": "장태산자연휴양림 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "taehwagang",
      "name": "태화강 국가정원",
      "sido": "울산",
      "address": "중구 태화동",
      "fullAddress": "울산광역시 중구 샛강남길 5 (태화동)",
      "areaKeywords": [
        "울산",
        "울산광역시",
        "중구",
        "태화동",
        "태화강",
        "국가정원"
      ],
      "description": "십리대숲과 계절 꽃밭이 이어지는 국가정원",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "128202"
      },
      "points": [
        {
          "id": "taehwagang-main",
          "name": "대표 위치",
          "lat": 35.5478,
          "lng": 129.2962,
          "radiusMeters": 1000,
          "description": "태화강 국가정원 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "jangsaengpo",
      "name": "장생포 고래문화마을",
      "sido": "울산",
      "address": "남구 매암동",
      "fullAddress": "울산광역시 남구 장생포고래로 271-1 (매암동)",
      "areaKeywords": [
        "울산",
        "울산광역시",
        "남구",
        "매암동",
        "장생포",
        "고래문화마을"
      ],
      "description": "옛 포경 마을 모습을 재현한 고래문화마을",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "2381176"
      },
      "points": [
        {
          "id": "jangsaengpo-main",
          "name": "대표 위치",
          "lat": 35.50592,
          "lng": 129.3831,
          "radiusMeters": 500,
          "description": "장생포 고래문화마을 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "daewangam",
      "name": "대왕암공원",
      "sido": "울산",
      "address": "동구 일산동",
      "fullAddress": "울산광역시 동구 등대로 95 (일산동)",
      "areaKeywords": [
        "울산",
        "울산광역시",
        "동구",
        "일산동",
        "대왕암공원"
      ],
      "description": "해송 숲과 기암괴석이 바다로 뻗은 공원",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "127515"
      },
      "points": [
        {
          "id": "daewangam-main",
          "name": "대표 위치",
          "lat": 35.49046,
          "lng": 129.43527,
          "radiusMeters": 500,
          "description": "대왕암공원 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "ganjeolgot",
      "name": "간절곶",
      "sido": "울산",
      "address": "울주군 서생면",
      "fullAddress": "울산광역시 울주군 서생면 간절곶1길 39-2",
      "areaKeywords": [
        "울산",
        "울산광역시",
        "울주군",
        "서생면",
        "간절곶"
      ],
      "description": "해가 일찍 뜨는 곳으로 알려진 바닷가",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "128022"
      },
      "points": [
        {
          "id": "ganjeolgot-main",
          "name": "대표 위치",
          "lat": 35.35897,
          "lng": 129.36057,
          "radiusMeters": 500,
          "description": "간절곶 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "sejong-arboretum",
      "name": "국립세종수목원",
      "sido": "세종",
      "address": "세종시 세종동",
      "fullAddress": "세종특별자치시 수목원로 136 (세종동)",
      "areaKeywords": [
        "세종",
        "세종특별자치시",
        "수목원로",
        "세종동",
        "국립세종수목원"
      ],
      "description": "사계절 온실과 한국 전통 정원이 있는 수목원",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "2675068"
      },
      "points": [
        {
          "id": "sejong-arboretum-main",
          "name": "대표 위치",
          "lat": 36.49861,
          "lng": 127.28569,
          "radiusMeters": 700,
          "description": "국립세종수목원 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "sejong-lake-park",
      "name": "세종호수공원",
      "sido": "세종",
      "address": "세종시 세종동",
      "fullAddress": "세종특별자치시 다솜로 216 (세종동)",
      "areaKeywords": [
        "세종",
        "세종특별자치시",
        "다솜로",
        "세종동",
        "세종호수공원"
      ],
      "description": "인공 호수를 따라 산책로가 이어진 공원",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "1946955"
      },
      "points": [
        {
          "id": "sejong-lake-park-main",
          "name": "대표 위치",
          "lat": 36.499,
          "lng": 127.2702,
          "radiusMeters": 500,
          "description": "세종호수공원 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "ieung-bridge",
      "name": "이응다리",
      "sido": "세종",
      "address": "세종시",
      "fullAddress": "세종특별자치시 세종동 29-111",
      "areaKeywords": [
        "세종",
        "세종특별자치시",
        "세종동",
        "이응다리"
      ],
      "description": "금강 위에 둥글게 놓인 보행교",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "2714817"
      },
      "points": [
        {
          "id": "ieung-bridge-main",
          "name": "대표 위치",
          "lat": 36.48166,
          "lng": 127.28727,
          "radiusMeters": 500,
          "description": "이응다리 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "beartree-park",
      "name": "베어트리파크",
      "sido": "세종",
      "address": "세종시",
      "fullAddress": "세종특별자치시 전동면 신송로 217",
      "areaKeywords": [
        "세종",
        "세종특별자치시",
        "전동면",
        "베어트리파크"
      ],
      "description": "반달곰과 정원 산책길이 있는 수목원",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "730441"
      },
      "points": [
        {
          "id": "beartree-park-main",
          "name": "대표 위치",
          "lat": 36.67277,
          "lng": 127.21014,
          "radiusMeters": 500,
          "description": "베어트리파크 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "suwon-hwaseong",
      "name": "수원화성",
      "sido": "경기",
      "address": "수원시 팔달구 팔달로3가",
      "fullAddress": "경기도 수원시 팔달구 정조로 776-2 (팔달로3가)",
      "areaKeywords": [
        "경기",
        "경기도",
        "수원시",
        "팔달구",
        "팔달로3가",
        "수원화성"
      ],
      "description": "성곽길과 방화수류정이 계절마다 달라지는 곳",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "4067984"
      },
      "points": [
        {
          "id": "suwon-hwaseong-main",
          "name": "대표 위치",
          "lat": 37.27735,
          "lng": 127.01726,
          "radiusMeters": 1000,
          "description": "수원화성 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "dumulmeori",
      "name": "양평 두물머리",
      "sido": "경기",
      "address": "양평군 양서면",
      "fullAddress": "경기도 양평군 양서면 두물머리길 145",
      "areaKeywords": [
        "경기",
        "경기도",
        "양평군",
        "양서면",
        "양평",
        "두물머리"
      ],
      "description": "두 강이 만나는 물안개와 느티나무 풍경",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "128918"
      },
      "points": [
        {
          "id": "dumulmeori-main",
          "name": "대표 위치",
          "lat": 37.53362,
          "lng": 127.31747,
          "radiusMeters": 500,
          "description": "양평 두물머리 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "semiwon",
      "name": "양평 세미원",
      "sido": "경기",
      "address": "양평군 양서면",
      "fullAddress": "경기도 양평군 양서면 양수로 93",
      "areaKeywords": [
        "경기",
        "경기도",
        "양평군",
        "양서면",
        "양평",
        "세미원"
      ],
      "description": "연꽃과 수생식물로 가득한 물의 정원",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "407051"
      },
      "points": [
        {
          "id": "semiwon-main",
          "name": "대표 위치",
          "lat": 37.54069,
          "lng": 127.32417,
          "radiusMeters": 500,
          "description": "양평 세미원 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "jebudo",
      "name": "화성 제부도",
      "sido": "경기",
      "address": "화성시 서신면",
      "fullAddress": "경기도 화성시 서신면 해안길 421-12",
      "areaKeywords": [
        "경기",
        "경기도",
        "화성시",
        "서신면",
        "화성",
        "제부도"
      ],
      "description": "물때에 따라 바닷길이 열리는 섬",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "125503"
      },
      "points": [
        {
          "id": "jebudo-main",
          "name": "대표 위치",
          "lat": 37.16861,
          "lng": 126.62447,
          "radiusMeters": 1000,
          "description": "화성 제부도 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "hwadam-forest",
      "name": "광주 화담숲",
      "sido": "경기",
      "address": "광주시 도척면",
      "fullAddress": "경기도 광주시 도척면 도척윗로 278-1",
      "areaKeywords": [
        "경기",
        "경기도",
        "광주시",
        "도척면",
        "광주",
        "화담숲"
      ],
      "description": "숲길과 테마 정원, 가을 단풍이 이름난 곳",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "2436233"
      },
      "points": [
        {
          "id": "hwadam-forest-main",
          "name": "대표 위치",
          "lat": 37.34076,
          "lng": 127.28942,
          "radiusMeters": 700,
          "description": "광주 화담숲 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "sanjeong-lake",
      "name": "포천 산정호수",
      "sido": "경기",
      "address": "포천시 영북면",
      "fullAddress": "경기도 포천시 영북면 산정호수로 402",
      "areaKeywords": [
        "경기",
        "경기도",
        "포천시",
        "영북면",
        "포천",
        "산정호수"
      ],
      "description": "산으로 둘러싸인 호수 둘레길",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "125523"
      },
      "points": [
        {
          "id": "sanjeong-lake-main",
          "name": "대표 위치",
          "lat": 38.06547,
          "lng": 127.31443,
          "radiusMeters": 500,
          "description": "포천 산정호수 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "namhansanseong",
      "name": "남한산성",
      "sido": "경기",
      "address": "광주시 남한산성면",
      "fullAddress": "경기도 광주시 남한산성면 산성리 935-1",
      "areaKeywords": [
        "경기",
        "경기도",
        "광주시",
        "남한산성면",
        "남한산성"
      ],
      "description": "산 능선을 따라 성곽이 이어지는 산성",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "2751248"
      },
      "points": [
        {
          "id": "namhansanseong-main",
          "name": "대표 위치",
          "lat": 37.47884,
          "lng": 127.18151,
          "radiusMeters": 1000,
          "description": "남한산성 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "seoraksan",
      "name": "설악산 국립공원",
      "sido": "강원",
      "address": "속초시 설악동",
      "fullAddress": "강원특별자치도 속초시 설악산로 1055 (설악동)",
      "areaKeywords": [
        "강원",
        "강원특별자치도",
        "속초시",
        "설악동",
        "설악산",
        "국립공원"
      ],
      "description": "기암 봉우리와 계곡, 단풍이 깊은 국립공원",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "4065554"
      },
      "points": [
        {
          "id": "seoraksan-main",
          "name": "대표 위치",
          "lat": 38.17282,
          "lng": 128.49288,
          "radiusMeters": 1500,
          "description": "설악산 국립공원 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "jeongdongjin",
      "name": "강릉 정동진",
      "sido": "강원",
      "address": "강릉시 강동면",
      "fullAddress": "강원특별자치도 강릉시 강동면 정동역길 17",
      "areaKeywords": [
        "강원",
        "강원특별자치도",
        "강릉시",
        "강동면",
        "강릉",
        "정동진"
      ],
      "description": "바다와 가장 가까운 기차역의 해돋이",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "3545967"
      },
      "points": [
        {
          "id": "jeongdongjin-main",
          "name": "대표 위치",
          "lat": 37.69141,
          "lng": 129.0326,
          "radiusMeters": 500,
          "description": "강릉 정동진 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "nami-island",
      "name": "춘천 남이섬",
      "sido": "강원",
      "address": "춘천시",
      "fullAddress": "강원특별자치도 춘천시 남이섬길 1 남이섬",
      "areaKeywords": [
        "강원",
        "강원특별자치도",
        "춘천시",
        "춘천",
        "남이섬"
      ],
      "description": "메타세쿼이아길과 잔디밭이 있는 강 위의 섬",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "128019"
      },
      "points": [
        {
          "id": "nami-island-main",
          "name": "대표 위치",
          "lat": 37.79627,
          "lng": 127.52549,
          "radiusMeters": 800,
          "description": "춘천 남이섬 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "daegwallyeong",
      "name": "평창 대관령 양떼목장",
      "sido": "강원",
      "address": "평창군 대관령면",
      "fullAddress": "강원특별자치도 평창군 대관령면 대관령마루길 483-32",
      "areaKeywords": [
        "강원",
        "강원특별자치도",
        "평창군",
        "대관령면",
        "평창",
        "대관령",
        "양떼목장"
      ],
      "description": "초원 언덕 위로 양 떼가 노니는 목장",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "129263"
      },
      "points": [
        {
          "id": "daegwallyeong-main",
          "name": "대표 위치",
          "lat": 37.68759,
          "lng": 128.7533,
          "radiusMeters": 700,
          "description": "평창 대관령 양떼목장 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "gyeongpo",
      "name": "강릉 경포호",
      "sido": "강원",
      "address": "강릉시 초당동",
      "fullAddress": "강원특별자치도 강릉시 해안로 415 (초당동)",
      "areaKeywords": [
        "강원",
        "강원특별자치도",
        "강릉시",
        "초당동",
        "강릉",
        "경포호"
      ],
      "description": "호수와 바다가 나란히 있는 강릉의 명소",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "3454461"
      },
      "points": [
        {
          "id": "gyeongpo-main",
          "name": "대표 위치",
          "lat": 37.79779,
          "lng": 128.90952,
          "radiusMeters": 700,
          "description": "강릉 경포호 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "yeonggeumjeong",
      "name": "속초 영금정",
      "sido": "강원",
      "address": "속초시 동명동",
      "fullAddress": "강원특별자치도 속초시 영금정로 43 (동명동)",
      "areaKeywords": [
        "강원",
        "강원특별자치도",
        "속초시",
        "동명동",
        "속초",
        "영금정"
      ],
      "description": "파도가 부딪히는 바위 위 정자와 해돋이",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "125779"
      },
      "points": [
        {
          "id": "yeonggeumjeong-main",
          "name": "대표 위치",
          "lat": 38.2119,
          "lng": 128.60146,
          "radiusMeters": 500,
          "description": "속초 영금정 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "beopjusa",
      "name": "보은 법주사",
      "sido": "충북",
      "address": "보은군 속리산면",
      "fullAddress": "충청북도 보은군 속리산면 법주사로 405",
      "areaKeywords": [
        "충북",
        "충청북도",
        "보은군",
        "속리산면",
        "보은",
        "법주사"
      ],
      "description": "속리산 자락의 고찰과 팔상전",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "125906"
      },
      "points": [
        {
          "id": "beopjusa-main",
          "name": "대표 위치",
          "lat": 36.54104,
          "lng": 127.83286,
          "radiusMeters": 500,
          "description": "보은 법주사 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "chungju-lake",
      "name": "충주호",
      "sido": "충북",
      "address": "충주시 동량면",
      "fullAddress": "충청북도 충주시 동량면 함암리",
      "areaKeywords": [
        "충북",
        "충청북도",
        "충주시",
        "동량면",
        "충주호"
      ],
      "description": "산과 호수가 겹겹이 펼쳐지는 내륙의 바다",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "125872"
      },
      "points": [
        {
          "id": "chungju-lake-main",
          "name": "대표 위치",
          "lat": 36.95815,
          "lng": 128.04002,
          "radiusMeters": 1500,
          "description": "충주호 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "dodamsambong",
      "name": "단양 도담삼봉",
      "sido": "충북",
      "address": "단양군 매포읍",
      "fullAddress": "충청북도 단양군 매포읍 삼봉로 644",
      "areaKeywords": [
        "충북",
        "충청북도",
        "단양군",
        "매포읍",
        "단양",
        "도담삼봉"
      ],
      "description": "남한강 위에 솟은 세 개의 봉우리",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "125913"
      },
      "points": [
        {
          "id": "dodamsambong-main",
          "name": "대표 위치",
          "lat": 37.00029,
          "lng": 128.3448,
          "radiusMeters": 500,
          "description": "단양 도담삼봉 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "uirimji",
      "name": "제천 의림지",
      "sido": "충북",
      "address": "제천시 모산동",
      "fullAddress": "충청북도 제천시 모산동",
      "areaKeywords": [
        "충북",
        "충청북도",
        "제천시",
        "모산동",
        "제천",
        "의림지"
      ],
      "description": "소나무 숲과 오래된 저수지가 있는 제천 명소",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "2751857"
      },
      "points": [
        {
          "id": "uirimji-main",
          "name": "대표 위치",
          "lat": 37.1833,
          "lng": 128.2052,
          "radiusMeters": 500,
          "description": "제천 의림지 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "oeam-village",
      "name": "아산 외암마을",
      "sido": "충남",
      "address": "아산시 송악면",
      "fullAddress": "충청남도 아산시 송악면 외암민속길 42-15",
      "areaKeywords": [
        "충남",
        "충청남도",
        "아산시",
        "송악면",
        "아산",
        "외암마을"
      ],
      "description": "돌담길과 초가가 남아 있는 민속마을",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "1626699"
      },
      "points": [
        {
          "id": "oeam-village-main",
          "name": "대표 위치",
          "lat": 36.7303,
          "lng": 127.01849,
          "radiusMeters": 500,
          "description": "아산 외암마을 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "kkotji",
      "name": "태안 꽃지해수욕장",
      "sido": "충남",
      "address": "태안군 안면읍",
      "fullAddress": "충청남도 태안군 안면읍 승언리",
      "areaKeywords": [
        "충남",
        "충청남도",
        "태안군",
        "안면읍",
        "태안",
        "꽃지해수욕장"
      ],
      "description": "할미·할아비 바위 사이로 지는 노을",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "126695"
      },
      "points": [
        {
          "id": "kkotji-main",
          "name": "대표 위치",
          "lat": 36.50132,
          "lng": 126.33465,
          "radiusMeters": 700,
          "description": "태안 꽃지해수욕장 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "ganwolam",
      "name": "서산 간월암",
      "sido": "충남",
      "address": "서산시 부석면",
      "fullAddress": "충청남도 서산시 부석면 간월도1길 119-29",
      "areaKeywords": [
        "충남",
        "충청남도",
        "서산시",
        "부석면",
        "서산",
        "간월암"
      ],
      "description": "밀물이면 섬이 되는 바다 위 암자",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "125880"
      },
      "points": [
        {
          "id": "ganwolam-main",
          "name": "대표 위치",
          "lat": 36.60379,
          "lng": 126.41141,
          "radiusMeters": 500,
          "description": "서산 간월암 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "gungnamji",
      "name": "부여 궁남지",
      "sido": "충남",
      "address": "부여군 부여읍",
      "fullAddress": "충청남도 부여군 부여읍 궁남로 52",
      "areaKeywords": [
        "충남",
        "충청남도",
        "부여군",
        "부여읍",
        "부여",
        "궁남지"
      ],
      "description": "연꽃 연못 가운데 정자가 떠 있는 정원",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "125984"
      },
      "points": [
        {
          "id": "gungnamji-main",
          "name": "대표 위치",
          "lat": 36.2697,
          "lng": 126.91231,
          "radiusMeters": 500,
          "description": "부여 궁남지 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "gongsanseong",
      "name": "공주 공산성",
      "sido": "충남",
      "address": "공주시",
      "fullAddress": "충청남도 공주시 웅진로 280",
      "areaKeywords": [
        "충남",
        "충청남도",
        "공주시",
        "공주",
        "공산성"
      ],
      "description": "금강을 내려다보는 백제 산성",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "125949"
      },
      "points": [
        {
          "id": "gongsanseong-main",
          "name": "대표 위치",
          "lat": 36.46295,
          "lng": 127.12679,
          "radiusMeters": 500,
          "description": "공주 공산성 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "haemieupseong",
      "name": "서산 해미읍성",
      "sido": "충남",
      "address": "서산시 해미면",
      "fullAddress": "충청남도 서산시 해미면 남문2로 143",
      "areaKeywords": [
        "충남",
        "충청남도",
        "서산시",
        "해미면",
        "서산",
        "해미읍성"
      ],
      "description": "성벽과 옛 관아가 남은 조선 읍성",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "125990"
      },
      "points": [
        {
          "id": "haemieupseong-main",
          "name": "대표 위치",
          "lat": 36.7121,
          "lng": 126.5486,
          "radiusMeters": 500,
          "description": "서산 해미읍성 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "jeonju-hanok",
      "name": "전주 한옥마을",
      "sido": "전북",
      "address": "전주시 완산구 풍남동3가",
      "fullAddress": "전북특별자치도 전주시 완산구 태조로 44 (풍남동3가)",
      "areaKeywords": [
        "전북",
        "전북특별자치도",
        "전주시",
        "완산구",
        "풍남동3가",
        "전주",
        "한옥마을"
      ],
      "description": "한옥 지붕과 경기전 돌담이 이어지는 마을",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "147656"
      },
      "points": [
        {
          "id": "jeonju-hanok-main",
          "name": "대표 위치",
          "lat": 35.81417,
          "lng": 127.15002,
          "radiusMeters": 600,
          "description": "전주 한옥마을 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "maisan",
      "name": "진안 마이산",
      "sido": "전북",
      "address": "진안군 마령면",
      "fullAddress": "전북특별자치도 진안군 마령면 마이산남로 367",
      "areaKeywords": [
        "전북",
        "전북특별자치도",
        "진안군",
        "마령면",
        "진안",
        "마이산"
      ],
      "description": "말 귀 모양 봉우리 아래 돌탑이 쌓인 곳",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "128972"
      },
      "points": [
        {
          "id": "maisan-main",
          "name": "대표 위치",
          "lat": 35.75846,
          "lng": 127.41119,
          "radiusMeters": 800,
          "description": "진안 마이산 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "seonyudo",
      "name": "군산 선유도",
      "sido": "전북",
      "address": "군산시 옥도면",
      "fullAddress": "전북특별자치도 군산시 옥도면 선유남길 34-22",
      "areaKeywords": [
        "전북",
        "전북특별자치도",
        "군산시",
        "옥도면",
        "군산",
        "선유도"
      ],
      "description": "다리로 이어진 고군산군도의 섬과 해변",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "226923"
      },
      "points": [
        {
          "id": "seonyudo-main",
          "name": "대표 위치",
          "lat": 35.8102,
          "lng": 126.41241,
          "radiusMeters": 1500,
          "description": "군산 선유도 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "okjeongho",
      "name": "임실 옥정호 붕어섬",
      "sido": "전북",
      "address": "임실군 운암면",
      "fullAddress": "전북특별자치도 임실군 운암면 마암리",
      "areaKeywords": [
        "전북",
        "전북특별자치도",
        "임실군",
        "운암면",
        "임실",
        "옥정호",
        "붕어섬"
      ],
      "description": "물안개와 붕어섬이 보이는 호수",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "126551"
      },
      "points": [
        {
          "id": "okjeongho-main",
          "name": "대표 위치",
          "lat": 35.63691,
          "lng": 127.13602,
          "radiusMeters": 1000,
          "description": "임실 옥정호 붕어섬 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "deokjin-park",
      "name": "전주 덕진공원",
      "sido": "전북",
      "address": "전주시 덕진구",
      "fullAddress": "전북특별자치도 전주시 덕진구 권삼득로 390",
      "areaKeywords": [
        "전북",
        "전북특별자치도",
        "전주시",
        "덕진구",
        "전주",
        "덕진공원"
      ],
      "description": "여름 연꽃이 호수를 덮는 전주 공원",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "126320"
      },
      "points": [
        {
          "id": "deokjin-park-main",
          "name": "대표 위치",
          "lat": 35.84747,
          "lng": 127.12185,
          "radiusMeters": 500,
          "description": "전주 덕진공원 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "gyeongam-railway",
      "name": "군산 경암동 철길마을",
      "sido": "전북",
      "address": "군산시",
      "fullAddress": "전북특별자치도 군산시 경촌4길 14",
      "areaKeywords": [
        "전북",
        "전북특별자치도",
        "군산시",
        "군산",
        "경암동",
        "철길마을"
      ],
      "description": "집 사이로 철길이 지나가는 옛 마을",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "2605528"
      },
      "points": [
        {
          "id": "gyeongam-railway-main",
          "name": "대표 위치",
          "lat": 35.98135,
          "lng": 126.73623,
          "radiusMeters": 500,
          "description": "군산 경암동 철길마을 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "hakwon-farm",
      "name": "고창 학원농장",
      "sido": "전북",
      "address": "고창군 공음면",
      "fullAddress": "전북특별자치도 고창군 공음면 학원농장길 150",
      "areaKeywords": [
        "전북",
        "전북특별자치도",
        "고창군",
        "공음면",
        "고창",
        "학원농장"
      ],
      "description": "봄 청보리와 가을 메밀꽃이 펼쳐지는 농장",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "125447"
      },
      "points": [
        {
          "id": "hakwon-farm-main",
          "name": "대표 위치",
          "lat": 35.37535,
          "lng": 126.5433,
          "radiusMeters": 500,
          "description": "고창 학원농장 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "damyang-metasequoia",
      "name": "담양 메타세쿼이아길",
      "sido": "전남",
      "address": "담양군 담양읍",
      "fullAddress": "전남광주통합특별시 담양군 담양읍 메타세쿼이아로 12",
      "areaKeywords": [
        "전남",
        "전라남도",
        "담양군",
        "담양읍",
        "담양",
        "메타세쿼이아길",
        "전남광주"
      ],
      "description": "메타세쿼이아가 터널처럼 이어진 길",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "250094"
      },
      "points": [
        {
          "id": "damyang-metasequoia-main",
          "name": "대표 위치",
          "lat": 35.32381,
          "lng": 127.00414,
          "radiusMeters": 500,
          "description": "담양 메타세쿼이아길 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "suncheonman",
      "name": "순천만습지",
      "sido": "전남",
      "address": "순천시",
      "fullAddress": "전남광주통합특별시 순천시 순천만길 513-25",
      "areaKeywords": [
        "전남",
        "전라남도",
        "순천시",
        "순천만습지",
        "전남광주"
      ],
      "description": "갈대밭과 S자 물길, 노을이 아름다운 습지",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "126730"
      },
      "points": [
        {
          "id": "suncheonman-main",
          "name": "대표 위치",
          "lat": 34.8858,
          "lng": 127.50928,
          "radiusMeters": 1000,
          "description": "순천만습지 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "boseong-daehan",
      "name": "보성 대한다원",
      "sido": "전남",
      "address": "보성군 보성읍",
      "fullAddress": "전남광주통합특별시 보성군 보성읍 녹차로 763-65",
      "areaKeywords": [
        "전남",
        "전라남도",
        "보성군",
        "보성읍",
        "보성",
        "대한다원",
        "전남광주"
      ],
      "description": "산비탈을 따라 굽이치는 녹차밭",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "127869"
      },
      "points": [
        {
          "id": "boseong-daehan-main",
          "name": "대표 위치",
          "lat": 34.71565,
          "lng": 127.0788,
          "radiusMeters": 600,
          "description": "보성 대한다원 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "gwanbangjerim",
      "name": "담양 관방제림",
      "sido": "전남",
      "address": "담양군 담양읍",
      "fullAddress": "전남광주통합특별시 담양군 담양읍 남사리 일원",
      "areaKeywords": [
        "전남",
        "전라남도",
        "담양군",
        "담양읍",
        "담양",
        "관방제림",
        "전남광주"
      ],
      "description": "오래된 고목이 둑을 따라 늘어선 숲길",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "128981"
      },
      "points": [
        {
          "id": "gwanbangjerim-main",
          "name": "대표 위치",
          "lat": 35.3239,
          "lng": 126.9858,
          "radiusMeters": 500,
          "description": "담양 관방제림 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "seryangji",
      "name": "화순 세량지",
      "sido": "전남",
      "address": "화순군 화순읍",
      "fullAddress": "전남광주통합특별시 화순군 화순읍 세량리",
      "areaKeywords": [
        "전남",
        "전라남도",
        "화순군",
        "화순읍",
        "화순",
        "세량지",
        "전남광주"
      ],
      "description": "봄 산벚꽃과 물안개가 비치는 저수지",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "1915088"
      },
      "points": [
        {
          "id": "seryangji-main",
          "name": "대표 위치",
          "lat": 35.07871,
          "lng": 126.91996,
          "radiusMeters": 500,
          "description": "화순 세량지 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "juknokwon",
      "name": "담양 죽녹원",
      "sido": "전남",
      "address": "담양군 담양읍",
      "fullAddress": "전남광주통합특별시 담양군 담양읍 죽녹원로 119",
      "areaKeywords": [
        "전남",
        "전라남도",
        "담양군",
        "담양읍",
        "담양",
        "죽녹원",
        "전남광주"
      ],
      "description": "하늘 높이 뻗은 대나무 숲길",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "128834"
      },
      "points": [
        {
          "id": "juknokwon-main",
          "name": "대표 위치",
          "lat": 35.32776,
          "lng": 126.98556,
          "radiusMeters": 500,
          "description": "담양 죽녹원 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "odongdo",
      "name": "여수 오동도",
      "sido": "전남",
      "address": "여수시",
      "fullAddress": "전남광주통합특별시 여수시 오동도로 238-32",
      "areaKeywords": [
        "전남",
        "전라남도",
        "여수시",
        "여수",
        "오동도",
        "전남광주"
      ],
      "description": "동백나무 숲과 등대가 있는 바다 위 섬",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "129152"
      },
      "points": [
        {
          "id": "odongdo-main",
          "name": "대표 위치",
          "lat": 34.7444,
          "lng": 127.76781,
          "radiusMeters": 500,
          "description": "여수 오동도 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "cheomseongdae",
      "name": "경주 첨성대",
      "sido": "경북",
      "address": "경주시",
      "fullAddress": "경상북도 경주시 첨성로 140-25",
      "areaKeywords": [
        "경북",
        "경상북도",
        "경주시",
        "경주",
        "첨성대"
      ],
      "description": "첨성대 주변 꽃단지가 계절마다 바뀌는 곳",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "126207"
      },
      "points": [
        {
          "id": "cheomseongdae-main",
          "name": "대표 위치",
          "lat": 35.83433,
          "lng": 129.21853,
          "radiusMeters": 500,
          "description": "경주 첨성대 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "homigot",
      "name": "포항 호미곶",
      "sido": "경북",
      "address": "포항시 남구 호미곶면",
      "fullAddress": "경북 포항시 남구 호미곶면 대보리",
      "areaKeywords": [
        "경북",
        "경상북도",
        "포항시",
        "남구",
        "호미곶면",
        "포항",
        "호미곶"
      ],
      "description": "바다 위 상생의 손과 해돋이",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "127131"
      },
      "points": [
        {
          "id": "homigot-main",
          "name": "대표 위치",
          "lat": 36.07678,
          "lng": 129.56797,
          "radiusMeters": 500,
          "description": "포항 호미곶 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "donggung-wolji",
      "name": "경주 동궁과 월지",
      "sido": "경북",
      "address": "경주시",
      "fullAddress": "경상북도 경주시 원화로 102",
      "areaKeywords": [
        "경북",
        "경상북도",
        "경주시",
        "경주",
        "동궁과",
        "월지"
      ],
      "description": "연못에 비친 전각 야경",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "128526"
      },
      "points": [
        {
          "id": "donggung-wolji-main",
          "name": "대표 위치",
          "lat": 35.83516,
          "lng": 129.22834,
          "radiusMeters": 500,
          "description": "경주 동궁과 월지 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "bulguksa",
      "name": "경주 불국사",
      "sido": "경북",
      "address": "경주시 진현동",
      "fullAddress": "경상북도 경주시 불국로 385 (진현동)",
      "areaKeywords": [
        "경북",
        "경상북도",
        "경주시",
        "진현동",
        "경주",
        "불국사"
      ],
      "description": "석가탑과 다보탑, 가을 단풍의 고찰",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "126166"
      },
      "points": [
        {
          "id": "bulguksa-main",
          "name": "대표 위치",
          "lat": 35.7923,
          "lng": 129.33173,
          "radiusMeters": 500,
          "description": "경주 불국사 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "woryeonggyo",
      "name": "안동 월영교",
      "sido": "경북",
      "address": "안동시 상아동",
      "fullAddress": "경상북도 안동시 상아동 569",
      "areaKeywords": [
        "경북",
        "경상북도",
        "안동시",
        "상아동",
        "안동",
        "월영교"
      ],
      "description": "호수 위를 건너는 나무다리와 야경",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "988449"
      },
      "points": [
        {
          "id": "woryeonggyo-main",
          "name": "대표 위치",
          "lat": 36.5767,
          "lng": 128.7609,
          "radiusMeters": 500,
          "description": "안동 월영교 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "hahoe",
      "name": "안동 하회마을",
      "sido": "경북",
      "address": "안동시 풍천면",
      "fullAddress": "경상북도 안동시 풍천면 전서로 186-8",
      "areaKeywords": [
        "경북",
        "경상북도",
        "안동시",
        "풍천면",
        "안동",
        "하회마을"
      ],
      "description": "강이 감싸 도는 전통 마을",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "894027"
      },
      "points": [
        {
          "id": "hahoe-main",
          "name": "대표 위치",
          "lat": 36.55061,
          "lng": 128.52829,
          "radiusMeters": 800,
          "description": "안동 하회마을 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "jusanji",
      "name": "청송 주산지",
      "sido": "경북",
      "address": "청송군 주왕산면",
      "fullAddress": "경상북도 청송군 주왕산면 주산지리",
      "areaKeywords": [
        "경북",
        "경상북도",
        "청송군",
        "주왕산면",
        "청송",
        "주산지"
      ],
      "description": "물속 왕버들과 물안개가 있는 저수지",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "126223"
      },
      "points": [
        {
          "id": "jusanji-main",
          "name": "대표 위치",
          "lat": 36.36272,
          "lng": 129.18982,
          "radiusMeters": 500,
          "description": "청송 주산지 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "hwangmaesan",
      "name": "합천 황매산",
      "sido": "경남",
      "address": "합천군 가회면",
      "fullAddress": "경상남도 합천군 가회면 황매산로 607",
      "areaKeywords": [
        "경남",
        "경상남도",
        "합천군",
        "가회면",
        "합천",
        "황매산"
      ],
      "description": "봄 철쭉과 가을 억새가 덮는 고원",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "1914082"
      },
      "points": [
        {
          "id": "hwangmaesan-main",
          "name": "대표 위치",
          "lat": 35.46912,
          "lng": 128.00154,
          "radiusMeters": 1500,
          "description": "합천 황매산 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "geoje-windy-hill",
      "name": "거제 바람의 언덕",
      "sido": "경남",
      "address": "거제시 남부면",
      "fullAddress": "경상남도 거제시 남부면 갈곶리 14-47번지",
      "areaKeywords": [
        "경남",
        "경상남도",
        "거제시",
        "남부면",
        "거제",
        "바람의",
        "언덕"
      ],
      "description": "바다를 향한 풍차와 초록 언덕",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "129479"
      },
      "points": [
        {
          "id": "geoje-windy-hill-main",
          "name": "대표 위치",
          "lat": 34.74405,
          "lng": 128.66331,
          "radiusMeters": 500,
          "description": "거제 바람의 언덕 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "jinjuseong",
      "name": "진주성",
      "sido": "경남",
      "address": "진주시",
      "fullAddress": "경상남도 진주시 남강로 626",
      "areaKeywords": [
        "경남",
        "경상남도",
        "진주시",
        "진주성"
      ],
      "description": "남강과 촉석루가 어우러진 성곽",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "126833"
      },
      "points": [
        {
          "id": "jinjuseong-main",
          "name": "대표 위치",
          "lat": 35.18971,
          "lng": 128.08025,
          "radiusMeters": 500,
          "description": "진주성 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "dongpirang",
      "name": "통영 동피랑",
      "sido": "경남",
      "address": "통영시",
      "fullAddress": "경상남도 통영시 동피랑1길 6-18",
      "areaKeywords": [
        "경남",
        "경상남도",
        "통영시",
        "통영",
        "동피랑"
      ],
      "description": "벽화 골목에서 통영항을 내려다보는 마을",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "753306"
      },
      "points": [
        {
          "id": "dongpirang-main",
          "name": "대표 위치",
          "lat": 34.84535,
          "lng": 128.42765,
          "radiusMeters": 500,
          "description": "통영 동피랑 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "upo-wetland",
      "name": "창녕 우포늪",
      "sido": "경남",
      "address": "창녕군 유어면",
      "fullAddress": "경상남도 창녕군 유어면 우포늪길 220",
      "areaKeywords": [
        "경남",
        "경상남도",
        "창녕군",
        "유어면",
        "창녕",
        "우포늪"
      ],
      "description": "물안개와 철새가 머무는 국내 최대 내륙 습지",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "126737"
      },
      "points": [
        {
          "id": "upo-wetland-main",
          "name": "대표 위치",
          "lat": 35.5518,
          "lng": 128.414,
          "radiusMeters": 1500,
          "description": "창녕 우포늪 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "darangyi",
      "name": "남해 다랭이마을",
      "sido": "경남",
      "address": "남해군 남면",
      "fullAddress": "경상남도 남해군 남면 남면로 702",
      "areaKeywords": [
        "경남",
        "경상남도",
        "남해군",
        "남면",
        "남해",
        "다랭이마을"
      ],
      "description": "바다로 계단처럼 내려가는 논",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "127778"
      },
      "points": [
        {
          "id": "darangyi-main",
          "name": "대표 위치",
          "lat": 34.72807,
          "lng": 127.89096,
          "radiusMeters": 500,
          "description": "남해 다랭이마을 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "seongsan-ilchulbong",
      "name": "성산일출봉",
      "sido": "제주",
      "address": "서귀포시 성산읍",
      "fullAddress": "제주특별자치도 서귀포시 성산읍 일출로 284-12",
      "areaKeywords": [
        "제주",
        "제주특별자치도",
        "서귀포시",
        "성산읍",
        "성산일출봉"
      ],
      "description": "바다 위로 솟은 분화구와 해돋이",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "126435"
      },
      "points": [
        {
          "id": "seongsan-ilchulbong-main",
          "name": "대표 위치",
          "lat": 33.45808,
          "lng": 126.9415,
          "radiusMeters": 500,
          "description": "성산일출봉 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "sanbangsan",
      "name": "산방산",
      "sido": "제주",
      "address": "서귀포시 안덕면",
      "fullAddress": "제주특별자치도 서귀포시 안덕면 산방로 218-12",
      "areaKeywords": [
        "제주",
        "제주특별자치도",
        "서귀포시",
        "안덕면",
        "산방산"
      ],
      "description": "유채꽃 너머로 우뚝 선 종 모양 산",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "126457"
      },
      "points": [
        {
          "id": "sanbangsan-main",
          "name": "대표 위치",
          "lat": 33.23723,
          "lng": 126.31334,
          "radiusMeters": 500,
          "description": "산방산 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "bijarim",
      "name": "비자림",
      "sido": "제주",
      "address": "제주시 구좌읍",
      "fullAddress": "제주특별자치도 제주시 구좌읍 비자숲길 55",
      "areaKeywords": [
        "제주",
        "제주특별자치도",
        "제주시",
        "구좌읍",
        "비자림"
      ],
      "description": "오래된 비자나무가 모인 숲",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "126472"
      },
      "points": [
        {
          "id": "bijarim-main",
          "name": "대표 위치",
          "lat": 33.48622,
          "lng": 126.80748,
          "radiusMeters": 500,
          "description": "비자림 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "soesokkak",
      "name": "쇠소깍",
      "sido": "제주",
      "address": "서귀포시 하효동",
      "fullAddress": "제주특별자치도 서귀포시 쇠소깍로 104 (하효동)",
      "areaKeywords": [
        "제주",
        "제주특별자치도",
        "서귀포시",
        "하효동",
        "쇠소깍"
      ],
      "description": "민물과 바닷물이 만나는 투명한 계곡",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "129617"
      },
      "points": [
        {
          "id": "soesokkak-main",
          "name": "대표 위치",
          "lat": 33.253,
          "lng": 126.6227,
          "radiusMeters": 500,
          "description": "쇠소깍 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "camellia-hill",
      "name": "카멜리아힐",
      "sido": "제주",
      "address": "서귀포시 안덕면",
      "fullAddress": "제주특별자치도 서귀포시 안덕면 병악로 166",
      "areaKeywords": [
        "제주",
        "제주특별자치도",
        "서귀포시",
        "안덕면",
        "카멜리아힐"
      ],
      "description": "동백과 수국으로 계절이 바뀌는 정원",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "741109"
      },
      "points": [
        {
          "id": "camellia-hill-main",
          "name": "대표 위치",
          "lat": 33.28987,
          "lng": 126.36825,
          "radiusMeters": 500,
          "description": "카멜리아힐 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "saebyeol-oreum",
      "name": "새별오름",
      "sido": "제주",
      "address": "제주시 애월읍",
      "fullAddress": "제주특별자치도 제주시 애월읍 봉성리 산 59-8",
      "areaKeywords": [
        "제주",
        "제주특별자치도",
        "제주시",
        "애월읍",
        "새별오름"
      ],
      "description": "가을 억새가 은빛으로 덮는 오름",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "572973"
      },
      "points": [
        {
          "id": "saebyeol-oreum-main",
          "name": "대표 위치",
          "lat": 33.3663,
          "lng": 126.3576,
          "radiusMeters": 500,
          "description": "새별오름 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "saryeoni",
      "name": "사려니숲길",
      "sido": "제주",
      "address": "서귀포시 표선면",
      "fullAddress": "제주특별자치도 서귀포시 표선면 가시리",
      "areaKeywords": [
        "제주",
        "제주특별자치도",
        "서귀포시",
        "표선면",
        "사려니숲길"
      ],
      "description": "삼나무 숲 사이로 이어진 숲길",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "2414827"
      },
      "points": [
        {
          "id": "saryeoni-main",
          "name": "대표 위치",
          "lat": 33.39894,
          "lng": 126.67927,
          "radiusMeters": 1500,
          "description": "사려니숲길 대표 촬영 지점"
        }
      ]
    },
    {
      "id": "hyeopjae",
      "name": "협재해수욕장",
      "sido": "제주",
      "address": "제주시 한림읍",
      "fullAddress": "제주특별자치도 제주시 한림읍 한림로 329-10",
      "areaKeywords": [
        "제주",
        "제주특별자치도",
        "제주시",
        "한림읍",
        "협재해수욕장"
      ],
      "description": "에메랄드빛 바다와 비양도가 보이는 해변",
      "operatingHours": "현장 확인 예정",
      "parking": "현장 확인 예정",
      "safetyNotice": "현장 확인 예정",
      "source": {
        "tourContentId": "127490"
      },
      "points": [
        {
          "id": "hyeopjae-main",
          "name": "대표 위치",
          "lat": 33.39375,
          "lng": 126.23943,
          "radiusMeters": 500,
          "description": "협재해수욕장 대표 촬영 지점"
        }
      ]
    }
  ];
})(globalThis);
