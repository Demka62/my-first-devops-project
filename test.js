// Простой тест, который проверяет, что функция существует
function testUpdateText() {
    if (typeof updateText === 'function') {
        console.log("✅ Тест пройден: функция updateText существует.");
        return true;
    } else {
        console.log("❌ Тест провален: функция updateText не найдена.");
        return false;
    }
}

// Запускаем тест
testUpdateText();
