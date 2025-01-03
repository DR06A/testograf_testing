# Тестирование формы обратной связи

# Проверка поля "Ваше имя" с валидными данными  
**ID:** TC001  
**Цель:** Проверить успешное прохождение валидации при вводе корректного имени.  
**Предусловия:** Форма открыта в браузере.  
**Входные данные:** Имя: "Иван".  
**Шаги выполнения:**  
1. Ввести в поле "Ваше имя" значение "Иван".  
2. Нажать кнопку "Отправить".  
**Ожидаемый результат:** Форма успешно отправляется. Ошибок нет.  
**Приоритет:** Высокий  

---

# Проверка валидации пустого поля "Ваше имя"  
**ID:** TC002  
**Цель:** Убедиться, что при пустом поле форма не отправляется.  
**Предусловия:** Форма открыта в браузере.  
**Входные данные:** Поле оставлено пустым.  
**Шаги выполнения:**  
1. Оставить поле "Ваше имя" пустым.  
2. Нажать кнопку "Отправить".  
**Ожидаемый результат:** Появляется сообщение об ошибке, форма не отправляется.  
**Приоритет:** Высокий  

---

# Проверка поля "E-mail" с валидными данными  
**ID:** TC003  
**Цель:** Проверить успешное прохождение валидации при вводе корректного e-mail.  
**Предусловия:** Форма открыта в браузере.  
**Входные данные:** E-mail: "test@example.com".  
**Шаги выполнения:**  
1. Ввести в поле "E-mail" значение "test@example.com".  
2. Нажать кнопку "Отправить".  
**Ожидаемый результат:** Форма успешно отправляется. Ошибок нет.  
**Приоритет:** Высокий  

---

# Проверка валидации поля "E-mail" с некорректными данными  
**ID:** TC004  
**Цель:** Убедиться, что некорректный e-mail вызывает ошибку валидации.  
**Предусловия:** Форма открыта в браузере.  
**Входные данные:** E-mail: "test@com".  
**Шаги выполнения:**  
1. Ввести в поле "E-mail" значение "test@com".  
2. Нажать кнопку "Отправить".  
**Ожидаемый результат:** Появляется сообщение об ошибке, форма не отправляется.  
**Приоритет:** Высокий  

---

# Проверка необязательного поля "Телефон"  
**ID:** TC005  
**Цель:** Убедиться, что форма отправляется при пустом поле "Телефон".  
**Предусловия:** Форма открыта в браузере.  
**Входные данные:** Поле оставлено пустым.  
**Шаги выполнения:**  
1. Оставить поле "Телефон" пустым.  
2. Заполнить остальные обязательные поля.  
3. Нажать кнопку "Отправить".  
**Ожидаемый результат:** Форма успешно отправляется. Ошибок нет.  
**Приоритет:** Средний  

---

# Проверка поля "Телефон" с некорректными данными  
**ID:** TC006  
**Цель:** Убедиться, что некорректный ввод в поле "Телефон" не вызывает сбоев.  
**Предусловия:** Форма открыта в браузере.  
**Входные данные:** Телефон: "abc123".  
**Шаги выполнения:**  
1. Ввести в поле "Телефон" значение "abc123".  
2. Нажать кнопку "Отправить".  
**Ожидаемый результат:** Форма успешно отправляется или игнорирует поле. Ошибок нет.  
**Приоритет:** Средний  

---

# Проверка обязательного выбора цели обращения  
**ID:** TC007  
**Цель:** Убедиться, что поле "Цель обращения" обязательно для заполнения.  
**Предусловия:** Форма открыта в браузере.  
**Входные данные:** Поле оставлено пустым.  
**Шаги выполнения:**  
1. Оставить поле "Цель обращения" пустым.  
2. Заполнить остальные обязательные поля.  
3. Нажать кнопку "Отправить".  
**Ожидаемый результат:** Появляется сообщение об ошибке, форма не отправляется.  
**Приоритет:** Высокий  

---

# Проверка валидации поля "Ваше сообщение" при пустом вводе  
**ID:** TC008  
**Цель:** Убедиться, что форма не отправляется без заполнения сообщения.  
**Предусловия:** Форма открыта в браузере.  
**Входные данные:** Поле оставлено пустым.  
**Шаги выполнения:**  
1. Оставить поле "Ваше сообщение" пустым.  
2. Заполнить остальные обязательные поля.  
3. Нажать кнопку "Отправить".  
**Ожидаемый результат:** Появляется сообщение об ошибке, форма не отправляется.  
**Приоритет:** Высокий
