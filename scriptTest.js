const button = document.querySelector('.button_test');
const test = Array.from(document.querySelectorAll('.test'));
const oneOfTest = document.getElementById('one_of_test');
const selectTest = document.getElementById('select_test');
const finalTest = document.querySelector('.main_test');
const finalTestTest = `<div>
<h2 class="question_name">Итоговый тест Архитектура ЭВМ</h2>
        <form name="form" class="form">
            <p class="question_q">Конфигурация ЭВМ это?</p>
            <input type=radio name="q0" id="0" class="input" data-answer="true">
            <label for="0">Набор однотипных компонентов с разными функциональными возможностями включаемых в систему по единому интерфейсу</label><br>
            <input type=radio name="q0" id="1" class="input">
            <label for="1">Схема внутренней организации и взаимодействия основных функциональных компонентов ЭВМ</label><br>
            <input type=radio name="q0" id="2" class="input">
            <label for="2">Модель взаимодействия основных функциональных модулей  ЭВМ</label><br>
            <input type=radio name="q0" id="3" class="input">
            <label for="3">Система счисления, информационные форматы и организация  вычислительного и обменного процессов</label><br>
            <input type=radio name="q0" id="4" class="input">
            <label for="4">Нет правильного ответа</label><br>
            <input type=radio name="q0" id="5" class="input">
            <label for="5">Все ответы верны</label><br>
        
            <p class="question_q">Какие характеристики ЭВМ являются внешними?</p>
            <input type="radio" name="q1" id="0" class="input">
            <label for="0">Длина слова процесора </label><br>
            <input type="radio" name="q1" id="1" class="input">
            <label for="1">Габариты</label><br>
            <input type="radio" name="q1" id="2" class="input" data-answer="true">
            <label for="2">Производительность</label><br>
            <input type="radio" name="q1" id="3" class="input">
            <label for="3">Нет правильного ответа</label><br>
        
            <p class="question_q">Какие характеристики ЭВМ являются внутренними?</p>
            <input type=radio name="q2" id="0" class="input">
            <label for="0">Быстродейстивие</label><br>
            <input type=radio name="q2" id="1" class="input" data-answer="true">
            <label for="1">Длина слова процессора</label><br>
            <input type=radio name="q2" id="2" class="input">
            <label for="2">Количество подключенных ПФУ</label><br>
            <input type=radio name="q2" id="3" class="input">
            <label for="3">Стоимость обслуживания</label><br>
            <input type=radio name="q2" id="4" class="input">
            <label for="4">Все ответы правильные</label><br>
            <input type=radio name="q2" id="5" class="input">
            <label for="5">Правильного ответа нет</label><br>
        

            <p class="question_q">Какое высказывание относится к принципам Джона фон Неймана?</p>
            <input type=radio name="q3" id="0" class="input" data-answer="true">
            <label for="0">Слова разного назначения отличаются не способом кодирования , а необходимостью их использования</label><br>
            <input type=radio name="q3" id="1" class="input">
            <label for="1">Чем больше размер файла тем код у него длиннее</label><br>
            <input type=radio name="q3" id="2" class="input">
            <label for="2">Архивация данных зависит от выбранной кодовой таблицы</label><br>
            <input type=radio name="q3" id="3" class="input">
            <label for="3">Большее количество информации содержащеся сообщениях образуются из символов алфавита</label><br>
            <input type=radio name="q3" id="4" class="input">
            <label for="4">Всё ответы правильные</label><br>
            <input type=radio name="q3" id="5" class="input">
            <label for="5">Правильного ответа нет</label><br>
        
            <p class="question_q">К локальному  интерфейсу относятся?</p>
            <input type=radio name="q4" id="0" class="input">
            <label for="0">шина RS232 C</label><br>
            <input type=radio name="q4" id="1" class="input">
            <label for="1">шина QPI</label><br>
            <input type=radio name="q4" id="2" class="input">
            <label for="2">шина USB</label><br>
            <input type=radio name="q4" id="3" class="input">
            <label for="3">шина FSB</label><br>
            <input type=radio name="q4" id="4" class="input" data-answer="true">
            <label for="4">шина PCI</label><br>
            <input type=radio name="q4" id="5" class="input">
            <label for="5">Всё выше перечисленное</label><br>
  
            <p class="question_q">Совокупностью функциональных элементов ЭВМ и связей между ними называют?</p>
            <input type=radio name="q5" id="0" class="input">
            <label for="0">Конфигурацией</label><br>
            <input type=radio name="q5" id="1" class="input">
            <label for="1">Архитектурой</label><br>
            <input type=radio name="q5" id="2" class="input" data-answer="true">
            <label for="2">Структурой</label><br>
            <input type=radio name="q5" id="3" class="input">
            <label for="3">Интерфейсом</label><br>
            <input type=radio name="q5" id="4" class="input">
            <label for="4">Схемой принципиальной функицональной</label><br>
            <input type=radio name="q5" id="5" class="input">
            <label for="5">Нет правильного ответа</label><br>

            <p class="question_q">Какая шина использует линейный пакет передачи данных?</p>
            <input type=radio name="q6" id="0" class="input">
            <label for="0">шина RS232 C</label><br>
            <input type=radio name="q6" id="1" class="input">
            <label for="1">шина QPI</label><br>
            <input type=radio name="q6" id="2" class="input">
            <label for="2">шина USB</label><br>
            <input type=radio name="q6" id="3" class="input">
            <label for="3">шина FSB</label><br>
            <input type=radio name="q6" id="4" class="input" data-answer="true">
            <label for="4">шина PCI</label><br>
            <input type=radio name="q6" id="5" class="input">
            <label for="5">шина PCI-Е</label><br>

            <p class="question_q">Какая шина использует модель OSI для передачи данных?</p>
            <input type=radio name="q7" id="0" class="input">
            <label for="0">шина RS232 C</label><br>
            <input type=radio name="q7" id="1" class="input">
            <label for="1">шина QPI</label><br>
            <input type=radio name="q7" id="2" class="input">
            <label for="2">шина USB</label><br>
            <input type=radio name="q7" id="3" class="input" data-answer="true">
            <label for="3">шина PCI-E</label><br>

            <p class="question_q">Сколько уровней модели OSI использует шина НТ?</p>
            <input type=radio name="q8" id="0" class="input">
            <label for="0">1</label><br>
            <input type=radio name="q8" id="1" class="input" data-answer="true">
            <label for="1">2</label><br>
            <input type=radio name="q8" id="2" class="input">
            <label for="2">3</label><br>
            <input type=radio name="q8" id="3" class="input">
            <label for="3">3</label><br>
            <input type=radio name="q8" id="4" class="input">
            <label for="4">4</label><br>

            <p class="question_q">Какая шина использует 5 уровней  модели OSI для передачи данных?</p>
            <input type=radio name="q9" id="0" class="input" data-answer="true">
            <label for="0">QPI</label><br>
            <input type=radio name="q9" id="1" class="input">
            <label for="1">HT</label><br>
            <input type=radio name="q9" id="2" class="input">
            <label for="2">FSB</label><br>
            <input type=radio name="q9" id="3" class="input">
            <label for="3">DMI</label><br>
            <input type=radio name="q9" id="4" class="input">
            <label for="4">PCI-E</label><br>

            <p class="question_q">В каком типе памяти нет блока задержки?</p>
            <input type=radio name="q10" id="0" class="input">
            <label for="0">MRAM</label><br>
            <input type=radio name="q10" id="1" class="input">
            <label for="1">DRAM</label><br>
            <input type=radio name="q10" id="2" class="input" data-answer="true">
            <label for="2">SRAM</label><br>
            <input type=radio name="q10" id="3" class="input">
            <label for="3">PRAM</label><br>
            <input type=radio name="q10" id="4" class="input">
            <label for="4">Нет правильного ответа</label><br>
            
            <p class="question_q">В чем особенность памяти типа MRAM?</p>
            <input type=radio name="q11" id="0" class="input">
            <label for="0">Запись бит с помощью оптического сигнала</label><br>
            <input type=radio name="q11" id="1" class="input">
            <label for="1">Запись бит в виде критализации активной области</label><br>
            <input type=radio name="q11" id="2" class="input">
            <label for="2">Запись бит с помощью конденсатора</label><br>
            <input type=radio name="q11" id="3" class="input">
            <label for="3">Запись бит с помощью триггера</label><br>
            <input type=radio name="q11" id="4" class="input"  data-answer="true">
            <label for="4">Запись бит в виде спиновой ориенатиции электрона</label><br>
            
            <p class="question_q">Какой блок CPU отвечает за выполнение операций с плавающей точкой?</p>
            <input type=radio name="q12" id="0" class="input">
            <label for="0">АЛУ</label><br>
            <input type=radio name="q12" id="1" class="input" data-answer="true">
            <label for="1">Сопроцесор</label><br>
            <input type=radio name="q12" id="2" class="input">
            <label for="2">Кэш-память</label><br>
            <input type=radio name="q12" id="3" class="input">
            <label for="3">Блок связи с ОЗУ</label><br>
            <input type=radio name="q12" id="4" class="input">
            <label for="4">Ветвитель</label><br>
            
            <p class="question_q">Какой метод записи данных использует Кэш память?</p>
            <input type=radio name="q13" id="0" class="input">
            <label for="0">Метод последовательной записи</label><br>
            <input type=radio name="q13" id="1" class="input" data-answer="true">
            <label for="1">Метод сквозной записи</label><br>
            <input type=radio name="q13" id="2" class="input">
            <label for="2">Метод параллельной записи</label><br>
            <input type=radio name="q13" id="3" class="input">
            <label for="3">Метод сдвига</label><br>
    
            <p class="question_q">К какому типу памяти относится кэш- память?</p>
            <input type=radio name="q14" id="0" class="input">
            <label for="0">MRAM</label><br>
            <input type=radio name="q14" id="1" class="input">
            <label for="1">PRAM</label><br>
            <input type=radio name="q14" id="2" class="input" data-answer="true">
            <label for="2">SRAM</label><br>
            <input type=radio name="q14" id="3" class="input">
            <label for="3">DRAM</label><br>
            
            <p class="question_q">Последовательная кэш-когерентная шина типа точка-точка, предназначенная для?</p>
            <input type=radio name="q15" id="0" class="input">
            <label for="0">Соединения ядер процессора AMD между собой</label><br>
            <input type=radio name="q15" id="1" class="input">
            <label for="1">Соединения мостов чипсета AMD между собой</label><br>
            <input type=radio name="q15" id="2" class="input" data-answer="true">
            <label for="2">Соединения ядер процессора Intel между собой</label><br>
            <input type=radio name="q15" id="3" class="input">
            <label for="3">Соединения мостов чипсета Intel между собой</label><br>
            
            <p class="question_q">Какой уровень протокола шины QPI отвечает за когерентность кэшей?</p>
            <input type=radio name="q16" id="0" class="input">
            <label for="0">1</label><br>
            <input type=radio name="q16" id="1" class="input">
            <label for="1">2</label><br>
            <input type=radio name="q16" id="2" class="input">
            <label for="2">3</label><br>
            <input type=radio name="q16" id="3" class="input">
            <label for="3">4</label><br>
            <input type=radio name="q16" id="4" class="input" data-answer="true">
            <label for="4">5</label><br>
            
            <p class="question_q">Энергонезависимая фазопеременная память с произвольным доступом это?</p>
            <input type=radio name="q17" id="0" class="input">
            <label for="0">MRAM</label><br>
            <input type=radio name="q17" id="1" class="input" data-answer="true">
            <label for="1">PRAM</label><br>
            <input type=radio name="q17" id="2" class="input">
            <label for="2">SRAM</label><br>
            <input type=radio name="q17" id="3" class="input">
            <label for="3">DRAM</label><br>
           
            <p class="question_q">RAID- массив предназначен для?</p>
            <input type=radio name="q18" id="0" class="input">
            <label for="0">Автоматизированного архивирования данных</label><br>
            <input type=radio name="q18" id="1" class="input">
            <label for="1">Автоматизированной защиты данных</label><br>
            <input type=radio name="q18" id="2" class="input">
            <label for="2">Шифрования данных</label><br>
            <input type=radio name="q18" id="3" class="input">
            <label for="3">Системного мониторинга жесткого диска</label><br>
            <input type=radio name="q18" id="4" class="input" data-answer="true">
            <label for="4">Повышения быстродействия и надежности ЭВМ</label><br>

            <p class="question_q">ТЕХНОЛОГИЯ SMART это?</p>
            <input type=radio name="q19" id="0" class="input">
            <label for="0">Мониторинг надежности CPU</label><br>
            <input type=radio name="q19" id="1" class="input">
            <label for="1">Мониторинг средств вычислительной тнхники на исправность</label><br>
            <input type=radio name="q19" id="2" class="input">
            <label for="2">Мониторинг целостности данных</label><br>
            <input type=radio name="q19" id="3" class="input" data-answer="true">
            <label for="3">Мониторинг надежности HDD</label><br>
            <input type=radio name="q19" id="4" class="input">
            <label for="4">Нет правильного ответа</label><br>

            <p class="question_q">ШИНА ISA это?</p>
            <input type=radio name="q20" id="0" class="input">
            <label for="0">8- битная параллельная синхронная локальная шина поддерживающая централизованный метод арбитража</label><br>
            <input type=radio name="q20" id="1" class="input">
            <label for="1">128- битная синхронная шина поддерживающая метод шифрования данных путем перестановки</label><br>
            <input type=radio name="q20" id="2" class="input">
            <label for="2">64- битная ревирсированная  шина поддерживающая метод непосредственной записи</label><br>
            <input type=radio name="q20" id="3" class="input">
            <label for="3">32- битная последовательная синхронная шина поддерживающая метод мультиплексирования</label><br>
            <input type=radio name="q20" id="4" class="input">
            <label for="4">16- битная параллельная шина поддерживающая централизованный метод арбитража</label><br>
            <input type=radio name="q20" id="5" class="input" data-answer="true">
            <label for="5">8- битная последовательная синхронная шина поддерживающая централизованный метод арбитража</label><br>
            
            <p class="question_q">Какая шина использует  метод мультиплексирования при передачи данных в виде линейных пакетов?</p>
            <input type=radio name="q21" id="0" class="input">
            <label for="0">SATA</label><br>
            <input type=radio name="q21" id="1" class="input">
            <label for="1">IDE</label><br>
            <input type=radio name="q21" id="2" class="input">
            <label for="2">ISA</label><br>
            <input type=radio name="q21" id="3" class="input">
            <label for="3">PCI-E</label><br>
            <input type=radio name="q21" id="4" class="input">
            <label for="4">USB</label><br>
            <input type=radio name="q21" id="5" class="input" data-answer="true">
            <label for="5">PCI</label><br>
            

            <p class="question_q">Что такое кластер?</p>
            <input type=radio name="q22" id="0" class="input">
            <label for="0">Миниальный физический размер блока данных на HDD</label><br>
            <input type=radio name="q22" id="1" class="input">
            <label for="1">Минимальный размер свободного места на HDD для хранения данных</label><br>
            <input type=radio name="q22" id="2" class="input">
            <label for="2">Размер сектора данных в цилиндре HDD</label><br>
            <input type=radio name="q22" id="3" class="input">
            <label for="3">Минимальное количество бит которое может храниться на HDD</label><br>
            <input type=radio name="q22" id="4" class="input">
            <label for="4">Количество зашифрованых данных по заданному пользователм алгоритму</label><br>
            <input type=radio name="q22" id="5" class="input" data-answer="true">
            <label for="5">Минимальный логический размер блока данных на HDD</label><br>

            <p class="question_q">RAMDAC видеокарты предназначен для </p>
            <input type=radio name="q23" id="0" class="input">
            <label for="0">Преобразования данных обрабатываемых GCPU в биты для хранения в ОЗУ </label><br>
            <input type=radio name="q23" id="1" class="input">
            <label for="1">Хранения данных в ОЗУ в виде аналогового сигнала</label><br>
            <input type=radio name="q23" id="2" class="input" data-answer="true">
            <label for="2">Преобразования данных хранящихся в ОЗУ в аналоговый сигнал монитора</label><br>
            <input type=radio name="q23" id="3" class="input">
            <label for="3">Преобразования жидких кристалов  в аналоговый сигнал монитора </label><br>
            <input type=radio name="q23" id="4" class="input">
            <label for="4">Преобразования  аналогового сигнал монитора в цифровой GCPU</label><br>
            <input type=radio name="q23" id="5" class="input">
            <label for="5">Нет правильного ответа</label><br>
            
            <p class="question_q">Какой из этапов отностися к формированию изображения в видеокарте?</p>
            <input type=radio name="q24" id="0" class="input">
            <label for="0">Пикселизация</label><br>
            <input type=radio name="q24" id="1" class="input">
            <label for="1">Сохранение данных</label><br>
            <input type=radio name="q24" id="2" class="input">
            <label for="2">Преобразование</label><br>
            <input type=radio name="q24" id="3" class="input" data-answer="true">
            <label for="3">Квантование</label><br>
            <input type=radio name="q24" id="4" class="input">
            <label for="4">Растелизация</label><br>
            

            <p class="question_q">В каком порядке происходит преобразование входящего аналогового сигнала в цифровой на звуковой карте?</p>
            <input type=radio name="q25" id="0" class="input">
            <label for="0">Кодирование, квантование, дискретизация</label><br>
            <input type=radio name="q25" id="1" class="input">
            <label for="1">Кодирование, дискретизация, квантование</label><br>
            <input type=radio name="q25" id="2" class="input">
            <label for="2">Квантование, дискретизация, кодирование</label><br>
            <input type=radio name="q25" id="3" class="input" data-answer="true">
            <label for="3">Дискретизация, квантование, кодирование</label><br>
            
            <p class="question_q">Назовите особенности шины RS232C ?</p>
            <input type=radio name="q26" id="0" class="input">
            <label for="0">Размер пакета данных 7бит</label><br>
            <input type=radio name="q26" id="1" class="input">
            <label for="1">Асинхронная последовательная передача данных</label><br>
            <input type=radio name="q26" id="2" class="input">
            <label for="2">Логическая единица равна напряжению +\- 15В</label><br>
            <input type=radio name="q26" id="3" class="input" data-answer="true">
            <label for="3">Все ответы правильные</label><br>

            <p class="question_q">Назовите особенности шины IDE?</p>
            <input type=radio name="q27" id="0" class="input" data-answer="true">
            <label for="0">Размер пакета данных 16 бит</label><br>
            <input type=radio name="q27" id="1" class="input">
            <label for="1">Последовательная передача данных</label><br>
            <input type=radio name="q27" id="2" class="input">
            <label for="2">Длина шины до 1м</label><br>
            <input type=radio name="q27" id="3" class="input">
            <label for="3">Все ответы правильные</label><br>
            <input type=radio name="q27" id="4" class="input">
            <label for="4">Нет правильного ответа</label><br>

            <p class="question_q">Что такое форматирование диска?</p>
            <input type=radio name="q28" id="0" class="input" data-answer="true">
            <label for="0">Удаление хранящихся на диске данных</label><br>
            <input type=radio name="q28" id="1" class="input">
            <label for="1">Создание диска активации и образа</label><br>
            <input type=radio name="q28" id="2" class="input">
            <label for="2">Нарезка дорожек на диске и разбиение его на кластеры</label><br>
            <input type=radio name="q28" id="3" class="input">
            <label for="3">Отчистка диска</label><br>
            <input type=radio name="q28" id="4" class="input">
            <label for="4">Удаление хранящихся данных в определенном разделе диска</label><br>

            <p class="question_q">Назовите особенности шины SATA?</p>
            <input type=radio name="q29" id="0" class="input">
            <label for="0">Размер пакета данных 16 бит</label><br>
            <input type=radio name="q29" id="1" class="input">
            <label for="1">Асинхронная передача данных</label><br>
            <input type=radio name="q29" id="2" class="input" data-answer="true">
            <label for="2">Длина шины до 1м</label><br>
            <input type=radio name="q29" id="3" class="input">
            <label for="3">Наличие одного контроллера на несколько устройств</label><br>
            <input type=radio name="q29" id="4" class="input">
            <label for="4">Использование модели OSI для передачи данных</label><br>

        </form>
        <input type="button" onClick="score()" id="button" value="Проверить результаты" class="button_chek">
</div>`;

