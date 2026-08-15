import type { ExtendedLocale } from "@/lib/i18n/config";
import { fiberOpticCableDrumLocalizedContent } from "@/lib/i18n/fiber-optic-cable-drum-content";
import type { LocalizedApplicationContent, LocalizedProductContent } from "@/lib/i18n/page-content";
import { phaseOneApplicationSlugs, phaseOneProductSlugs } from "@/lib/i18n/phase-one-paths";
import { extendedProductTranslations, extendedUiCopy } from "@/lib/i18n/extended-ui-copy";

type ProductSlug = (typeof phaseOneProductSlugs)[number];
type ApplicationSlug = (typeof phaseOneApplicationSlugs)[number];

type Pack = {
  supplier: string;
  globalIndustries: string;
  quote: string;
  catalog: string;
  byApplication: string;
  format: string;
  process: string;
  review: string;
  productOverview: string;
  productDescription: (name: string, focus: string) => string;
  productHero: (name: string, focus: string) => string;
  productIntro: (name: string, focus: string) => string[];
  productFaq: (name: string, focus: string) => LocalizedProductContent["faqs"];
  categories: Record<string, string>;
  applications: Record<string, string>;
  appTitles: Record<ApplicationSlug, string>;
  appDescription: (title: string) => string;
  appQuickAnswer: (title: string) => string;
  why: string[];
  selection: string[];
  rfq: string[];
  faq: LocalizedApplicationContent["faqs"];
  labels: Record<string, string>;
  custom: string;
  typical: string;
  byReview: string;
};

