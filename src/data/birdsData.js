const birdsData = [
  //in red book
    [       
      {
        id: 1,
        name: 'Чёрный аист',
        species: 'Ciconia nigra',
        description: 'Гнездовая, перелётная. Гнездится на всей территории Беларуси за исключением безлесных и наиболее хозяйственно освоенных человеком районов. Численность в настоящее время оценивается в 950—1300 пар, что составляет не менее 15 % от мировой популяции вида.',
        image: 'https://live.staticflickr.com/65535/50168164882_1689eb2034.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/WIPMNWUHXI/XC421078-Zwooi(j)_Karula_20180612_1656.mp3'
      },
      {
        id: 2,
        name: 'Трёхпалый дятел',
        species: 'Picoides tridactylus',
        description: 'Оседлый вид, в зимнее время, вероятно, кочует. На территории Беларуси обнаружены два подвида. Подвид P. t. tridactylus распространён преимущественно в северной части страны. Подвид P. t. alpinus обитает в Полесье. Общая численность оценивается в 3000—5000 пар и вероятно сокращается.',
        image: 'https://live.staticflickr.com/65535/48429565031_1a27ac6d71.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/EVFVYRATSX/XC574843-Picoides%20tridactylus_Turbacz_200617_08.mp3'
      },
      {
        id: 3,
        name: 'Малая чайка',
        species: 'Hydrocoloeus minutus',
        description: 'Гнездящийся, перелётный и транзитно мигрирующий вид. Распространена на всей территории Беларуси, но везде встречается мозаично и неравномерно. Гнездится также мозаично, часто меняя места колоний. Основные места гнездования располагаются на севере и юге страны. Современная численность оценивается в 1000—2000 пар. Численность может значительно меняться, вплоть до отсутствия на гнездовании в отдельные годы.',
        image: 'https://live.staticflickr.com/65535/50083811837_cb136c03b5.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC473234-Dv%C3%A4rgm%C3%A5s_03.mp3'
      },   
      {
        id: 4,
        name: 'Пискулька',
        species: 'Anser erythropus',
        description: 'Мигрирующий через территорию страны вид. Спорадически встречается во время миграций в разных регионах Беларуси — Жабинковском, Любанском, Смолевичском, Шарковщинском районах, а также в Беловежской пуще. Чаще встречается на весеннем пролёте в пойме Припяти. В Беларуси вид отмечается не ежегодно и всегда в небольших количествах.',
        image: 'https://live.staticflickr.com/65535/47932309797_9be36c6756.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC564388-Fj%C3%A4llg%C3%A5s_03.mp3'
      },
      {
        id: 5,
        name: 'Серый журавль',
        species: 'Grus grus',
        description: 'Перелётный, гнездящийся и транзитно мигрирующий вид. Встречается повсеместно на территории страны во всех благоприятных для гнездования биотопах. Численность на территории Белоруссии резко сократилась в 1960-70-е годы в связи с осушением болот, к 1980-м годам она стабилизировалась, а с 1990-х годов происходит некоторый её рост. Численность в Беларуси оценивается в 800—1500 пар и около 1000 неразмножающихся птиц.',
        image: 'https://live.staticflickr.com/65535/50144037013_da2d2dd819.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/REICIMDLJD/XC556731-20200409_061826_gru_AMT222.mp3'
      },
      {
        id: 6,
        name: 'Серощёкая поганка',
        species: 'Podiceps grisegena',
        description: 'Гнездящийся, перелётный вид. Обитает на всей территории страны. Гнездования вида известны на территории Беловежской пущи. Стабильные поселения сформировались исключительно на рыбхозах. На территории страны на гнездовании преимущественно отмечается единичными парами. Крайне редко на водоёме может поселяться 2—4 пары. Общая численность в Белоруссии подвержено колебаниям и составляет 50—100 пар.',
        image: 'https://live.staticflickr.com/65535/50081349046_4f16452862.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/GVVNEJJEGA/XC354608-RNGR_AMCO_YHBL_2016-05-15_Hope_Lake_Blackfeet_Res_MT_1419.mp3'
      }
    ],
  
  // самые маленькие
    [
      {
        id: 1,
        name: 'Корольковый вьюрок',
        species: 'Serinus pusillus',
        description: 'небольшая (11—12 см в длину) птица семейства вьюрковых, обитающая в высокогорных районах.Гнездовой ареал включает Кавказ и высокогорья Турции, Ирана и Пакистана. Иногда зимой эта птица залетает на восточные острова Эгейского моря, а также встречается в Ладакх (Индия). Вне сезона размножения небольшие стаи корольковых вьюрков кочуют в поиске зарослей чертополоха. Вид часто содержится в неволе, поэтому отдельные «беглецы» встречаются по всей Европе.',
        image: 'https://live.staticflickr.com/65535/50129309711_2ca07a0ae6.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/DCUKLHHSET/XC140029-RedfrontedSerin_IshakPasha_Turkey_220613_YoavPerlman_u.mp3'
      },
      {
        id: 2,
        name: 'Банановый певун',
        species: 'Coereba flaveola',
        description: 'Величина бананового певуна составляет 11 см. На спине он тёмно-серый, а на голове имеет чёрную шапочку. Грудь и брюшко жёлтого цвета. Банановый певун обитает в тропических частях Южной и Центральной Америки, от севера Аргентины до южной Мексики, в том числе на островах Карибского моря. Некоторые заблудившиеся экземпляры встречаются и во Флориде. Их биосферой являются влажные леса, парки и сады.',
        image: 'https://live.staticflickr.com/65535/49885400798_676f1773f7.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/UWUNFMJPTF/XC541448-Coereba%20flaveola.mp3'
      },
      {
        id: 3,
        name: 'Зелёная пеночка',
        species: 'Phylloscopus trochiloides',
        description: 'У зелёных пеночек имеется маленькая, белая полоса на крыльях, которая часто не заметна. Птицы длиной примерно 10 см, размах крыльев от 15 до 21 см. Они достигают веса примерно 8 г.Зелёная пеночка населяет среднюю и южную тайгу, а также смешанные леса от восточной Центральной Европы до Тихого океана и, кроме того, горные хвойные леса центральноазиатских высокогорных массивов. Зеленые пеночки — перелётные птицы, зимуют в Индии.',
        image: 'https://live.staticflickr.com/65535/49992738536_9f98e93afd.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/JBTZEAUJRF/XC575392-Lundsa%CC%8Angare%201.mp3'
      },
      {
        id: 4,
        name: 'Крапивник',
        species: 'Troglodytes troglodytes',
        description: 'Крапивник — одна из самых маленьких европейских птиц, его длина составляет всего 9—10,5 см, что почти вдвое меньше домового воробья, размах крыльев 15—17 см, а вес около 8—12 г. Внешне похож на мягкий пушистый шарик с поднятым торчком коротким хвостиком.',
        image: 'https://live.staticflickr.com/65535/50181551877_6b7c679b09.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/LFZNDNTEVP/XC575167-20200712-134820--Kaalupi_tee-MKE600.mp3'
      },
      {
        id: 5,
        name: 'Короткоклювка',
        species: 'Smicrornis brevirostris',
        description: 'Одна из самых маленьких птиц Австралии (8 - 9 см). Населяет лесистые местности, за исключением влажных лесов, отдаёт предпочтение эвкалиптовым лесам. Короткоклювки большую часть времени проводят под пологом парами или маленькими группами',
        image: 'https://live.staticflickr.com/65535/50124465178_1bed51538a.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/JTZTRQUTQV/XC478836-NBF08%2C%20Weebill%2C%20contact%20notes%2C%2018Apr2018.mp3'
      },
      {
        id: 6,
        name: 'Колибри-пчелка',
        species: 'Mellisuga helenae',
        description: 'Самые маленькие птицы в мире. Колибри-пчёлки достигают длины 5,7 см, включая хвост и клюв, и весят 2,0 г. Они легче, чем отдельно взятое перо страуса. Сердце птицы совершает от 300 до 500 ударов в минуту.',
        image: 'https://live.staticflickr.com/65535/40677397223_ff8511e681.jpg',
        audio: '//www.xeno-canto.org/sounds/uploaded/WNGXTLHREQ/Bee%20Hummingbird%20Bermejas%20120405_00.mp3'
      }
    ],
  // самые большие 
    [
      {
        id: 1,
        name: 'Белоплечий орлан',
        species: 'Haliaeetus pelagicus',
        description: 'Размах крыльев белоплечего орлана достигает 2,5 метров, а рост 105-110 см., при весе всего 8- 9 кг. Эту птицу можно увидеть лишь на Дальнем Востоке, она занесена в Красную Книгу и охраняется законом, так как численность данного вида сократилась до 7500 особей и находится под угрозой полного исчезновения.',
        image: 'https://live.staticflickr.com/65535/49834971673_7d155c1771.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/GNYVMVEMZX/XC528783-oowashi_200220_sub.mp3'
      },
      {
        id: 2,
        name: 'Дрофа',
        species: 'Otis tarda',
        description: 'Самой тяжелой из летающих птиц можно считать дрофу, местом обитания которой являются степи Евразии. Ее вес достигает 20 кг при росте 110 см. Летает дрофа благодаря умению виртуозно улавливать воздушные потоки, чему немало способствует размах крыльев в 190-250 см.',
        image: 'https://live.staticflickr.com/65535/49867799222_590c9f6698.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/HOJQQPSMXK/XC459281-190226_02_LP_0905_FB.mp3'
      },
      {
        id: 3,
        name: 'Кудрявый пеликан',
        species: 'Pelecanus crispus',
        description: 'Кудрявые пеликаны – одни из наиболее крупных водоплавающих птиц. Взрослые особи могут достигать 180 см. (включая почти полуметровый клюв), и весить 14 кг. Примечательно, что из-за особенностей строения лап, эти птицы не могут нырять, и поэтому предпочитают охотиться на мелководье.',
        image: 'https://live.staticflickr.com/65535/50230404566_3b5b39f6fc.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC331137-call1.mp3'
      },
      {
        id: 4,
        name: 'Черный гриф',
        species: 'Aegypius monachus',
        description: 'Черный гриф, размах крыльев которого достигает 2,5 метров при росте 120-135 см., селится преимущественно в гористой части Южной Европы, Северной Африки, Передней и Средней Азии. Основную часть рациона этой птички составляет падаль, которую она высматривает, паря в воздухе.',
        image: 'https://live.staticflickr.com/65535/50241829477_29f87e7d5b.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/UXGZWVYDFE/XC144935-Aegypius%20monachus_pos%C3%A9_C_F%20Deroussen_2013042300.mp3'
      },
      {
        id: 5,
        name: 'Альбатрос Сальвина',
        species: 'Thalassarche salvini',
        description: 'Самой большой из летающих птиц считается странствующий альбатрос, обитатель южных морей. Хотя размер их тела не слишком впечатляет, однако размах крыльев поистине огромен, и достигает 3,5 метров.',
        image: 'https://live.staticflickr.com/65535/49032154836_807f5bc5e5.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/WOEAFQRMUD/XC345386-Thalassarche%20salvini161111_T1300.mp3'
      },
      {
        id: 6,
        name: 'Казуар-мурук',
        species: 'Casuarius bennetti',
        description: 'Казуар – самая большая птица Австралии и Новой Гвинеи, и вторая по величине в мире. Имея рост 2 метра и вес 60 кг., она не умеет летать, зато компенсирует этот недостаток способностью разгоняться до 50 км/ч.',
        image: 'https://live.staticflickr.com/2571/5848934277_8a64357df3.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/CLKPHLYUHA/XC524398-DwarfCassowary1.mp3'
      }
    ],
  // самые красивые
    [
      {
        id: 1,
        name: 'Венценосный журавль',
        species: 'Balearica pavonina',
        description: 'Крупная птица из семейства настоящих журавлей, ведущая оседлый образ жизни в Западной и Восточной Африке. Хотя численность этой птицы пока ещё достаточно велика и составляет порядка 40000 особей, она имеет тенденцию к снижению и по этой причине журавль венценосный имеет статус уязвимого вида (категория VU) в Международной Красной книге.',
        image: 'https://live.staticflickr.com/65535/49883744897_406384f7fa.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/CDTGHVBGZP/XC267451-Black%20Crowned%20Crane2015-1-9-1.mp3'
      },
      {
        id: 2,
        name: 'Зимородок',
        species: 'Alcedo atthis',
        description: 'Мелкая птица семейства зимородковых (Alcedinidae), немного крупнее воробья. Длина крыла 7—8 см, размах крыльев примерно 25 сантиметров, масса 25—45 граммов. ',
        image: 'https://live.staticflickr.com/65535/50185308846_923ec58f03.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/YDQKMZXDRL/XC581597-DM673752_EiV_Balzbeginn-xc_rau1_Noise.mp3'
      },
      {
        id: 3,
        name: 'Черноголовая питта',
        species: 'Pitta sordida',
        description: 'Птица из семейства Питтовые. Распространена в Восточной и Юго-Восточной Азии, в Новой Гвинее[2], где живёт в различных типах лесов, плантациях и других культивируемых землях. У черноголовой питты зелёные крылья и тело, голова чёрная с коричневыми кончиком. Длина колеблется от 16 до 19 см, а масса — от 40 до 70 г.',
        image: 'https://live.staticflickr.com/65535/49349671208_0a58b3c824.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/TNTQAOFHFM/XC501951-R0225%20Hooded%20pitta.mp3'
      },   
      {
        id: 4,
        name: 'Райская птица-лория',
        species: 'Cnemophilus loriae',
        description: 'Вид распространён в тропических горных дождевых лесах Новой Гвинеи. Мелкие птицы с небольшими коническими клювами, округлыми крыльями, коротким, квадратным хвостом и маленькими ногами. Тело длиной 22 см, весом 60—100 г.',
        image: 'https://live.staticflickr.com/3909/14799921130_4983062e41.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/YTUXOCTUEM/BOPLoria%20male_FL%20Ambua3rdtrip.mp3'
      },
      {
        id: 5,
        name: 'Синеголовая танагра',
        species: 'Tangara cyanicollis',
        description: 'Обитают в полуоткрытых горных местностях — низких вторичных лесистых местностях и в садах среди кустарников, а также частично на культивированных участках. Птицы не населяют леса, но встречаются в основном во влажных регионах',
        image: 'https://live.staticflickr.com/65535/48448763342_93365daa96.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/MAVGCHPXII/XC456657-190212-012-%20Blue-necked%20Tanager%20-%20Tangara%20cyanicollis.mp3'
      },
      {
        id: 6,
        name: 'Бенгальская сизоворонка',
        species: 'Coracias benghalensis',
        description: 'Бенгальская сизоворонка — коренастая птица, около 26-27 см длиной, из семейства сизоворонковых, проживающая в южной части азиатских тропиков. Существуют три подвида, из которых ни один не находится под угрозой исчезновения согласно МСОП. Несколько штатов Индии выбрали его в качестве своего символа.',
        image: 'https://live.staticflickr.com/65535/49502556892_4793464121.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/HRYIVDQHBC/XC575121-IndianRoller_20170325_0825_52232241.mp3'
      },
    ],
  // самые опасные
    [
      {
        id: 1,
        name: 'Боевой орёл',
        species: 'Polemaetus bellicosus',
        description: 'Обитает в Африке. В рацион данной птицы входят различные млекопитающие, в том числе скот, поэтому зачастую люди, желая сохранить своё домашнее хозяйство, их расстреливают.',
        image: 'https://live.staticflickr.com/65535/48552098756_9cd8fca31f.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/IOBXPIMNNC/XC459351-181203_0176.mp3'
      },
      {
        id: 2,
        name: 'Беркут',
        species: 'Aquila chrysaetos',
        description: 'Это тоже вид орлов. Самых больших орлов на Земле. Данные особи питаются мелкими животными, в том числе оленятами и зайцами.',
        image: 'https://live.staticflickr.com/65535/50119590002_ea2768a226.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/HMJIMVISCP/XC518798-guila%20Real-%5BAudioTrimmer.com%5D.mp3'
      },
      {
        id: 3,
        name: 'Южноамериканская гарпия',
        species: 'Harpia harpyja',
        description: 'Питается маленькими обезьянами и ленивцами. Весит около девяти килограмм. Эту птицу в народе называют «лесной орёл», так как обитает она преимущественно в лесах Южной Америки.',
        image: 'https://live.staticflickr.com/65535/49477656771_74cea9feaf.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/KRQYNRSSDF/XC316473-Harpia%20harpyja%20%28Paramana%20140516%29%20OC_20160514%20161228.mp3'
      },
      {
        id: 4,
        name: 'Бородач',
        species: 'Gypaetus barbatus',
        description: 'Данный вид птиц питается падалью, сбрасывая свою жертву со скал, а после приступая к трапезе.',
        image: 'https://live.staticflickr.com/65535/49825792596_19ed12afe0.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/UXGZWVYDFE/XC144936-Gypaetus%20barbatus_pos%C3%A9_C_F%20Deroussen_2013042300.mp3'
      },
      {
        id: 5,
        name: 'Филин',
        species: 'Bubo magellanicus',
        description: 'Считается самой крупной совой. Обитает в лесах и охотится в ночное время.',
        image: 'https://live.staticflickr.com/5518/11181416074_ae63ae4d97.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/HMJIMVISCP/XC574568-DSCN0233%20B%C3%BAho%20Real.mp3'
      },
      {
        id: 6,
        name: 'Орлан-белохвост',
        species: 'Haliaeetus albicilla',
        description: 'Обитает преимущественно у водоёмов и питается рыбой, но также не прочь пообедать падалью. Крупная птица с массой тела около девяти килограмм.',
        image: 'https://live.staticflickr.com/65535/50068424258_ecd68fe74b.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/MCFGTDXKHO/XC577967-200713_09T1_SA_XC.mp3'
      }
    ],
  // попугаи
    [
      {
        id: 1,
        name: 'Корелла',
        species: 'Nymphicus hollandicus',
        description: 'Способности к разговору у этой породы есть, они могут запомнить слова и фразы и повторять их. Однако делают это неосознанно, поэтому вести диалог с кореллой не получится: они будут выдавать весь свой словарный запас независимо от того, что от них хотят услышать.',
        image: 'https://live.staticflickr.com/65535/49040037026_860481339c.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/EHGWCIGILC/XC172269-cockatiel-flight3.mp3'
      },
       {
        id: 2,
        name: 'Волнистый попугайчик',
        species: 'Melopsittacus undulatus',
        description: 'Для обучения лучше подходят самцы – они способны научиться считать до трех и произносить около 100 слов. Самки в большинстве своем предпочитают молчать, правда, есть особи, которые все-таки могут говорить несколько десятков слов.',
        image: 'https://live.staticflickr.com/65535/49936434947_87b44e9bed.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/GVVNEJJEGA/XC545373-BUDGIE_CEDW_2019-09-05_North_Portland_1804.mp3'
      },
       {
        id: 3,
        name: 'Какаду инка',
        species: 'Lophochroa leadbeateri',
        description: 'Какаду не отличается хорошей памятью – очень редкие экземпляры способны запомнить больше 10 слов, однако их речь внятная и отчетливая. Птицы не только повторяют за человеком, но и имитируют стиль речи окружающих. А вот в воспроизведении различных звуков природы или мелодии песен им нет равных.',
        image: 'https://live.staticflickr.com/65535/49729142106_129b1b8bc0.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/EHGWCIGILC/XC434079-Cockatoo_Major-Mitchells_MX260_Bowra_Spot3c_20thAug18.mp3'
      },
       {
        id: 4,
        name: 'Жако, серый попугай',
        species: 'Psittacus erithacus',
        description: 'Именно эта порода признана самой говорящей и умной. Их словарный запас нередко превышает 100 слов, они могут запомнить небольшие фразы и употребить их в речи в зависимости от ситуации. Птицы не просто заучивают слова, но и могут ассоциировать их с предметами, различать цвета и формы. Интеллект жако сравним с интеллектом трехлетнего ребенка.',
        image: 'https://live.staticflickr.com/65535/49432980536_86fd664af5.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/CJQNNUYOQE/XC492834-rc%20138%20Psittacus%20erithacus%20edited%201%20cut.mp3'
      },
       {
        id: 5,
        name: 'Амазонский воробьиный попугайчик',
        species: 'Nannopsittaca dachilleae',
        description: 'Орнитологи уверяют, что среди крупных попугаев именно амазоны являются самыми легко обучаемыми попугаями. Словарный запас большинства птиц составляет от 50 до 80 слов, некоторые особи могут запомнить до 100 слов. К тому же, амазоны могут самообучаться.',
        image: 'https://live.staticflickr.com/5580/15070862665_0853903de0.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/GVQLIFGMIY/LLOYDAmazonianparrotlet.mp3'
      },
       {
        id: 6,
        name: 'Неразлучник Фишера',
        species: 'Agapornis fischeri',
        description: 'Несмотря на то, что неразлучники плохо поддаются обучению, при должном усердии можно обучить их 10-15 словам. Правда, касается это только птиц, у которых есть пара. Одиночка никогда не будет разговаривать, как бы хозяин его не обучал. Причем по мере взросления птицы ее способности заметно ослабевают, поэтому начать обучение нужно в раннем возрасте, когда неразлучникам исполнится месяц.',
        image: 'https://live.staticflickr.com/1890/29541234697_39924a0430.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/THHNKSHUMO/XC428251-83%20Ins%C3%A9parables%20de%20Fischer%20STE-069.mp3'
      },
    ]
  ];

  export default birdsData;