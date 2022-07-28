// Model ------------------------
// 객체만들어야됨(이미지만 배열로)
// 여기다 만들어도 되지만 차라리 컨트롤러쪽에 만들어도 되지 않을까
// 고민중

// Controller ------------------------
// C: Change works
//버튼 입력시 해당 분야의
//제목, 사진, 내용 랜더링
const web = () => {
  workRender();
}
const game = () => {
  workRender();
}
const model = () => {
  workRender();
}
const android = () => {
  workRender();
}
// C: Change Images
// 우측 클릭시 배열+1, 좌측 클릭시 배열-1
// 어떤 배열인지는 이벤트로 받아야 할지도?
// 제일 마지막에 할 이벤트처리
const imgChangeRight = () => {

}
const imgChangeLeft = () => {

}


// View ------------------------
// 기본은 웹으로 되어있고 다른 분야 클릭시 
// 그 분야 true. 다른 분야 false.
// true가 된 분야만 보여주기.
// 내용이 더 많으면 일단 for문 처리
// (workName으로 구별 할수 있다면 시도)
const workRender = () =>{
  const works = document.getElementById('works');

  const workName = document.createElement('div');
  workName.id = 'workName';
  workName.className = 'work-name';
  workName.innerText = '작업 이름';
  works.appendChild(workName);

  const workImg = document.createElement('div');
  workImg.className = 'work-img';
  const leftChange = document.createElement('div');
  leftChange.className = 'left-change';
  leftChange.onclick = imgChangeLeft;
  workImg.appendChild(leftChange);
  const rightChange = document.createElement('div');
  rightChange.className = 'right-change';
  rightChange.onclick = imgChangeRight;
  workImg.appendChild(rightChange);
  const img = document.createElement('img');
  img.id = 'workImg';
  img.src = 'img/work_img/woork.png';
  workImg.appendChild(img);
  works.appendChild(workImg);

  const workInfo = document.createElement('div');
  workInfo.id = 'workInfo';
  workInfo.className = 'work-info';
  workInfo.innerText = '3';
  works.appendChild(workInfo);


  // const workName = document.getElementById('workName');
  // const workImg = document.getElementById('workImg');
  // const workInfo = document.getElementById('workInfo'); 
}
workRender();