const packs: Record<ExtendedLocale, Pack> = {
  ru: {
    supplier: "поставщик углеродных материалов", globalIndustries: "для международной композитной промышленности", quote: "Запросить предложение", catalog: "Скачать каталог", byApplication: "Подбор по применению", format: "Формат", process: "Процесс", review: "Проверка",
    productOverview: "Материалы и изделия из углеродного волокна для экспорта.",
    productDescription: (name, focus) => `${name} для промышленного производства композитов. При запросе подтверждаются ${focus}, количество, процесс и страна назначения.`,
    productHero: (name, focus) => `${name}: варианты поставки по спецификации с проверкой ${focus}, упаковки, конечного применения и экспортных требований.`,
    productIntro: (name, focus) => [`${name} выбирается с учетом процесса изготовления и требуемых характеристик детали.`, `До предложения подтверждаются ${focus}, объем партии, документы и конечное применение.`],
    productFaq: (name, focus) => [{ question: `Какие данные нужны для запроса ${name}?`, answer: `Укажите ${focus}, количество, процесс, применение и страну назначения.` }, { question: "Можно ли заказать индивидуальную спецификацию?", answer: "Индивидуальные параметры рассматриваются по технической осуществимости, партии и требованиям соответствия." }],
    categories: { woven: "Двунаправленная ткань", spread: "Плоская поверхность CFRP", ud: "Направленное армирование", yarn: "Исходный материал", prepreg: "Армирование со смолой", chopped: "Короткое волокно", powder: "Молотое волокно", strengthening: "Система гражданского усиления", tube: "Намотанная композитная труба" },
    applications: { panels: "Панели CFRP", automotive: "Автомобильные композиты", sports: "Спортивные изделия", civilDrone: "Компоненты гражданских БПЛА", infusion: "Вакуумная инфузия", pultrusion: "Пултрузия", molding: "Формование композитов", plastics: "Армирование пластика и смол", concrete: "Усиление бетона и мостов" },
    appTitles: { "automotive-carbon-fiber-parts": "Углеродные материалы для автомобильных деталей", "civil-uav-drone-components": "Углеродные материалы для гражданских БПЛА", "plastic-resin-reinforcement": "Углеродное волокно для пластика и смол", "structural-strengthening": "Материалы CFRP для конструкционного усиления" },
    appDescription: (title) => `${title}: выбор материала, спецификации и данных для RFQ.`, appQuickAnswer: (title) => `${title} следует выбирать по геометрии детали, нагрузке, процессу, поверхности и требованиям соответствия.`,
    why: ["Формат материала должен соответствовать производственному процессу.", "Спецификация подтверждается до предложения.", "Конечное применение и страна назначения проходят проверку."],
    selection: ["Начните с детали и процесса.", "Определите направление нагрузки и требования к поверхности.", "Подтвердите размеры, количество, документы и назначение."],
    rfq: ["Тип компонента", "Материал", "Размеры", "Процесс", "Количество", "Конечное применение", "Страна назначения"],
    faq: [{ question: "Как выбрать подходящий материал?", answer: "Сообщите геометрию, нагрузку, процесс, поверхность и целевые свойства." }, { question: "Проводится ли проверка конечного применения?", answer: "Да. Для ряда высокоэффективных материалов требуется проверка конечного применения и пользователя." }],
    labels: { Home: "Главная", Products: "Продукция", Product: "Продукт", Documents: "Документы", Spec: "Спецификация", Review: "Проверка", Item: "Позиция", Material: "Материал", Process: "Процесс", Width: "Ширина", Grade: "Марка", Form: "Форма", Package: "Упаковка", "Typical value": "Типичное значение", "Product type": "Тип продукта", "End-use review": "Проверка применения", Email: "Эл. почта", Phone: "Телефон", WhatsApp: "WhatsApp" }, custom: "индивидуально", typical: "типичный", byReview: "по согласованию",
  },
  ar: {
    supplier: "مورد مواد ألياف الكربون", globalIndustries: "للصناعات المركبة العالمية", quote: "طلب عرض سعر", catalog: "تنزيل الكتالوج", byApplication: "البحث حسب التطبيق", format: "الشكل", process: "العملية", review: "المراجعة",
    productOverview: "مواد ومنتجات ألياف الكربون للتصدير.",
    productDescription: (name, focus) => `${name} لتصنيع المواد المركبة الصناعية. يتم تأكيد ${focus} والكمية والعملية ودولة الوجهة قبل العرض.`,
    productHero: (name, focus) => `${name} بخيارات توريد حسب المواصفة مع مراجعة ${focus} والتعبئة والاستخدام النهائي ومتطلبات التصدير.`,
    productIntro: (name, focus) => [`يتم اختيار ${name} وفق عملية التصنيع والأداء المطلوب للقطعة.`, `يتم تأكيد ${focus} وحجم الدفعة والمستندات والاستخدام النهائي قبل العرض.`],
    productFaq: (name, focus) => [{ question: `ما البيانات المطلوبة لطلب ${name}؟`, answer: `يرجى تحديد ${focus} والكمية والعملية والتطبيق ودولة الوجهة.` }, { question: "هل تتوفر مواصفات مخصصة؟", answer: "تتم مراجعة الخيارات المخصصة وفق الجدوى الفنية والدفعة ومتطلبات الامتثال." }],
    categories: { woven: "نسيج ثنائي الاتجاه", spread: "سطح CFRP مسطح", ud: "تقوية اتجاهية", yarn: "مادة أولية", prepreg: "تقوية مشربة بالراتنج", chopped: "ألياف قصيرة", powder: "ألياف مطحونة", strengthening: "نظام تقوية مدني", tube: "أنبوب مركب ملفوف" },
    applications: { panels: "ألواح CFRP", automotive: "مركبات السيارات", sports: "معدات رياضية", civilDrone: "مكونات طائرات مدنية بدون طيار", infusion: "التسريب بالتفريغ", pultrusion: "السحب المستمر", molding: "قولبة المواد المركبة", plastics: "تقوية البلاستيك والراتنج", concrete: "تقوية الخرسانة والجسور" },
    appTitles: { "automotive-carbon-fiber-parts": "مواد ألياف الكربون لقطع السيارات", "civil-uav-drone-components": "مواد ألياف الكربون للطائرات المدنية بدون طيار", "plastic-resin-reinforcement": "ألياف الكربون لتقوية البلاستيك والراتنج", "structural-strengthening": "مواد CFRP للتقوية الإنشائية" },
    appDescription: (title) => `${title}: إرشادات لاختيار المادة والمواصفة وبيانات RFQ.`, appQuickAnswer: (title) => `يجب اختيار ${title} وفق هندسة القطعة والحمل والعملية والسطح ومتطلبات الامتثال.`,
    why: ["يجب أن يتوافق شكل المادة مع عملية التصنيع.", "تؤكد المواصفة قبل العرض.", "تتم مراجعة الاستخدام النهائي ودولة الوجهة."], selection: ["ابدأ بالقطعة والعملية.", "حدد اتجاه الحمل ومتطلبات السطح.", "أكد الأبعاد والكمية والمستندات والوجهة."], rfq: ["نوع المكون", "المادة", "الأبعاد", "العملية", "الكمية", "الاستخدام النهائي", "دولة الوجهة"],
    faq: [{ question: "كيف أختار المادة المناسبة؟", answer: "قدم هندسة القطعة والحمل والعملية والسطح والأداء المطلوب." }, { question: "هل توجد مراجعة للاستخدام النهائي؟", answer: "نعم. قد تتطلب بعض المواد عالية الأداء مراجعة الاستخدام النهائي والمستخدم النهائي." }],
    labels: { Home: "الرئيسية", Products: "المنتجات", Product: "المنتج", Documents: "المستندات", Spec: "المواصفة", Review: "المراجعة", Item: "البند", Material: "المادة", Process: "العملية", Width: "العرض", Grade: "الدرجة", Form: "الشكل", Package: "التعبئة", "Typical value": "قيمة نموذجية", "Product type": "نوع المنتج", "End-use review": "مراجعة الاستخدام النهائي", Email: "البريد الإلكتروني", Phone: "الهاتف", WhatsApp: "واتساب" }, custom: "مخصص", typical: "نموذجي", byReview: "حسب المراجعة",
  },
  fr: {
    supplier: "fournisseur de matériaux en fibre de carbone", globalIndustries: "pour les industries composites mondiales", quote: "Demander un devis", catalog: "Télécharger le catalogue", byApplication: "Choisir par application", format: "Format", process: "Procédé", review: "Examen",
    productOverview: "Matériaux et produits en fibre de carbone pour l'export.",
    productDescription: (name, focus) => `${name} pour la fabrication industrielle de composites. ${focus}, la quantité, le procédé et le pays de destination sont confirmés avant devis.`,
    productHero: (name, focus) => `${name} disponible selon spécification avec examen de ${focus}, de l'emballage, de l'usage final et des exigences d'exportation.`,
    productIntro: (name, focus) => [`Le choix de ${name} dépend du procédé de fabrication et des performances visées.`, `${focus}, la taille du lot, les documents et l'usage final sont confirmés avant devis.`],
    productFaq: (name, focus) => [{ question: `Quelles données fournir pour ${name} ?`, answer: `Précisez ${focus}, la quantité, le procédé, l'application et le pays de destination.` }, { question: "Une spécification sur mesure est-elle possible ?", answer: "Les options sur mesure sont étudiées selon la faisabilité technique, le lot et la conformité." }],
    categories: { woven: "Tissu bidirectionnel", spread: "Surface CFRP plate", ud: "Renfort directionnel", yarn: "Matière amont", prepreg: "Renfort imprégné", chopped: "Fibre courte", powder: "Fibre broyée", strengthening: "Système de renforcement civil", tube: "Tube composite enroulé" },
    applications: { panels: "Panneaux CFRP", automotive: "Composites automobiles", sports: "Équipements sportifs", civilDrone: "Composants de drones civils", infusion: "Infusion sous vide", pultrusion: "Pultrusion", molding: "Moulage composite", plastics: "Renfort de plastiques et résines", concrete: "Renforcement du béton et des ponts" },
    appTitles: { "automotive-carbon-fiber-parts": "Matériaux carbone pour pièces automobiles", "civil-uav-drone-components": "Matériaux carbone pour drones civils", "plastic-resin-reinforcement": "Fibre de carbone pour plastiques et résines", "structural-strengthening": "Matériaux CFRP pour renforcement structurel" },
    appDescription: (title) => `${title} : guide de choix des matériaux, spécifications et données RFQ.`, appQuickAnswer: (title) => `${title} se choisit selon la géométrie, la charge, le procédé, la surface et la conformité.`,
    why: ["Le format du matériau doit correspondre au procédé.", "La spécification est confirmée avant devis.", "L'usage final et le pays de destination sont examinés."], selection: ["Commencez par la pièce et le procédé.", "Définissez la direction de charge et la surface.", "Confirmez dimensions, quantité, documents et destination."], rfq: ["Type de composant", "Matériau", "Dimensions", "Procédé", "Quantité", "Usage final", "Pays de destination"],
    faq: [{ question: "Comment choisir le bon matériau ?", answer: "Indiquez géométrie, charge, procédé, surface et performances visées." }, { question: "L'usage final est-il examiné ?", answer: "Oui. Certains matériaux haute performance exigent un examen de l'usage et de l'utilisateur final." }],
    labels: { Home: "Accueil", Products: "Produits", Product: "Produit", Documents: "Documents", Spec: "Spécification", Review: "Examen", Item: "Élément", Material: "Matériau", Process: "Procédé", Width: "Largeur", Grade: "Grade", Form: "Format", Package: "Emballage", "Typical value": "Valeur typique", "Product type": "Type de produit", "End-use review": "Examen de l'usage final", Email: "Email", Phone: "Téléphone", WhatsApp: "WhatsApp" }, custom: "sur mesure", typical: "typique", byReview: "sur examen",
  },
  ko: {
    supplier: "탄소섬유 소재 공급업체", globalIndustries: "글로벌 복합재 산업용", quote: "견적 요청", catalog: "카탈로그 다운로드", byApplication: "적용 분야별 찾기", format: "형식", process: "공정", review: "검토",
    productOverview: "수출용 탄소섬유 소재 및 제품.",
    productDescription: (name, focus) => `${name}은 산업용 복합재 제조에 사용됩니다. 견적 전에 ${focus}, 수량, 공정 및 도착 국가를 확인합니다.`, productHero: (name, focus) => `${name}을 사양에 따라 공급하며 ${focus}, 포장, 최종 용도 및 수출 요건을 검토합니다.`, productIntro: (name, focus) => [`${name}은 제조 공정과 목표 부품 성능에 따라 선택합니다.`, `견적 전에 ${focus}, 배치 규모, 문서 및 최종 용도를 확인합니다.`], productFaq: (name, focus) => [{ question: `${name} 문의에 필요한 정보는 무엇입니까?`, answer: `${focus}, 수량, 공정, 적용 분야 및 도착 국가를 알려주십시오.` }, { question: "맞춤 사양이 가능합니까?", answer: "기술 타당성, 배치 및 규정 요건에 따라 맞춤 옵션을 검토합니다." }],
    categories: { woven: "양방향 직조 원단", spread: "평탄한 CFRP 표면", ud: "방향성 보강재", yarn: "상류 원재료", prepreg: "수지 함침 보강재", chopped: "단섬유", powder: "밀드 섬유", strengthening: "토목 구조 보강 시스템" }, applications: { panels: "CFRP 패널", automotive: "자동차 복합재", sports: "스포츠 장비", civilDrone: "민간 드론 부품", infusion: "진공 인퓨전", pultrusion: "인발 성형", molding: "복합재 성형", plastics: "플라스틱 및 수지 보강", concrete: "콘크리트 및 교량 보강" },
    appTitles: { "automotive-carbon-fiber-parts": "자동차 부품용 탄소섬유 소재", "civil-uav-drone-components": "민간 드론용 탄소섬유 소재", "plastic-resin-reinforcement": "플라스틱 및 수지 보강용 탄소섬유", "structural-strengthening": "구조 보강용 CFRP 소재" }, appDescription: (title) => `${title}의 소재 선택, 사양 및 RFQ 정보 안내.`, appQuickAnswer: (title) => `${title}은 부품 형상, 하중, 공정, 표면 및 규정 요건에 따라 선택합니다.`, why: ["소재 형식은 제조 공정과 일치해야 합니다.", "견적 전에 사양을 확인합니다.", "최종 용도와 도착 국가를 검토합니다."], selection: ["부품과 공정부터 시작하십시오.", "하중 방향과 표면 요건을 정하십시오.", "치수, 수량, 문서 및 도착 국가를 확인하십시오."], rfq: ["부품 유형", "소재", "치수", "공정", "수량", "최종 용도", "도착 국가"], faq: [{ question: "적합한 소재는 어떻게 선택합니까?", answer: "부품 형상, 하중, 공정, 표면 및 목표 성능을 알려주십시오." }, { question: "최종 용도를 검토합니까?", answer: "예. 일부 고성능 소재는 최종 용도와 최종 사용자 검토가 필요합니다." }], labels: { Home: "홈", Products: "제품", Product: "제품", Documents: "문서", Spec: "사양", Review: "검토", Item: "항목", Material: "소재", Process: "공정", Width: "폭", Grade: "등급", Form: "형식", Package: "포장", "Typical value": "일반값", "Product type": "제품 유형", "End-use review": "최종 용도 검토" }, custom: "맞춤", typical: "일반", byReview: "검토 후 결정",
  },
  pl: {
    supplier: "dostawca materiałów z włókna węglowego", globalIndustries: "dla światowego przemysłu kompozytowego", quote: "Poproś o wycenę", catalog: "Pobierz katalog", byApplication: "Wybierz według zastosowania", format: "Format", process: "Proces", review: "Weryfikacja",
    productOverview: "Materiały i produkty z włókna węglowego na eksport.", productDescription: (name, focus) => `${name} do przemysłowej produkcji kompozytów. Przed ofertą potwierdzamy ${focus}, ilość, proces i kraj docelowy.`, productHero: (name, focus) => `${name} według specyfikacji z weryfikacją ${focus}, opakowania, zastosowania końcowego i wymagań eksportowych.`, productIntro: (name, focus) => [`${name} dobiera się do procesu produkcji i wymaganych parametrów części.`, `Przed ofertą potwierdzamy ${focus}, wielkość partii, dokumenty i zastosowanie końcowe.`], productFaq: (name, focus) => [{ question: `Jakie dane są potrzebne dla ${name}?`, answer: `Podaj ${focus}, ilość, proces, zastosowanie i kraj docelowy.` }, { question: "Czy możliwa jest specyfikacja niestandardowa?", answer: "Opcje niestandardowe są oceniane pod względem wykonalności, partii i zgodności." }],
    categories: { woven: "Tkanina dwukierunkowa", spread: "Płaska powierzchnia CFRP", ud: "Wzmocnienie kierunkowe", yarn: "Materiał bazowy", prepreg: "Zbrojenie impregnowane", chopped: "Krótkie włókno", powder: "Mielone włókno", strengthening: "System wzmocnień budowlanych" }, applications: { panels: "Panele CFRP", automotive: "Kompozyty samochodowe", sports: "Sprzęt sportowy", civilDrone: "Elementy dronów cywilnych", infusion: "Infuzja próżniowa", pultrusion: "Pultruzja", molding: "Formowanie kompozytów", plastics: "Wzmacnianie tworzyw i żywic", concrete: "Wzmacnianie betonu i mostów" }, appTitles: { "automotive-carbon-fiber-parts": "Materiały węglowe do części samochodowych", "civil-uav-drone-components": "Materiały węglowe do dronów cywilnych", "plastic-resin-reinforcement": "Włókno węglowe do tworzyw i żywic", "structural-strengthening": "Materiały CFRP do wzmocnień konstrukcyjnych" }, appDescription: (title) => `${title}: dobór materiału, specyfikacji i danych RFQ.`, appQuickAnswer: (title) => `${title} dobiera się według geometrii, obciążenia, procesu, powierzchni i zgodności.`, why: ["Format materiału musi odpowiadać procesowi.", "Specyfikację potwierdza się przed ofertą.", "Weryfikujemy zastosowanie końcowe i kraj docelowy."], selection: ["Zacznij od części i procesu.", "Określ kierunek obciążenia i powierzchnię.", "Potwierdź wymiary, ilość, dokumenty i miejsce dostawy."], rfq: ["Typ elementu", "Materiał", "Wymiary", "Proces", "Ilość", "Zastosowanie końcowe", "Kraj docelowy"], faq: [{ question: "Jak dobrać właściwy materiał?", answer: "Podaj geometrię, obciążenie, proces, powierzchnię i wymagane parametry." }, { question: "Czy sprawdzacie zastosowanie końcowe?", answer: "Tak. Niektóre materiały wymagają weryfikacji zastosowania i użytkownika końcowego." }], labels: { Home: "Strona główna", Products: "Produkty", Product: "Produkt", Documents: "Dokumenty", Spec: "Specyfikacja", Review: "Weryfikacja", Item: "Pozycja", Material: "Materiał", Process: "Proces", Width: "Szerokość", Grade: "Klasa", Form: "Forma", Package: "Opakowanie", "Typical value": "Wartość typowa", "Product type": "Typ produktu", "End-use review": "Weryfikacja zastosowania" }, custom: "niestandardowy", typical: "typowy", byReview: "po weryfikacji",
  },
  tr: {
    supplier: "karbon fiber malzeme tedarikçisi", globalIndustries: "küresel kompozit endüstrileri için", quote: "Teklif İste", catalog: "Kataloğu İndir", byApplication: "Uygulamaya göre bul", format: "Format", process: "Proses", review: "İnceleme",
    productOverview: "İhracat için karbon fiber malzeme ve ürünler.", productDescription: (name, focus) => `${name}, endüstriyel kompozit üretimi için sunulur. Tekliften önce ${focus}, miktar, proses ve hedef ülke doğrulanır.`, productHero: (name, focus) => `${name}, ${focus}, ambalaj, nihai kullanım ve ihracat gereksinimleri incelenerek şartnameye göre tedarik edilir.`, productIntro: (name, focus) => [`${name}, üretim prosesi ve hedef parça performansına göre seçilir.`, `Tekliften önce ${focus}, parti büyüklüğü, belgeler ve nihai kullanım doğrulanır.`], productFaq: (name, focus) => [{ question: `${name} talebi için hangi bilgiler gerekir?`, answer: `${focus}, miktar, proses, uygulama ve hedef ülkeyi belirtin.` }, { question: "Özel teknik özellik mümkün mü?", answer: "Özel seçenekler teknik uygulanabilirlik, parti ve uygunluk gereksinimlerine göre incelenir." }], categories: { woven: "Çift yönlü dokuma kumaş", spread: "Düz CFRP yüzey", ud: "Yönlü takviye", yarn: "Hammadde", prepreg: "Reçine emdirilmiş takviye", chopped: "Kısa elyaf", powder: "Öğütülmüş elyaf", strengthening: "Sivil yapısal güçlendirme sistemi" }, applications: { panels: "CFRP paneller", automotive: "Otomotiv kompozitleri", sports: "Spor ekipmanları", civilDrone: "Sivil drone bileşenleri", infusion: "Vakum infüzyon", pultrusion: "Pultrüzyon", molding: "Kompozit kalıplama", plastics: "Plastik ve reçine takviyesi", concrete: "Beton ve köprü güçlendirme" }, appTitles: { "automotive-carbon-fiber-parts": "Otomotiv parçaları için karbon fiber malzemeler", "civil-uav-drone-components": "Sivil drone bileşenleri için karbon fiber malzemeler", "plastic-resin-reinforcement": "Plastik ve reçine takviyesi için karbon fiber", "structural-strengthening": "Yapısal güçlendirme için CFRP malzemeler" }, appDescription: (title) => `${title}: malzeme seçimi, teknik özellik ve RFQ bilgileri.`, appQuickAnswer: (title) => `${title}; parça geometrisi, yük, proses, yüzey ve uygunluk gereksinimlerine göre seçilir.`, why: ["Malzeme formatı üretim prosesiyle uyumlu olmalıdır.", "Teknik özellik tekliften önce doğrulanır.", "Nihai kullanım ve hedef ülke incelenir."], selection: ["Parça ve prosesle başlayın.", "Yük yönünü ve yüzey gereksinimini tanımlayın.", "Ölçüleri, miktarı, belgeleri ve hedef ülkeyi doğrulayın."], rfq: ["Bileşen tipi", "Malzeme", "Ölçüler", "Proses", "Miktar", "Nihai kullanım", "Hedef ülke"], faq: [{ question: "Doğru malzeme nasıl seçilir?", answer: "Parça geometrisi, yük, proses, yüzey ve hedef performansı paylaşın." }, { question: "Nihai kullanım incelemesi var mı?", answer: "Evet. Bazı yüksek performanslı malzemeler için nihai kullanım ve son kullanıcı incelemesi gerekir." }], labels: { Home: "Ana Sayfa", Products: "Ürünler", Product: "Ürün", Documents: "Belgeler", Spec: "Teknik özellik", Review: "İnceleme", Item: "Kalem", Material: "Malzeme", Process: "Proses", Width: "Genişlik", Grade: "Sınıf", Form: "Form", Package: "Ambalaj", "Typical value": "Tipik değer", "Product type": "Ürün tipi", "End-use review": "Nihai kullanım incelemesi" }, custom: "özel", typical: "tipik", byReview: "incelemeye göre",
  },
  uk: {
    supplier: "постачальник матеріалів з вуглецевого волокна", globalIndustries: "для міжнародної композитної промисловості", quote: "Запросити пропозицію", catalog: "Завантажити каталог", byApplication: "Підібрати за застосуванням", format: "Формат", process: "Процес", review: "Перевірка",
    productOverview: "Матеріали та вироби з вуглецевого волокна для експорту.", productDescription: (name, focus) => `${name} для промислового виробництва композитів. Перед пропозицією підтверджуються ${focus}, кількість, процес і країна призначення.`, productHero: (name, focus) => `${name} постачається за специфікацією з перевіркою ${focus}, пакування, кінцевого використання та експортних вимог.`, productIntro: (name, focus) => [`${name} обирають відповідно до виробничого процесу та потрібних властивостей деталі.`, `Перед пропозицією підтверджуються ${focus}, розмір партії, документи й кінцеве використання.`], productFaq: (name, focus) => [{ question: `Які дані потрібні для запиту ${name}?`, answer: `Вкажіть ${focus}, кількість, процес, застосування та країну призначення.` }, { question: "Чи можлива індивідуальна специфікація?", answer: "Індивідуальні параметри розглядаються за технічною можливістю, партією та вимогами відповідності." }],
    categories: { woven: "Двонапрямна тканина", spread: "Плоска поверхня CFRP", ud: "Напрямлене армування", yarn: "Вихідний матеріал", prepreg: "Армування, просочене смолою", chopped: "Коротке волокно", powder: "Мелене волокно", strengthening: "Система цивільного підсилення", tube: "Намотана композитна труба" }, applications: { panels: "Панелі CFRP", automotive: "Автомобільні композити", sports: "Спортивне обладнання", civilDrone: "Компоненти цивільних дронів", infusion: "Вакуумна інфузія", pultrusion: "Пултрузія", molding: "Формування композитів", plastics: "Армування пластиків і смол", concrete: "Підсилення бетону та мостів" }, appTitles: { "automotive-carbon-fiber-parts": "Вуглецеві матеріали для автомобільних деталей", "civil-uav-drone-components": "Вуглецеві матеріали для цивільних дронів", "plastic-resin-reinforcement": "Вуглецеве волокно для пластиків і смол", "structural-strengthening": "Матеріали CFRP для конструкційного підсилення" }, appDescription: (title) => `${title}: вибір матеріалу, специфікації та дані для RFQ.`, appQuickAnswer: (title) => `${title} слід обирати за геометрією деталі, навантаженням, процесом, поверхнею та вимогами відповідності.`, why: ["Формат матеріалу має відповідати виробничому процесу.", "Специфікація підтверджується до пропозиції.", "Кінцеве використання та країна призначення перевіряються."], selection: ["Почніть із деталі та процесу.", "Визначте напрямок навантаження і вимоги до поверхні.", "Підтвердьте розміри, кількість, документи та країну призначення."], rfq: ["Тип компонента", "Матеріал", "Розміри", "Процес", "Кількість", "Кінцеве використання", "Країна призначення"], faq: [{ question: "Як обрати відповідний матеріал?", answer: "Надайте геометрію, навантаження, процес, поверхню та потрібні властивості." }, { question: "Чи проводиться перевірка кінцевого використання?", answer: "Так. Для деяких високоефективних матеріалів потрібна перевірка кінцевого використання та кінцевого користувача." }], labels: { Home: "Головна", Products: "Продукція", Product: "Продукт", Documents: "Документи", Spec: "Специфікація", Review: "Перевірка", Item: "Позиція", Material: "Матеріал", Process: "Процес", Width: "Ширина", Grade: "Марка", Form: "Форма", Package: "Пакування", "Typical value": "Типове значення", "Product type": "Тип продукту", "End-use review": "Перевірка кінцевого використання", Email: "Ел. пошта", Phone: "Телефон", WhatsApp: "WhatsApp" }, custom: "індивідуально", typical: "типове", byReview: "за результатами перевірки",
  },
  vi: {
    supplier: "nhà cung cấp vật liệu sợi carbon", globalIndustries: "cho ngành composite toàn cầu", quote: "Yêu cầu báo giá", catalog: "Tải catalog", byApplication: "Chọn theo ứng dụng", format: "Dạng vật liệu", process: "Quy trình", review: "Xem xét",
    productOverview: "Vật liệu và sản phẩm sợi carbon cho xuất khẩu.", productDescription: (name, focus) => `${name} cho sản xuất composite công nghiệp. ${focus}, số lượng, quy trình và quốc gia đến được xác nhận trước khi báo giá.`, productHero: (name, focus) => `${name} được cung cấp theo thông số kỹ thuật, có xem xét ${focus}, đóng gói, mục đích sử dụng cuối và yêu cầu xuất khẩu.`, productIntro: (name, focus) => [`${name} được chọn theo quy trình sản xuất và hiệu năng cần thiết của chi tiết.`, `Trước khi báo giá, cần xác nhận ${focus}, quy mô lô, tài liệu và mục đích sử dụng cuối.`], productFaq: (name, focus) => [{ question: `Cần cung cấp thông tin gì khi hỏi ${name}?`, answer: `Vui lòng nêu ${focus}, số lượng, quy trình, ứng dụng và quốc gia đến.` }, { question: "Có thể đặt theo thông số riêng không?", answer: "Các lựa chọn theo yêu cầu được xem xét dựa trên tính khả thi kỹ thuật, lô hàng và yêu cầu tuân thủ." }],
    categories: { woven: "Vải hai phương", spread: "Bề mặt CFRP phẳng", ud: "Gia cường định hướng", yarn: "Vật liệu đầu vào", prepreg: "Gia cường tẩm nhựa", chopped: "Sợi ngắn", powder: "Sợi nghiền", strengthening: "Hệ gia cường dân dụng", tube: "Ống composite quấn" }, applications: { panels: "Tấm CFRP", automotive: "Composite ô tô", sports: "Thiết bị thể thao", civilDrone: "Chi tiết drone dân dụng", infusion: "Truyền nhựa chân không", pultrusion: "Pultrusion", molding: "Tạo hình composite", plastics: "Gia cường nhựa và resin", concrete: "Gia cường bê tông và cầu" }, appTitles: { "automotive-carbon-fiber-parts": "Vật liệu carbon cho chi tiết ô tô", "civil-uav-drone-components": "Vật liệu carbon cho drone dân dụng", "plastic-resin-reinforcement": "Sợi carbon cho nhựa và resin", "structural-strengthening": "Vật liệu CFRP cho gia cường kết cấu" }, appDescription: (title) => `${title}: lựa chọn vật liệu, thông số và dữ liệu RFQ.`, appQuickAnswer: (title) => `${title} nên được lựa chọn theo hình học chi tiết, tải trọng, quy trình, bề mặt và yêu cầu tuân thủ.`, why: ["Dạng vật liệu phải phù hợp với quy trình sản xuất.", "Thông số được xác nhận trước báo giá.", "Mục đích sử dụng cuối và quốc gia đến được xem xét."], selection: ["Bắt đầu từ chi tiết và quy trình.", "Xác định hướng tải và yêu cầu bề mặt.", "Xác nhận kích thước, số lượng, tài liệu và quốc gia đến."], rfq: ["Loại chi tiết", "Vật liệu", "Kích thước", "Quy trình", "Số lượng", "Mục đích sử dụng cuối", "Quốc gia đến"], faq: [{ question: "Làm thế nào để chọn vật liệu phù hợp?", answer: "Cung cấp hình học chi tiết, tải trọng, quy trình, bề mặt và hiệu năng mục tiêu." }, { question: "Có xem xét mục đích sử dụng cuối không?", answer: "Có. Một số vật liệu hiệu năng cao cần được xem xét về mục đích sử dụng cuối và người dùng cuối." }], labels: { Home: "Trang chủ", Products: "Sản phẩm", Product: "Sản phẩm", Documents: "Tài liệu", Spec: "Thông số", Review: "Xem xét", Item: "Hạng mục", Material: "Vật liệu", Process: "Quy trình", Width: "Khổ rộng", Grade: "Cấp sợi", Form: "Dạng", Package: "Đóng gói", "Typical value": "Giá trị điển hình", "Product type": "Loại sản phẩm", "End-use review": "Xem xét mục đích sử dụng cuối", Email: "Email", Phone: "Điện thoại", WhatsApp: "WhatsApp" }, custom: "theo yêu cầu", typical: "điển hình", byReview: "theo xem xét",
  },
  th: {
    supplier: "ผู้จัดจำหน่ายวัสดุคาร์บอนไฟเบอร์", globalIndustries: "สำหรับอุตสาหกรรมคอมโพสิตทั่วโลก", quote: "ขอใบเสนอราคา", catalog: "ดาวน์โหลดแคตตาล็อก", byApplication: "เลือกตามการใช้งาน", format: "รูปแบบ", process: "กระบวนการ", review: "การตรวจสอบ",
    productOverview: "วัสดุและผลิตภัณฑ์คาร์บอนไฟเบอร์สำหรับการส่งออก", productDescription: (name, focus) => `${name} สำหรับการผลิตคอมโพสิตอุตสาหกรรม โดยยืนยัน ${focus} ปริมาณ กระบวนการ และประเทศปลายทางก่อนเสนอราคา`, productHero: (name, focus) => `${name} จัดจำหน่ายตามข้อมูลจำเพาะ พร้อมตรวจสอบ ${focus} บรรจุภัณฑ์ การใช้งานปลายทาง และข้อกำหนดการส่งออก`, productIntro: (name, focus) => [`เลือก ${name} ตามกระบวนการผลิตและสมรรถนะที่ต้องการของชิ้นส่วน`, `ก่อนเสนอราคาจะยืนยัน ${focus} ขนาดล็อต เอกสาร และการใช้งานปลายทาง`], productFaq: (name, focus) => [{ question: `ต้องใช้ข้อมูลใดเพื่อสอบถาม ${name}?`, answer: `โปรดระบุ ${focus} ปริมาณ กระบวนการ การใช้งาน และประเทศปลายทาง` }, { question: "กำหนดข้อมูลจำเพาะเฉพาะได้หรือไม่?", answer: "ตัวเลือกตามสั่งจะพิจารณาตามความเป็นไปได้ทางเทคนิค ล็อต และข้อกำหนดการปฏิบัติตาม" }],
    categories: { woven: "ผ้าสองทิศทาง", spread: "พื้นผิว CFRP แบบเรียบ", ud: "วัสดุเสริมแรงตามทิศทาง", yarn: "วัตถุดิบต้นน้ำ", prepreg: "วัสดุเสริมแรงชุบเรซิน", chopped: "เส้นใยสั้น", powder: "เส้นใยบด", strengthening: "ระบบเสริมกำลังงานโยธา", tube: "ท่อคอมโพสิตพัน" }, applications: { panels: "แผง CFRP", automotive: "คอมโพสิตยานยนต์", sports: "อุปกรณ์กีฬา", civilDrone: "ชิ้นส่วนโดรนพลเรือน", infusion: "การอินฟิวชันสุญญากาศ", pultrusion: "การดึงขึ้นรูป", molding: "การขึ้นรูปคอมโพสิต", plastics: "การเสริมพลาสติกและเรซิน", concrete: "การเสริมกำลังคอนกรีตและสะพาน" }, appTitles: { "automotive-carbon-fiber-parts": "วัสดุคาร์บอนสำหรับชิ้นส่วนยานยนต์", "civil-uav-drone-components": "วัสดุคาร์บอนสำหรับโดรนพลเรือน", "plastic-resin-reinforcement": "คาร์บอนไฟเบอร์สำหรับพลาสติกและเรซิน", "structural-strengthening": "วัสดุ CFRP สำหรับเสริมกำลังโครงสร้าง" }, appDescription: (title) => `${title}: การเลือกวัสดุ ข้อมูลจำเพาะ และข้อมูล RFQ`, appQuickAnswer: (title) => `ควรเลือก ${title} ตามรูปทรงชิ้นส่วน ภาระ กระบวนการ พื้นผิว และข้อกำหนดการปฏิบัติตาม`, why: ["รูปแบบวัสดุต้องสอดคล้องกับกระบวนการผลิต", "ยืนยันข้อมูลจำเพาะก่อนเสนอราคา", "ตรวจสอบการใช้งานปลายทางและประเทศปลายทาง"], selection: ["เริ่มจากชิ้นส่วนและกระบวนการ", "กำหนดทิศทางภาระและข้อกำหนดพื้นผิว", "ยืนยันขนาด ปริมาณ เอกสาร และประเทศปลายทาง"], rfq: ["ประเภทชิ้นส่วน", "วัสดุ", "ขนาด", "กระบวนการ", "ปริมาณ", "การใช้งานปลายทาง", "ประเทศปลายทาง"], faq: [{ question: "เลือกวัสดุที่เหมาะสมอย่างไร?", answer: "แจ้งรูปทรงชิ้นส่วน ภาระ กระบวนการ พื้นผิว และสมรรถนะเป้าหมาย" }, { question: "มีการตรวจสอบการใช้งานปลายทางหรือไม่?", answer: "มี วัสดุสมรรถนะสูงบางชนิดต้องมีการตรวจสอบการใช้งานปลายทางและผู้ใช้ปลายทาง" }], labels: { Home: "หน้าแรก", Products: "ผลิตภัณฑ์", Product: "ผลิตภัณฑ์", Documents: "เอกสาร", Spec: "ข้อมูลจำเพาะ", Review: "การตรวจสอบ", Item: "รายการ", Material: "วัสดุ", Process: "กระบวนการ", Width: "ความกว้าง", Grade: "เกรด", Form: "รูปแบบ", Package: "บรรจุภัณฑ์", "Typical value": "ค่าทั่วไป", "Product type": "ประเภทผลิตภัณฑ์", "End-use review": "การตรวจสอบการใช้งานปลายทาง", Email: "อีเมล", Phone: "โทรศัพท์", WhatsApp: "WhatsApp" }, custom: "ตามสั่ง", typical: "ทั่วไป", byReview: "ตามการตรวจสอบ",
  },
};

