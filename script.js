document.addEventListener("DOMContentLoaded", () => {
    const correctAnswers = {
        "Используется для мониторинга жизненного цикла объекта": "Цифровой двойник",
        "Не требует подключения к реальным данным": "3D симулятор",
    
        "Поддерживает двустороннюю интеграцию с сенсорами и устройствами управления": "Цифровой двойник",
        "Может использоваться для демонстрации без наличия физического объекта": "3D симулятор",
    
        "Обновляется на основе поступающих данных с объекта в режиме реального времени": "Цифровой двойник",
        "Моделирует гипотетические сценарии без привязки к реальности": "3D симулятор",
    
        "Применяется для оптимизации производственных процессов на действующем объекте": "Цифровой двойник",
        "Основной акцент на визуализации, а не на аналитике": "3D симулятор",

        "Синхронизация с текущим состоянием объекта": "Цифровой двойник",

        "Может использоваться для тестирования сценариев эксплуатации оборудования в реальном времени": "Цифровой двойник",
        "Применяется преимущественно на этапе проектирования или обучения": "3D симулятор",

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
