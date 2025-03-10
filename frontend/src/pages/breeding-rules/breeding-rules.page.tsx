import './breeding-rules.page.scss';
import { useTranslation } from 'react-i18next';

export const BreedingRulesPage = () => {
  const { t } = useTranslation();
  
  return (
    <div style={{ maxWidth: '800px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '32px' }}>
        { t('header.navigation.officialdom.breedingRules') }
      </h1>
      
      <div>
        Ці Правила встановлюють і регламентують порядок оформлення та отримання племінних документів на послід цуценят, народження яких зареєстровано в організаціях-членах WBF
        Перелік документації міститься в Додатку до цих Правил.
      </div> <br />
      
      <div>
        1. Загальне положення про племінну роботу Міжнародного союзу собаківництва (WBF) є
        обов`язковим для всіх країн-членів WBF.
        Потомство двох чистокровних батьків однієї породи, які мають визнані WBF родоводи без будь-яких обмежень або застережень від національних кінологічних організацій, є чистокровними
        собаками і мають право на отримання визнаних WBF родоводів.
        Сертифікати походження, визнані WBF, є доказом дійсного походження, засвідченим заводчиком і національним клубом; Вони не гарантують певних якостей собак.
        Племінні заходи проводяться тільки з використанням ветеринарних - здорових, генетично здорових, з хорошою нервовою системою чистокровних собак, зареєстрованих в племінних книгах, визнаних WBF.
        Члени WBF зобов`язуються не допускати розвитку в племінному господарстві якостей (фізічний, психічних, фізіологічних), які згодом можуть призвести до погіршення робочих якостей і функціонального здоров'я собак.
        До розведення не допускаються собаки з дефектами, що виключають їх з племінного розведення:
        
        <ul style={{ marginLeft: '16px' }}>
          <li>Глухота</li>
          <li>Сліпота</li>
          <li>Заяча губа</li>
          <li>Вовча паща</li>
          <li>Дефекти зубів і щелепні аномалії</li>
          <li>Епілепсія</li>
          <li>Крипторхізм</li>
          <li>Монорхізм</li>
          <li>Альбінізм</li>
          <li>Неприйнятні забарвлення</li>
          <li>Дисплазія кульшового суглоба</li>
          <li>Та інші...</li>
        </ul>
        
        А також ті, що недопустимі стандартом породи, не зважаючи що  припустимі фізіологічно.
        Члени WBF зобов'язані боротися з різними дефектами породи, постійно вести записи про їх розвиток і звітувати в WBF за запитом. За селекційну роботу відповідають національні організації- члени WBF. Члени WBF зобов'язані стежити за племінною діяльністю, а також повинні ретельно вести племінні книги.
        Розведення і розвиток порід собак повинні ґрунтуватися на довгострокових цілях і виключати хворих собак, собак з недоліками поведінки або собак з поганими робочими якостями.
        До розведення можна допускати тільки здорових собак.
        Завдання заводчика - перевірити придатність собаки, призначеної для використання в племінному розведенні, з точки зору анатомічних, поведінкових якостей і фізичних характеристик.
        Заводчик повинен забезпечити племінним тваринам хороші умови, що відповідають їх фізичним і психологічним вимогам. Поки цуценята знаходяться з заводчиком, він зобов'язаний створити
        максимально сприятливі умови для їх фізичного і психічного розвитку і соціалізувати.
        Обов'язком членів (спілок, асоціацій, клубів, розплідників та інших кінологічних організацій) є прийняття власних Правил розведення, які повинні враховувати конкретні особливості породи.
      </div> <br/>
      
      <div>
        2. Реєстрація спарювання племінних кобелів-плідників. Парування племінних кобелів-плідників проводиться відповідно до цього Положення про племінну роботу.
        При спарюванні «Акт про спарювання» заповнюється в «Акті племінного використання» та реєструється в організації-члені WBF не пізніше 30 днів з моменту в'язки. У разі несвоєчасного оформлення, але не пізніше 30 днів з моменту в'язки, з заводчика або відповідальної за реєстрацію особи, яка винна в затримці, нараховується неустойка, згідно з прейскурантом, затвердженим окремо. У разі затримки більш ніж на 45 днів з дня спаровування факт злучки племінних виробників
        вважається непідтвердженим, таке злучення вважається недійсним і не підлягає реєстрації.
      </div> <br/>
      
      <div>
        3. Права та обов'язки власників племінних плідників регулюються відповідними законодавчими актами, положеннями клубів і розплідників. У разі їх відсутності діють Правила розведення WBF.
        Заводчикам і власникам племінних самців настійно рекомендується викласти всі взаємні домовленості перед спарюванням в будь-якій формі і чітко визначити фінансові зобов'язання при оплаті злучки ...
        Власникам племінної суки рекомендується брати суку особисто або через довірену особу (інструктора зі в'язки) до пса. Якщо сука проводить кілька днів з господарем пса, то всі виникаючі у
        зв'язку з цим витрати бере на себе власник суки.
      </div> <br/>
      
      <div>
        4. Відповідальність. Згідно із законодавчими рішеннями різних країн, особа, яка забезпечує утримання тварини, несе відповідальність за заподіяння шкоди третім особам. Власник суки або власник племінного самця зобов'язується взяти на себе витрати по укладанню особистої страховки на ці випадки.
      </div> <br/>
      
      <div>
        5. Вибір самця.
        Власник породистого самця зобов'язується  забезпечувати для спаровування заявленого самця, якому видано направлення на спарювання. Якщо злучка не виходить, тільки в цьому випадку суку
        може в'язати інший самець за погодженням з господарем суки.
        Ні в якому разі не допускається розведення суки в одну тічку з двома і більше псами одночасно. (єдиним виключенням є завчасно обумовлений з подальшою обов'язковою днк-експертизую цілого приплоду!)
      </div> <br/>
      
      <div>
        6. Підтвердження спарювання. Правильно проведений процес спарювання підтверджується власником самця шляхом підписання Акту про спарювання. У ньому він підтверджує своїм підписом, що є свідком шлюбного акту, а також докладно описує умови спаровування з цим
        плідником. Якщо племінна комісія країни, де буде зареєстрований виводок, зобов'язує заповнювати додаткові бланки, то обов'язок власника суки полягає в наданні і правильному заповненні цих бланків, а також подачі їх на підпис власнику самця. Свідоцтво про племінне
        використання та Акт про спарювання повинні містити наступне:
        
        <ul style={{ marginLeft: '16px' }}>
          <li>Порода</li>
          <li>Ім'я та номер родоводу самця</li>
          <li>Найменування та номер родоводу</li>
          <li>Ім'я, прізвище та адреса власника кобеля</li>
          <li>Ім'я та адреса власника суки</li>
          <li>Дата в'язки</li>
          <li>Підпис власника кобеля і власника суки</li>
          <li>Підписи інструктора зі спарювання, якщо такі є</li>
          <li>Умови оплати за злучку</li>
          <li>Власник самця зобов'язаний надати МАРКУ КОБЕЛЯ після оплати в'язки</li>
        </ul>
        
        Для оформлення документів в кінологічну організацію члена WBF приймається тільки акт в'язки з маркою
        Власник самця собаки не може змінити умови спарювання після підписання Акту про спарювання. А також не має законних прав щодо продажу цуценят, крім своїх аліментів. Якщо щеня (щенята) надається в якості оплати, то цей договір також повинен бути підтверджений
        в письмовій формі.
        
        <ol type="I" style={{ marginLeft: '32px' }}>
          <li>черговість вибору (право першого, другого чи третього вибору)</li>
          <li>Час передачі цуценя господареві самця.</li>
          <li>Період, коли право вибору цуценя власником самця закінчується і щеня переходить у власність заводчика.</li>
          <li>Спеціальні угоди в разі, якщо сука залишається порожньою або народжує тільки мертвого або одного живого цуценя, або до переведення щеня гине і в інших випадках.</li>
        </ol>
        
        Заводчик - це особа, у володінні якого (оренда, спільне володіння) знаходиться сука на момент остаточної активації посліду. У разі покупки спареного, володіння оформляється в момент покупки. Оренда собаки для племінного використання оформляється письмовим договором
        оренди між орендодавцем і орендарем із зазначенням всіх умов.
        В даному випадку договір оренди є невід'ємною частиною переліку документів, необхідних для оформлення виводку. Спільна власність оформляється так само, як і оренда. Заводчик має право зареєструвати своє заводську приставку (плем-завод, розплідник), що робить його захищеним від використання цього навісного обладнання іншими заводчиками.
      </div> <br/>
      
      <div>
        7. Акт огляду щенят. До моменту виконання обов'язків заводчик повинен дати кожному народженому цуценяті ім'я (яке не повинно повторюватися у даного заводчика, для всіх порід
        собак), а також зареєструвати розплідник (заводську приставку), членом організації якого він є.
        Заводська приставка реєструється в центральному офісі WBF і не може збігатися з раніше внесеними в Книгу реєстрації. Заводська приставка не передається у спадок.
        Всі цуценята, народжені у собак цього  заводчика, отримують зареєстрований заводський префікс (кеннел).
        Організація, яка зареєструвала народження виводку, призначає свого представника для актуалізації виводку. Дату активації виводку представник узгодить з заводчиком.
        Оформлення Родоводу здійснюється організацією яка видала метрику.
        Приведення в реєстр здійснюється відповідно до Положення про племінну роботу своєї національної організації, члена WBF.
        Огляд виводку  може здійснюватися як в тому місці, де міститься послід, так і в офісі організації, яка зареєструвала послід. Під час виконання обов'язків заповнюється «Акт огляду виводку» і складається опис  із зазначенням прикусу зубів, шостого покриву, стану цуценят, наявність сім'яників а також відзначаються всі анатомо-фізіологічні відхилення.
        Одночасно з «Актом перевірки виводку» заповнюється «Загальна картка огляду». Заводчик веде «Загальну картку виводку» і подає її в заповненому вигляді з адресами нових власників цуценят в
        організацію, яка зареєструвала послід, приклавши ксерокопії: родоводи батьків, сертифікати та дипломи з виставок.
        «Загальну картку виводку» здають не пізніше 6 місяців із зазначенням ПІБ, адрес і телефонів власників цуценят. В іншому випадку документи на весь послід анулюються з вини заводчика. (не пізніше 3 тижнів з моменту продажу останнього щеняти)
        Заводчик має право здати «Загальну картку в.» до того, як всі цуценята будуть заселені, в цьому випадку він повинен повідомити організацію, яка зареєструвала щенят, найменування та адресу нових господарів. А протягом кварталу загальна оцінка має бути подана відомством до клубу
      </div> <br/>
      
      <div>
        8. Ідентифікація. Необхідне мікрочіпування. Кожна собака, виведена і зареєстрована в одній з країн-членів WBF або договірних партнерів, повинна бути оснащена чіпом або незмивним і захищеним від підробок маркуванням;
        Це маркування обов'язково вказується в сертифікаті походження .
        Ідентифікаційні чіпи наносяться перед (передачею) продажу заводчиком першого цуценя з посліду. Цуценята, які вважаються аліментами, також переходять до власника самця за допомогою чіпування.
      </div> <br />
      
      <div>
        9. Отримання родоводу Для обміну «Щенячої метрики» ( «Щеняча карта») на родовід, власник собаки звертається в національну організацію, яка видала «Метрику». Родовід оформляється
        тільки в країні походження цуценя. «Щеняча карта» ( «метрика» обмінна карта) може бути обміняна на родовід тільки в тому випадку, якщо є опис собаки, зроблене на виставці, або якщо собака пройшла огляд кінолога клубу. В інших випадках - за бажанням власника, на розсуд керівника організації, яка видала «Метрику», відповідального за розведення або особи, яка має відповідний допуск.
      </div> <br />
        
      <div>
        10. Штучне запліднення не можна проводити собакам, які не були виставлені на виставці і раніше не розмножувалися природним шляхом. У разі штучного запліднення суки ветеринар (інструктор по в'язці, інсимінатор), який збирав сперму у самця, повинен надати на місці реєстрації посліду підтвердження про приналежність свіжої або замороженої сперми до цього зазначеного пса. Всі витрати на забір сперми бере на себе власник. Ветеринар, який запліднює суку, зобов'язаний підтвердити на місці реєстрації посліду, що сука була запліднена спермою передбачуваного пса. У його посвідченні також має
        бути зазначено місце і час запліднення, найменування та номер родоводу, найменування та адресу власника. Крім довідки ветеринара, власник самця, у якого була взята сперма, повинен підписати акт про спарювання.
      </div> <br />
      
      <div>
        11. Племінні правила країн-членів WBF, а також договірних партнерів можуть бути розширені в їх вимогах, ніж
        вимоги WBF, якщо вони не суперечать міжнародним правилам племінної роботи WBF.
        РОДОВІДНИЙ ПАКЕТ – повний перелік документів (подається в клуб- що входить до WBF)
        
        <ol style={{ marginLeft: '24px' }}>
          <li>Копії родоводів обох батьків (копії гарної якості)</li>
          <li>
            Копії дипломів з виставки (Pedigree review) з оцінкою не нижче &quot;дуже гарно&quot; для самок
            і &quot;відмінно&quot; для самців
          </li>
          <li>Для користувальницьких порід копії дипломів Т1 (Т2) – тест на НС</li>
          <li>Для служебних порід копії дипломів з дресирування (кобелі обов'язково, суки бажано)</li>
          <li>Оригінал акту про спарювання + штамп</li>
          <li>Оригінал протоколу огляду посліду (діючий)</li>
          <li>
            Оригінал картки посліду У
            разі форс-мажорних обставин можлива подача посилки по
            електронній пошті. (скан-копії), але як тільки ситуація стабілізується, здати оригінал.
          </li>
        </ol>
        
        ВИЗНАННЯ РОДОВОДУ тільки в тому випадку, якщо у Вас є:
        
        <ol style={{ marginLeft: '24px' }}>
          <li>Родовід</li>
          <li>
            диплом з виставки з оцінкою не нижче «оч.хор.» для самок і «відмінно» для самців, отриманий не більше ніж
            за рік до спарювання.
          </li>
          <li>
            дипломи про підготовку службових і користувальницьких порід, випробування для компаньйонів, випробування
            для мисливських і їздових собак.
          </li>
          <li>
            Сама собака знаходиться в справному стані і має ідентифікацію (тавру і (або) чіп), що відповідають
            зазначеним в родоводі * родовід допуск до отримання породистого допуску собака повинна мати родовід визнаний
            (WBF), диплом з виставки з позначкою не нижче «дуже добре» - для і «відмінно» - для псів (диплому не більше
            року).
          </li>
        </ol>
        <br />
        
        Дрібні породи: мінімальний вік
        <ul style={{ marginLeft: '24px' }}>
          <li>Самки - 15 місяців</li>
          <li>Самця - 9 місяців (тільки для собак з оцінкою від сертифікатного шоу)</li>
        </ul>
        
        Середні породи: мінімальний вік
        <ul style={{ marginLeft: '24px' }}>
          <li>Самки - 18 місяців</li>
          <li>Самця - 12 місяців (тільки з оцінкою з сертифікатної виставки)</li>
        </ul>
        
        Великі породи: мінімальний вік
        <ul style={{ marginLeft: '24px' }}>
          <li>Самки - 18 місяців</li>
          <li>Самця - 12 місяців (тільки оцінкою з сертифікатної виставки)</li>
        </ul>
        
        Якщо собака має оцінку тільки з племінної експертизи, то не раніше 18 місяців самець з оцінкою, племінної
        експертизи допускається до в'язки тільки один раз** **після чого або оцінка з виставки, або знята з племінного використання ***виняток становлять собаки з набутим дефектом екстер'єру.
      </div>
    </div>
);
}
