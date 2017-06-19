var number = Math.floor(Math.random()*3);
var answer = parseInt(window.prompt('数字当てゲーム　０～２の数字を入力してください'));

var message;
if(answer === number){
message = 'あたり';
}else if(answer < number){
message = 'はずれ　数字はもっと大きいです';
}else if(number < answer){
message = 'はずれ　数字はもっと小さいです';
}else{
message = '不当な入力が行われました、０～２の数字を入力してください';
}

document.getElementByid('choice').textContent = message;
