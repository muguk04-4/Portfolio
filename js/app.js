// Model ------------------------
const webData = [{
  workName: '로스트아크 길드매니저(개발중)',
  workImg: ['img/work_img/web/lostark_guildmanager1.jpg'],
  workInfo: '\u00A0 온라인 게임 "로스트아크"의 길드 컨텐츠 편의성을 개선하기 위해 개발 중인 웹사이트이다. 현재 Figma로 디자인 중이며 처음으로 js프레임워크를 사용해서 개발할 예정이다.',
}, {
  workName: '워프레임 정보 페이지',
  workImg: ['img/work_img/web/warframe1.jpg', 'img/work_img/web/warframe2.jpg', 'img/work_img/web/warframe3.jpg'],
  workInfo: '\u00A0온라인 게임 "워프레임"에 관하여 간단한 소개 및 잡다한 정보를 요약, 정리해서 제공하는 웹페이지이다. 과제 제출용으로 혼자 제작하였고 제작하며 웹에 대한 흥미를 느끼게 되었다.',
}];

const gameData = [{
  workName: 'Rewot',
  workImg: ['img/work_img/game/rewot1.png', 'img/work_img/game/rewot2.png', 'img/work_img/game/rewot3.png', 'img/work_img/game/rewot4.png'],
  workInfo: '\u00A03D 플랫포머 게임으로 암울한 결말을 맞이한 시공간이 보관된 탑에 플레이어가 진입하여 퍼즐을 풀며 결말을 고쳐나가는 내용이다. 청소년 게임 개발 동아리에서 개발하였고 기획과 3D모델링에 처음 참여하였다.',
}, {
  workName: 'Loveholics(개발중)',
  workImg: ['img/work_img/game/loveholics1.jpg', 'img/work_img/game/loveholics2.jpg', 'img/work_img/game/loveholics3.jpg'],
  workInfo: '\u00A0여성향 미연시 게임이다. 웹기반 게임엔진 "모노가타리"로 개발되고 있으며 팀에서 메인 개발을 맡고 있다. 이 팀은 청소년 지원 사업에 의해 만들어진 동아리의 각각 팀장들과 팀원들로 이루어져있다.',
}, {
  workName: 'Aquares(개발 중지)',
  workImg: ['img/work_img/game/aquares1.png', 'img/work_img/game/aquares2.png', 'img/work_img/game/aquares3.png', 'img/work_img/game/aquares4.png'],
  workInfo: '\u00A0지구온난화로 해수면이 상승하게 되어 바다의 시대를 맞이하게 된다. 이후 바다의 생태계가 다양한 바다 생물들로 가득차게 되었다. 하지만 너무 생물들이 많아 부대끼며 사는 것에 몇몇 바다 생물들이 화가 나기 시작했다. 이 게임은 그 용감한 바다 생물들 중 하나가 되어 얼마 안남은 육지를 차지하기 위해 싸우는 게임이다. 기획과 3D모델링으로 참여하였으며 프로젝트 진행 중 버그들과 기획의 허점 등 각종 문제들로 인해 개발이 중지 되었지만 그로 인해 모든 프로젝트 중 느낀 것과 배울 것이 가장 많았던 프로젝트이기도 하다.',
}];

const modelData = [{
  workName: 'Rewot의 모델링',
  workImg: ['img/work_img/model/model_rewot1.png', 'img/work_img/model/model_rewot2.png', 'img/work_img/model/model_rewot3.png', 'img/work_img/model/model_rewot4.png'],
  workInfo: '\u00A0제작에 참여했던 게임 "Rewot"의 모델링 작업 사진이다.',
}, {
  workName: 'Aquares의 모델링',
  workImg: ['img/work_img/model/model_aquares1.png', 'img/work_img/model/model_aquares2.png', 'img/work_img/model/model_aquares3.png'],
  workInfo: '\u00A0제작에 참여했던 게임 "Aquares"의 모델링 작업 사진이다.',
}];