const productDefinitions: Record<ProductSlug, { category: keyof Pack["categories"]; focus: string; apps: Array<keyof Pack["applications"]> }> = {
  "carbon-fiber-woven-fabric": { category: "woven", focus: "1K / 3K / 6K / 12K, plain / twill, g/m2, width", apps: ["panels", "automotive", "sports", "civilDrone"] },
  "spread-tow-carbon-fiber-fabric": { category: "spread", focus: "8x8mm / 10x10mm, tow, g/m2, width", apps: ["panels", "automotive", "sports"] },
  "carbon-fiber-ud-fabric": { category: "ud", focus: "documented 200 and 300 g/m2 references, width, fiber direction, other constructions by review", apps: ["pultrusion", "concrete", "infusion"] },
  "carbon-fiber-yarn-and-tow": { category: "yarn", focus: "1K / 3K / 6K / 12K / 24K / 50K, T300 / T700, sizing", apps: ["pultrusion", "infusion", "molding"] },
  "prepreg-carbon-fiber-materials": { category: "prepreg", focus: "woven / UD / spread tow, resin content, cure profile", apps: ["automotive", "sports", "molding"] },
  "chopped-carbon-fiber": { category: "chopped", focus: "3 mm / 6 mm / 12 mm, sizing, matrix", apps: ["plastics", "automotive"] },
  "milled-carbon-fiber-powder": { category: "powder", focus: "mean length, fiber diameter, mesh, matrix", apps: ["plastics", "molding"] },
  "carbon-fiber-multiaxial-ncf-fabric": { category: "woven", focus: "UD / biaxial / triaxial / quadriaxial, 0 / 90 / +45 / -45 degrees, g/m2, width", apps: ["infusion", "automotive", "panels"] },
  "3k-carbon-fiber-laminate-sheet": { category: "strengthening", focus: "3K twill surface, thickness, panel dimensions, matte / glossy finish, CNC drawing", apps: ["panels", "automotive", "sports"] },
  "structural-strengthening-system": { category: "strengthening", focus: "UD fabric, pultruded CFRP plate, epoxy resin, project dimensions", apps: ["concrete", "pultrusion"] },
  "filament-wound-carbon-fiber-tube": { category: "tube", focus: "diameter, wall thickness, winding angle, resin system, tolerance", apps: ["molding", "automotive", "sports"] },
  "fiber-optic-cable-drum": { category: "yarn", focus: "fiber length, drum series, fiber specification, integration requirement, deployment environment", apps: ["molding"] },
};

const focusTerms: Record<ExtendedLocale, Record<string, string>> = {
  ru: { "project dimensions": "размеры проекта", "pultruded CFRP plate": "пултрузионная пластина CFRP", "fiber direction": "направление волокна", "resin content": "содержание смолы", "cure profile": "режим отверждения", "mean length": "средняя длина", "fiber diameter": "диаметр волокна", "epoxy resin": "эпоксидная смола", "UD fabric": "ткань UD", width: "ширина", sizing: "замасливатель", matrix: "матрица", mesh: "размер частиц", plain: "полотняное плетение", twill: "саржевое плетение", woven: "ткань" },
  ar: { "project dimensions": "أبعاد المشروع", "pultruded CFRP plate": "صفيحة CFRP مسحوبة", "fiber direction": "اتجاه الألياف", "resin content": "محتوى الراتنج", "cure profile": "برنامج المعالجة", "mean length": "متوسط الطول", "fiber diameter": "قطر الألياف", "epoxy resin": "راتنج إيبوكسي", "UD fabric": "نسيج UD", width: "العرض", sizing: "مادة المعالجة السطحية", matrix: "المصفوفة", mesh: "حجم الجسيمات", plain: "نسج سادة", twill: "نسج قطني", woven: "منسوج" },
  fr: { "project dimensions": "dimensions du projet", "pultruded CFRP plate": "plaque CFRP pultrudée", "fiber direction": "direction des fibres", "resin content": "teneur en résine", "cure profile": "cycle de cuisson", "mean length": "longueur moyenne", "fiber diameter": "diamètre des fibres", "epoxy resin": "résine époxy", "UD fabric": "tissu UD", width: "largeur", sizing: "ensimage", matrix: "matrice", mesh: "granulométrie", plain: "toile", twill: "sergé", woven: "tissé" },
  ko: { "project dimensions": "프로젝트 치수", "pultruded CFRP plate": "인발 CFRP 판", "fiber direction": "섬유 방향", "resin content": "수지 함량", "cure profile": "경화 조건", "mean length": "평균 길이", "fiber diameter": "섬유 직경", "epoxy resin": "에폭시 수지", "UD fabric": "UD 원단", width: "폭", sizing: "사이징", matrix: "매트릭스", mesh: "입도", plain: "평직", twill: "능직", woven: "직조" },
  pl: { "project dimensions": "wymiary projektu", "pultruded CFRP plate": "pultrudowana płyta CFRP", "fiber direction": "kierunek włókien", "resin content": "zawartość żywicy", "cure profile": "profil utwardzania", "mean length": "średnia długość", "fiber diameter": "średnica włókna", "epoxy resin": "żywica epoksydowa", "UD fabric": "tkanina UD", width: "szerokość", sizing: "preparacja powierzchniowa", matrix: "matryca", mesh: "wielkość cząstek", plain: "splot płócienny", twill: "splot diagonalny", woven: "tkanina" },
  tr: { "project dimensions": "proje ölçüleri", "pultruded CFRP plate": "pultrüzyon CFRP plaka", "fiber direction": "elyaf yönü", "resin content": "reçine oranı", "cure profile": "kür profili", "mean length": "ortalama uzunluk", "fiber diameter": "elyaf çapı", "epoxy resin": "epoksi reçine", "UD fabric": "UD kumaş", width: "genişlik", sizing: "sizing", matrix: "matris", mesh: "parçacık boyutu", plain: "düz dokuma", twill: "dimi dokuma", woven: "dokuma" },
  uk: { "documented 200 and 300 g/m2 references": "документовані довідкові дані 200 і 300 g/m²", "other constructions by review": "інші конструкції після перевірки", "3K twill surface": "саржева поверхня 3K", "panel dimensions": "розміри листа", "matte / glossy finish": "матове / глянцеве оздоблення", "CNC drawing": "креслення CNC", "project dimensions": "розміри проєкту", "pultruded CFRP plate": "пултрузійна пластина CFRP", "fiber direction": "напрямок волокон", "resin content": "вміст смоли", "cure profile": "режим затвердіння", "mean length": "середня довжина", "fiber diameter": "діаметр волокна", "epoxy resin": "епоксидна смола", "UD fabric": "тканина UD", thickness: "товщина", width: "ширина", sizing: "апрет", matrix: "матриця", mesh: "розмір частинок", plain: "полотняне переплетення", twill: "саржеве переплетення", woven: "тканий" },
  vi: { "documented 200 and 300 g/m2 references": "tài liệu tham chiếu 200 và 300 g/m²", "other constructions by review": "cấu trúc khác theo xem xét", "3K twill surface": "bề mặt dệt chéo 3K", "panel dimensions": "kích thước tấm", "matte / glossy finish": "bề mặt mờ / bóng", "CNC drawing": "bản vẽ CNC", "project dimensions": "kích thước dự án", "pultruded CFRP plate": "tấm CFRP pultrusion", "fiber direction": "hướng sợi", "resin content": "hàm lượng nhựa", "cure profile": "chu trình đóng rắn", "mean length": "chiều dài trung bình", "fiber diameter": "đường kính sợi", "epoxy resin": "nhựa epoxy", "UD fabric": "vải UD", thickness: "độ dày", width: "khổ rộng", sizing: "sizing", matrix: "nền", mesh: "kích thước hạt", plain: "dệt trơn", twill: "dệt chéo", woven: "dệt" },
  th: { "documented 200 and 300 g/m2 references": "ข้อมูลอ้างอิง 200 และ 300 g/m² ที่มีเอกสาร", "other constructions by review": "โครงสร้างอื่นตามการตรวจสอบ", "3K twill surface": "พื้นผิวทอลายทแยง 3K", "panel dimensions": "ขนาดแผ่น", "matte / glossy finish": "ผิวด้าน / ผิวเงา", "CNC drawing": "แบบ CNC", "project dimensions": "ขนาดโครงการ", "pultruded CFRP plate": "แผ่น CFRP ดึงขึ้นรูป", "fiber direction": "ทิศทางเส้นใย", "resin content": "ปริมาณเรซิน", "cure profile": "โปรไฟล์การบ่ม", "mean length": "ความยาวเฉลี่ย", "fiber diameter": "เส้นผ่านศูนย์กลางเส้นใย", "epoxy resin": "เรซินอีพ็อกซี", "UD fabric": "ผ้า UD", thickness: "ความหนา", width: "ความกว้าง", sizing: "sizing", matrix: "เมทริกซ์", mesh: "ขนาดอนุภาค", plain: "ทอลายขัด", twill: "ทอลายทแยง", woven: "ทอ" },
};

const filamentWoundTubeTranslations: Record<ExtendedLocale, {
  category: string;
  focus: Record<string, string>;
}> = {
  ru: { category: "Намотанная композитная труба", focus: { diameter: "диаметр", "wall thickness": "толщина стенки", "winding angle": "угол намотки", "resin system": "система смолы", tolerance: "допуск" } },
  ar: { category: "أنبوب مركب ملفوف", focus: { diameter: "القطر", "wall thickness": "سماكة الجدار", "winding angle": "زاوية اللف", "resin system": "نظام الراتنج", tolerance: "التفاوت" } },
  fr: { category: "Tube composite enroulé", focus: { diameter: "diamètre", "wall thickness": "épaisseur de paroi", "winding angle": "angle d'enroulement", "resin system": "système de résine", tolerance: "tolérance" } },
  ko: { category: "와인딩 복합재 튜브", focus: { diameter: "직경", "wall thickness": "벽 두께", "winding angle": "와인딩 각도", "resin system": "수지 시스템", tolerance: "공차" } },
  pl: { category: "Nawijana rura kompozytowa", focus: { diameter: "średnica", "wall thickness": "grubość ścianki", "winding angle": "kąt nawijania", "resin system": "system żywiczny", tolerance: "tolerancja" } },
  tr: { category: "Filament sarım kompozit tüp", focus: { diameter: "çap", "wall thickness": "et kalınlığı", "winding angle": "sarım açısı", "resin system": "reçine sistemi", tolerance: "tolerans" } },
  uk: { category: "Намотана композитна труба", focus: { diameter: "діаметр", "wall thickness": "товщина стінки", "winding angle": "кут намотування", "resin system": "система смоли", tolerance: "допуск" } },
  vi: { category: "Ống composite quấn", focus: { diameter: "đường kính", "wall thickness": "độ dày thành", "winding angle": "góc quấn", "resin system": "hệ nhựa", tolerance: "dung sai" } },
  th: { category: "ท่อคอมโพสิตพันฟิลาเมนต์", focus: { diameter: "เส้นผ่านศูนย์กลาง", "wall thickness": "ความหนาผนัง", "winding angle": "มุมการพัน", "resin system": "ระบบเรซิน", tolerance: "ค่าความคลาดเคลื่อน" } },
};

