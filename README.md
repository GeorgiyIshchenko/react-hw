# react-hw
react homework

# Movies

Изучите методический материал;

Создайте прототип веб-приложения интернет-магазина (сервер на любом языке программирования и клиент на JavaScript с использованием библиотеки React):

Прототип веб-приложения, должен состоять из 3 страниц: главная, страница входа и страница со списком товаров; на тему "Кино"

Страница со списком товаров должна отображаться только после успешного входа

Страницы должны иметь разные пути;

Сервер должен иметь endpoint – получение списка товаров;

Информация о товаре должна содержать следующие данные: название, дата выпуска, цена;

Endpoint для получения списка товаров должен поддерживать пагинацию (получение части списка по переданным параметрам);

Клиент (браузер) должен получить список и отобразить его на экране;

При ошибке подключения к серверу клиент должен показать «Ошибка соединения» вместо таблицы;

При загрузке страницы, клиент должен показывать сообщение «Загрузка»;

Клиент должен изначально загрузить 10 товаров и загружать больше по нажатию кнопки «Загрузить больше».

При реализации клиента создайте свой хук useServerGoods(), который будет реализовывать загрузку данных с сервера;

Соберите React приложение и подключите сборку к вашему серверу.

Составить отчет по результатам работы.