const androidData = [{
  workName: '마침표',
  workImg: ['img/work_img/android/machim1.png', 'img/work_img/android/machim2.png', 'img/work_img/android/machim3.png', 'img/work_img/android/machim4.png'],
  workInfo: '\u00A0기업의 재무재표를 분석, 요약, 정리한 것을 토대로 시각화하여 사용자에게 제공하고 취업준비생에게 앱에 등록된 취업멘토들을 소개시켜주는 안드로이드 어플리케이션이다. 처음으로 맡은 안드로이드 프로젝트이며 대학교 공모전 참여를 위해 제작하였다. 다른 학과의 사람들과 협업, 소통해볼 수 있어 새로웠고 프로젝트 진행 중 실력이 부족했던 점 때문에 문제가 발생하였으며 이로 인해 더 노력하고 공부해야겠다는 욕구를 강하게 느끼게 해준 프로젝트이다.',
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
const workTabWeb = document.getElementById('worksWeb');
const workTabGame = document.getElementById('worksGame');
const workTabModel = document.getElementById('worksModel');
const workTabAndroid = document.getElementById('worksAndroid');
// ----------- 색깔 변경 -------------
const SELECTED = 'white';
const DESELCTED = '#474539';
const FONT_SELECTED = '#2c353e';
const web = () => {
  workTabWeb.style.backgroundColor = SELECTED;
  workTabGame.style.backgroundColor = DESELCTED;
  workTabModel.style.backgroundColor = DESELCTED;
  workTabAndroid.style.backgroundColor = DESELCTED;
  workTabWeb.style.color = FONT_SELECTED;
  workTabGame.style.color = SELECTED;
  workTabModel.style.color = SELECTED;
  workTabAndroid.style.color = SELECTED;
  workRender(webData);
}
const game = () => {
  workTabWeb.style.backgroundColor = DESELCTED;
  workTabGame.style.backgroundColor = SELECTED;
  workTabModel.style.backgroundColor = DESELCTED;
  workTabAndroid.style.backgroundColor = DESELCTED;
  workTabWeb.style.color = SELECTED;
  workTabGame.style.color = FONT_SELECTED;
  workTabModel.style.color = SELECTED;
  workTabAndroid.style.color = SELECTED;
  workRender(gameData);
}
const model = () => {
  workTabWeb.style.backgroundColor = DESELCTED;
  workTabGame.style.backgroundColor = DESELCTED;
  workTabModel.style.backgroundColor = SELECTED;
  workTabAndroid.style.backgroundColor = DESELCTED;
  workTabWeb.style.color = SELECTED;
  workTabGame.style.color = SELECTED;
  workTabModel.style.color = FONT_SELECTED;
  workTabAndroid.style.color = SELECTED;
  workRender(modelData);
}
const android = () => {
  workTabWeb.style.backgroundColor = DESELCTED;
  workTabGame.style.backgroundColor = DESELCTED;
  workTabModel.style.backgroundColor = DESELCTED;
  workTabAndroid.style.backgroundColor = SELECTED;
  workTabWeb.style.color = SELECTED;
  workTabGame.style.color = SELECTED;
  workTabModel.style.color = SELECTED;
  workTabAndroid.style.color = FONT_SELECTED;
  workRender(androidData);
}
const copyTel = () => {
  const tel = document.getElementById('tel');
  const telValue = '010-2979-1699';
  copyProcess(tel, telValue);
}
const copyEmail = () => {
  const mail = document.getElementById('mail');
  const mailValue = 'garuru7080@gmail.com';
  copyProcess(mail, mailValue);
}
const copyProcess = (ta, tv) => {
  const text = document.createElement('input');
  text.id = 'no';
  text.value = tv;
  ta.appendChild(text);
  text.select();
  document.execCommand('copy');
  alert('Copied!');
  const del = document.getElementById('no');
  ta.removeChild(del);
}

// View ------------------------
const workRender = worksData =>{
  const works = document.getElementById('works');
  works.innerHTML = '';

  worksData.forEach(workData => {
    const spaceWorkName = document.createElement('div');
    spaceWorkName.className = 'work-name';
    spaceWorkName.innerText = workData.workName;
    works.appendChild(spaceWorkName);

    const spaceWorkImg = document.createElement('div');
    spaceWorkImg.className = 'work-img';
    const img = document.createElement('img');
    let cnt = 0;
    img.src = workData.workImg[cnt];
    spaceWorkImg.appendChild(img);
    const leftChange = document.createElement('div');
    leftChange.className = 'left-change';
    leftChange.onclick = function (){
      if((cnt-1) === -1){
        cnt = workData.workImg.length - 1;
      } else{
        cnt = cnt - 1;
      }
      img.src = workData.workImg[cnt];
    };
    spaceWorkImg.appendChild(leftChange);
    const rightChange = document.createElement('div');
    rightChange.className = 'right-change';
    rightChange.onclick = function (){
      if((cnt+1) === workData.workImg.length){
        cnt = 0;
      } else{
        cnt = cnt + 1;
      }
      console.log(cnt);
      img.src = workData.workImg[cnt];
    };
    spaceWorkImg.appendChild(rightChange);
    works.appendChild(spaceWorkImg);

    const spaceWorkInfo = document.createElement('div');
    spaceWorkInfo.className = 'work-info';
    spaceWorkInfo.innerText = workData.workInfo;
    works.appendChild(spaceWorkInfo);
  });
}
web()
