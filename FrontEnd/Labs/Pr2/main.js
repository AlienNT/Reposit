m = prompt('Сколько времени Вы планируете провести на нашем сайте? (мин)');
varA = ["img1.jpg",
    "img2.jpg",
    "img3.jpg"];

i = varA.length;

//Смена фона
function myFunction() {
    bgImg = "image/" + varA[i];
    document.body.style.backgroundImage = 'url(' + bgImg + ')';
}

//Слайдер
array = ["sl1.jpg",
    "sl2.jpg",
    "sl3.jpg"];
is = 0;

function right() {
    is++;
    if (is === array.length) is = 0;
    arrayIs = 'image/' + array[is];
    document.getElementById('slider').style.backgroundImage = 'url(' + arrayIs + ')';
}

function left() {
    is--;
    if (is < 0) is = array.length - 1;
    arrayIs = 'image/' + array[is];
    document.getElementById('slider').style.backgroundImage = 'url(' + arrayIs + ')';

}

// Изменение размера
function changeSizeImage() {
    if (document.getElementById('slider').height = '40vw') {
        this.height = '50vw';
        this.width = '50vw';
    }
    else {
        this.height = '40vw';
        this.width = '40vw';
    }
}

// Показать/скрыть изображение
function showImage(id) {
    document.getElementById(id).style.display = "block";
}

function hideImage(id) {
    document.getElementById(id).style.display = "none";
}

// Часы
function setClock() {
    var container = new Date();
    document.getElementById("clock").innerHTML = container.toTimeString().slice(0, 8)
}

setInterval(setClock, 1000);

// Таймер
function startTimer() {
    var my_timer = document.getElementById("my_timer");
    var time = my_timer.innerHTML;
    var arr = time.split(":");
    var h = arr[0];
    // var m = arr[1];
    var s = arr[2];
    if (s == 0) {
        if (m == 0) {
            if (h == 0) {
                alert("Время вышло");
                window.location.reload();
                return;
            }
            h--;
            m = 60;
            if (h < 10) h = "0" + h;
        }
        m--;
        if (m < 10) m = "0" + m;
        s = 59;
    }
    else s--;
    if (s < 10) s = "0" + s;
    document.getElementById("my_timer").innerHTML = h + ":" + m + ":" + s;
    setTimeout(startTimer, 1000);
}

setTimeout("startTimer()", 1000);


// <!------------ Обработчики событий ----------->

function onLoad(f) {
    if (window.addEventListener) // Стандартный метод регистрации событий
        window.addEventListener("load", f, false)
    else if (window.attachEvent) // В IЕ8 и в более ранних версиях
        document.attachEvent("onload", f)
    else window["onload"] = f;     // Для всех остальных
};
onLoad(function () { // Все в одной анонимной функции: не определяем имя
// Цикл по всем изображениям, ищем атрибут data-imgover
    for (var i = 0; i < document.images.length; i++) {
        var img = document.images[i];
        var imgover = img.getAttribute("data-imgover");
        if (!imgover) continue; // Пропустить изображения без data-imgover

// Создаем новый объект (кэш) и загружаем в него сменное изображение
        (new Image()).src = imgover;
// Определяем атрибут для сохранения URL-адреса изображения по умолчанию
        img.setAttribute("data-imgout", img.src);

// Регистрируем обработчики событий, создающие эффект смены изображений
        img.onmouseover = function () {
            this.src = this.getAttribute("data-imgover");
        };

        img.onmouseout = function () {
            this.src = this.getAttribute("data-imgout");
        };
    }
})

// jQuery

;(function ($) {
    $(document).ready(function(){

// 1. Изменим оформление элементов.
//Установим размер шрифта всех абзацев равным 20 пикселям.
        $("p").css("fontSize","20px");
//Изменим на зеленый цвет шрифта элемента с id=par3
        $("#par3").css("color","green");
//Изменим параметры шрифта элемента с class=par4 (сразу несколько свойств одновременно)
        $(".par4").css({"font-size":"27px","color":"red","font-family":"Arial"})
//Сделаем жирным шрифт элементов с id=par3 и class=par4
        $("#par3,.par4").css("fontWeight","bold");
//Изменим на синий цвет текста кнопки
        $(":input").css("color","blue");
//Установим размер шрифта всех элементов имеющих атрибут href равным 20 пикселям
        $("[href]").css("fontSize","20px");
//Изменим на зеленый цвет ссылки на www.wisdomweb.ru
        $("[href='http://www.wisdomweb.ru/']").css("color","green");


// 2. Исследуем работу обработчиков событий.
//Плавно Скрыть/Показать 3-й абзац.
        $("#bt4").toggle(function(){$("#par3").fadeOut(3000);},
            function(){$("#par3").fadeIn(3000);});

//Плавное изменить размера контейнера <div> ( от полного размера до 0 и обратно)
        $("#bt1").toggle(function(){ $("#square").slideUp(3000)},
            function(){ $("#square").slideDown(3000)});

//Подключаем или удаляем стили в div'e
        $("#bt2").click(function(){
            $("#square").addClass("square");
        });
        $("#bt3").click(function(){
            $("#square").removeClass("square");
        });

//Щелчек на поле ввода ФИО (получение фокуса). Убираем текст-подсказку, меняем цвет
        $("#text1").focus(function(){
            $(this).attr("value","");
            $(this).css("color","black");
        });
//Уходим с поля ввода ФИО (потеря фокуса). переносим введенный текст в 3-й абзац.
//Восстанавливаем текст-подсказку.
        $("#text1").blur(function(){
            $("#par3").html('Моя фамилия  '+$("#text1").attr("value"));
            $("#text1").attr("value","Введите ФИО");
        });

// щелчок на поле ввода размера шрифта 1-го абзаца.
// Убираем текст-подсказку.
        $("#text2").focus(function(){
            $("#text2").val("");
            $("#bt5").css("display","inline");
        });

// щелчок на кнопке bt5. Меняем размер шрифта
        $("#bt5").click(function(){
            $("#par1").css("font-size",$("#text2").val()+"px");
            $("#text2").val("Новый размер шрифта первого абзаца");
            $("#bt5").css("display","none");
        });


        $("#par2").hover(
            function(){
                $(this).css("fontSize","25px");
                $(this).css("color","blue");
                $(this).html("Я оформленный параграф.");
            },
            function(){
                $(this).css("fontSize","1em");
                $(this).css("color","black");
                $(this).html("Я обычный параграф.");
            });


// Щелчек в квадрате.
        $(".square").click(function(event){
            $("#coord").css("display","block");
            $("#x").html(event.pageX);
            $("#y").html(event.pageY);
        });
// щелчек на кнопке Убрать координаты.
        $("#bt0").click(function(){
            $("#coord").css("display","none");
        });

    });

})(jQuery);