const dualCoreCategoryTranslations: Record<ExtendedLocale, Record<"carbon-fiber-multiaxial-ncf-fabric" | "3k-carbon-fiber-laminate-sheet", string>> = {
  ru: { "carbon-fiber-multiaxial-ncf-fabric": "Мультиаксиальная ткань NCF", "3k-carbon-fiber-laminate-sheet": "Ламинированная плита CFRP" },
  ar: { "carbon-fiber-multiaxial-ncf-fabric": "نسيج متعدد المحاور NCF", "3k-carbon-fiber-laminate-sheet": "صفيحة CFRP مصفحة" },
  fr: { "carbon-fiber-multiaxial-ncf-fabric": "Tissu multiaxial NCF", "3k-carbon-fiber-laminate-sheet": "Plaque stratifiée CFRP" },
  ko: { "carbon-fiber-multiaxial-ncf-fabric": "다축 NCF 원단", "3k-carbon-fiber-laminate-sheet": "CFRP 적층판" },
  pl: { "carbon-fiber-multiaxial-ncf-fabric": "Multiaxialna tkanina NCF", "3k-carbon-fiber-laminate-sheet": "Płyta laminowana CFRP" },
  tr: { "carbon-fiber-multiaxial-ncf-fabric": "Çok eksenli NCF kumaş", "3k-carbon-fiber-laminate-sheet": "CFRP laminat plaka" },
  uk: { "carbon-fiber-multiaxial-ncf-fabric": "Мультиаксіальна тканина NCF", "3k-carbon-fiber-laminate-sheet": "Ламінована пластина CFRP" },
  vi: { "carbon-fiber-multiaxial-ncf-fabric": "Vải NCF đa trục", "3k-carbon-fiber-laminate-sheet": "Tấm laminate CFRP" },
  th: { "carbon-fiber-multiaxial-ncf-fabric": "ผ้า NCF หลายแกน", "3k-carbon-fiber-laminate-sheet": "แผ่นลามิเนต CFRP" },
};

type DualCoreSlug = "carbon-fiber-multiaxial-ncf-fabric" | "3k-carbon-fiber-laminate-sheet";
type DualCoreCopy = Pick<LocalizedProductContent, "description" | "heroCopy" | "intro" | "faqs"> & {
  seoDescription: string;
};

const dualCoreProductCopy: Partial<Record<ExtendedLocale, Record<DualCoreSlug, DualCoreCopy>>> = {
  ru: {
    "carbon-fiber-multiaxial-ncf-fabric": {
      description: "Мультиаксиальная углеродная ткань NCF в исполнениях UD, двухосном (biaxial), трехосном (triaxial) и четырехосном (quadriaxial) для многовекторного армирования композитов.",
      heroCopy: "Доступны TDS для двухосной ткани NCF 300gsm в конструкциях +45°/-45° и 0°/90°, а также для 600gsm +45°/-45°. Другие архитектуры и направления проверяются по запросу вместе с шириной, рулоном, прошивкой, процессом со смолой и конечным применением.",
      seoDescription: "Поставщик двухосной углеродной ткани NCF 300gsm и 600gsm для вакуумной инфузии, RTM и промышленных композитов; другие архитектуры по запросу.",
      intro: ["NCF фиксирует прямые слои углеродного волокна в заданных направлениях с помощью прошивки.", "Документация охватывает двухосную ткань 300gsm в конструкциях +45°/-45° и 0°/90°, а также 600gsm +45°/-45°. Для запроса укажите архитектуру, направления, g/m², ширину, рулон, прошивку, процесс, количество и конечное применение."],
      faqs: [{ question: "Чем двухосная (biaxial) ткань отличается от четырехосной (quadriaxial)?", answer: "Двухосная конструкция объединяет два направления, например +45°/-45°. Четырехосная обычно объединяет 0°, +45°, 90° и -45°. Выбор определяется схемой укладки." }, { question: "Какие TDS доступны на странице?", answer: "Можно скачать TDS для двухосной ткани NCF 300gsm в конструкциях +45°/-45° и 0°/90°, а также TDS для 600gsm +45°/-45°. Другие конструкции и параметры подтверждаются отдельно для заказа." }, { question: "Чем углеродная ткань NCF отличается от тканого полотна?", answer: "В NCF прямые слои волокон удерживаются прошивкой без обычного переплетения основы и утка. В тканом полотне нити пересекаются по схеме переплетения. Выбор зависит от направлений нагрузки, драпируемости, схемы ламината и процесса со смолой." }, { question: "Какие данные нужны для предложения?", answer: "Укажите конструкцию, направления, g/m², ширину, длину рулона, прошивку, процесс со смолой, количество и конечное применение." }],
    },
    "3k-carbon-fiber-laminate-sheet": {
      description: "Ламинированный лист и плита из углепластика с видимой саржевой поверхностью 3K (3K twill) и матовой, глянцевой, шлифованной или peel-ply отделкой для панелей и деталей с ЧПУ-обработкой (CNC).",
      heroCopy: "Толщина, размер, внутренняя укладка, плоскостность, поверхность, допуски и чертеж ЧПУ/CNC проверяются для каждого заказа; продукт не следует путать с пултрузионной пластиной CFRP для усиления.",
      seoDescription: "Поставщик листов и плит из углепластика 3K с матовой или глянцевой поверхностью и ЧПУ-обработкой (CNC) по чертежу.",
      intro: ["Плита 3K сочетает видимую тканую поверхность с внутренней укладкой, определяемой по толщине и назначению детали.", "Для предложения требуются размеры, толщина, поверхность, допуски, чертеж, количество и конечное применение."],
      faqs: [{ question: "Это то же самое, что пултрузионная пластина для усиления?", answer: "Нет. Здесь рассматривается ламинированная плита 3K для панелей и деталей. Пултрузионная пластина относится к отдельной системе конструкционного усиления." }, { question: "Какой технический документ доступен?", answer: "На странице доступно англоязычное руководство по спецификации и подготовке RFQ. Это не TDS с подтвержденными характеристиками конкретной партии; окончательные параметры согласуются для заказа." }, { question: "Возможна обработка по чертежу?", answer: "Да. Отправьте DXF, STEP или размерный чертеж с допусками, отверстиями, поверхностью и количеством для проверки." }, { question: "Какие параметры указать для предложения на плиту 3K?", answer: "Укажите толщину, длину и ширину, матовую или глянцевую поверхность, требования к плоскостности и допускам, отверстия и обработку кромок, формат чертежа, количество и конечное применение. Возможность изготовления подтверждается после проверки заказа." }],
    },
  },
  ar: {
    "carbon-fiber-multiaxial-ncf-fabric": {
      description: "نسيج كربون متعدد المحاور NCF بتراكيب UD وثنائية وثلاثية ورباعية المحاور لتقوية المواد المركبة في اتجاهات متعددة.",
      heroCopy: "تتوفر مستندات TDS باللغة الإنجليزية لنسيج NCF ثنائي المحاور 300gsm بتركيبي +45°/-45° و0°/90°، ولنمط 600gsm +45°/-45°. تُراجع البنى والاتجاهات الأخرى ضمن RFQ مع العرض وطول اللفة وخيط التثبيت وعملية الراتنج والاستخدام النهائي.",
      seoDescription: "مورد نسيج كربون متعدد المحاور NCF بوزن 300gsm و600gsm للتسريب بالتفريغ وRTM والهياكل المركبة الصناعية.",
      intro: ["يثبت NCF طبقات ألياف الكربون المستقيمة في اتجاهات محددة بواسطة خيط تثبيت.", "تغطي الوثائق NCF ثنائي المحاور 300gsm بتركيبي +45°/-45° و0°/90°، إضافة إلى 600gsm +45°/-45°. حدد في RFQ البنية وg/m² والعرض واللفة والخياطة وعملية الراتنج والكمية والاستخدام النهائي."],
      faqs: [{ question: "ما الفرق بين النسيج ثنائي ورباعي المحاور؟", answer: "يجمع النسيج ثنائي المحاور اتجاهين مثل +45°/-45°، بينما يجمع رباعي المحاور عادة 0° و+45° و90° و-45°. يعتمد الاختيار على تصميم الرقائق." }, { question: "ما مستندات TDS المتوفرة لنسيج NCF؟", answer: "يمكن تنزيل مستندات TDS باللغة الإنجليزية لنسيج NCF ثنائي المحاور 300gsm بتركيبي +45°/-45° و0°/90°، ولنمط 600gsm +45°/-45°. تُؤكد البنى الأخرى بشكل منفصل لكل طلب." }, { question: "ما البيانات المطلوبة لعرض السعر؟", answer: "حدد البنية والاتجاهات وg/m² والعرض وطول اللفة وخيط التثبيت وعملية الراتنج والكمية والاستخدام النهائي." }],
    },
    "3k-carbon-fiber-laminate-sheet": {
      description: "صفيحة CFRP مصفحة بسطح منسوج 3K وتشطيب مطفي أو لامع أو مصنفر أو peel-ply للألواح والقطع المشغلة CNC.",
      heroCopy: "تُراجع السماكة والأبعاد وترتيب الطبقات الداخلية والاستواء والتشطيب والتفاوتات ورسم CNC لكل طلب؛ ولا تُخلط هذه الصفيحة مع صفيحة CFRP المسحوبة للتقوية الإنشائية.",
      seoDescription: "مورد صفائح ألياف كربون 3K بتشطيب مطفي أو لامع وتشغيل CNC حسب الرسم.",
      intro: ["تجمع صفيحة 3K بين سطح منسوج ظاهر وطبقات داخلية تُحدد حسب السماكة واستخدام القطعة.", "لطلب السعر، أرسل الأبعاد والسماكة والتشطيب والتفاوتات والرسم والكمية والاستخدام النهائي."],
      faqs: [{ question: "هل هي نفس صفيحة CFRP المسحوبة للتقوية؟", answer: "لا. هذه صفيحة مصفحة 3K للألواح والقطع، أما الصفيحة المسحوبة فتتبع نظام تقوية إنشائية منفصل." }, { question: "ما الوثيقة الفنية المتاحة؟", answer: "يتوفر دليل باللغة الإنجليزية لإعداد المواصفات وRFQ. هذا الدليل ليس TDS بخصائص مؤكدة لدفعة محددة؛ وتُتفق المعلمات النهائية لكل طلب." }, { question: "هل يمكن التشغيل حسب الرسم؟", answer: "نعم. أرسل ملف DXF أو STEP أو رسماً بأبعاد وتفاوتات وفتحات وتشطيب وكمية للمراجعة." }],
    },
  },
  fr: {
    "carbon-fiber-multiaxial-ncf-fabric": {
      description: "Tissu carbone multiaxial NCF en architectures UD, biaxiale, triaxiale et quadriaxiale pour le renfort multidirectionnel des composites.",
      heroCopy: "Des TDS en anglais sont disponibles pour le NCF biaxial 300gsm en +45°/-45° et 0°/90°, ainsi que pour le 600gsm +45°/-45°. Les autres architectures et orientations sont étudiées par RFQ avec largeur, rouleau, couture, procédé résine et usage final.",
      seoDescription: "Fournisseur de tissu carbone multiaxial NCF 300gsm et 600gsm pour infusion sous vide, RTM et structures composites industrielles.",
      intro: ["Le NCF maintient des couches droites de fibre de carbone dans des orientations définies au moyen d'une couture.", "La documentation couvre le NCF biaxial 300gsm en +45°/-45° et 0°/90°, ainsi que le 600gsm +45°/-45°. Pour le devis, précisez architecture, g/m², largeur, rouleau, couture, procédé, quantité et usage final."],
      faqs: [{ question: "Quelle différence entre biaxial et quadriaxial ?", answer: "Le biaxial combine deux orientations, par exemple +45°/-45°. Le quadriaxial combine généralement 0°, +45°, 90° et -45°. Le choix suit le plan de stratification." }, { question: "Quels TDS NCF sont disponibles ?", answer: "Vous pouvez télécharger des TDS en anglais pour le NCF biaxial 300gsm en +45°/-45° et 0°/90°, ainsi que pour le 600gsm +45°/-45°. Les autres constructions sont confirmées séparément pour la commande." }, { question: "Quelles données fournir pour un devis ?", answer: "Indiquez architecture, orientations, g/m², largeur, longueur de rouleau, couture, procédé résine, quantité et usage final." }],
    },
    "3k-carbon-fiber-laminate-sheet": {
      description: "Plaque stratifiée CFRP avec surface sergé 3K et finition mate, brillante, poncée ou peel-ply pour panneaux et pièces usinées CNC.",
      heroCopy: "Épaisseur, dimensions, stratification interne, planéité, finition, tolérances et plan CNC sont étudiés pour chaque commande ; cette plaque est distincte d'une lamelle CFRP pultrudée de renforcement.",
      seoDescription: "Fournisseur de plaques carbone 3K mates ou brillantes avec dimensions sur mesure et usinage CNC sur plan.",
      intro: ["La plaque 3K associe une surface tissée visible à une stratification interne définie selon l'épaisseur et la pièce.", "Pour le devis, précisez dimensions, épaisseur, finition, tolérances, plan, quantité et usage final."],
      faqs: [{ question: "Est-ce une lamelle pultrudée de renforcement ?", answer: "Non. Cette page concerne une plaque stratifiée 3K pour panneaux et pièces. La lamelle pultrudée appartient au système de renforcement structurel." }, { question: "Quel document technique est disponible ?", answer: "La page propose un guide en anglais pour la spécification et la préparation du RFQ. Il ne s'agit pas d'un TDS avec propriétés confirmées pour un lot précis ; les paramètres finaux sont convenus pour la commande." }, { question: "L'usinage sur plan est-il possible ?", answer: "Oui. Envoyez un fichier DXF, STEP ou un plan coté avec tolérances, perçages, finition et quantité." }],
    },
  },
  ko: {
    "carbon-fiber-multiaxial-ncf-fabric": {
      description: "복합재의 다방향 보강을 위한 UD, 이축, 삼축 및 사축 구조의 다축 탄소섬유 NCF 원단입니다.",
      heroCopy: "300gsm 이축 NCF의 +45°/-45° 및 0°/90° 구조와 600gsm +45°/-45° 구조에 대한 영문 TDS를 제공합니다. 기타 구조와 방향은 폭, 롤 길이, 스티치, 수지 공정 및 최종 용도와 함께 RFQ에서 검토합니다.",
      seoDescription: "진공 인퓨전, RTM 및 산업용 복합재 구조를 위한 300gsm 및 600gsm 다축 탄소섬유 NCF 공급업체입니다.",
      intro: ["NCF는 스티치로 직선 탄소섬유 층을 지정된 방향에 고정합니다.", "문서는 300gsm 이축 NCF의 +45°/-45° 및 0°/90° 구조와 600gsm +45°/-45° 구조를 다룹니다. RFQ에는 구조, g/m², 폭, 롤, 스티치, 수지 공정, 수량 및 최종 용도를 기재하십시오."],
      faqs: [{ question: "이축과 사축 NCF의 차이는 무엇입니까?", answer: "이축은 +45°/-45°와 같이 두 방향을 결합하고, 사축은 일반적으로 0°, +45°, 90°, -45°를 결합합니다. 선택은 적층 설계에 따릅니다." }, { question: "어떤 NCF TDS를 제공합니까?", answer: "300gsm 이축 NCF의 +45°/-45° 및 0°/90° 구조와 600gsm +45°/-45° 구조에 대한 영문 TDS를 다운로드할 수 있습니다. 기타 구조는 주문별로 별도 확인합니다." }, { question: "견적에 필요한 정보는 무엇입니까?", answer: "구조, 방향, g/m², 폭, 롤 길이, 스티치, 수지 공정, 수량 및 최종 용도를 알려주십시오." }],
    },
    "3k-carbon-fiber-laminate-sheet": {
      description: "패널과 CNC 가공 부품을 위한 3K 능직 표면의 CFRP 적층판으로, 무광, 유광, 샌딩 또는 peel-ply 마감을 검토할 수 있습니다.",
      heroCopy: "두께, 크기, 내부 적층, 평탄도, 마감, 공차 및 CNC 도면을 주문별로 검토하며, 구조 보강용 인발 CFRP 판과 구분해야 합니다.",
      seoDescription: "무광 또는 유광 표면과 도면 기반 CNC 가공을 제공하는 3K 탄소섬유 적층판 공급업체입니다.",
      intro: ["3K 적층판은 보이는 직조 표면과 부품 두께 및 용도에 맞춘 내부 적층을 결합합니다.", "견적 시 치수, 두께, 마감, 공차, 도면, 수량 및 최종 용도를 알려주십시오."],
      faqs: [{ question: "구조 보강용 인발판과 동일합니까?", answer: "아닙니다. 이 페이지는 패널과 부품용 3K 적층판을 다룹니다. 인발판은 별도의 구조 보강 시스템에 속합니다." }, { question: "어떤 기술 문서를 제공합니까?", answer: "영문 사양 및 RFQ 준비 가이드를 제공합니다. 특정 배치의 확정 물성을 담은 TDS가 아니며, 최종 사양은 주문별로 합의합니다." }, { question: "도면에 따른 CNC 가공이 가능합니까?", answer: "가능합니다. 공차, 구멍, 마감 및 수량이 포함된 DXF, STEP 또는 치수 도면을 보내주십시오." }],
    },
  },
  pl: {
    "carbon-fiber-multiaxial-ncf-fabric": {
      description: "Multiaxialna tkanina węglowa NCF w układzie UD, biaxialnym, triaxialnym lub quadriaxialnym do wielokierunkowego wzmacniania kompozytów.",
      heroCopy: "Dostępne są angielskie TDS dla biaxialnego NCF 300gsm w układach +45°/-45° i 0°/90° oraz dla 600gsm +45°/-45°. Inne architektury i kierunki są analizowane w RFQ wraz z szerokością, rolką, szwem, procesem żywicznym i zastosowaniem końcowym.",
      seoDescription: "Dostawca multiaxialnej tkaniny węglowej NCF 300gsm i 600gsm do infuzji próżniowej, RTM i przemysłowych struktur kompozytowych.",
      intro: ["NCF utrzymuje proste warstwy włókien węglowych w określonych kierunkach za pomocą szwu.", "Dokumentacja obejmuje biaxialny NCF 300gsm w układach +45°/-45° i 0°/90° oraz 600gsm +45°/-45°. W RFQ podaj architekturę, g/m², szerokość, rolkę, szew, proces, ilość i zastosowanie końcowe."],
      faqs: [{ question: "Czym różni się biaxial od quadriaxial?", answer: "Biaxial łączy dwa kierunki, np. +45°/-45°. Quadriaxial zwykle łączy 0°, +45°, 90° i -45°. Wybór wynika z projektu laminatu." }, { question: "Jakie TDS NCF są dostępne?", answer: "Można pobrać angielskie TDS dla biaxialnego NCF 300gsm w układach +45°/-45° i 0°/90° oraz dla 600gsm +45°/-45°. Inne konstrukcje są potwierdzane oddzielnie dla zamówienia." }, { question: "Jakie dane są potrzebne do wyceny?", answer: "Podaj konstrukcję, kierunki, g/m², szerokość, długość rolki, szew, proces żywiczny, ilość i zastosowanie końcowe." }],
    },
    "3k-carbon-fiber-laminate-sheet": {
      description: "Płyta laminowana CFRP z widoczną powierzchnią 3K twill i wykończeniem matowym, błyszczącym, szlifowanym lub peel-ply do paneli i części CNC.",
      heroCopy: "Grubość, wymiary, wewnętrzny układ warstw, płaskość, wykończenie, tolerancje i rysunek CNC są sprawdzane dla każdego zamówienia; produktu nie należy mylić z pultrudowaną płytą CFRP do wzmocnień.",
      seoDescription: "Dostawca płyt węglowych 3K z matową lub błyszczącą powierzchnią i obróbką CNC według rysunku.",
      intro: ["Płyta 3K łączy widoczną powierzchnię tkaną z wewnętrznym układem warstw dobranym do grubości i części.", "Do wyceny podaj wymiary, grubość, wykończenie, tolerancje, rysunek, ilość i zastosowanie końcowe."],
      faqs: [{ question: "Czy to jest pultrudowana płyta do wzmocnień?", answer: "Nie. Ta strona dotyczy laminowanej płyty 3K do paneli i części. Płyta pultrudowana należy do oddzielnego systemu wzmocnień konstrukcyjnych." }, { question: "Jaki dokument techniczny jest dostępny?", answer: "Strona udostępnia angielski przewodnik dotyczący specyfikacji i przygotowania RFQ. Nie jest to TDS z potwierdzonymi właściwościami konkretnej partii; parametry końcowe są uzgadniane dla zamówienia." }, { question: "Czy możliwa jest obróbka według rysunku?", answer: "Tak. Prześlij DXF, STEP lub rysunek wymiarowy z tolerancjami, otworami, wykończeniem i ilością." }],
    },
  },
  tr: {
    "carbon-fiber-multiaxial-ncf-fabric": {
      description: "Kompozitlerin çok yönlü takviyesi için UD, biaxial, triaxial ve quadriaxial yapılarda çok eksenli karbon fiber NCF kumaş.",
      heroCopy: "300gsm biaxial NCF için +45°/-45° ve 0°/90° yapılarında, ayrıca 600gsm +45°/-45° için İngilizce TDS mevcuttur. Diğer mimari ve yönler genişlik, rulo, dikiş, reçine prosesi ve nihai kullanımla birlikte RFQ kapsamında incelenir.",
      seoDescription: "Vakum infüzyon, RTM ve endüstriyel kompozit yapılar için 300gsm ve 600gsm çok eksenli karbon NCF tedarikçisi.",
      intro: ["NCF, düz karbon fiber katmanlarını belirlenen yönlerde dikiş ile sabitler.", "Dokümantasyon 300gsm biaxial NCF için +45°/-45° ve 0°/90° yapılarını, ayrıca 600gsm +45°/-45° yapısını kapsar. RFQ'da mimari, g/m², genişlik, rulo, dikiş, proses, miktar ve nihai kullanımı belirtin."],
      faqs: [{ question: "Biaxial ile quadriaxial arasındaki fark nedir?", answer: "Biaxial, +45°/-45° gibi iki yönü birleştirir. Quadriaxial genellikle 0°, +45°, 90° ve -45° yönlerini birleştirir. Seçim laminat tasarımına bağlıdır." }, { question: "Hangi NCF TDS belgeleri mevcuttur?", answer: "300gsm biaxial NCF için +45°/-45° ve 0°/90° yapılarında, ayrıca 600gsm +45°/-45° için İngilizce TDS indirilebilir. Diğer yapılar sipariş için ayrı olarak doğrulanır." }, { question: "Teklif için hangi bilgiler gerekir?", answer: "Yapı, yönler, g/m², genişlik, rulo uzunluğu, dikiş, reçine prosesi, miktar ve nihai kullanım bilgilerini paylaşın." }],
    },
    "3k-carbon-fiber-laminate-sheet": {
      description: "Panel ve CNC işlenmiş parçalar için 3K dimi yüzeyli; mat, parlak, zımparalı veya peel-ply seçenekli CFRP laminat plaka.",
      heroCopy: "Kalınlık, boyut, iç katman dizilimi, düzlemsellik, yüzey, tolerans ve CNC çizimi her sipariş için incelenir; yapısal güçlendirme amaçlı pultrüzyon CFRP plakadan ayrıdır.",
      seoDescription: "Mat veya parlak yüzey ve çizime göre CNC işleme seçenekli 3K karbon fiber laminat plaka tedarikçisi.",
      intro: ["3K plaka, görünür dokuma yüzeyi parça kalınlığına ve kullanımına göre belirlenen iç katmanlarla birleştirir.", "Teklif için boyut, kalınlık, yüzey, tolerans, çizim, miktar ve nihai kullanımı belirtin."],
      faqs: [{ question: "Yapısal güçlendirme için pultrüzyon plaka ile aynı mıdır?", answer: "Hayır. Bu sayfa panel ve parçalar için 3K laminat plakayı kapsar. Pultrüzyon plaka ayrı bir yapısal güçlendirme sistemine aittir." }, { question: "Hangi teknik belge mevcuttur?", answer: "Sayfada spesifikasyon ve RFQ hazırlığı için İngilizce bir kılavuz bulunur. Bu belge belirli bir partiye ait doğrulanmış özellikleri içeren TDS değildir; nihai parametreler sipariş için kararlaştırılır." }, { question: "Çizime göre CNC işleme yapılabilir mi?", answer: "Evet. Tolerans, delik, yüzey ve miktarı içeren DXF, STEP veya ölçülü çizim gönderin." }],
    },
  },
};

