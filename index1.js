//input 태그객체 가져오기
const onFunc= ()=>{
const textEle=document.getElementById('add');
//input 실제 데이터
const text=textEle.value;

textEle.value="";

//li태그 생성
//div,p 태그 생성
const li=document.createElement('li');
const div=document.createElement('div');
const p=document.createElement('p');

//text 창에 입력하면 메모목록에 추가됨
p.textContent=text;
//버튼의 이름은 "삭제" 버튼 태그 생성
const button=document.createElement('button');
button.textContent='삭제';

// button.addEventListener("click",onD);
// function onD(){
//     li.remove();
// }
button.addEventListener('click',function(){
    document.getElementById("memo_li").removeChild(li);
})
//div영역에p태그 자식으로
//div영역에 button태그를 자식으로
//li영역에 div태그를 자식으로
div.appendChild(p);
div.appendChild(button);
li.appendChild(div);

//ul영역에 li를 자식으로

document.getElementById('memo_li').appendChild(li);

//추가버튼 누르면
// document.getElementById("add_button").addEventListener("click",func());
}
add_bu=document.getElementById("add_button");
add_bu.addEventListener("click",()=>onFunc());



// const n=()=>{}
