<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vogue PJ</title>
    <!-- 탭메뉴 아이콘 (favicon) -->
    <link rel="shortcut icon" href="images/icon.jpg" type="image/x-icon">
    <!-- 폰티스토 아이콘 CDN CSS불러오기 -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fontisto@v3.0.4/css/fontisto/fontisto.min.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/media.css">
    <script src="js/jquery-3.6.0.min.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    <!-- 부드러운 스크롤 플러그인 -->
    <script src="js/smoothScroll20.js"></script>
    <!-- 링크시스템 JS -->
    <script src="js/linksys.js"></script>
    <!-- 공통JS -->
    <script src="js/common.js"></script>
    <!-- <script src="js/common.js" defer></script> -->
    <!-- 
        외부 JS호출시 defer속성을 쓰면 html로드 후 실행함!
        그런데 이것을 안쓸 수도 있고 지워질 수 있기때문에
        JS파일자체에 로드구역을 만드는 것이 좋다!
     -->
</head>

<body>
    <?php include "inc/login_session.inc" ?>
    <!-- 1. 상단영역 -->
    <?php include "inc/top.inc" ?>
    <!-- 2. 메인영역 -->
    <div class="bgc">
        <main class="cont ibx">
            <!-- 컨텐츠 유형1 -->
            <div class="pt1 rbx">
                <div class="rbxIn">
                    <div class="cbx bgi bg1">
                        <h2>복싱과 맺은 모델 수주의 이야기</h2>
                    </div>
                </div>
            </div>
            <!-- 컨텐츠 유형3 -->
            <div class="pt3 rbx scAct">
                <div class="rbxIn fbx">
                    <div class="cbx bgi bg2">
                        <h2>안현모,홍지민,강주은 써마지 더 리얼 인터뷰</h2>
                    </div>
                    <div class="cbx bgi bg3">
                        <h2>손 번쩍! 잘 때 ‘만세 자세’가 해로운 이유</h2>
                    </div>
                    <div class="cbx bgi bg4">
                        <h2>아미(Ami)와
                            장폴구드(Jean-Paul Goude)의
                            컬래버레이션</h2>
                    </div>
                </div>
            </div>
            <!-- 컨텐츠 유형1 -->
            <div class="pt1 rbx scAct">
                <div class="rbxIn">
                    <div class="cbx bgi bg5">
                        <h2>&lt;퀸스 갬빗&gt; 이후 엄청난 신작을 준비 중인 안야 테일러 조이</h2>
                    </div>
                </div>
            </div>
            <!-- 컨텐츠 유형3 -->
            <div class="pt3 rbx scAct">
                <div class="rbxIn fbx">
                    <div class="cbx bgi bg6">
                        <h2>마리아 그라치아 치우리의 디올 크루즈 2022 컬렉션 쇼</h2>
                    </div>
                    <div class="cbx bgi bg7">
                        <h2>약, 그렇게 버리면 되돌아옵니다</h2>
                    </div>
                    <div class="cbx bgi bg8">
                        <h2>셀럽들이 하는 여름 주얼리</h2>
                    </div>
                </div>
            </div>
            <!-- 컨텐츠 유형1 -->
            <div class="pt1 rbx scAct">
                <div class="rbxIn">
                    <div class="cbx bgi bg9">
                        <h2>김여진이 감행하는 변화에 대하여</h2>
                    </div>
                </div>
            </div>
            <!-- 컨텐츠 유형3 -->
            <div class="pt3 rbx scAct">
                <div class="rbxIn fbx">
                    <div class="cbx bgi bg10">
                        <h2>모델 아이린이 선택한 여름 원피스 Best</h2>
                    </div>
                    <div class="cbx bgi bg11">
                        <h2>김여진이 감행하는 변화에 대하여</h2>
                    </div>
                    <div class="cbx bgi bg12">
                        <h2>샛노란 ‘자무 주스’가 뜬다!</h2>
                    </div>
                </div>
            </div>
            <!-- 컨텐츠 유형3 -->
            <div class="pt3 rbx scAct">
                <div class="rbxIn fbx">
                    <div class="cbx bgi bg13">
                        <h2>체커보드의 색다른 매력</h2>
                    </div>
                    <div class="cbx bgi bg14">
                        <h2>‘손꾸’의 끝, 핑거 타투와 네일의 조합</h2>
                    </div>
                    <div class="cbx bgi bg15">
                        <h2>지속 가능한 변화를 이끄는 백 브랜드 6</h2>
                    </div>
                </div>
            </div>
        </main>
    </div>
    <!-- 3. 하단영역 -->
    <?php include "inc/info.inc" ?>

    <!-- 위로가기 버튼 -->
    <a href="#" class="tbtn fi fi-angle-up">
        <span class="ir">위로가기버튼</span>
    </a>

</body>

</html>