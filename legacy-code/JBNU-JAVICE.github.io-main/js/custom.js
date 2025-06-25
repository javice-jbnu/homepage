/* HTML document is loaded. DOM is ready.
-------------------------------------------*/
$(function(){

    /* start typed element */
    //http://stackoverflow.com/questions/24874797/select-div-title-text-and-make-array-with-jquery

    /* end typed element */


    /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });$(document).ready(function() {
        // 네비게이션 메뉴 클릭 시 이벤트 핸들링
        $('.templatemo-nav a').on('click', function(event) {
            // 클릭된 링크의 href 가져오기
            var href = $(this).attr('href');
    
            // 페이지 이동 방지 (기본 이벤트 취소)
            event.preventDefault();
    
            // 페이지 이동
            window.location.href = href;
        });
    });
    /* end navigation top js */

    $('body').bind('touchstart', function() {});

    /* wow
    -----------------*/
    new WOW().init();
});

/* start preloader */
$(window).load(function(){
	$('.preloader').fadeOut(1000); // set duration in brackets    
});
/* end preloader */
window.addEventListener('load', function() {
    // 모든 team-wrapper 요소를 선택합니다.
    const teamWrappers = document.querySelectorAll('.team-wrapper');

    // 높이를 비교할 변수를 초기화합니다.
    let maxHeight = 0;

    // 각 team-wrapper의 높이를 비교하여 최대 높이를 찾습니다.
    teamWrappers.forEach(function(wrapper) {
        const height = wrapper.clientHeight;
        if (height > maxHeight) {
            maxHeight = height;
        }
    });

    // 모든 team-wrapper 요소의 높이를 최대 높이로 설정합니다.
    teamWrappers.forEach(function(wrapper) {
        wrapper.style.height = maxHeight + 'px';
    });
});
window.addEventListener('load', function() {
    const teamDesList = document.querySelectorAll('.team-des');
    let maxDesHeight = 0;

    // 모든 team-des 요소의 높이를 비교하여 최대 높이를 찾습니다.
    teamDesList.forEach(function(des) {
        const desHeight = des.clientHeight;
        if (desHeight > maxDesHeight) {
            maxDesHeight = desHeight;
        }
    });

    // 모든 team-des 요소의 높이를 최대 높이로 설정합니다.
    teamDesList.forEach(function(des) {
        des.style.height = maxDesHeight + 'px';
    });
});
window.addEventListener('load', function() {
    // 높이를 초기화합니다.
    const resetHeight = function(elements) {
        elements.forEach(function(el) {
            el.style.height = 'auto';
        });
    };

    // 최대 높이를 찾아 설정하는 함수를 생성합니다.
    const setMaxHeight = function(elements) {
        let maxHeight = 0;
        elements.forEach(function(el) {
            const height = el.clientHeight;
            if (height > maxHeight) {
                maxHeight = height;
            }
        });
        elements.forEach(function(el) {
            el.style.height = maxHeight + 'px';
        });
    };

    // 모든 team-wrapper와 team-des 요소를 선택합니다.
    const teamWrappers = document.querySelectorAll('.team-wrapper');
    const teamDesList = document.querySelectorAll('.team-des');

    // 모바일 화면인지 여부를 확인하여 높이를 설정합니다.
    const mobileView = window.matchMedia('(max-width: 767px)');
    const setHeight = function() {
        if (mobileView.matches) {
            resetHeight(teamWrappers);
            resetHeight(teamDesList);
        } else {
            setMaxHeight(teamWrappers);
            setMaxHeight(teamDesList);
        }
    };

    // 초기화와 높이 설정을 호출합니다.
    setHeight();

    // 화면 크기가 변경될 때마다 높이를 다시 설정합니다.
    window.addEventListener('resize', function() {
        setHeight();
    });
});
window.addEventListener('load', function() {
    const resetHeight = function(elements) {
        elements.forEach(function(el) {
            el.style.height = 'auto';
        });
    };

    const setMaxHeight = function(elements) {
        let maxHeight = 0;
        elements.forEach(function(el) {
            const height = el.clientHeight;
            if (height > maxHeight) {
                maxHeight = height;
            }
        });
        elements.forEach(function(el) {
            el.style.height = maxHeight + 'px';
        });
    };

    const setImageMaxWidth = function(images) {
        images.forEach(function(img) {
            img.style.maxWidth = '100%'; // 이미지 최대 너비를 100%로 설정
            img.style.height = 'auto'; // 높이를 자동으로 조절하여 비율 유지
        });
    };

    const teamWrappers = document.querySelectorAll('.team-wrapper');
    const teamDesList = document.querySelectorAll('.team-des');
    const teamImages = document.querySelectorAll('.team-wrapper img');

    const mobileView = window.matchMedia('(max-width: 767px)');
    const setHeight = function() {
        if (mobileView.matches) {
            resetHeight(teamWrappers);
            resetHeight(teamDesList);
            setImageMaxWidth(teamImages); // 이미지 모바일 대응 설정
        } else {
            setMaxHeight(teamWrappers);
            setMaxHeight(teamDesList);
            teamImages.forEach(function(img) {
                img.style.maxWidth = 'none'; // 모바일이 아닐 때 이미지 최대 너비 초기화
            });
        }
    };

    setHeight();

    window.addEventListener('resize', function() {
        setHeight();
    });
});


/*이산수학  -> 1일
데이터 통신
컴퓨터 구조
알고리즘
*/