const russianPriorityProductCopy: Partial<Record<ProductSlug, DualCoreCopy>> = {
  "carbon-fiber-yarn-and-tow": {
    description: "Углеродная нить и непрерывный углеродный жгут (tow) для ткачества, плетения, пултрузии, филаментной намотки, препрегов и рубки.",
    heroCopy: "Для предложения подтверждаются размер жгута 1K / 3K / 6K / 12K / 24K / 50K, марка волокна, аппрет, совместимый процесс, масса бобины, количество, конечное применение и страна назначения.",
    seoDescription: "Поставщик углеродной нити и жгута (tow) 1K-50K для ткачества, плетения, пултрузии, препрегов и производства композитов.",
    intro: ["Размер жгута, марка волокна и аппрет выбираются по последующему процессу и требуемой переработке.", "Для запроса укажите размер жгута, марку, аппрет, процесс, массу бобины, количество, конечное применение и страну назначения."],
    faqs: [{ question: "Какие размеры углеродного жгута можно запросить?", answer: "В запросе можно указать 1K, 3K, 6K, 12K, 24K или 50K. Фактическая поставка подтверждается по марке, партии, аппрету, количеству и назначению." }, { question: "Какой TDS доступен на странице?", answer: "На странице доступен справочный TDS для непрерывного углеродного жгута 12K. Точная марка, источник, партия и аппрет подтверждаются для заказа; документ не распространяется автоматически на другие размеры жгута." }, { question: "Чем углеродный жгут (tow) отличается от углеродной нити?", answer: "Жгут (tow) представляет собой непрерывный пучок углеродных филаментов и обычно обозначается числом K. Термин «углеродная нить» может использоваться для текстильного исходного материала после дополнительной подготовки. Для предложения следует подтвердить обозначение поставщика, размер жгута, аппрет и процесс переработки." }, { question: "Какие данные нужны для предложения?", answer: "Укажите размер жгута, марку волокна, аппрет, совместимый процесс, массу бобины, количество, конечное применение и страну назначения." }],
  },
  "carbon-fiber-ud-fabric": {
    description: "Однонаправленная углеродная ткань UD для направленного армирования композитов и систем усиления; доступность массы, ширины и марки волокна подтверждается по запросу.",
    heroCopy: "Для предложения укажите марку волокна, поверхностную плотность, ширину, направление волокон, смоляной процесс, количество, конечное применение и страну назначения. Доступны TDS для 300gsm и отдельная справочная запись поставки для ткани усиления 200gsm на основе архивного источника.",
    seoDescription: "Поставщик однонаправленной углеродной ткани UD с документированными справочными данными 200gsm и 300gsm для композитов и конструкционного усиления.",
    intro: ["Ткань UD концентрирует основную часть волокон в одном направлении и выбирается по направлению расчетной нагрузки и процессу.", "Значения для конкретного заказа подтверждаются по TDS, партии, ширине, смоляной системе и конечному применению."],
    faqs: [{ question: "Какие документы доступны для ткани UD 200gsm и 300gsm?", answer: "На странице доступны TDS продукта UD 300gsm и справочная запись поставки ткани усиления 200gsm на основе архивного источника. Текущий источник, марка, аппрет, ширина, рулон и документы партии подтверждаются для заказа." }, { question: "Подходит ли любая ткань UD для усиления конструкций?", answer: "Нет. Для системы усиления необходимо проверить ткань, совместимую эпоксидную смолу, основание, расчетную схему и применимые нормы. Проект и способ монтажа должны быть подтверждены квалифицированным инженером." }, { question: "Что указать в запросе?", answer: "Укажите марку волокна, g/m², ширину, направление волокон, смоляной процесс, количество, проект и страну назначения." }],
  },
  "structural-strengthening-system": {
    description: "Система конструкционного усиления CFRP включает однонаправленную углеродную ткань UD, пултрузионные углепластиковые ламели и совместимую эпоксидную смолу для гражданских проектов усиления.",
    heroCopy: "Материал выбирается по проектной схеме, основанию, требуемому направлению усиления, размерам ламели или плотности ткани, эпоксидной системе и требованиям квалифицированного инженера.",
    seoDescription: "Поставщик ткани UD, пултрузионных углепластиковых ламелей CFRP и эпоксидной смолы для усиления бетона, мостов и зданий.",
    intro: ["Ткань UD подходит для адаптации к поверхности и направленного усиления, а пултрузионная ламель CFRP используется как готовый жесткий элемент системы.", "Проектные нагрузки, подготовка основания, расчет, монтаж и приемка определяются квалифицированным инженером и применимыми нормами."],
    faqs: [{ question: "Когда выбирать ткань UD, а когда ламель CFRP?", answer: "Выбор зависит от геометрии, основания, направления нагрузки, проектной схемы и способа монтажа. Решение должен подтвердить квалифицированный инженер." }, { question: "Какие документы доступны для системы усиления?", answer: "На странице доступны TDS ткани UD 300gsm, архивная справочная запись поставки ткани усиления 200gsm и TDS пултрузионной ламели CFRP 1.2 мм. Данные применяются только к указанным документам; выбор, расчет и монтаж проверяются для проекта." }, { question: "Какие данные нужны для предложения?", answer: "Укажите тип сооружения, основание, проектную площадь, ткань или ламель, размеры, эпоксидную систему, количество, страну назначения и доступные проектные документы." }],
  },
  "carbon-fiber-woven-fabric": {
    description: "Ткань из углеродного волокна в полотняном и саржевом переплетении для сухой укладки, инфузии, формования и видимых поверхностей CFRP.",
    heroCopy: "Для предложения подтверждаются размер жгута 1K / 3K / 6K / 12K, переплетение, g/m², ширина, рулон, смоляной процесс, количество и конечное применение. Для саржевой ткани 3K 200gsm доступен TDS.",
    seoDescription: "Поставщик ткани из углеродного волокна, включая саржевую ткань 3K 200gsm; переплетение, g/m², ширина и рулоны по запросу.",
    intro: ["Полотняное переплетение обеспечивает стабильную структуру, а саржевое лучше драпируется и формирует характерный видимый рисунок CFRP.", "Для запроса укажите размер жгута, переплетение, g/m², ширину, длину рулона, процесс, количество и конечное применение."],
    faqs: [{ question: "Есть ли TDS для саржевой ткани 3K 200gsm?", answer: "Да. На странице доступен TDS для саржевой ткани 3K 200gsm. Ширина, рулон и спецификация заказа подтверждаются отдельно." }, { question: "«Карбоновая ткань» и «углеродная ткань» — это один материал?", answer: "В коммерческих запросах оба выражения часто обозначают ткань из углеродного волокна. Для точного предложения дополнительно укажите размер жгута, например 3K, переплетение, g/m², ширину, длину рулона и процесс со смолой." }, { question: "Какие данные нужны для предложения?", answer: "Укажите размер жгута, переплетение, g/m², ширину, длину рулона, смоляной процесс, количество, конечное применение и страну назначения." }],
  },
};

type AdditionalPrioritySlug =
  | "carbon-fiber-yarn-and-tow"
  | "carbon-fiber-ud-fabric"
  | "structural-strengthening-system"
  | "carbon-fiber-woven-fabric";

const additionalPrioritySlugs = new Set<ProductSlug>([
  "carbon-fiber-yarn-and-tow",
  "carbon-fiber-ud-fabric",
  "structural-strengthening-system",
  "carbon-fiber-woven-fabric",
]);

function isAdditionalPrioritySlug(slug: ProductSlug): slug is AdditionalPrioritySlug {
  return additionalPrioritySlugs.has(slug);
}

const additionalPriorityProductCopy: Partial<Record<
  Exclude<ExtendedLocale, "ru">,
  Record<AdditionalPrioritySlug, DualCoreCopy>
