const express = require("express");
const router = express.Router();

const nearPlaces = [
    {
        "img": "https://a0.muscache.com/im/pictures/71e23854-a3c7-491c-b715-6e86233a293f.jpg?im_q=medq&im_w=720",
        "link": "https://www.airbnb.co.kr/s/%EC%84%9C%EC%9A%B8/homes?place_id=ChIJzWXFYYuifDUR64Pq5LTtioU&refinement_paths%5B%5D=%2Fhomes&search_type=section_navigation",
        "text": "서울",
        "subText": "차로 15분거리"
    },
    {
        "img": "https://a0.muscache.com/im/pictures/b654084a-1abc-4819-ab37-8c9471bfe917.jpg?im_q=medq&im_w=720",
        "link": "https://www.airbnb.co.kr/s/%EC%9D%B8%EC%B2%9C/homes?place_id=ChIJR4ITliVveTURQmG3LJD9N30&refinement_paths%5B%5D=%2Fhomes&search_type=section_navigation",
        "text": "인천",
        "subText": "차로 30분거리"
    },
    {
        "img": "https://a0.muscache.com/im/pictures/bd549da5-ecdd-4642-9a4c-4943c9c8cf28.jpg?im_q=medq&im_w=720",
        "link": "https://www.airbnb.co.kr/s/%EC%9D%98%EC%A0%95%EB%B6%80%EC%8B%9C/homes?place_id=ChIJTYxvLg7HfDURrJz18pb4R-E&refinement_paths%5B%5D=%2Fhomes&search_type=section_navigation",
        "text": "의정부시",
        "subText": "차로 30분거리"
    },
    {
        "img": "https://a0.muscache.com/im/pictures/7c424b7e-0f02-4282-93cf-c5fc5e5e157d.jpg?im_q=medq&im_w=720",
        "link": "https://www.airbnb.co.kr/s/%EB%8C%80%EC%A0%84/homes?place_id=ChIJAWZKutdIZTURtdOKmJ3WltE&refinement_paths%5B%5D=%2Fhomes&search_type=section_navigation",
        "text": "대전",
        "subText": "차로 2.5시간 거리"
    },
    {
        "img": "https://a0.muscache.com/im/pictures/a00350b6-6f18-4c24-b66c-d3d3a9df7ae2.jpg?im_q=medq&im_w=720",
        "link": "https://www.airbnb.co.kr/s/%EB%8C%80%EA%B5%AC/homes?place_id=ChIJ1a3vsrjjZTURMC44oCngkro&refinement_paths%5B%5D=%2Fhomes&search_type=section_navigation",
        "text": "대구",
        "subText": "차로 4시간 거리"
    },
    {
        "img": "https://a0.muscache.com/im/pictures/8340bd19-ee32-4669-8b10-a8ac7e7735d4.jpg?im_q=medq&im_w=720",
        "link": "https://www.airbnb.co.kr/s/%EA%B4%91%EC%A3%BC/homes?place_id=ChIJr6f1ASOJcTURSPUlAe3S9AU&refinement_paths%5B%5D=%2Fhomes&search_type=section_navigation",
        "text": "광주",
        "subText": "차로 4.5시간 거리"
    },
    {
        "img": "https://a0.muscache.com/im/pictures/560c06e1-a396-4414-9e38-4fbe8e9f04c4.jpg?im_q=medq&im_w=720",
        "link": "https://www.airbnb.co.kr/s/%EB%B6%80%EC%B2%9C/homes?refinement_paths%5B%5D=%2Fhomes&search_type=search_query&tab_id=home_tab&flexible_trip_dates%5B%5D=june&flexible_trip_dates%5B%5D=may&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=calendar&source=structured_search_input_header",
        "text": "부천시",
        "subText": "차로 30분 거리"
    },
    {
        "img": "https://a0.muscache.com/im/pictures/087a8dff-a609-4084-86db-f45051c6f23a.jpg?im_q=medq&im_w=720",
        "link": "https://www.airbnb.co.kr/s/%EC%88%98%EC%9B%90%EC%8B%9C/homes?place_id=ChIJEUZ2IApDezURybRd7gIwN_E&refinement_paths%5B%5D=%2Fhomes&search_type=section_navigation",
        "text": "수원시",
        "subText": "차로 1시간 거리"
    }
]


router.get('/',(req, res, next) => {
    res.send(nearPlaces);
});

module.exports = router

