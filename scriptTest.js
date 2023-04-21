const test = Array.from(document.querySelectorAll('.test'));
const oneOfTest = document.getElementById('one_of_test');
const selectTest = document.getElementById('select_test');

function score(){
    let yourAnsver = 0;
    const answers = Array.from(document.querySelectorAll('.input'));
    let trueAnsvers = 0;
    answers.forEach(index => {
        if (index.getAttribute('data-answer') === "true") {
            trueAnsvers++;
        }
    })
    //const questionQ = Array.from(document.querySelectorAll('.question_q')).length;
    answers.forEach((index => {
        if((index.checked) && (index.getAttribute('data-answer') === "true")) {
            yourAnsver++;
        }   
    }))
   alert(`правильных ответов ${yourAnsver} из ${trueAnsvers}`);
   oneOfTest.innerHTML = '';
   selectTest.classList.remove('hide');

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
        
            <p class="question_q">Как происходит обработка сигнала из аналогово в цифровой</p>
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
            <label for="0">локальнуная шина, работающая на первых 3 уровнях модели OSI</label><br>
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

