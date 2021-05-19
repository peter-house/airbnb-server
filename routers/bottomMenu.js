const express = require("express");
const router = express.Router();

const bottomMenu = [
    {
        "INTRODUCE_MENUS": [
            "에어비앤비 이용 방법",
            "뉴스룸",
            "투자자 정보",
            "에어비앤비 플러스",
            "에어비앤비 Luxe",
            "호텔투나잇",
            "에어비앤비 비즈니스 프로그램",
            "호스트 분들이 있기에 가능합니다",
            "채용정보",
            "창립자 편지"
        ]
    },
    {
        "COMMUNITY_MENUS": [
            "다양성 및 소속감",
            "접근성",
            "에어비앤비 어소시에이트",
            "구호 인력을 위한 숙소",
            "게스트 추천",
            "Airbnb.org"
        ]
    },
    {
        "DO_HOSTING_MENUS": [
            "숙소 호스팅",
            "온라인 체험 호스팅하기",
            "체험 호스팅하기",
            "책이미감 있는 호스팅",
            "자료 센터",
            "커뮤니티 센터"
        ]
    },
    {
        "AIRBNB_SUPPORT_MENUS": [
            "에어비앤비의 코로나19 대응 방안",
            "도움말 센터",
            "투자자 정보",
            "예약 취소 옵션",
            "에어비앤비 이웃 민원 지원",
            "신뢰와 안전"
        ]
    }
]

router.get('/',(req, res, next) => {
    res.send(bottomMenu);
});

module.exports = router


