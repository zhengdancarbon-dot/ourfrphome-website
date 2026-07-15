import type { ExtendedLocale } from "@/lib/i18n/config";
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
    categories: { woven: "Двунаправленная ткань", spread: "Плоская поверхность CFRP", ud: "Направленное армирование", yarn: "Исходный материал", prepreg: "Армирование со смолой", chopped: "Короткое волокно", powder: "Молотое волокно", strengthening: "Система гражданского усиления" },
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
    categories: { woven: "نسيج ثنائي الاتجاه", spread: "سطح CFRP مسطح", ud: "تقوية اتجاهية", yarn: "مادة أولية", prepreg: "تقوية مشربة بالراتنج", chopped: "ألياف قصيرة", powder: "ألياف مطحونة", strengthening: "نظام تقوية مدني" },
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
    categories: { woven: "Tissu bidirectionnel", spread: "Surface CFRP plate", ud: "Renfort directionnel", yarn: "Matière amont", prepreg: "Renfort imprégné", chopped: "Fibre courte", powder: "Fibre broyée", strengthening: "Système de renforcement civil" },
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
};

const productDefinitions: Record<ProductSlug, { category: keyof Pack["categories"]; focus: string; apps: Array<keyof Pack["applications"]> }> = {
  "carbon-fiber-woven-fabric": { category: "woven", focus: "1K / 3K / 6K / 12K, plain / twill, g/m2, width", apps: ["panels", "automotive", "sports", "civilDrone"] },
  "spread-tow-carbon-fiber-fabric": { category: "spread", focus: "8x8mm / 10x10mm, tow, g/m2, width", apps: ["panels", "automotive", "sports"] },
  "carbon-fiber-ud-fabric": { category: "ud", focus: "T300 / T700, 200 / 300 / 600 g/m2, width, fiber direction", apps: ["pultrusion", "concrete", "infusion"] },
  "carbon-fiber-yarn-and-tow": { category: "yarn", focus: "1K / 3K / 6K / 12K / 24K / 50K, T300 / T700, sizing", apps: ["pultrusion", "infusion", "molding"] },
  "prepreg-carbon-fiber-materials": { category: "prepreg", focus: "woven / UD / spread tow, resin content, cure profile", apps: ["automotive", "sports", "molding"] },
  "chopped-carbon-fiber": { category: "chopped", focus: "3 mm / 6 mm / 12 mm, sizing, matrix", apps: ["plastics", "automotive"] },
  "milled-carbon-fiber-powder": { category: "powder", focus: "mean length, fiber diameter, mesh, matrix", apps: ["plastics", "molding"] },
  "structural-strengthening-system": { category: "strengthening", focus: "UD fabric, pultruded CFRP plate, epoxy resin, project dimensions", apps: ["concrete", "pultrusion"] },
};

const focusTerms: Record<ExtendedLocale, Record<string, string>> = {
  ru: { "project dimensions": "размеры проекта", "pultruded CFRP plate": "пултрузионная пластина CFRP", "fiber direction": "направление волокна", "resin content": "содержание смолы", "cure profile": "режим отверждения", "mean length": "средняя длина", "fiber diameter": "диаметр волокна", "epoxy resin": "эпоксидная смола", "UD fabric": "ткань UD", width: "ширина", sizing: "замасливатель", matrix: "матрица", mesh: "размер частиц", plain: "полотняное плетение", twill: "саржевое плетение", woven: "ткань" },
  ar: { "project dimensions": "أبعاد المشروع", "pultruded CFRP plate": "صفيحة CFRP مسحوبة", "fiber direction": "اتجاه الألياف", "resin content": "محتوى الراتنج", "cure profile": "برنامج المعالجة", "mean length": "متوسط الطول", "fiber diameter": "قطر الألياف", "epoxy resin": "راتنج إيبوكسي", "UD fabric": "نسيج UD", width: "العرض", sizing: "مادة المعالجة السطحية", matrix: "المصفوفة", mesh: "حجم الجسيمات", plain: "نسج سادة", twill: "نسج قطني", woven: "منسوج" },
  fr: { "project dimensions": "dimensions du projet", "pultruded CFRP plate": "plaque CFRP pultrudée", "fiber direction": "direction des fibres", "resin content": "teneur en résine", "cure profile": "cycle de cuisson", "mean length": "longueur moyenne", "fiber diameter": "diamètre des fibres", "epoxy resin": "résine époxy", "UD fabric": "tissu UD", width: "largeur", sizing: "ensimage", matrix: "matrice", mesh: "granulométrie", plain: "toile", twill: "sergé", woven: "tissé" },
  ko: { "project dimensions": "프로젝트 치수", "pultruded CFRP plate": "인발 CFRP 판", "fiber direction": "섬유 방향", "resin content": "수지 함량", "cure profile": "경화 조건", "mean length": "평균 길이", "fiber diameter": "섬유 직경", "epoxy resin": "에폭시 수지", "UD fabric": "UD 원단", width: "폭", sizing: "사이징", matrix: "매트릭스", mesh: "입도", plain: "평직", twill: "능직", woven: "직조" },
  pl: { "project dimensions": "wymiary projektu", "pultruded CFRP plate": "pultrudowana płyta CFRP", "fiber direction": "kierunek włókien", "resin content": "zawartość żywicy", "cure profile": "profil utwardzania", "mean length": "średnia długość", "fiber diameter": "średnica włókna", "epoxy resin": "żywica epoksydowa", "UD fabric": "tkanina UD", width: "szerokość", sizing: "preparacja powierzchniowa", matrix: "matryca", mesh: "wielkość cząstek", plain: "splot płócienny", twill: "splot diagonalny", woven: "tkanina" },
  tr: { "project dimensions": "proje ölçüleri", "pultruded CFRP plate": "pultrüzyon CFRP plaka", "fiber direction": "elyaf yönü", "resin content": "reçine oranı", "cure profile": "kür profili", "mean length": "ortalama uzunluk", "fiber diameter": "elyaf çapı", "epoxy resin": "epoksi reçine", "UD fabric": "UD kumaş", width: "genişlik", sizing: "sizing", matrix: "matris", mesh: "parçacık boyutu", plain: "düz dokuma", twill: "dimi dokuma", woven: "dokuma" },
};

function localizeFocus(locale: ExtendedLocale, focus: string) {
  return Object.entries(focusTerms[locale])
    .sort(([left], [right]) => right.length - left.length)
    .reduce((value, [source, target]) => value.replaceAll(source, target), focus);
}

function makeProducts(locale: ExtendedLocale) {
  const pack = packs[locale];
  return Object.fromEntries(phaseOneProductSlugs.map((slug) => {
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
        "structural-strengthening-system": "Structural Strengthening System",
      } as const)[slug]
    ];
    return [slug, {
      name,
      shortName: name,
      category: pack.categories[definition.category],
      description: pack.productDescription(name, focus),
      heroCopy: pack.productHero(name, focus),
      seo: { title: name, description: pack.productDescription(name, focus), keywords: [name, `${name} ${pack.supplier}`] },
      intro: pack.productIntro(name, focus),
      applications: definition.apps.map((key) => pack.applications[key]),
      faqs: pack.productFaq(name, focus),
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