>> = {
  ar: {
    "carbon-fiber-yarn-and-tow": {
      description: "خيوط وحزم ألياف كربون مستمرة (tow) للنسيج والتضفير والسحب المستمر واللف بالخيوط وتحويل prepreg والتقطيع.",
      heroCopy: "يُراجع مقاس الحزمة 1K / 3K / 6K / 12K / 24K / 50K ودرجة الليف ومواد المعالجة السطحية (sizing) والعملية المتوافقة ووزن البكرة والكمية والاستخدام النهائي ودولة الوجهة قبل عرض السعر.",
      seoDescription: "مورد خيوط وحزم ألياف الكربون (tow) بمقاسات 1K إلى 50K للنسيج والسحب المستمر واللف بالخيوط وتصنيع المواد المركبة.",
      intro: ["يُختار مقاس tow ودرجة الليف ومواد sizing وفق عملية التحويل اللاحقة ومتطلبات المعدات.", "للطلب، حدد مقاس tow والدرجة ومواد sizing وشكل البكرة والعملية والكمية والاستخدام النهائي ودولة الوجهة."],
      faqs: [
        { question: "ما مقاسات tow التي يمكن طلبها؟", answer: "يمكن تحديد 1K أو 3K أو 6K أو 12K أو 24K أو 50K في طلب السعر. يعتمد التوفر الفعلي على الدرجة ومواد sizing والدفعة والكمية والاستخدام النهائي." },
        { question: "هل يتوفر مستند TDS لمنتج 12K؟", answer: "نعم. تتضمن الصفحة مستند TDS مرجعياً لحزمة ألياف كربون مستمرة 12K. يجب تأكيد الدرجة والمصدر والدفعة ومواد sizing في الطلب النهائي." },
        { question: "ما البيانات المطلوبة لعرض السعر؟", answer: "حدد مقاس tow ودرجة الليف ومواد sizing والعملية المتوافقة ووزن البكرة والكمية والاستخدام النهائي ودولة الوجهة." },
      ],
    },
    "carbon-fiber-ud-fabric": {
      description: "نسيج ألياف كربون أحادي الاتجاه UD للتقوية الاتجاهية في المواد المركبة وأنظمة التقوية الإنشائية، مع مراجعة الوزن السطحي والعرض ودرجة الليف لكل طلب.",
      heroCopy: "لطلب السعر، حدد درجة الليف وg/m² والعرض واتجاه الألياف وعملية الراتنج والكمية والاستخدام النهائي ودولة الوجهة. يتوفر TDS لمنتج 300gsm ومرجع توريد منفصل من سجل قديم لنسيج تقوية 200gsm.",
      seoDescription: "مورد نسيج ألياف كربون أحادي الاتجاه UD مع مراجع موثقة لوزني 200gsm و300gsm للمواد المركبة والتقوية الإنشائية.",
      intro: ["يركز نسيج UD معظم الألياف في اتجاه واحد ويُختار وفق مسار الحمل وعملية التصنيع.", "تُراجع مواصفة الطلب والدفعة والعرض وتوافق الراتنج والاستخدام النهائي قبل التوريد."],
      faqs: [
        { question: "ما المستندات المتوفرة لنسيج UD بوزني 200gsm و300gsm؟", answer: "تتوفر ورقة TDS لمنتج UD بوزن 300gsm ومرجع توريد مستند إلى سجل قديم لنسيج تقوية 200gsm. يجب تأكيد المصدر الحالي ودرجة الليف ومواد sizing والعرض واللفة ووثائق الدفعة للطلب." },
        { question: "هل يصلح أي نسيج UD للتقوية الإنشائية؟", answer: "لا. يجب أن تتوافق الألياف والبنية والراتنج مع تصميم المشروع والركيزة وطريقة التركيب، ويجب اعتماد الاختيار من مهندس مؤهل." },
        { question: "ما المعلومات المطلوبة للطلب؟", answer: "حدد درجة الليف وg/m² والعرض واتجاه الألياف وعملية الراتنج والكمية والمشروع ودولة الوجهة." },
      ],
    },
    "structural-strengthening-system": {
      description: "نظام تقوية إنشائية CFRP يضم نسيج كربون أحادي الاتجاه UD وصفائح CFRP مسحوبة وراتنج إيبوكسي متوافق لمشروعات التقوية المدنية.",
      heroCopy: "يُختار النظام وفق تصميم المشروع والركيزة واتجاه التقوية وأبعاد الصفيحة أو وزن النسيج ومتطلبات الإيبوكسي ومراجعة مهندس مؤهل.",
      seoDescription: "مورد نسيج UD وصفائح CFRP مسحوبة ومواد إيبوكسي لتقوية الخرسانة والجسور والمباني.",
      intro: ["يوفر نسيج UD تقوية اتجاهية قابلة للتكيف مع السطح، بينما تعمل صفيحة CFRP المسحوبة كعنصر صلب جاهز ضمن النظام.", "تظل الأحمال والتصميم وإعداد الركيزة والتركيب والقبول من مسؤولية مهندس مؤهل والمتطلبات المطبقة على المشروع."],
      faqs: [
        { question: "متى يُستخدم نسيج UD ومتى تُستخدم صفيحة CFRP؟", answer: "يعتمد الاختيار على الهندسة والركيزة واتجاه الحمل وتصميم التقوية وطريقة التركيب، ويجب أن يؤكده مهندس المشروع." },
        { question: "ما المستندات الفنية المتوفرة؟", answer: "تتضمن الصفحة TDS لنسيج UD بوزن 300gsm ومرجع توريد قديم لنسيج تقوية 200gsm وTDS لصفيحة CFRP مسحوبة بسماكة 1.2 mm. تنطبق البيانات فقط على المنتجات المحددة في كل مستند." },
        { question: "ما البيانات المطلوبة لعرض السعر؟", answer: "حدد نوع المنشأ والركيزة ومساحة المشروع والنسيج أو الصفيحة والأبعاد ونظام الإيبوكسي والكمية ودولة الوجهة ومستندات التصميم المتاحة." },
      ],
    },
    "carbon-fiber-woven-fabric": {
      description: "نسيج ألياف كربون منسوج plain أو twill للترسيب الجاف والتسريب والقولبة والأسطح الظاهرة من CFRP.",
      heroCopy: "يُراجع مقاس tow ‏1K / 3K / 6K / 12K ونوع النسج وg/m² والعرض وطول اللفة وعملية الراتنج والكمية والاستخدام النهائي. يتوفر TDS لنسيج 3K twill بوزن 200gsm.",
      seoDescription: "مورد نسيج ألياف كربون منسوج، بما في ذلك 3K twill بوزن 200gsm، مع مراجعة النسج وg/m² والعرض واللفة.",
      intro: ["يوفر نسج plain بنية مستقرة، بينما يمنح twill قابلية تشكيل أفضل ونمط CFRP ظاهراً مميزاً.", "للطلب، حدد مقاس tow ونوع النسج وg/m² والعرض وطول اللفة وعملية الراتنج والكمية والاستخدام النهائي."],
      faqs: [
        { question: "هل يتوفر TDS لنسيج 3K twill بوزن 200gsm؟", answer: "نعم. يتوفر TDS لهذا المنتج، بينما يؤكد العرض وطول اللفة ومواصفة الطلب بصورة منفصلة." },
        { question: "ما الفرق بين plain وtwill؟", answer: "يتميز plain بتشابك أكثر ثباتاً، بينما يوفر twill عادة قابلية تشكيل أفضل ونمطاً قطرياً ظاهراً. يعتمد الاختيار على الشكل والهندسة والعملية." },
        { question: "ما البيانات المطلوبة لعرض السعر؟", answer: "حدد مقاس tow ونوع النسج وg/m² والعرض وطول اللفة وعملية الراتنج والكمية والاستخدام النهائي ودولة الوجهة." },
      ],
    },
  },
  fr: {
    "carbon-fiber-yarn-and-tow": {
      description: "Fil, mèche continue (tow) et roving de carbone pour tissage, tressage, pultrusion, enroulement filamentaire, transformation prepreg et découpe.",
      heroCopy: "Pour le devis, confirmez la taille de tow 1K / 3K / 6K / 12K / 24K / 50K, le grade, l'ensimage, le procédé compatible, le poids de bobine, la quantité, l'usage final et le pays de destination.",
      seoDescription: "Fournisseur de fil et tow de fibre de carbone 1K à 50K pour tissage, pultrusion, enroulement filamentaire et fabrication de composites.",
      intro: ["La taille de tow, le grade et l'ensimage se choisissent selon le procédé de transformation et les équipements en aval.", "Pour une demande complète, précisez taille de tow, grade, ensimage, conditionnement, procédé, quantité, usage final et destination."],
      faqs: [
        { question: "Quelles tailles de tow peut-on demander ?", answer: "Une demande peut indiquer 1K, 3K, 6K, 12K, 24K ou 50K. La disponibilité dépend du grade, de l'ensimage, du lot, de la quantité et de l'usage final." },
        { question: "Un TDS est-il disponible pour le tow 12K ?", answer: "Oui. La page propose un TDS de référence pour un tow continu 12K. Le grade exact, la source, le lot et l'ensimage restent à confirmer dans la commande." },
        { question: "Quelles informations fournir pour un devis ?", answer: "Indiquez taille de tow, grade, ensimage, procédé compatible, poids de bobine, quantité, usage final et pays de destination." },
      ],
    },
    "carbon-fiber-ud-fabric": {
      description: "Tissu carbone unidirectionnel UD pour le renfort directionnel des composites et des systèmes de renforcement, avec masse surfacique, largeur et grade confirmés par demande.",
      heroCopy: "Pour le devis, précisez grade de fibre, g/m², largeur, direction des fibres, procédé résine, quantité, usage final et destination. Un TDS est disponible pour le 300gsm et une référence de fourniture distincte issue d'un ancien dossier couvre le tissu de renforcement 200gsm.",
      seoDescription: "Fournisseur de tissu carbone unidirectionnel UD avec références documentées 200gsm et 300gsm pour composites et renforcement structurel.",
      intro: ["Le tissu UD concentre l'essentiel des fibres dans une direction et se choisit selon le trajet de charge et le procédé.", "La spécification de commande, le lot, la largeur, la compatibilité résine et l'usage final sont confirmés avant fourniture."],
      faqs: [
        { question: "Quels documents sont disponibles pour les tissus UD 200gsm et 300gsm ?", answer: "La page propose le TDS du produit UD 300gsm et une référence de fourniture issue d'un ancien dossier pour le tissu de renforcement 200gsm. Source actuelle, grade, ensimage, largeur, rouleau et documents de lot restent à confirmer pour la commande." },
        { question: "Tout tissu UD convient-il au renforcement structurel ?", answer: "Non. La fibre, la construction et la résine doivent correspondre au projet, au support et à la méthode de pose, sous validation d'un ingénieur qualifié." },
        { question: "Quelles données fournir pour un devis ?", answer: "Précisez grade de fibre, g/m², largeur, direction des fibres, procédé résine, quantité, projet et pays de destination." },
      ],
    },
    "structural-strengthening-system": {
      description: "Système de renforcement structurel CFRP associant tissu carbone UD, lamelle CFRP pultrudée et résine époxy compatible pour des projets civils de renforcement.",
      heroCopy: "Le système se choisit selon l'étude du projet, le support, la direction du renfort, les dimensions de lamelle ou la masse du tissu, le système époxy et l'examen d'un ingénieur qualifié.",
      seoDescription: "Fournisseur de tissu UD, lamelles CFRP pultrudées et époxy pour le renforcement du béton, des ponts et des bâtiments.",
      intro: ["Le tissu UD s'adapte au support pour un renfort directionnel, tandis que la lamelle CFRP pultrudée constitue un élément rigide du système.", "Charges, calcul, préparation du support, pose et réception restent sous la responsabilité de l'ingénieur qualifié et des exigences du projet."],
      faqs: [
        { question: "Quand choisir un tissu UD ou une lamelle CFRP ?", answer: "Le choix dépend de la géométrie, du support, de la direction de charge, du calcul et de la méthode de pose. Il doit être confirmé par l'ingénieur du projet." },
        { question: "Quels documents techniques sont disponibles ?", answer: "La page propose le TDS du tissu UD 300gsm, une référence de fourniture ancienne pour le tissu de renforcement 200gsm et le TDS d'une lamelle CFRP pultrudée de 1.2 mm. Les données ne s'appliquent qu'au produit identifié dans chaque document." },
        { question: "Quelles données fournir pour un devis ?", answer: "Indiquez type de structure, support, surface du projet, tissu ou lamelle, dimensions, système époxy, quantité, pays de destination et documents de conception disponibles." },
      ],
    },
    "carbon-fiber-woven-fabric": {
      description: "Tissu de fibre de carbone en armure toile ou sergé pour stratification sèche, infusion, moulage et surfaces CFRP visibles.",
      heroCopy: "Pour le devis, confirmez tow 1K / 3K / 6K / 12K, armure, g/m², largeur, longueur de rouleau, procédé résine, quantité et usage final. Un TDS est disponible pour le tissu sergé 3K 200gsm.",
      seoDescription: "Fournisseur de tissu de fibre de carbone, dont un sergé 3K 200gsm documenté, avec armure, g/m², largeur et rouleau à confirmer.",
      intro: ["L'armure toile apporte une structure stable, tandis que le sergé offre généralement une meilleure drapabilité et un motif CFRP diagonal visible.", "Pour le devis, précisez taille de tow, armure, g/m², largeur, longueur de rouleau, procédé résine, quantité et usage final."],
      faqs: [
        { question: "Un TDS est-il disponible pour le sergé 3K 200gsm ?", answer: "Oui. Le TDS de ce produit est téléchargeable, tandis que largeur, longueur de rouleau et spécification de commande sont confirmées séparément." },
        { question: "Quelle différence entre toile et sergé ?", answer: "La toile présente un entrecroisement plus stable. Le sergé offre généralement davantage de drapabilité et un motif diagonal visible. Le choix dépend de la géométrie, de la surface et du procédé." },
        { question: "Quelles données fournir pour un devis ?", answer: "Indiquez taille de tow, armure, g/m², largeur, longueur de rouleau, procédé résine, quantité, usage final et pays de destination." },
      ],
    },
  },
  ko: {
    "carbon-fiber-yarn-and-tow": {
      description: "직조, 브레이딩, 인발 성형, 필라멘트 와인딩, prepreg 전환 및 절단 공정을 위한 탄소섬유 원사와 연속 토우(tow)입니다.",
      heroCopy: "견적 전에 1K / 3K / 6K / 12K / 24K / 50K 토우 크기, 섬유 등급, 사이징, 호환 공정, 보빈 중량, 수량, 최종 용도 및 도착 국가를 확인합니다.",
      seoDescription: "직조, 인발 성형, 필라멘트 와인딩 및 복합재 제조용 1K-50K 탄소섬유 원사와 토우 공급업체입니다.",
      intro: ["토우 크기, 섬유 등급 및 사이징은 후속 전환 공정과 장비 요건에 따라 선택합니다.", "문의 시 토우 크기, 등급, 사이징, 패키지 형식, 공정, 수량, 최종 용도 및 도착 국가를 알려주십시오."],
      faqs: [
        { question: "어떤 탄소섬유 토우 크기를 문의할 수 있습니까?", answer: "1K, 3K, 6K, 12K, 24K 또는 50K를 지정할 수 있습니다. 실제 공급 여부는 등급, 사이징, 배치, 수량 및 최종 용도 검토에 따릅니다." },
        { question: "12K 토우 TDS가 있습니까?", answer: "예. 연속 12K 탄소섬유 토우에 대한 참조 TDS를 제공합니다. 정확한 등급, 공급원, 배치 및 사이징은 최종 주문에서 확인해야 합니다." },
        { question: "견적에 필요한 정보는 무엇입니까?", answer: "토우 크기, 섬유 등급, 사이징, 호환 공정, 보빈 중량, 수량, 최종 용도 및 도착 국가를 알려주십시오." },
      ],
    },
    "carbon-fiber-ud-fabric": {
      description: "복합재와 구조 보강 시스템의 방향성 보강을 위한 일방향 UD 탄소섬유 원단으로, 면중량, 폭 및 섬유 등급을 주문별로 검토합니다.",
      heroCopy: "견적 시 섬유 등급, g/m², 폭, 섬유 방향, 수지 공정, 수량, 최종 용도 및 도착 국가를 알려주십시오. 300gsm 제품 TDS와 기존 원본 기록에 근거한 200gsm 보강 원단 공급 참조 자료를 제공합니다.",
      seoDescription: "복합재 및 구조 보강용 200gsm 및 300gsm 문서화 참조 자료를 제공하는 일방향 UD 탄소섬유 원단 공급업체입니다.",
      intro: ["UD 원단은 대부분의 섬유를 한 방향에 배치하며, 하중 경로와 제조 공정에 따라 선택합니다.", "공급 전에 주문 사양, 배치, 폭, 수지 호환성 및 최종 용도를 확인합니다."],
      faqs: [
        { question: "200gsm 및 300gsm UD 원단에 어떤 문서가 있습니까?", answer: "300gsm UD 제품 TDS와 기존 원본 기록에 근거한 200gsm 보강 원단 공급 참조 자료를 제공합니다. 현재 공급원, 등급, 사이징, 폭, 롤 및 배치 문서는 주문별로 확인해야 합니다." },
        { question: "모든 UD 원단을 구조 보강에 사용할 수 있습니까?", answer: "아닙니다. 섬유, 원단 구조 및 수지는 프로젝트 설계, 바탕면 및 시공 방법과 일치해야 하며 자격을 갖춘 엔지니어가 선택을 확인해야 합니다." },
        { question: "견적에 필요한 정보는 무엇입니까?", answer: "섬유 등급, g/m², 폭, 섬유 방향, 수지 공정, 수량, 프로젝트 및 도착 국가를 알려주십시오." },
      ],
    },
    "structural-strengthening-system": {
      description: "토목 구조 보강 프로젝트를 위한 일방향 UD 탄소섬유 원단, 인발 CFRP 판 및 호환 에폭시 수지로 구성된 CFRP 구조 보강 시스템입니다.",
      heroCopy: "프로젝트 설계, 바탕면, 보강 방향, 판 치수 또는 원단 면중량, 에폭시 시스템 및 자격을 갖춘 엔지니어의 검토에 따라 재료를 선택합니다.",
      seoDescription: "콘크리트, 교량 및 건물 보강용 UD 원단, 인발 CFRP 판 및 에폭시 재료 공급업체입니다.",
      intro: ["UD 원단은 표면 형상에 맞춘 방향성 보강에 사용되며, 인발 CFRP 판은 시스템의 강성 보강 요소로 사용됩니다.", "하중, 설계, 바탕면 준비, 시공 및 검수는 자격을 갖춘 엔지니어와 프로젝트 요구사항에 따라 결정해야 합니다."],
      faqs: [
        { question: "UD 원단과 CFRP 판 중 무엇을 선택해야 합니까?", answer: "형상, 바탕면, 하중 방향, 보강 설계 및 시공 방법에 따라 달라지며 프로젝트 엔지니어가 확인해야 합니다." },
        { question: "어떤 기술 문서를 제공합니까?", answer: "300gsm UD 원단 TDS, 기존 원본 기반 200gsm 보강 원단 공급 참조 자료 및 1.2 mm 인발 CFRP 보강판 TDS를 제공합니다. 각 데이터는 해당 문서에 명시된 제품에만 적용됩니다." },
        { question: "견적에 필요한 정보는 무엇입니까?", answer: "구조물 유형, 바탕면, 프로젝트 면적, 원단 또는 판, 치수, 에폭시 시스템, 수량, 도착 국가 및 보유 설계 문서를 알려주십시오." },
      ],
    },
    "carbon-fiber-woven-fabric": {
      description: "드라이 레이업, 인퓨전, 성형 및 가시 CFRP 표면을 위한 평직 또는 능직 탄소섬유 직물입니다.",
      heroCopy: "견적 전에 1K / 3K / 6K / 12K 토우 크기, 직조 방식, g/m², 폭, 롤 길이, 수지 공정, 수량 및 최종 용도를 확인합니다. 3K 200gsm 능직 제품 TDS를 제공합니다.",
      seoDescription: "3K 200gsm 능직 문서화 제품을 포함한 탄소섬유 직물 공급업체로, 직조, g/m², 폭 및 롤 사양을 검토합니다.",
      intro: ["평직은 안정적인 구조를 제공하고, 능직은 일반적으로 성형성이 높으며 눈에 보이는 대각선 CFRP 무늬를 만듭니다.", "문의 시 토우 크기, 직조 방식, g/m², 폭, 롤 길이, 수지 공정, 수량 및 최종 용도를 알려주십시오."],
      faqs: [
        { question: "3K 200gsm 능직 TDS가 있습니까?", answer: "예. 해당 제품의 TDS를 다운로드할 수 있으며 폭, 롤 길이 및 주문 사양은 별도로 확인합니다." },
        { question: "평직과 능직의 차이는 무엇입니까?", answer: "평직은 교차 구조가 안정적이고, 능직은 일반적으로 성형성이 높으며 대각선 표면 무늬를 보입니다. 부품 형상, 표면 및 공정에 따라 선택합니다." },
        { question: "견적에 필요한 정보는 무엇입니까?", answer: "토우 크기, 직조 방식, g/m², 폭, 롤 길이, 수지 공정, 수량, 최종 용도 및 도착 국가를 알려주십시오." },
      ],
    },
  },
  pl: {
    "carbon-fiber-yarn-and-tow": {
      description: "Przędza, ciągła wiązka (tow) i roving z włókna węglowego do tkania, oplatania, pultruzji, nawijania, produkcji prepregu i cięcia.",
      heroCopy: "Do oferty potwierdzamy rozmiar tow 1K / 3K / 6K / 12K / 24K / 50K, gatunek włókna, preparację powierzchniową (sizing), zgodny proces, masę szpuli, ilość, zastosowanie końcowe i kraj docelowy.",
      seoDescription: "Dostawca przędzy i tow z włókna węglowego 1K-50K do tkania, pultruzji, nawijania i produkcji kompozytów.",
      intro: ["Rozmiar tow, gatunek włókna i sizing dobiera się do dalszego procesu oraz wymagań urządzeń.", "W zapytaniu podaj rozmiar tow, gatunek, sizing, format nawoju, proces, ilość, zastosowanie końcowe i kraj docelowy."],
      faqs: [
        { question: "Jakie rozmiary tow można podać w zapytaniu?", answer: "Można wskazać 1K, 3K, 6K, 12K, 24K lub 50K. Dostępność zależy od gatunku, sizingu, partii, ilości i zastosowania końcowego." },
        { question: "Czy jest dostępny TDS dla tow 12K?", answer: "Tak. Strona zawiera referencyjny TDS dla ciągłej wiązki 12K. Dokładny gatunek, źródło, partia i sizing wymagają potwierdzenia w zamówieniu." },
        { question: "Jakie informacje są potrzebne do wyceny?", answer: "Podaj rozmiar tow, gatunek włókna, sizing, zgodny proces, masę szpuli, ilość, zastosowanie końcowe i kraj docelowy." },
      ],
    },
    "carbon-fiber-ud-fabric": {
      description: "Jednokierunkowa tkanina węglowa UD do kierunkowego zbrojenia kompozytów i systemów wzmocnień, z masą powierzchniową, szerokością i gatunkiem potwierdzanymi dla zapytania.",
      heroCopy: "Do wyceny podaj gatunek włókna, g/m², szerokość, kierunek włókien, proces żywiczny, ilość, zastosowanie końcowe i kraj docelowy. Dostępny jest TDS produktu 300gsm oraz oddzielna referencja dostawy tkaniny wzmacniającej 200gsm oparta na starszym zapisie źródłowym.",
      seoDescription: "Dostawca jednokierunkowej tkaniny węglowej UD z udokumentowanymi referencjami 200gsm i 300gsm do kompozytów i wzmocnień konstrukcyjnych.",
      intro: ["Tkanina UD skupia większość włókien w jednym kierunku i jest dobierana do toru obciążenia oraz procesu.", "Przed dostawą potwierdzamy specyfikację zamówienia, partię, szerokość, zgodność z żywicą i zastosowanie końcowe."],
      faqs: [
        { question: "Jakie dokumenty są dostępne dla tkaniny UD 200gsm i 300gsm?", answer: "Strona udostępnia TDS produktu UD 300gsm oraz referencję dostawy tkaniny wzmacniającej 200gsm opartą na starszym zapisie. Aktualne źródło, gatunek, sizing, szerokość, rolka i dokumenty partii wymagają potwierdzenia w zamówieniu." },
        { question: "Czy każda tkanina UD nadaje się do wzmocnień konstrukcyjnych?", answer: "Nie. Włókno, konstrukcja i żywica muszą odpowiadać projektowi, podłożu i metodzie montażu, a wybór powinien zatwierdzić wykwalifikowany inżynier." },
        { question: "Jakie dane są potrzebne do wyceny?", answer: "Podaj gatunek włókna, g/m², szerokość, kierunek włókien, proces żywiczny, ilość, projekt i kraj docelowy." },
      ],
    },
    "structural-strengthening-system": {
      description: "System wzmocnień konstrukcyjnych CFRP obejmujący jednokierunkową tkaninę UD, pultrudowaną płytę CFRP i zgodną żywicę epoksydową do cywilnych projektów wzmocnień.",
      heroCopy: "Materiał dobiera się według projektu, podłoża, kierunku wzmocnienia, wymiarów płyty lub masy tkaniny, systemu epoksydowego i oceny wykwalifikowanego inżyniera.",
      seoDescription: "Dostawca tkaniny UD, pultrudowanych płyt CFRP i epoksydów do wzmacniania betonu, mostów i budynków.",
      intro: ["Tkanina UD dopasowuje się do powierzchni i zapewnia zbrojenie kierunkowe, a pultrudowana płyta CFRP stanowi sztywny element systemu.", "Obciążenia, obliczenia, przygotowanie podłoża, montaż i odbiór określa wykwalifikowany inżynier zgodnie z wymaganiami projektu."],
      faqs: [
        { question: "Kiedy wybrać tkaninę UD, a kiedy płytę CFRP?", answer: "Wybór zależy od geometrii, podłoża, kierunku obciążenia, projektu wzmocnienia i metody montażu. Powinien go potwierdzić inżynier projektu." },
        { question: "Jakie dokumenty techniczne są dostępne?", answer: "Strona udostępnia TDS tkaniny UD 300gsm, starszą referencję dostawy tkaniny wzmacniającej 200gsm oraz TDS pultrudowanej płyty CFRP 1.2 mm. Dane dotyczą wyłącznie produktu wskazanego w każdym dokumencie." },
        { question: "Jakie dane są potrzebne do wyceny?", answer: "Podaj typ konstrukcji, podłoże, powierzchnię projektu, tkaninę lub płytę, wymiary, system epoksydowy, ilość, kraj docelowy i dostępne dokumenty projektowe." },
      ],
    },
    "carbon-fiber-woven-fabric": {
      description: "Tkanina z włókna węglowego o splocie płóciennym lub twill do układania na sucho, infuzji, formowania i widocznych powierzchni CFRP.",
      heroCopy: "Do wyceny potwierdzamy tow 1K / 3K / 6K / 12K, splot, g/m², szerokość, długość rolki, proces żywiczny, ilość i zastosowanie końcowe. Dostępny jest TDS tkaniny 3K twill 200gsm.",
      seoDescription: "Dostawca tkanin z włókna węglowego, w tym udokumentowanej tkaniny 3K twill 200gsm, z doborem splotu, g/m², szerokości i rolki.",
      intro: ["Splot płócienny zapewnia stabilną strukturę, a twill zwykle lepsze układanie i widoczny ukośny wzór CFRP.", "W zapytaniu podaj rozmiar tow, splot, g/m², szerokość, długość rolki, proces żywiczny, ilość i zastosowanie końcowe."],
      faqs: [
        { question: "Czy jest dostępny TDS tkaniny 3K twill 200gsm?", answer: "Tak. TDS tego produktu można pobrać, natomiast szerokość, długość rolki i specyfikacja zamówienia są potwierdzane oddzielnie." },
        { question: "Czym różni się splot płócienny od twill?", answer: "Splot płócienny ma stabilniejsze przeplatanie, a twill zwykle lepiej się układa i tworzy ukośny wzór. Wybór zależy od geometrii, powierzchni i procesu." },
        { question: "Jakie dane są potrzebne do wyceny?", answer: "Podaj rozmiar tow, splot, g/m², szerokość, długość rolki, proces żywiczny, ilość, zastosowanie końcowe i kraj docelowy." },
      ],
    },
  },
  tr: {
    "carbon-fiber-yarn-and-tow": {
      description: "Dokuma, örme, pultrüzyon, filament sarım, prepreg dönüşümü ve kırpma için karbon fiber iplik, sürekli tow ve roving.",
      heroCopy: "Teklif öncesinde 1K / 3K / 6K / 12K / 24K / 50K tow boyutu, fiber sınıfı, sizing, uyumlu proses, bobin ağırlığı, miktar, nihai kullanım ve varış ülkesi doğrulanır.",
      seoDescription: "Dokuma, pultrüzyon, filament sarım ve kompozit üretimi için 1K-50K karbon fiber iplik ve tow tedarikçisi.",
      intro: ["Tow boyutu, fiber sınıfı ve sizing, sonraki dönüşüm prosesi ve ekipman gereksinimlerine göre seçilir.", "Talebinizde tow boyutu, sınıf, sizing, paket biçimi, proses, miktar, nihai kullanım ve varış ülkesini belirtin."],
      faqs: [
        { question: "Hangi karbon fiber tow boyutları talep edilebilir?", answer: "Talepte 1K, 3K, 6K, 12K, 24K veya 50K belirtilebilir. Gerçek tedarik sınıf, sizing, parti, miktar ve nihai kullanım incelemesine bağlıdır." },
        { question: "12K tow için TDS var mı?", answer: "Evet. Sayfada sürekli 12K karbon fiber tow için referans TDS bulunur. Kesin sınıf, kaynak, parti ve sizing siparişte doğrulanmalıdır." },
        { question: "Teklif için hangi bilgiler gerekir?", answer: "Tow boyutu, fiber sınıfı, sizing, uyumlu proses, bobin ağırlığı, miktar, nihai kullanım ve varış ülkesini belirtin." },
      ],
    },
    "carbon-fiber-ud-fabric": {
      description: "Kompozitler ve yapısal güçlendirme sistemlerinde yönlü takviye için tek yönlü UD karbon fiber kumaş; g/m², genişlik ve fiber sınıfı talebe göre doğrulanır.",
      heroCopy: "Teklif için fiber sınıfı, g/m², genişlik, fiber yönü, reçine prosesi, miktar, nihai kullanım ve varış ülkesini belirtin. 300gsm ürün TDS'si ile eski bir kaynak kaydına dayanan ayrı 200gsm güçlendirme kumaşı tedarik referansı mevcuttur.",
      seoDescription: "Kompozit ve yapısal güçlendirme için belgeli 200gsm ve 300gsm referansları bulunan tek yönlü UD karbon fiber kumaş tedarikçisi.",
      intro: ["UD kumaş, fiberlerin çoğunu tek yönde toplar ve yük yolu ile üretim prosesine göre seçilir.", "Tedarik öncesinde sipariş spesifikasyonu, parti, genişlik, reçine uyumu ve nihai kullanım doğrulanır."],
      faqs: [
        { question: "200gsm ve 300gsm UD kumaş için hangi belgeler var?", answer: "Sayfada 300gsm UD ürün TDS'si ve eski bir kaynak kaydına dayanan 200gsm güçlendirme kumaşı tedarik referansı bulunur. Güncel kaynak, sınıf, sizing, genişlik, rulo ve parti belgeleri siparişte doğrulanmalıdır." },
        { question: "Her UD kumaş yapısal güçlendirme için uygun mudur?", answer: "Hayır. Fiber, yapı ve reçine proje tasarımına, yüzeye ve uygulama yöntemine uygun olmalı; seçim yetkin bir mühendis tarafından onaylanmalıdır." },
        { question: "Teklif için hangi veriler gerekir?", answer: "Fiber sınıfı, g/m², genişlik, fiber yönü, reçine prosesi, miktar, proje ve varış ülkesini belirtin." },
      ],
    },
    "structural-strengthening-system": {
      description: "Sivil güçlendirme projeleri için tek yönlü UD karbon kumaş, pultrüzyon CFRP plaka ve uyumlu epoksi reçineden oluşan CFRP yapısal güçlendirme sistemi.",
      heroCopy: "Malzeme; proje tasarımı, yüzey, güçlendirme yönü, plaka boyutları veya kumaş g/m² değeri, epoksi sistemi ve yetkin mühendis incelemesine göre seçilir.",
      seoDescription: "Beton, köprü ve bina güçlendirme için UD kumaş, pultrüzyon CFRP plaka ve epoksi malzeme tedarikçisi.",
      intro: ["UD kumaş yüzeye uyum sağlayarak yönlü takviye sunar; pultrüzyon CFRP plaka ise sistemin rijit takviye elemanıdır.", "Yükler, hesap, yüzey hazırlığı, uygulama ve kabul yetkin mühendis ile proje gerekliliklerine göre belirlenmelidir."],
      faqs: [
        { question: "UD kumaş mı yoksa CFRP plaka mı seçilmelidir?", answer: "Seçim geometriye, yüzeye, yük yönüne, güçlendirme tasarımına ve uygulama yöntemine bağlıdır; proje mühendisi tarafından doğrulanmalıdır." },
        { question: "Hangi teknik belgeler mevcuttur?", answer: "Sayfada 300gsm UD kumaş TDS'si, eski kaynak temelli 200gsm güçlendirme kumaşı tedarik referansı ve 1.2 mm pultrüzyon CFRP plaka TDS'si bulunur. Veriler yalnızca ilgili belgede tanımlanan ürün için geçerlidir." },
        { question: "Teklif için hangi bilgiler gerekir?", answer: "Yapı tipi, yüzey, proje alanı, kumaş veya plaka, boyutlar, epoksi sistemi, miktar, varış ülkesi ve mevcut tasarım belgelerini paylaşın." },
      ],
    },
    "carbon-fiber-woven-fabric": {
      description: "Kuru serim, infüzyon, kalıplama ve görünür CFRP yüzeyleri için plain veya twill dokuma karbon fiber kumaş.",
      heroCopy: "Teklif öncesinde 1K / 3K / 6K / 12K tow boyutu, dokuma, g/m², genişlik, rulo uzunluğu, reçine prosesi, miktar ve nihai kullanım doğrulanır. 3K 200gsm twill ürün TDS'si mevcuttur.",
      seoDescription: "Belgeli 3K 200gsm twill ürün dahil dokuma karbon fiber kumaş tedarikçisi; dokuma, g/m², genişlik ve rulo seçimi.",
      intro: ["Plain dokuma kararlı bir yapı sunarken twill genellikle daha iyi şekil alır ve görünür çapraz CFRP deseni oluşturur.", "Talebinizde tow boyutu, dokuma, g/m², genişlik, rulo uzunluğu, reçine prosesi, miktar ve nihai kullanımı belirtin."],
      faqs: [
        { question: "3K 200gsm twill TDS'si var mı?", answer: "Evet. Bu ürünün TDS'si indirilebilir; genişlik, rulo uzunluğu ve sipariş spesifikasyonu ayrıca doğrulanır." },
        { question: "Plain ve twill dokuma arasındaki fark nedir?", answer: "Plain dokuma daha kararlı bir kesişim sunar; twill genellikle daha iyi şekillenir ve çapraz yüzey deseni gösterir. Seçim geometriye, yüzeye ve prosese bağlıdır." },
        { question: "Teklif için hangi bilgiler gerekir?", answer: "Tow boyutu, dokuma, g/m², genişlik, rulo uzunluğu, reçine prosesi, miktar, nihai kullanım ve varış ülkesini belirtin." },
      ],
    },
  },
};

