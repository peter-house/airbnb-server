const express = require("express");
const router = express.Router();

const location =[
    {
        "id": 1,
        "place": "서울 용산구"
    },
    {
        "id": 2,
        "place": "대구 수성구"
    },
    {
        "id": 3,
        "place": "대구 중구"
    },
    {
        "id": 4,
        "place": "대구 북구"
    },
    {
        "id": 5,
        "place": "서울 강남구"
    },
    {
        "id": 6,
        "place": "서울 종로구"
    },
    {
        "id": 7,
        "place": "서울 은평구"
    },
    {
        "id": 8,
        "place": "서울 강북구"
    },
    {
        "id": 9,
        "place": "서울 여의도"
    }
]


router.get('/',(req, res, next) => {
    res.send(location);
});

module.exports = router