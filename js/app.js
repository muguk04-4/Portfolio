// Model ------------------------
// 객체만들어야됨(이미지만 배열로)
// 여기다 만들어도 되지만 차라리 컨트롤러쪽에 만들어도 되지 않을까
// 고민중
const webData = [{
  workName: '로스트아크 길드매니저',
  workImg: ['img/work_img/web/lostark_guildmanager1.jpg'],
  workInfo: '이것은 로아 길드매니저',
}, {
  workName: '워프레임 정보 페이지',
  workImg: ['img/work_img/web/warframe1.jpg', 'img/work_img/web/warframe2.jpg', 'img/work_img/web/warframe3.jpg'],
  workInfo: '이것은 워프레임 페이지',
}];

const gameData = [{
  workName: 'Rewot',
  workImg: ['img/work_img/game/rewot1.png', 'img/work_img/game/rewot2.png', 'img/work_img/game/rewot3.png', 'img/work_img/game/rewot4.png'],
  workInfo: '이것은 리웟',
}, {
  workName: 'Loveholics',
  workImg: ['img/work_img/game/loveholics1.jpg', 'img/work_img/game/loveholics2.jpg', 'img/work_img/game/loveholics3.jpg'],
  workInfo: '이것은 러브 홀릭스',
}, {
  workName: 'Aquares',
  workImg: ['img/work_img/game/aquares1.png', 'img/work_img/game/aquares2.png', 'img/work_img/game/aquares3.png', 'img/work_img/game/aquares4.png'],
  workInfo: '이것은 아쿠아레스',
}];

const modelData = [{
  workName: 'rewot의 모델링',
  workImg: ['img/work_img/model/model_rewot1.png', 'img/work_img/model/model_rewot2.png', 'img/work_img/model/model_rewot3.png', 'img/work_img/model/model_rewot4.png'],
  workInfo: '이것은 모델링 리웟',
}, {
  workName: 'Aquares의 모델링',
  workImg: ['img/work_img/model/model_aquares1.png', 'img/work_img/model/model_aquares2.png', 'img/work_img/model/model_aquares3.png'],
  workInfo: '이것은 모델링 아쿠아레스',
}];

const androidData = [{
  workName: '마침표',
  workImg: ['img/work_img/android/machim1.png', 'img/work_img/android/machim2.png', 'img/work_img/android/machim3.png', 'img/work_img/android/machim4.png'],
  workInfo: '이것은 마침표 어플',
}];

// Controller ------------------------
const introTranslate = event =>{
  const introKr = document.getElementById('introKr');
  const introEn = document.getElementById('introEn');
  const button = document.getElementById('bt');
  if(button.innerText === 'Eng'){
    introKr.classList.add('hidden');
    introEn.classList.remove('hidden');
    button.innerText = 'Kor';
  } else if(button.innerText === 'Kor'){
    introEn.classList.add('hidden');
    introKr.classList.remove('hidden');
    button.innerText = 'Eng';
  }
}
// C: Change works
//버튼 입력시 해당 분야의
//제목, 사진, 내용 랜더링
const workTabWeb = document.getElementById('worksWeb');
const workTabGame = document.getElementById('worksGame');
const workTabModel = document.getElementById('worksModel');
const workTabAndroid = document.getElementById('worksAndroid');
const SELECTED = 'aqua';
const DESELCTED = 'white';
// ------------ 이거 추가해야됨 ---------------
const web = () => {
  workTabWeb.style.backgroundColor = 'aqua';
  workTabGame.style.backgroundColor = 'white';
  workTabModel.style.backgroundColor = 'white';
  workTabAndroid.style.backgroundColor = 'white';
  workRender(webData);
}
const game = () => {
  workTabWeb.style.backgroundColor = DESELCTED;
  workTabGame.style.backgroundColor = SELECTED;
  workTabModel.style.backgroundColor = DESELCTED;
  workTabAndroid.style.backgroundColor = DESELCTED;
  workRender(gameData);
}
const model = () => {
  workTabWeb.style.backgroundColor = 'white';
  workTabGame.style.backgroundColor = 'white';
  workTabModel.style.backgroundColor = 'aqua';
  workTabAndroid.style.backgroundColor = 'white';
  workRender(modelData);
}
const android = () => {
  workTabWeb.style.backgroundColor = 'white';
  workTabGame.style.backgroundColor = 'white';
  workTabModel.style.backgroundColor = 'white';
  workTabAndroid.style.backgroundColor = 'aqua';
  workRender(androidData);
}
// C: Change Images
// 우측 클릭시 배열+1, 좌측 클릭시 배열-1
// 어떤 배열인지는 이벤트로 받아야 할지도?
// 제일 마지막에 할 이벤트처리
const imgChangeRight = () => {
  console.log('오른쪽으로');
}
const imgChangeLeft = () => {
  console.log('왼쪽으로');
}


// View ------------------------
// 기본은 웹으로 되어있고 다른 분야 클릭시 
// 그 분야 true. 다른 분야 false.
// true가 된 분야만 보여주기.
// 배열만들어서 위에 처럼 해야할까? 다른 방법으로 works를 구별할 방법은 없을까?
const workRender = worksData =>{
  const works = document.getElementById('works');
  works.innerHTML = '';

  worksData.forEach(workData => {
    const spaceWorkName = document.createElement('div');
    //spaceWorkName.id = 'workName';
    spaceWorkName.className = 'work-name';
    spaceWorkName.innerText = workData.workName;
    works.appendChild(spaceWorkName);

    // 이미지 배열이라서 안뜸. 이걸 풀어줄 무언가가 필요함
    const spaceWorkImg = document.createElement('div');
    spaceWorkImg.className = 'work-img';
    const leftChange = document.createElement('div');
    leftChange.className = 'left-change';
    leftChange.onclick = imgChangeLeft;
    spaceWorkImg.appendChild(leftChange);
    const rightChange = document.createElement('div');
    rightChange.className = 'right-change';
    rightChange.onclick = imgChangeRight;
    spaceWorkImg.appendChild(rightChange);
    const img = document.createElement('img');
    //img.id = 'workImg';
    img.src = workData.workImg;
    spaceWorkImg.appendChild(img);
    works.appendChild(spaceWorkImg);

    const spaceWorkInfo = document.createElement('div');
    //spaceWorkInfo.id = 'workInfo';
    spaceWorkInfo.className = 'work-info';
    spaceWorkInfo.innerText = workData.workInfo;
    works.appendChild(spaceWorkInfo);
  });
  
  // const workName = document.getElementById('workName');
  // const workImg = document.getElementById('workImg');
  // const workInfo = document.getElementById('workInfo'); 
}
web()
