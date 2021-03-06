OC.L10N.register(
    "user_ldap",
    {
    "The Base DN appears to be wrong" : "Base DN изглежда е грешен",
    "Testing configuration…" : "Тестване на конфигурацията ...",
    "Configuration incorrect" : "Конфигурацията е грешна",
    "Configuration incomplete" : "Конфигурацията не е завършена",
    "Configuration OK" : "Конфигурацията е ОК",
    "Select groups" : "Избери Групи",
    "Select object classes" : "Избери типове обекти",
    "Please check the credentials, they seem to be wrong." : "Моля проверете идентификационните данни, изглежда са грешни.",
    "Please specify the port, it could not be auto-detected." : "Моля посочете порта, той не може да бъде открит автоматично.",
    "Base DN could not be auto-detected, please revise credentials, host and port." : "Базата DN не може да бъде автоматично открита, моля, прегледайте идентификационните данни, хоста и порта.",
    "Could not detect Base DN, please enter it manually." : "Не може да се открие Базата DN, моля въведете я ръчно.",
    "{nthServer}. Server" : "{nthServer}. Сървър",
    "No object found in the given Base DN. Please revise." : "Не е намерен обект в дадената база DN. Моля, проверете.",
    "More than 1,000 directory entries available." : "Налични са повече от 1000 записа в директорията.",
    " entries available within the provided Base DN" : "налични записи в базаta DN",
    "An error occurred. Please check the Base DN, as well as connection settings and credentials." : "Възникна грешка. Моля проверете База DN, както и настройките и идентификационните данни за връзката.",
    "Do you really want to delete the current Server Configuration?" : "Наистина ли искате да изтриете текущата Сървърна Конфигурация?",
    "Confirm Deletion" : "Потвърдете Изтриването",
    "Mappings cleared successfully!" : "Картите успешно се изчистиха!",
    "Error while clearing the mappings." : "Грешка при изчистване на картите.",
    "Anonymous bind is not allowed. Please provide a User DN and Password." : "Анонимното свързване не е позволено. Моля, въведете потребителско DN и парола.",
    "LDAP Operations error. Anonymous bind might not be allowed." : "Грешка в операцията LDAP. Анонимното свързване може да е забранено.",
    "Saving failed. Please make sure the database is in Operation. Reload before continuing." : "Запазването не бе успешно. Моля уверете се, че базата данни е в експлоатация. Презаредете преди да продължите.",
    "Switching the mode will enable automatic LDAP queries. Depending on your LDAP size they may take a while. Do you still want to switch the mode?" : "Превключването на режима ще даде възможност за автоматични LDAP заявки. В зависимост от LDAP размера това може да отнеме известно време. Все още ли искате да превключите режима?",
    "Mode switch" : "Превключвател на режим",
    "Select attributes" : "Изберете атрибути",
    "User not found. Please check your login attributes and username. Effective filter (to copy-and-paste for command line validation): <br/>" : "Потребителят не е намерен. Моля проверете своите атрибути за вход и потребителското име. Ефективен филтър (копирайте и поставете за проверка в командния ред): <br/>",
    "User found and settings verified." : "Потребителят е намерен и настройките са проверени.",
    "Settings verified, but more than one user was found. Only the first will be able to login. Consider a more narrow filter." : "Настройките са потвърдени, но е намерен повече от един потребител. Само първите ще могат да влязат. Помислете за по-тесен филтър.",
    "An unspecified error occurred. Please check the settings and the log." : "Възникна неуточнена грешка. Моля проверете настройките и дневника.",
    "The search filter is invalid, probably due to syntax issues like uneven number of opened and closed brackets. Please revise." : "Филтърът за търсене е невалиден, вероятно поради проблеми със синтаксиса като нееднакъв брой отворени и затворени скоби. Моля, прегледайте.",
    "A connection error to LDAP / AD occurred, please check host, port and credentials." : "Възникна грешка във връзката към LDAP / AD, моля проверете хоста, порта и идентификационните данни.",
    "The %uid placeholder is missing. It will be replaced with the login name when querying LDAP / AD." : "Липсва %u запазеният идентификатор Той ще бъде заменен с името за вход при заявка за LDAP / AD.",
    "Please provide a login name to test against" : "Моля въведете име за вход за да тествате",
    "The group box was disabled, because the LDAP / AD server does not support memberOf." : "Груповото поле беше деактивирано, тъй като LDAP / AD сървърът не поддържа memberOf.",
    "Server" : "Сървър",
    "Users" : "Потребители",
    "Login Attributes" : "Атрибути за вход",
    "Groups" : "Групи",
    "The configuration is invalid: anonymous bind is not allowed." : "Конфигурацията е невалидна: анонимното свързване не е позволено.",
    "The configuration is valid and the connection could be established!" : "Валидна конфигурация, връзката установена!",
    "The configuration is valid, but the Bind failed. Please check the server settings and credentials." : "Конфигурацията е валидна, но свързването не успя. Моля проверете сървърните настройки, потребителското име и паролата.",
    "The configuration is invalid. Please have a look at the logs for further details." : "Невалидна конфигурация. Моля разгледайте докладите за допълнителна информация.",
    "Failed to delete the server configuration" : "Неуспешен опит за изтриване на сървърната конфигурация.",
    "Failed to clear the mappings." : "Неуспешно изчистване на картите.",
    "No data specified" : "Не са посочени данни",
    " Could not set configuration %s" : "Конфигурацията не може да бъде определена %s",
    "Action does not exist" : "Несъществуващо действие",
    "_%s group found_::_%s groups found_" : ["%s открита група","%s открити групи"],
    "_%s user found_::_%s users found_" : ["%s октрит потребител","%s октрити потребители"],
    "Could not detect user display name attribute. Please specify it yourself in advanced ldap settings." : "Не може да се открие атрибут на показваното потребителско име. Моля посочете го сами в разширените настройки на ldap.",
    "Could not find the desired feature" : "Не е открита желаната функция",
    "Test Configuration" : "Тествай Конфигурацията",
    "Help" : "Помощ",
    "Groups meeting these criteria are available in %s:" : "Групи спазващи тези критерии са разположени в %s:",
    "Only these object classes:" : "Само тези класове на обекти:",
    "Only from these groups:" : "Само от тези групи:",
    "Search groups" : "Търсене в групи",
    "Available groups" : "Налични групи",
    "Selected groups" : "Избрани групи",
    "Edit LDAP Query" : "Редактиране на LDAP заявка",
    "LDAP Filter:" : "LDAP Филтър:",
    "The filter specifies which LDAP groups shall have access to the %s instance." : "Филтърът посочва кои LDAP групи ще имат достъп до %s инсталацията.",
    "Verify settings and count groups" : "Проверете настройките и пребройте групите",
    "When logging in, %s will find the user based on the following attributes:" : "Когато влизате, %s ще намерите потребителя въз основа на следните атрибути:",
    "LDAP / AD Username:" : "LDAP / AD потребителско име:",
    "Allows login against the LDAP / AD username, which is either uid or samaccountname and will be detected." : "Позволява влизане с потребителското име на LDAP / AD, което е или uid или име на самия акаунт, което ще бъде открито.",
    "LDAP / AD Email Address:" : "LDAP / AD Имейл Aдрес:",
    "Allows login against an email attribute. Mail and mailPrimaryAddress will be allowed." : "Позволява влизане с имейл атрибут. Имейл и mailPrimaryAddress ще бъдат разрешени.",
    "Other Attributes:" : "Други Атрибути:",
    "Defines the filter to apply, when login is attempted. %%uid replaces the username in the login action. Example: \"uid=%%uid\"" : "Заявява филтърът, който да бъде приложен при опит за вписване. %%uid замества потребителското име в полето login action. Пример: \"uid=%%uid\".",
    "Test Loginname" : "Проверка на Потребителско име",
    "Verify settings" : "Потвърдете настройките",
    "1. Server" : "1. Сървър",
    "%s. Server:" : "%s. Сървър:",
    "Add a new and blank configuration" : "Добавете нова и празна конфигурация",
    "Copy current configuration into new directory binding" : "Копиране на текущата конфигурация в нова директория",
    "Delete the current configuration" : "Изтриване на текущата конфигурация",
    "Host" : "Host",
    "You can omit the protocol, except you require SSL. Then start with ldaps://" : "Протоколът не е задължителен освен ако не изисквате SSL. В такъв случай започните с ldaps://",
    "Port" : "Порт",
    "User DN" : "Потребителски DN",
    "The DN of the client user with which the bind shall be done, e.g. uid=agent,dc=example,dc=com. For anonymous access, leave DN and Password empty." : "DN на потребителят, с който ще се контролира достъпа, пр. uid=agent,dc=example,dc=com. За анонимен достъп оставете DN и Парола празни.",
    "Password" : "Парола",
    "For anonymous access, leave DN and Password empty." : "За анонимен достъп, оставете DN и Парола празни.",
    "One Base DN per line" : "По един Base DN на ред",
    "You can specify Base DN for users and groups in the Advanced tab" : "Можеш да настроиш Base DN за отделни потребители и групи в разделителя Допълнителни.",
    "Detect Base DN" : "Откриване на база DN",
    "Test Base DN" : "Тест на база DN",
    "Avoids automatic LDAP requests. Better for bigger setups, but requires some LDAP knowledge." : "Избягва автоматични LDAP заявки. По-добра опция за големи инсталации, но изисква LDAP познания.",
    "Manually enter LDAP filters (recommended for large directories)" : "Ръчно въвеждане на LDAP филтри (препоръчано за по-големи папки)",
    "%s access is limited to users meeting these criteria:" : "%s достъпът е ограничен до потребители, отговарящи на тези критерии:",
    "The most common object classes for users are organizationalPerson, person, user, and inetOrgPerson. If you are not sure which object class to select, please consult your directory admin." : "Най-често срещаните обектни класове за потребителите са organizationPerson, person, user и inetOrgPerson. Ако не сте сигурни кой клас обект да изберете, моля, консултирайте се с администратора на вашата директория.",
    "The filter specifies which LDAP users shall have access to the %s instance." : "Филтърът посочва кои LDAP потребители ще имат достъп до %s инсталацията.",
    "Verify settings and count users" : "Проверете настройките и пребройте потребителите",
    "Saving" : "Запазване",
    "Back" : "Назад",
    "Continue" : "Продължи",
    "LDAP" : "LDAP",
    "Expert" : "Експерт",
    "Advanced" : "Допълнителни",
    "<b>Warning:</b> Apps user_ldap and user_webdavauth are incompatible. You may experience unexpected behavior. Please ask your system administrator to disable one of them." : "<b>Предупреждение:</b> Приложенията user_ldap и user_webdavauth са несъвместими. Може да изпитате неочаквано поведение. Моля поискайте системния администратор да изключи едното от тях.",
    "<b>Warning:</b> The PHP LDAP module is not installed, the backend will not work. Please ask your system administrator to install it." : "<b>Предупреждение:</b> PHP LDAP модулът не е инсталиран и сървърът няма да работи. Моля поискайте системният администратор да го инсталира.",
    "Connection Settings" : "Настройки на Връзката",
    "Configuration Active" : "Конфигурацията е Активна",
    "When unchecked, this configuration will be skipped." : "Когато не е отметнато, тази конфигурация ще бъде прескочена.",
    "Backup (Replica) Host" : "Резервен (огледален) хост",
    "Give an optional backup host. It must be a replica of the main LDAP/AD server." : "Задайте незадължителен резервен сървър. Трябва да бъде реплика на главния LDAP/AD сървър.",
    "Backup (Replica) Port" : "Резервен (огледален) порт",
    "Disable Main Server" : "Изключете Главния Сървър",
    "Only connect to the replica server." : "Свържете се само с огледалният сървър.",
    "Turn off SSL certificate validation." : "Изключете валидацията на SSL сертификата.",
    "Not recommended, use it for testing only! If connection only works with this option, import the LDAP server's SSL certificate in your %s server." : "Не е препоръчително, ползвайте само за тестване. Ако връзката работи само с тази опция, вмъкнете LDAP сървърния SSL сертификат в своя %s сървър.",
    "Cache Time-To-Live" : "Кеширай Time-To-Live",
    "in seconds. A change empties the cache." : "в секунди. Всяка промяна изтрива кеша.",
    "Network Timeout" : "Изчакване на мрежата",
    "timeout for all the ldap network operations, in seconds." : "изчакване за всички операции на ldap мрежата, в секунди.",
    "Directory Settings" : "Настройки на Директорията",
    "User Display Name Field" : "Поле за потребителско име",
    "The LDAP attribute to use to generate the user's display name." : "LDAP атрибутът, който да бъде използван за генериране на видимото име на потребителя.",
    "2nd User Display Name Field" : "2 поле за показване на името на потребителя",
    "Optional. An LDAP attribute to be added to the display name in brackets. Results in e.g. »John Doe (john.doe@example.org)«." : "Не е задължително. Атрибутът LDAP, който трябва да се добави към показваното име в скоби. Резултати в напр. »Джон Доу (john.doe@example.org)«.",
    "Base User Tree" : "База Потребител Структура",
    "One User Base DN per line" : "По един Потребител на База DN на ред",
    "User Search Attributes" : "Атрибути на Потребителско Търсене",
    "Optional; one attribute per line" : "По желание; един атрибут на ред",
    "Each attribute value is truncated to 191 characters" : "Всяка стойност на атрибута е съкратена до 191 знака",
    "Group Display Name Field" : "Поле показващо името на групата",
    "The LDAP attribute to use to generate the groups's display name." : "LDAP атрибутът, който да бъде използван за генерирането на видмото име на групата.",
    "Base Group Tree" : "База Групи Структура",
    "One Group Base DN per line" : "По един Group Base DN на ред",
    "Group Search Attributes" : "Атрибути на Групово Търсене",
    "Group-Member association" : "Асоциация за членовете на групата",
    "Dynamic Group Member URL" : "Динамичен URL адрес на групата",
    "The LDAP attribute that on group objects contains an LDAP search URL that determines what objects belong to the group. (An empty setting disables dynamic group membership functionality.)" : "Атрибутът LDAP, който в обектите на групите съдържа LDAP URL адрес за търсене, и който определя кои обекти принадлежат към групата. (Празна настройка деактивира динамичната функционалност за членство в групата.)",
    "Nested Groups" : "Вложени групи",
    "When switched on, groups that contain groups are supported. (Only works if the group member attribute contains DNs.)" : "Когато е включено, се поддържат групи в групи. (Работи единствено ако членът на групата притежава атрибута DNs).",
    "Paging chunksize" : "Размер на страницата и номерацията",
    "Chunksize used for paged LDAP searches that may return bulky results like user or group enumeration. (Setting it 0 disables paged LDAP searches in those situations.)" : "Размерът използван за връщането на големи резултати от LDAP търсения, като изброяване на потребители или групи. (Стойност 0 изключва paged LDAP търсения в тези ситуаций).",
    "Special Attributes" : "Специални Атрибути",
    "Quota Field" : "Поле за Квота",
    "Leave empty for user's default quota. Otherwise, specify an LDAP/AD attribute." : "Оставете празно ако искате квотата на потребителя да е по подразбиране. В противен случай посочете LDAP / AD атрибут.",
    "Quota Default" : "Квота по подразбиране",
    "Override default quota for LDAP users who do not have a quota set in the Quota Field." : "Заменя квотата с квота по подразбиране за потребители на LDAP, които нямат зададена такава в полето за квоти.",
    "Email Field" : "Поле за Имейл",
    "Set the user's email from their LDAP attribute. Leave it empty for default behaviour." : "Задайте имейла на потребителя от техния LDAP атрибут. Оставете го празно за се зададе по подразбиране.",
    "User Home Folder Naming Rule" : "Правило за Именуване на Потребителската Папка",
    "Leave empty for user name (default). Otherwise, specify an LDAP/AD attribute." : "Оставете празно за потребителско име (по подразбиране). В противен случай посочете LDAP/AD атрибут.",
    "Internal Username" : "Вътрешно Потребителско Име",
    "Internal Username Attribute:" : "Атрибут на Вътрешното Потребителско Име:",
    "Override UUID detection" : "Отмяна на откриването на UUID",
    "By default, the UUID attribute is automatically detected. The UUID attribute is used to doubtlessly identify LDAP users and groups. Also, the internal username will be created based on the UUID, if not specified otherwise above. You can override the setting and pass an attribute of your choice. You must make sure that the attribute of your choice can be fetched for both users and groups and it is unique. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users and groups." : "По подразбиране UUID атрибутът се открива автоматично. Атрибутът UUID се използва за безспорно идентифициране на LDAP потребители и групи. Също така, вътрешното потребителско име ще бъде създадено въз основа на UUID, ако не е посочено друго по-горе. Можете да отмените настройката и да зададете атрибут по ваш избор. Трябва да сте сигурни, че атрибутът по ваш избор може да бъде извлечен както за потребители, така и за групи и той е уникален. Оставете го празно за поведение по подразбиране. Промените ще имат ефект само върху вече картографираните (добавени) LDAP потребители и групи.",
    "UUID Attribute for Users:" : "UUID Атрибут за Потребителите:",
    "UUID Attribute for Groups:" : "UUID Атрибут за Групите:",
    "Username-LDAP User Mapping" : "Потребителско име-LDAP Потребителска карта",
    "Usernames are used to store and assign (meta) data. In order to precisely identify and recognize users, each LDAP user will have an internal username. This requires a mapping from username to LDAP user. The created username is mapped to the UUID of the LDAP user. Additionally the DN is cached as well to reduce LDAP interaction, but it is not used for identification. If the DN changes, the changes will be found. The internal username is used all over. Clearing the mappings will have leftovers everywhere. Clearing the mappings is not configuration sensitive, it affects all LDAP configurations! Never clear the mappings in a production environment, only in a testing or experimental stage." : "Потребителските имена се използват за съхранение и присвояване на (мета) данни. За точното идентифициране и разпознаване на потребителите всеки LDAP потребител ще има вътрешно потребителско име. Това изисква картографиране от потребителско име до потребител на LDAP. Създаденото потребителско име е картографирано в UUID на LDAP потребителя. Освен това DN се кешира и за намаляване на LDAP взаимодействието, но не се използва за идентификация. Ако DN се промени, промените ще бъдат намерени. Вътрешното потребителско име се използва навсякъде. Изчистването на картите ще има остатъци от данни навсякъде. Изчистването на картите не е чувствително към конфигурацията, но засяга всички LDAP конфигурации! Никога не изчиствайте картите в производствена среда, само в тестов или експериментален етап.",
    "Clear Username-LDAP User Mapping" : "Изчисти Username-LDAP User Mapping",
    "Clear Groupname-LDAP Group Mapping" : "Изчисти Groupname-LDAP Group Mapping"
},
"nplurals=2; plural=(n != 1);");
