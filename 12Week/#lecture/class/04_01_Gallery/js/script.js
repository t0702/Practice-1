var galleryEl = document.querySelector('#gallery'),
    viewEl = galleryEl.querySelector('.view'),
    viewContainerEl = viewEl.querySelector('.view-container'),
    viewItemEls = viewContainerEl.querySelectorAll('.view-item'),
    listEl = galleryEl.querySelector('.list'),
    listItemEls = listEl.querySelectorAll('li'),
    btnListItemEls = listEl.querySelectorAll('li > a'),

    _cuId = 0,
    _exId = null,
    _max = null;

// 블럭 단위로 기능 분리.
// 이벤트 핸들러 기능
function onClickListItem(e){
    e.preventDefault();
    var el = e.currentTarget, parentEl = el.parentElement, index = btnListItemEls.indexOf(el);
    console.log(parentEl); // 부모요소를 찾아옴.
    if(!parentEl.classList.contains('selected')){
        // 비활성화 되어있는 리스트만 선별.
        _cuId = index;
        listItemEls[_exId].classList.remove('selected');
        // parentEl.classList.add('selected');
        listItemEls[_cuId].classList.add('selected'); //위 주석처리된 기능과 동일.
        _exId = _cuId;
    }
}

// ----------------
// 이벤트가 바인딩되는 기능들.
function addEvent() {
    for(var i = 0; i < _max; i++){
        btnListItemEls[i].addEventListener('click', onClickListItem);
    }
}
// 초기화 기능
function init() {
    _exId = _cuId;
    _max = viewItemEls.length;
    btnListItemEls = Array.prototype.slice.call(btnListItemEls);
    addEvent();
}
// 초기화 함수 호출.
init();