function localizeFocus(locale: ExtendedLocale, focus: string) {
  return Object.entries({ ...focusTerms[locale], ...filamentWoundTubeTranslations[locale].focus })
    .sort(([left], [right]) => right.length - left.length)
    .reduce((value, [source, target]) => value.replaceAll(source, target), focus);
}

function makeProducts(locale: ExtendedLocale) {
  const pack = packs[locale];
  return Object.fromEntries(phaseOneProductSlugs.map((slug) => {
    if (slug === "fiber-optic-cable-drum") {
      return [slug, fiberOpticCableDrumLocalizedContent[locale]];
    }
    const definition = productDefinitions[slug];
    const focus = localizeFocus(locale, definition.focus);
    const name = extendedProductTranslations[locale][
      ({
        "carbon-fiber-woven-fabric": "Woven Carbon Fiber Fabric",
        "spread-tow-carbon-fiber-fabric": "Spread Tow Carbon Fiber Fabric",
        "carbon-fiber-ud-fabric": "UD Carbon Fiber Fabric",
        "carbon-fiber-yarn-and-tow": "Carbon Fiber Yarn & Tow",
        "prepreg-carbon-fiber-materials": "Prepreg Carbon Fiber Materials",
        "chopped-carbon-fiber": "Chopped Carbon Fiber",
        "milled-carbon-fiber-powder": "Milled Carbon Fiber Powder",
        "carbon-fiber-multiaxial-ncf-fabric": "Carbon Fiber Multiaxial NCF Fabric",
        "3k-carbon-fiber-laminate-sheet": "3K Carbon Fiber Laminate Sheet",
        "structural-strengthening-system": "Structural Strengthening System",
        "filament-wound-carbon-fiber-tube": "Filament-Wound Carbon Fiber Tube",
      } as const)[slug]
    ];
    const dualCoreCopy = locale === "ru" && russianPriorityProductCopy[slug]
      ? russianPriorityProductCopy[slug]
      : locale !== "ru" && isAdditionalPrioritySlug(slug)
        ? additionalPriorityProductCopy[locale]?.[slug]
      : slug === "carbon-fiber-multiaxial-ncf-fabric" || slug === "3k-carbon-fiber-laminate-sheet"
      ? dualCoreProductCopy[locale]?.[slug]
      : undefined;
    return [slug, {
      name,
      shortName: name,
      category: slug === "filament-wound-carbon-fiber-tube"
        ? filamentWoundTubeTranslations[locale].category
        : slug === "carbon-fiber-multiaxial-ncf-fabric" || slug === "3k-carbon-fiber-laminate-sheet"
          ? dualCoreCategoryTranslations[locale][slug]
          : pack.categories[definition.category],
      description: dualCoreCopy?.description ?? pack.productDescription(name, focus),
      heroCopy: dualCoreCopy?.heroCopy ?? pack.productHero(name, focus),
      seo: { title: name, description: dualCoreCopy?.seoDescription ?? pack.productDescription(name, focus), keywords: [name, `${name} ${pack.supplier}`] },
      intro: dualCoreCopy?.intro ?? pack.productIntro(name, focus),
      applications: definition.apps.map((key) => pack.applications[key]),
      faqs: dualCoreCopy?.faqs ?? pack.productFaq(name, focus),
    } satisfies LocalizedProductContent];
  })) as Record<ProductSlug, LocalizedProductContent>;
}

