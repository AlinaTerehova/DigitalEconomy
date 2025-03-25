document.addEventListener("DOMContentLoaded", () => {
    const correctAnswers = {
        "Визуализация объекта": "Оба ответа верны",
        "Физическое моделирование": "Оба ответа верны",
        "Работа в реальном времени": "Цифровой двойник",
        "Обратная связь с объектом": "Цифровой двойник",
        "Использование IoT данных": "Цифровой двойник",
        "Прогнозирование поломок": "Оба ответа верны",
        "Тестирование гипотетических сценариев": "Оба ответа верны",
        "Автоматическая адаптация под изменения": "Цифровой двойник",
        "Независим от реального проекта": "3D симулятор",
        "Фокусируется на статичной модели": "3D симулятор"
    };

    document.querySelectorAll(".quizItem").forEach(item => {
        const questionText = item.querySelector(".quizItemQuest").textContent.trim();
        const buttons = item.querySelectorAll(".quizItemAnswer");

        buttons.forEach(button => {
            button.addEventListener("click", () => {
                const isCorrect = button.textContent.trim() === correctAnswers[questionText];

                // Сбрасываем состояния всех кнопок в вопросе
                buttons.forEach(btn => btn.classList.remove("correct", "wrong", "highlight", "highlightbad"));

                if (isCorrect) {
                    button.classList.add("correct", "highlight");
                } else {
                    button.classList.add("wrong", "highlightbad");
                }
            });
        });
    });
});
