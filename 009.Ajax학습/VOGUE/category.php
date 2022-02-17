<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> | 보그 코리아 (Vogue Korea)</title>
    <!-- 탭메뉴 아이콘 (favicon) -->
    <link rel="shortcut icon" href="images/icon.jpg" type="image/x-icon">
    <!-- 폰티스토 아이콘 CDN CSS불러오기 -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fontisto@v3.0.4/css/fontisto/fontisto.min.css">
    <link rel="stylesheet" href="css/category.css">
    <link rel="stylesheet" href="css/media.css">
    <script src="js/jquery-3.6.0.min.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    <!-- 부드러운 스크롤 플러그인 -->
    <script src="js/smoothScroll20.js"></script>
    <!-- 링크시스템 JS -->
    <script src="js/linksys.js"></script>
    <!-- 공통JS -->
    <script src="js/common.js"></script>
    <!-- 카테고리 페이지 JS -->
    <script src="js/category.js"></script>
</head>

<body>
    <!-- 1. 상단영역 -->
    <?php include "inc/top.inc" ?>
    <!-- 2. 메인영역 -->
    <div class="bgc">
        <main class="cont ibx">
            <!-- 1. 카테고리 페이지 탑영역 -->
            <header class="ctop">
                <!-- 1-1.서브타이틀 -->
                <h2 class="stit"></h2>
                <!-- 1-2.서브메뉴
                    (LNB-Local Navigation Bar) -->
                <nav class="lnb"></nav>
            </header>
            
            <!-- 2. 카테고리 페이지 컨텐츠박스 -->
            <!-- 컨텐츠 유형3 -->
            <div class="pt3 rbx">
                <div class="rbxIn fbx">
                    <div class="cbx bgi bg1-1">
                        <h2></h2>
                    </div>
                    <div class="cbx bgi bg1-2">
                        <h2></h2>
                    </div>
                    <div class="cbx bgi bg1-3">
                        <h2></h2>
                    </div>
                </div>
            </div>
            <!-- 컨텐츠 유형3 -->
            <div class="pt3 rbx">
                <div class="rbxIn fbx">
                    <div class="cbx bgi bg2-1">
                        <h2></h2>
                    </div>
                    <div class="cbx bgi bg2-2">
                        <h2></h2>
                    </div>
                    <div class="cbx bgi bg2-3">
                        <h2></h2>
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