function makeApplications(locale: ExtendedLocale) {
  const pack = packs[locale];
  const productNames = extendedProductTranslations[locale];
  return Object.fromEntries(phaseOneApplicationSlugs.map((slug) => {
    const title = pack.appTitles[slug];
    const recommended: Array<[string, string]> = slug === "structural-strengthening"
      ? [["UD Carbon Fiber Fabric", "/products/carbon-fiber-ud-fabric"], ["Structural Strengthening System", "/products/structural-strengthening-system"]]
      : slug === "plastic-resin-reinforcement"
        ? [["Chopped Carbon Fiber", "/products/chopped-carbon-fiber"], ["Milled Carbon Fiber Powder", "/products/milled-carbon-fiber-powder"]]
        : [["Woven Carbon Fiber Fabric", "/products/carbon-fiber-woven-fabric"], ["UD Carbon Fiber Fabric", "/products/carbon-fiber-ud-fabric"], ["Prepreg Carbon Fiber Materials", "/products/prepreg-carbon-fiber-materials"]];
    return [slug, {
      title,
      description: pack.appDescription(title),
      quickAnswer: pack.appQuickAnswer(title),
      seo: { title, description: pack.appDescription(title) },
      why: pack.why,
      recommendedMaterials: recommended.map(([key, href]) => ({ name: productNames[key], note: pack.appDescription(productNames[key]), href })),
      commonSpecifications: [[pack.labels.Material, `UD / ${pack.categories.woven} / prepreg / CFRP`], [pack.labels.Spec, `3K / 12K / T300 / T700 / ${pack.custom}`], [pack.labels.Review, pack.byReview]],
      selectionGuide: pack.selection,
      rfqDetails: pack.rfq,
      faqs: pack.faq,
    } satisfies LocalizedApplicationContent];
  })) as Record<ApplicationSlug, LocalizedApplicationContent>;
}

export const extendedProductContent = Object.fromEntries(
  (Object.keys(packs) as ExtendedLocale[]).map((locale) => [locale, makeProducts(locale)]),
) as Record<ExtendedLocale, Record<ProductSlug, LocalizedProductContent>>;

export const extendedApplicationContent = Object.fromEntries(
  (Object.keys(packs) as ExtendedLocale[]).map((locale) => [locale, makeApplications(locale)]),
) as Record<ExtendedLocale, Record<ApplicationSlug, LocalizedApplicationContent>>;

const homeTitles: Record<ExtendedLocale, string> = {
  ru: "Экспортные материалы и изделия из углеродного волокна для международной композитной промышленности",
  ar: "مواد ومنتجات ألياف الكربون للتصدير للصناعات المركبة العالمية",
  fr: "Matériaux et produits en fibre de carbone pour l’industrie mondiale des composites",
  ko: "글로벌 복합재 산업용 수출 탄소섬유 소재 및 제품",
  pl: "Materiały i produkty z włókna węglowego dla światowego przemysłu kompozytowego",
  tr: "Küresel kompozit endüstrileri için ihracata yönelik karbon fiber malzemeler ve ürünler",
  uk: "Матеріали та вироби з вуглецевого волокна для міжнародної композитної промисловості",
  vi: "Vật liệu và sản phẩm sợi carbon cho ngành composite toàn cầu",
  th: "วัสดุและผลิตภัณฑ์คาร์บอนไฟเบอร์สำหรับอุตสาหกรรมคอมโพสิตทั่วโลก",
};

function home(locale: ExtendedLocale) {
  const p = packs[locale];
  const title = homeTitles[locale];
  const products = extendedProductTranslations[locale];
  return {
    seo: { title, description: `${p.supplier}: ${products["Woven Carbon Fiber Fabric"]}, ${products["UD Carbon Fiber Fabric"]}, ${products["Prepreg Carbon Fiber Materials"]}, ${products["Chopped Carbon Fiber"]}, ${products["Milled Carbon Fiber Powder"]}, CFRP.`, keywords: [p.supplier, "CFRP", "3K", "UD", "prepreg"] },
    h1: title,
    copy: `${products["Woven Carbon Fiber Fabric"]}, ${products["UD Carbon Fiber Fabric"]}, ${products["Carbon Fiber Yarn & Tow"]}, ${products["Prepreg Carbon Fiber Materials"]}, CFRP.`,
    primaryCta: p.byApplication,
    secondaryCta: p.quote,
    catalogCta: p.catalog,
    materialRail: [products["Carbon Fiber Yarn & Tow"], products["Woven Carbon Fiber Fabric"], "UD", "Prepreg", "CFRP", p.review],
    heroMeta: { title: p.productOverview, format: p.format, formatValue: `tow / ${p.categories.woven} / prepreg / CFRP`, process: p.process, processValue: `${p.applications.infusion} / ${p.applications.molding} / ${p.applications.pultrusion}`, review: p.review, reviewValue: p.rfq.slice(5).join(" / ") },
    sections: { productEyebrow: p.productOverview, productTitle: p.productOverview, productCopy: `${p.format}, ${p.process}, ${p.review}.`, applicationEyebrow: p.byApplication, applicationTitle: p.byApplication, applicationCopy: p.appQuickAnswer(p.productOverview), processEyebrow: p.process, processTitle: p.process, processCopy: p.selection.join(" ") },
  };
}

export const extendedHomeContent = Object.fromEntries((Object.keys(packs) as ExtendedLocale[]).map((locale) => [locale, home(locale)])) as Record<ExtendedLocale, ReturnType<typeof home>>;

function productsPage(locale: ExtendedLocale) {
  const p = packs[locale];
  const products = extendedProductTranslations[locale];
  return { seo: { title: p.productOverview, description: `${p.productOverview} ${products["Woven Carbon Fiber Fabric"]}, ${products["UD Carbon Fiber Fabric"]}, ${products["Prepreg Carbon Fiber Materials"]}, ${products["Milled Carbon Fiber Powder"]}, CFRP.` }, eyebrow: p.productOverview, title: p.productOverview, copy: p.appQuickAnswer(p.productOverview), completePortfolio: p.productOverview, completeTitle: p.productOverview, completeCopy: p.productDescription(p.productOverview, "3K / 12K / T300 / T700 / UD / CFRP"), keyProducts: p.labels.Products, commonApplications: p.byApplication };
}

export const extendedProductsPageContent = Object.fromEntries((Object.keys(packs) as ExtendedLocale[]).map((locale) => [locale, productsPage(locale)])) as Record<ExtendedLocale, ReturnType<typeof productsPage>>;

const contactLabels: Record<ExtendedLocale, { response: string; location: string; locationValue: string }> = {
  ru: { response: "Ответ", location: "Местоположение", locationValue: "Чжэцзян, Китай" },
  ar: { response: "الرد", location: "الموقع", locationValue: "تشجيانغ، الصين" },
  fr: { response: "Réponse", location: "Localisation", locationValue: "Zhejiang, Chine" },
  ko: { response: "응답", location: "위치", locationValue: "중국 저장성" },
  pl: { response: "Odpowiedź", location: "Lokalizacja", locationValue: "Zhejiang, Chiny" },
  tr: { response: "Yanıt", location: "Konum", locationValue: "Zhejiang, Çin" },
  uk: { response: "Відповідь", location: "Розташування", locationValue: "Чжецзян, Китай" },
  vi: { response: "Phản hồi", location: "Địa điểm", locationValue: "Chiết Giang, Trung Quốc" },
  th: { response: "การตอบกลับ", location: "ที่ตั้ง", locationValue: "เจ้อเจียง, จีน" },
};

function contactPage(locale: ExtendedLocale) {
  const p = packs[locale];
  return { seo: { title: p.quote, description: `${p.quote}: ${p.supplier}.` }, eyebrow: p.quote, title: p.quote, copy: p.rfq.join(", "), asideTitle: p.quote, asideCopy: p.selection.join(" "), response: contactLabels[locale].response, location: contactLabels[locale].location, locationValue: contactLabels[locale].locationValue };
}

export const extendedContactContent = Object.fromEntries((Object.keys(packs) as ExtendedLocale[]).map((locale) => [locale, contactPage(locale)])) as Record<ExtendedLocale, ReturnType<typeof contactPage>>;

function catalogPage(locale: ExtendedLocale) {
  const p = packs[locale];
  return { seo: { title: p.catalog, description: `${p.catalog}: ${p.productOverview}` }, eyebrow: p.catalog, title: p.catalog, copy: p.productDescription(p.productOverview, "3K / 12K / T300 / T700 / UD / CFRP"), cards: [[p.categories.woven, extendedProductTranslations[locale]["Woven Carbon Fiber Fabric"]], [p.categories.prepreg, extendedProductTranslations[locale]["Prepreg Carbon Fiber Materials"]], ["CFRP", extendedUiCopy[locale].common.relatedProducts], [p.categories.chopped, `${extendedProductTranslations[locale]["Chopped Carbon Fiber"]} / ${extendedProductTranslations[locale]["Milled Carbon Fiber Powder"]}`]] };
}

export const extendedCatalogContent = Object.fromEntries((Object.keys(packs) as ExtendedLocale[]).map((locale) => [locale, catalogPage(locale)])) as Record<ExtendedLocale, ReturnType<typeof catalogPage>>;

const contactMethodLabels: Record<ExtendedLocale, Record<string, string>> = {
  ru: { Email: "Эл. почта", Phone: "Телефон", WhatsApp: "WhatsApp" },
  ar: { Email: "البريد الإلكتروني", Phone: "الهاتف", WhatsApp: "واتساب" },
  fr: { Email: "Email", Phone: "Téléphone", WhatsApp: "WhatsApp" },
  ko: { Email: "이메일", Phone: "전화", WhatsApp: "WhatsApp" },
  pl: { Email: "Email", Phone: "Telefon", WhatsApp: "WhatsApp" },
  tr: { Email: "E-posta", Phone: "Telefon", WhatsApp: "WhatsApp" },
  uk: { Email: "Ел. пошта", Phone: "Телефон", WhatsApp: "WhatsApp" },
  vi: { Email: "Email", Phone: "Điện thoại", WhatsApp: "WhatsApp" },
  th: { Email: "อีเมล", Phone: "โทรศัพท์", WhatsApp: "WhatsApp" },
};

export function translateExtendedLabel(locale: ExtendedLocale, label: string) {
  const pack = packs[locale];
  const exact = pack.labels[label] ?? contactMethodLabels[locale][label];
  if (exact) return exact;
  return label
    .replace(/\bTypical\b/gi, pack.typical)
    .replace(/\bCustom\b/gi, pack.custom)
    .replace(/\bby review\b/gi, pack.byReview);
}

export function translateExtendedSpecText(locale: ExtendedLocale, text: string) {
  const translated = text
    .replace(/\bBy customer requirement\b/gi, packs[locale].custom)
    .replace(/\bBy order\b/gi, packs[locale].custom)
    .replace(/\bBy specification\b/gi, packs[locale].custom);
  return translateExtendedLabel(locale, translated);
}
