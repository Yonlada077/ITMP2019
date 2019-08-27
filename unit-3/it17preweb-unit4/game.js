fortuneBank = [
"วันนี้อากาศดี ลองออกไปเดินจะพบกับสิ่งดีๆที่เฝ้ารอ",
"คนที่คุณกำลังกังวลเขาก็คิดแบบเดียวกับคุณเช่นกันนะ",
"มองหากำลังใจอยู่ ลองเริ่มจากให้กำลังใจคนที่คุณจะพบวันนี้ดูสิ รับรองคุณจะต้องแปลกใจ",
"ก้าวเท้าขวาออกก่อนแล้วท่องว่าอยากได้อะไรก่อนนอนคืนนี้",
"วันนี้เลข 2 คือเลขนำโชค",
"ทำตัวเองให้โดนแดดบ้าง!!! จะโชคดีทั้งัวน"
];
function play(){
	cookie1.classList.add("cookie-hide");
	cookie2.classList.add("cookie-show");
	setTimeout(function(){
		getFortune();
	},3000);
}

function getFortune(){
	rand = Math.floor(Math.random()*fortuneBank.length);
	fortune.innerText = fortuneBank[rand];
	fortune.style.opacity=1;
	fortune.style.top = "96px";
}