button.addEventListener('click', ()=> {
    selectTest.classList.add('hide');
    finalTest.classList.add('hide');
    oneOfTest.insertAdjacentHTML('afterbegin',finalTestTest)
})

function score(){
    let yourAnsver = 0;
    const answers = Array.from(document.querySelectorAll('.input'));
    let trueAnsvers = 0;
    answers.forEach(index => {
        if (index.getAttribute('data-answer') === "true") {
            trueAnsvers++;
        }
    })
    answers.forEach((index => {
        if((index.checked) && (index.getAttribute('data-answer') === "true")) {
            yourAnsver++;
        }   
    }))
   alert(`правильных ответов ${yourAnsver} из ${trueAnsvers}`);
   oneOfTest.innerHTML = '';
   selectTest.classList.remove('hide');
   finalTest.classList.remove('hide');
}

test.forEach(index => {
    index.addEventListener('click', () => {
        selectTest.classList.add('hide');
        if(test[0] == index){
                oneOfTest.insertAdjacentHTML('afterbegin',
                `<h2 class="question_name">История вычислительной техники</h2>
                <form name="form" class="form">
                    <p class="question_q">Сколько было поколений ЭВМ:</p>
                    <input type=radio name="q0" id="0" class="input">
                    <label for="0">3</label><br>
                    <input type=radio name="q0" id="1" class="input" data-answer="true">
                    <label for="1">5</label><br>
                    <input type=radio name="q0" id="2" class="input">
                    <label for="2">8</label><br>
                
                    <p class="question_q">Выберите все что относиться к принципам фон Неймана:</p>
                    <input type="checkbox" name="q1" id="0" class="input" data-answer="true">
                    <label for="0">Вся информация кодируется в двоичной форме</label><br>
                    <input type="checkbox" name="q1" id="1" class="input">
                    <label for="1">Команды выполняются пaраллельно</label><br>
                    <input type="checkbox" name="q1" id="2" class="input" data-answer="true">
                    <label for="2">элементы размещаются в памяти ЭВМ и определятся адресами</label><br>
                
                    <p class="question_q">Разница между аналоговой и цифровой информацией</p>
                    <input type=radio name="q2" id="0" class="input">
                    <label for="0">аналоговая информация - то что мы слышим/чувствуем, а цифровая имеет форматы .doc, .txt, .zip и т.д.</label><br>
                    <input type=radio name="q2" id="1" class="input">
                    <label for="1">пример аналоговой информации - книга, цифровой - гугл Диск</label><br>
                    <input type=radio name="q2" id="2" class="input" data-answer="true">
                    <label for="2">аналоговая информация непрерывна, а цифровая – дискретна</label><br>
                </form>
                <input type="button" onClick="score()" id="button" value="Проверить результаты" class="button_chek">
                `);
        }
        else if(test[1] == index){
            oneOfTest.insertAdjacentHTML('afterbegin',
            `<h2 class="question_name">Архитектура персонально компьютера</h2>
            <form name="form" class="form">
                <p class="question_q">какой архитектуры не существует</p>
                <input type=radio name="q0" id="0" class="input">
                <label for="0">Поколение калькулятора</label><br>
                <input type=radio name="q0" id="1" class="input" data-answer="true">
                <label for="1">Поколение PlayStation</label><br>
                <input type=radio name="q0" id="2" class="input">
                <label for="2">Топология звезда</label><br>
            
                <p class="question_q">Интерфейс это </p>
                <input type=radio name="q1" id="0" class="input"  data-answer="true">
                <label for="0">Стандарт присоединения компонентов с системой</label><br>
                <input type=radio name="q1" id="1" class="input">
                <label for="1">Монитор с установленными обоими</label><br>
                <input type=radio name="q1" id="2" class="input">
                <label for="2">Командная строка</label><br>
            
            </form>
            <input type="button" onClick="score()" id="button" value="Проверить результаты" class="button_chek">
            `);
        }
        else if(test[2] == index){
            oneOfTest.insertAdjacentHTML('afterbegin',
            `<h2 class="question_name">Процессор</h2>
            <form name="form" class="form">
                <p class="question_q">С увеличением тактовой частоты процессора</p>
                <input type=radio name="q0" id="0" class="input">
                <label for="0">Быстродействие понижается</label><br>
                <input type=radio name="q0" id="1" class="input">
                <label for="1">Быстродействие компьютера не изменяется</label><br>
                <input type=radio name="q0" id="2" class="input" data-answer="true">
                <label for="2">Повышается его быстродействие</label><br>
            
                <p class="question_q">Разрядность адресной шины определяет:</p>
                <input type=radio name="q1" id="0" class="input">
                <label for="0">Объем адресуемой оперативной памяти и размер обрабатываемых данных</label><br>
                <input type=radio name="q1" id="1" class="input">
                <label for="1">Количество и скорость одновременно передаваемых данных</label><br>
                <input type=radio name="q1" id="2" class="input" data-answer="true">
                <label for="2">Объем адресуемой оперативной памяти и быстродействие процессора</label><br>
            
                <p class="question_q">Основными характеристиками процессора являются:</p>
                <input type=radio name="q2" id="0" class="input">
                <label for="0">Модель, тактовая частота</label><br>
                <input type=radio name="q2" id="1" class="input">
                <label for="1">разрядность, объем оперативной памяти</label><br>
                <input type=radio name="q2" id="2" class="input" data-answer="true">
                <label for="2">Тактовая частота, cкорость выполнения команд, pазрядность шин данных и адреса</label><br>
            </form>
            <input type="button" onClick="score()" id="button" value="Проверить результаты" class="button_chek">
            `);
    }
    else if(test[3] == index){
        oneOfTest.insertAdjacentHTML('afterbegin',
        `<h2 class="question_name">Назначение КЭШ памяти и сопроцессора</h2>
        <form name="form" class="form">
            <p class="question_q">зачем нужен сопроцессор</p>
            <input type=radio name="q0" id="0" class="input">
            <label for="0">чтобы ПК мог работать даже при поломке процессора</label><br>
            <input type=radio name="q0" id="1" class="input" data-answer="true">
            <label for="1">для выполнения операций с плавающей точкой,дробными числами и др.</label><br>
            <input type=radio name="q0" id="2" class="input">
            <label for="2">для работы с Bluetooth</label><br>
        
            <p class="question_q">Какое утверждение про КЭШ память неверное</p>
            <input type=radio name="q1" id="0" class="input">
            <label for="0">КЭШ память может выполнять роль закладки</label><br>
            <input type=radio name="q1" id="1" class="input">
            <label for="1">КЭШ память может работать в двух режимах</label><br>
            <input type=radio name="q1" id="2" class="input" data-answer="true">
            <label for="2">В КЭШе хранятся системные файлы операционной системы</label><br>
        
            <p class="question_q">При сбое в системе, данные</p>
            <input type=radio name="q2" id="0" class="input">
            <label for="0">Удаляются из КЭШ памяти и из ОЗУ</label><br>
            <input type=radio name="q2" id="1" class="input">
            <label for="1">Удаляются из ОЗУ, но остаются в КЭШ пямяти</label><br>
            <input type=radio name="q2" id="2" class="input" data-answer="true">
            <label for="2">Удаляются из КЭШ памяти, но остаются в ОЗУ</label><br>
        </form>
        <input type="button" onClick="score()" id="button" value="Проверить результаты" class="button_chek">
        `);
    }
    else if(test[4] == index){
        oneOfTest.insertAdjacentHTML('afterbegin',
        `<h2 class="question_name">Системные шины</h2>
        <form name="form" class="form">
            <p class="question_q">Какой системной шины не существует</p>
            <input type=radio name="q0" id="0" class="input">
            <label for="0">HyperTransport</label><br>
            <input type=radio name="q0" id="1" class="input" data-answer="true">
            <label for="1">filber optic bus</label><br>
            <input type=radio name="q0" id="2" class="input">
            <label for="2">QuickPath Interconnect</label><br>
        
            <p class="question_q">Шина Front Side Bus (FSB) обеспечивает связь между:</p>
            <input type=radio name="q1" id="0" class="input">
            <label for="0">Северным и южным мостом на материнской плате</label><br>
            <input type=radio name="q1" id="1" class="input">
            <label for="1">Между жёсткими дисками</label><br>
            <input type=radio name="q1" id="2" class="input" data-answer="true">
            <label for="2">Между процессором и остальными устройствами</label><br>
        
            <p class="question_q">Выберите верное определение понятия "Системная шина"</p>
            <input type=radio name="q2" id="0" class="input">
            <label for="0">программа, обеспечивающая взаимодействие операционной системы с соответствующим устройством вычислительной системы</label><br>
            <input type=radio name="q2" id="1" class="input" data-answer="true">
            <label for="1">набор токопроводящих линий, связывающих воедино центральные устройства с периферийными устройствами и обеспечивающих обмен информацией между ними</label><br>
            <input type=radio name="q2" id="2" class="input">
            <label for="2">набор устройств, входящих в состав системного блока и обеспечивающих работу ПК</label><br>
        </form>
        <input type="button" onClick="score()" id="button" value="Проверить результаты" class="button_chek">
        `);
    }
    else if(test[5] == index){
        oneOfTest.insertAdjacentHTML('afterbegin',
        `<h2 class="question_name">Память</h2>
        <form name="form" class="form">
            <p class="question_q">К внутренней памяти относят устройства:</p>
            <input type=checkbox name="q0" id="0" class="input" data-answer="true">
            <label for="0">ПЗУ</label><br>
            <input type=checkbox name="q0" id="1" class="input">
            <label for="1">оптический диск</label><br>
            <input type=checkbox name="q0" id="2" class="input">
            <label for="2">жесткий диск</label><br>
            <input type=checkbox name="q0" id="3" class="input">
            <label for="3">гибкий диск</label><br>
        
            <p class="question_q">Для чего используется служебное запоминающие устройство:</p>
            <input type=radio name="q1" id="0" class="input"  data-answer="true">
            <label for="0">Хранение программы для выполнения команд процессора.</label><br>
            <input type=radio name="q1" id="1" class="input">
            <label for="1">Для быстрого поиска информации</label><br>
            <input type=radio name="q1" id="2" class="input">
            <label for="2">для повышения производительности медленных устройств</label><br>
        
            <p class="question_q">Значения стробирующего сигнала RW</p>
            <input type=radio name="q2" id="0" class="input">
            <label for="0">единичный сигнал - нужная ячейка памяти найдена, нулевой - ячейки нет</label><br>
            <input type=radio name="q2" id="1" class="input">
            <label for="1">единичный сигнал - удаление,нулевой - сохранение</label><br>
            <input type=radio name="q2" id="2" class="input" data-answer="true">
            <label for="2">единичный сигнал - то чтение, нулевой - то запись</label><br>
        </form>
        <input type="button" onClick="score()" id="button" value="Проверить результаты" class="button_chek">
        `);
    }
    else if(test[6] == index){
        oneOfTest.insertAdjacentHTML('afterbegin',
        `<h2 class="question_name">Оперативная память</h2>
        <form name="form" class="form">
            <p class="question_q">Статическая память — это тип памяти,</p>
            <input type=radio name="q0" id="0" class="input" data-answer="true">
            <label for="0">в которой значение бита информация хранится в ячейке определяющаяся наличием или отсутствием заряда</label><br>
            <input type=radio name="q0" id="1" class="input">
            <label for="1">которая имеет самый большой объем</label><br>
            <input type=radio name="q0" id="2" class="input">
            <label for="2">в которой применяются специальные элементы — варикапы</label><br>
        
            <p class="question_q">Оперативная память предназначена для:</p>
            <input type=radio name="q1" id="0" class="input">
            <label for="0">Помещения в неё исполняемых программ и данных</label><br>
            <input type=radio name="q1" id="1" class="input">
            <label for="1">Выполнения арифметических операций над числами</label><br>
            <input type=radio name="q1" id="2" class="input" data-answer="true">
            <label for="2">Выполняет обмен данными между чипсетом и портами ввода-вывода</label><br>
        
            <p class="question_q">Выберите все типы SRAM памяти</p>
            <input type=checkbox name="q2" id="0" class="input" data-answer="true">
            <label for="0">Aсинхронная</label><br>
            <input type=checkbox name="q2" id="1" class="input" data-answer="true">
            <label for="1">Cинхронная пакетная</label><br>
            <input type=checkbox name="q2" id="2" class="input">
            <label for="2">Динамическая</label><br>
        </form>
        <input type="button" onClick="score()" id="button" value="Проверить результаты" class="button_chek">
        `);
    }
    else if(test[7] == index){
        oneOfTest.insertAdjacentHTML('afterbegin',
        `<h2 class="question_name">Подтайминги</h2>
        <form name="form" class="form">
            <p class="question_q">подтайминг это</p>
            <input type=radio name="q0" id="0" class="input" data-answer="true">
            <label for="0">производныая между двумя таймингами</label><br>
            <input type=radio name="q0" id="1" class="input">
            <label for="1">задержка с минимальным временем между подачей двух команд</label><br>
            <input type=radio name="q0" id="2" class="input">
            <label for="2">задержка при включении ПК</label><br>
        
            <p class="question_q">Что будет если изменить тайминг RP:</p>
            <input type=radio name="q1" id="0" class="input" data-answer="true">
            <label for="0">ошибка чтения данных</label><br>
            <input type=radio name="q1" id="1" class="input">
            <label for="1">Зависание ПК или его перезагрузка</label><br>
            <input type=radio name="q1" id="2" class="input">
            <label for="2">пользователь не может менять этот тайминг</label><br>
        
            </form>
        <input type="button" onClick="score()" id="button" value="Проверить результаты" class="button_chek">
        `);
    }
    else if(test[8] == index){
        oneOfTest.insertAdjacentHTML('afterbegin',
        `<h2 class="question_name">Накопитель на магнитных дисках</h2>
        <form name="form" class="form">
            <p class="question_q">Кластер – это</p>
            <input type=radio name="q0" id="0" class="input">
            <label for="0">Сектор диска</label><br>
            <input type=radio name="q0" id="1" class="input" data-answer="true">
            <label for="1">Минимальная логическая единица элемента структуры хранения информации на диске</label><br>
            <input type=radio name="q0" id="2" class="input">
            <label for="2">Таблица разделов диска</label><br>
        
            <p class="question_q">Какое из названий не является названием жесткого диска:</p>
            <input type=radio name="q1" id="0" class="input">
            <label for="0">НЖМД</label><br>
            <input type=radio name="q1" id="1" class="input">
            <label for="1">HDD</label><br>
            <input type=radio name="q1" id="2" class="input" data-answer="true">
            <label for="2">FDD</label><br>
        
            <p class="question_q">Какой компонент жесткого диска является носителем информации</p>
            <input type=radio name="q2" id="0" class="input" data-answer="true">
            <label for="0">алюминиевая или стеклянная пластина с ферромагнитным слоем</label><br>
            <input type=radio name="q2" id="1" class="input">
            <label for="1">Специальный оптический датчик</label><br>
            <input type=radio name="q2" id="2" class="input">
            <label for="2">коромысло, способное намагничиваться с двух сторон</label><br>
        </form>
        <input type="button" onClick="score()" id="button" value="Проверить результаты" class="button_chek">
        `);
    }
    else if(test[9] == index){
        oneOfTest.insertAdjacentHTML('afterbegin',
        `<h2 class="question_name">Видеокарты</h2>
        <form name="form" class="form">
            <p class="question_q">Видеокарта предназначена для</p>
            <input type=radio name="q0" id="0" class="input">
            <label for="0">связывания всх компонентов компьютера</label><br>
            <input type=radio name="q0" id="1" class="input">
            <label for="1">обработки информации</label><br>
            <input type=radio name="q0" id="2" class="input" data-answer="true">
            <label for="2">преобразования цифрового сигнала, хранящегося в оперативной памяти в аналоговый сигнал монитора</label><br>
        
            <p class="question_q">Как происходит обработка сигнала из аналогового в цифровой</p>
            <input type=radio name="q1" id="0" class="input" data-answer="true">
            <label for="0">Дискретизация, квантование, кодирование</label><br>
            <input type=radio name="q1" id="1" class="input">
            <label for="1">Запись, сохранение</label><br>
            <input type=radio name="q1" id="2" class="input">
            <label for="2">Почкование, кредитование</label><br>
        
            <p class="question_q">Какой узел не входит в видеокарту</p>
            <input type=radio name="q2" id="0" class="input">
            <label for="0">Видео BIOS </label><br>
            <input type=radio name="q2" id="1" class="input">
            <label for="1">Видеоконтроллер</label><br>
            <input type=radio name="q2" id="2" class="input" data-answer="true">
            <label for="2">Видеоуроки</label><br>
        </form>
        <input type="button" onClick="score()" id="button" value="Проверить результаты" class="button_chek">
        `);
    }
    else if(test[10] == index){
        oneOfTest.insertAdjacentHTML('afterbegin',
        `<h2 class="question_name">Интерфейсы компьютерных систем</h2>
        <form name="form" class="form">
            <p class="question_q">Выберите все характеристикам интерфейса</p>
            <input type=checkbox name="q0" id="0" class="input" data-answer="true>
            <label for="0">Режим обмена</label><br>
            <input type=checkbox name="q0" id="1" class="input" data-answer="true">
            <label for="1">Длина линий связи</label><br>
            <input type=checkbox name="q0" id="2" class="input">
            <label for="2">Способ обработки</label><br>
            <input type=checkbox name="q0" id="3" class="input" data-answer="true">
            <label for="3">Количество адресов</label><br>
        
            <p class="question_q">PCI – E это</p>
            <input type=radio name="q1" id="0" class="input"  data-answer="true">
            <label for="0">локальная шина, работающая на первых 3 уровнях модели OSI</label><br>
            <input type=radio name="q1" id="1" class="input">
            <label for="1">ускоренный графический порт</label><br>
            <input type=radio name="q1" id="2" class="input">
            <label for="2">шина предназначенная для подключения плат расширения</label><br>
        
            <p class="question_q">параллельный интерфейс предназначенный для обмена информацией между принтером и компьютером</p>
            <input type=radio name="q2" id="0" class="input">
            <label for="0">RS-232C</label><br>
            <input type=radio name="q2" id="1" class="input">
            <label for="1">PS/2</label><br>
            <input type=radio name="q2" id="2" class="input" data-answer="true">
            <label for="2">LPT</label><br>
        </form>
        <input type="button" onClick="score()" id="button" value="Проверить результаты" class="button_chek">
        `);
    }})})


