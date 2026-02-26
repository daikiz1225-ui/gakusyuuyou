// 1. 状態（データ）の管理
let count = 0;

// 2. HTMLの要素を取得
const display = document.getElementById('display');
const plusBtn = document.getElementById('plus-btn');
const minusBtn = document.getElementById('minus-btn');

// 3. プラスボタンを押した時の処理
plusBtn.addEventListener('click', (event) => {
    // 予期せぬ動作（検索やリロード）を防止
    event.preventDefault();
    
    count = count + 1;
    updateDisplay();
});

// 4. マイナスボタンを押した時の処理
minusBtn.addEventListener('click', (event) => {
    event.preventDefault();
    
    count = count - 1;
    updateDisplay();
});

// 5. 画面を更新する関数
function updateDisplay() {
    display.textContent = count;
}
