/**
 * CEMG PATRIA - SCRIPT PRINCIPAL
 * Funcionalidades interactivas, filtros, modal de carreras con contenido detallado,
 * test vocacional, formulario de pre-matrícula oficial y animaciones.
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. BASE DE DATOS DE LAS CARRERAS (DETALLE EXTENSO Y PROFESIONAL)
       ========================================================================== */
    const careersData = {
        informatica: {
            id: 'informatica',
            name: 'Bachillerato Técnico Profesional en Informática',
            shortName: 'BTP en Informática',
            duration: '3 Años (10mo a 12vo Grado)',
            themeColor: '#0284c7', // Azul solicitado
            lightBg: '#f0f9ff',
            headerBg: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
            motto: 'Domina el código, la tecnología del futuro y las soluciones digitales que mueven al mundo.',
            whatItTeaches: [
                'Programación de software y desarrollo de páginas web modernas (HTML, CSS, JavaScript, Python y bases de datos).',
                'Mantenimiento preventivo y correctivo de computadoras, ensamblaje de hardware y configuración de sistemas operativos.',
                'Diseño, configuración y seguridad de redes locales (LAN), routering y cableado estructurado.',
                'Diseño gráfico digital, edición de medios publicitarios y ofimática avanzada (Word, Excel profesional, PowerPoint).',
                'Introducción a la inteligencia artificial, ciberseguridad básica y metodologías de proyectos tecnológicos.'
            ],
            whatItProvides: [
                'Título Oficial de Bachiller Técnico Profesional avalado por la Secretaría de Educación.',
                'Acceso directo a puestos laborales de soporte técnico y desarrollo digital desde los 18 años.',
                'Preparación de excelencia para ingresar a Ingeniería en Sistemas, Informática Administrativa, Telecomunicaciones o Ciencias de la Computación.',
                'Habilidades lógicas para resolver problemas complejos y crear tu propia empresa de servicios tecnológicos.'
            ],
            careerTips: '¡No te limites a las clases! Practica programando pequeños proyectos personales en casa, aprende inglés técnico (los mejores manuales están en inglés) y participa en los proyectos de feria científica del colegio.',
            jobField: [
                'Técnico en soporte y mantenimiento de sistemas en empresas comerciales y bancos.',
                'Desarrollador web junior o diseñador de interfaces digitales para negocios locales.',
                'Administrador de redes y centros de cómputo en centros educativos o maquilas.',
                'Emprendedor independiente ofreciendo reparación de computadoras, venta de equipos y consultoría tecnológica.'
            ],
            keySubjects: [
                'Programación I, II y III',
                'Mantenimiento y Reparación',
                'Redes Informáticas',
                'Diseño Web y Multimedia',
                'Laboratorio de Informática'
            ],
            gallery: [
                { url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80', caption: 'Prácticas en laboratorio con computadoras' },
                { url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=600&q=80', caption: 'Ensamble de componentes y hardware' },
                { url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80', caption: 'Trabajo en equipo y proyectos de software' }
            ]
        },

        administracion: {
            id: 'administracion',
            name: 'Bachillerato Técnico Profesional en Administración de Empresas',
            shortName: 'BTP en Administración',
            duration: '3 Años (10mo a 12vo Grado)',
            themeColor: '#18181b', // Negro / Grafito solicitado
            lightBg: '#f4f4f5',
            headerBg: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
            motto: 'Lidera organizaciones, crea negocios exitosos y gestiona con visión estratégica moderna.',
            whatItTeaches: [
                'Principios de gestión empresarial, planeación estratégica, organización y control directivo.',
                'Gestión del talento humano: selección de personal, clima laboral, motivación y liderazgo de equipos.',
                'Mercadotecnia, estudio de mercados, publicidad digital, ventas estratégicas y atención al cliente.',
                'Formulación y evaluación de planes de negocios reales para emprender micro y pequeñas empresas.',
                'Legislación laboral hondureña, derecho mercantil y ética corporativa.'
            ],
            whatItProvides: [
                'Mentalidad de emprendimiento para no solo buscar empleo, sino crear fuentes de trabajo.',
                'Habilidades de oratoria, negociación, toma de decisiones y dirección ejecutiva.',
                'Pase preferente a licenciaturas en Administración de Empresas, Marketing, Comercio Internacional, Aduanas y Gestión de Negocios.',
                'Experiencia práctica con ferias empresariales donde presentarás tu propia marca al público.'
            ],
            careerTips: 'Lee noticias de economía, aprende a hablar en público sin miedo y ejercita tu liderazgo participando activamente en los comités estudiantiles. Un buen administrador inspira a su gente.',
            jobField: [
                'Coordinador o supervisor de operaciones en empresas comerciales e industriales.',
                'Asistente de recursos humanos, reclutamiento y capacitación de personal.',
                'Ejecutivo de ventas, atención al cliente o mercadotecnia en retail y servicios.',
                'Propietario y gestor de tu propia microempresa o negocio familiar.'
            ],
            keySubjects: [
                'Administración General y Estratégica',
                'Mercadotecnia y Publicidad',
                'Gestión del Talento Humano',
                'Formulación de Proyectos Empresariales',
                'Legislación Mercantil y Laboral'
            ],
            gallery: [
                { url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80', caption: 'Exposiciones de proyectos y liderazgo corporativo' },
                { url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80', caption: 'Análisis de mercadeo y estrategias de negocio' },
                { url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80', caption: 'Trabajo dinámico en equipo multidisciplinario' }
            ]
        },

        finanzas: {
            id: 'finanzas',
            name: 'Bachillerato Técnico Profesional en Contaduría y Finanzas',
            shortName: 'BTP en Finanzas',
            duration: '3 Años (10mo a 12vo Grado)',
            themeColor: '#16a34a', // Verde solicitado
            lightBg: '#f0fdf4',
            headerBg: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
            motto: 'El control transparente y la sabiduría económica detrás de toda gran empresa exitosa.',
            whatItTeaches: [
                'Contabilidad general, comercial, bancaria, de costos y gubernamental.',
                'Cálculo e interpretación del régimen tributario hondureño (SAR, declaraciones de ISR, IVA e impuestos municipales).',
                'Auditoría financiera, control interno y revisión de balances generales y estados de resultados.',
                'Uso de software contable automatizado y hojas de cálculo avanzadas (Excel financiero).',
                'Matemáticas financieras: cálculo de intereses, amortizaciones, préstamos e inversiones bancarias.'
            ],
            whatItProvides: [
                'Una de las carreras técnicas con mayor índice de contratación inmediata en bancos, cooperativas y comercios.',
                'Capacidad de asesorar a pequeños y medianos comerciantes en sus declaraciones contables y tributarias.',
                'Bases insuperables para cursar Contaduría Pública y Finanzas, Economía, Banca y Seguros en la Universidad.',
                'Desarrollo de una rigurosa ética profesional y precisión numérica valorada por todos los empleadores.'
            ],
            careerTips: 'Sé sumamente ordenado con tus apuntes y archivos. La clave de un gran contador es la atención al detalle y la honestidad intachable. Domina Excel al 100%, será tu mayor superpoder.',
            jobField: [
                'Auxiliar contable o asistente de auditoría en despachos contables y empresas del Valle de Sula.',
                'Cajero o asesor de servicios bancarios en cooperativas y entidades financieras.',
                'Encargado de inventarios, compras, nóminas y planillas de pago.',
                'Asesor contable y tributario independiente para negocios y profesionales.'
            ],
            keySubjects: [
                'Contabilidad I, II y de Costos',
                'Matemáticas Financieras',
                'Legislación Tributaria y Fiscal (SAR)',
                'Auditoría y Control Interno',
                'Paquetes Contables Automatizados'
            ],
            gallery: [
                { url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80', caption: 'Análisis financiero y métricas contables' },
                { url: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80', caption: 'Revisión minuciosa de libros y auditoría' },
                { url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80', caption: 'Asesoría a clientes y gestión de inversiones' }
            ]
        },

        humanidades: {
            id: 'humanidades',
            name: 'Bachillerato en Ciencias y Humanidades',
            shortName: 'Ciencias y Humanidades',
            duration: '2 Años (10mo a 11vo Grado)',
            themeColor: '#1e3a8a', // Azul Oscuro solicitado
            lightBg: '#eff6ff',
            headerBg: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80',
            motto: 'Tu trampolín directo con el más alto índice académico hacia las facultades universitarias.',
            whatItTeaches: [
                'Profundización en Ciencias Exactas: Física avanzada, Química orgánica e inorgánica, Biología y Matemáticas.',
                'Ciencias Sociales, Historia de Honduras, Filosofía, Sociología y formación ciudadana crítica.',
                'Metodología de la investigación científica, redacción de ensayos académicos y oratoria formal.',
                'Inglés académico, comunicación oral y comprensión de textos científicos.',
                'Bioética, ecología y desarrollo de proyectos de impacto social comunitario.'
            ],
            whatItProvides: [
                'El título en solo 2 años que te permite presentar la Prueba de Aptitud Académica (PAA) de la UNAH con el puntaje más alto.',
                'La preparación idónea para Medicina, Odontología, Enfermería, Derecho, Psicología, Ingenierías y Arquitectura.',
                'Desarrollo del pensamiento crítico, análisis lógico y amor por la investigación formal.',
                'Visitas a laboratorios científicos y proyectos de tesis de investigación social.'
            ],
            careerTips: 'Aprende a gestionar tu tiempo con un horario de estudio diario. Lee libros clásicos y artículos científicos, debate con respeto y haz de la curiosidad tu motor principal.',
            jobField: [
                'Ingreso inmediato a la Universidad Nacional Autónoma de Honduras (UNAH), UPNFM o centros de educación superior.',
                'Asistente de investigación documental y proyectos comunitarios de ONGs.',
                'Tutorías académicas escolares en matemáticas, química y ciencias básicas.',
                'Pasantías introductorias en centros de salud y bufetes legales.'
            ],
            keySubjects: [
                'Física Fundamental y Avanzada',
                'Química General y Orgánica',
                'Biología y Ciencias de la Salud',
                'Filosofía y Lógica',
                'Metodología de la Investigación'
            ],
            gallery: [
                { url: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=600&q=80', caption: 'Prácticas con reactivos químicos en laboratorio' },
                { url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80', caption: 'Debates de filosofía y ciencias sociales' },
                { url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80', caption: 'Lectura e investigación bibliográfica rigurosa' }
            ]
        },

        aeb: {
            id: 'aeb',
            name: 'Bachillerato Técnico Profesional en Asistente Ejecutivo Bilingüe (AEB)',
            shortName: 'BTP Asistente Ejecutivo Bilingüe',
            duration: '3 Años (10mo a 12vo Grado)',
            themeColor: '#831843', // Rojo morado / borgoña solicitado
            lightBg: '#fdf2f8',
            headerBg: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',
            motto: 'Rompe fronteras con el inglés corporativo, la distinción ejecutiva y la comunicación de clase mundial.',
            whatItTeaches: [
                'Dominio intensivo del idioma inglés (Business English, gramática, pronunciación fluida y comprensión auditiva).',
                'Redacción comercial bilingüe: redacción de informes ejecutivos, memorandos, correos de negocios y minutas.',
                'Protocolo corporativo, relaciones públicas, etiqueta de oficina y atención ejecutiva a clientes VIP.',
                'Gestión de agendas digitales, conferencias virtuales (Zoom, Teams), archivo digital y correspondencia oficial.',
                'Traducción de documentos comerciales y servicio bilingüe telefónico / contact centers.'
            ],
            whatItProvides: [
                'Acceso directo a la creciente industria bilingüe (BPO, Call Centers, navieras de Puerto Cortés y maquilas internacionales) con salarios muy competitivos.',
                'Capacidad de desenvolverte con soltura tanto en español como en inglés en ambientes formales.',
                'Plataforma perfecta para estudiar Lenguas Extranjeras, Comercio Internacional, Diplomacia o Periodismo.',
                'Porte profesional, excelente presentación y habilidades blandas altamente cotizadas.'
            ],
            careerTips: '¡Pierde la vergüenza al hablar inglés! Escucha podcasts en inglés, mira películas con subtítulos en inglés y habla con tus compañeros en clase siempre en el idioma extranjero. La práctica hace al maestro.',
            jobField: [
                'Asistente ejecutivo de presidencia o gerencia en corporaciones multinacionales y embajadas.',
                'Agente de servicio al cliente bilingüe, soporte técnico o intérprete en la industria BPO.',
                'Recepcionista corporativo bilingüe en hoteles de lujo, aerolíneas y empresas de exportación.',
                'Coordinador de eventos corporativos, relaciones públicas y conferencias empresariales.'
            ],
            keySubjects: [
                'English for Business I, II & III',
                'Redacción Comercial Bilingüe',
                'Relaciones Públicas y Protocolo',
                'Sistemas de Archivo y Gestión de Oficina',
                'Traducción e Interpretación Introductoria'
            ],
            gallery: [
                { url: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80', caption: 'Presentaciones ejecutivas formales en inglés' },
                { url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80', caption: 'Manejo de correspondencia digital y llamadas corporativas' },
                { url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80', caption: 'Desarrollo de habilidades de etiqueta y relaciones públicas' }
            ]
        },

        mecanica: {
            id: 'mecanica',
            name: 'Bachillerato Técnico Profesional en Mecánica Automotriz e Industrial',
            shortName: 'BTP en Mecánica',
            duration: '3 Años (10mo a 12vo Grado)',
            themeColor: '#ea580c', // Naranja Industrial
            lightBg: '#fff7ed',
            headerBg: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=80',
            motto: 'Aprende haciendo con maquinaria real: la ingeniería práctica que impulsa el transporte y la producción nacional.',
            whatItTeaches: [
                'Diagnóstico computarizado (escáner automotriz) y reparación integral de motores de combustión interna.',
                'Sistemas eléctricos y electrónicos del vehículo: sensores, alternadores, baterías e inyección electrónica.',
                'Sistemas de frenos (ABS), suspensión hidráulica, dirección y transmisión de fuerza motriz.',
                'Soldadura eléctrica, oxiacetilénica y metrología de precisión con vernier y micrómetros.',
                'Mantenimiento preventivo de maquinaria industrial y seguridad industrial estricta.'
            ],
            whatItProvides: [
                'Aprendizaje 100% práctico en talleres equipados con motores didácticos y herramientas especializadas.',
                'Oportunidad de trabajar de inmediato en agencias de vehículos, talleres automotrices o la industria azucarera/bananera de La Lima.',
                'Base inmejorable para estudiar Ingeniería Mecánica, Mecatrónica o Ingeniería Industrial en la Universidad.',
                'Capacidad demostrada para abrir y administrar tu propio taller electromecánico particular.'
            ],
            careerTips: 'Respeta siempre las normas de seguridad y equipo de protección (botas con puntera, lentes, guantes). Diagnosticar requiere paciencia y método científico: no adivines fallas, compruébalas con instrumentos.',
            jobField: [
                'Técnico en diagnóstico automotriz en concesionarias y talleres multimarca de prestigio.',
                'Mecánico de mantenimiento en plantas industriales, fábricas y centrales de procesamiento.',
                'Inspector técnico en centros de alineación, balanceo y frenos computarizados.',
                'Dueño y maestro de tu propio taller de mecánica y electromecánica automotriz.'
            ],
            keySubjects: [
                'Mecánica Automotriz I, II y III (Motores)',
                'Electricidad y Electrónica del Automóvil',
                'Sistemas de Frenos, Dirección y Suspensión',
                'Taller de Soldadura y Metrología',
                'Diagnóstico Electrónico por Escáner'
            ],
            gallery: [
                { url: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=600&q=80', caption: 'Mantenimiento y afinamiento de motores reales' },
                { url: 'https://images.unsplash.com/photo-1504222490345-c075b6008014?auto=format&fit=crop&w=600&q=80', caption: 'Prácticas de soldadura y ensamble en taller' },
                { url: 'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=600&q=80', caption: 'Inspección de herramientas y diagnóstico preventivo' }
            ]
        }
    };

    /* ==========================================================================
       2. NAVEGACIÓN Y MENÚ MÓVIL
       ========================================================================== */
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    const header = document.getElementById('header');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            const isActive = navMenu.classList.toggle('active');
            mobileToggle.classList.toggle('active');
            mobileToggle.setAttribute('aria-expanded', isActive);
            document.body.style.overflow = isActive ? 'hidden' : '';
        });

        const allNavClickables = navMenu.querySelectorAll('a, button');
        allNavClickables.forEach(item => {
            item.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
                mobileToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });
    }

    // Efecto de sombra al scrollear
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    /* ==========================================================================
       3. FILTRADO DE CARRERAS (TABS)
       ========================================================================== */
    const filterButtons = document.querySelectorAll('.filter-btn');
    const careerCards = document.querySelectorAll('.career-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            careerCards.forEach(card => {
                const cardCareer = card.getAttribute('data-career');
                if (filterValue === 'all' || filterValue === cardCareer) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(15px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 250);
                }
            });
        });
    });

    /* ==========================================================================
       4. MODAL DINÁMICO DE CARRERA (INFO EXTENSA, FOTOS Y CONSEJOS)
       ========================================================================== */
    const careerModal = document.getElementById('careerModal');
    const modalDynamicContent = document.getElementById('modalDynamicContent');
    const closeCareerModal = document.getElementById('closeCareerModal');
    const openCareerButtons = document.querySelectorAll('.btn-open-career');

    function openModalWithCareer(careerId) {
        const career = careersData[careerId];
        if (!career) return;

        const whatItTeachesHTML = career.whatItTeaches.map(item => `
            <li><i class="fa-solid fa-circle-check" style="color: ${career.themeColor};"></i> <span>${item}</span></li>
        `).join('');

        const whatItProvidesHTML = career.whatItProvides.map(item => `
            <li><i class="fa-solid fa-star" style="color: ${career.themeColor};"></i> <span>${item}</span></li>
        `).join('');

        const jobFieldHTML = career.jobField.map(item => `
            <li><i class="fa-solid fa-briefcase" style="color: ${career.themeColor};"></i> <span>${item}</span></li>
        `).join('');

        const keySubjectsHTML = career.keySubjects.map(item => `
            <li><i class="fa-solid fa-book" style="color: ${career.themeColor};"></i> <span>${item}</span></li>
        `).join('');

        const galleryHTML = career.gallery.map(img => `
            <div class="gallery-item-wrap">
                <img src="${img.url}" alt="${img.caption}" loading="lazy">
                <small style="display:block; text-align:center; font-size:0.75rem; color:#64748b; margin-top:4px;">${img.caption}</small>
            </div>
        `).join('');

        modalDynamicContent.innerHTML = `
            <div class="modal-header-hero" style="background: linear-gradient(135deg, ${career.themeColor} 0%, #09090b 100%);">
                <div class="modal-header-content">
                    <div class="modal-badge-row">
                        <span class="modal-badge" style="background-color: ${career.themeColor};"><i class="fa-solid fa-award"></i> Carrera Oficial</span>
                        <span class="modal-badge"><i class="fa-regular fa-clock"></i> ${career.duration}</span>
                        <span class="modal-badge" style="background-color: #16a34a;"><i class="fa-solid fa-hand-holding-dollar"></i> 100% Gratuito</span>
                    </div>
                    <h2 class="modal-title">${career.name}</h2>
                    <p class="modal-motto">${career.motto}</p>
                </div>
            </div>

            <div class="modal-body">
                <!-- 2 Columnas Principales: Qué Enseña y Qué Brinda -->
                <div class="modal-grid-2col">
                    <div class="modal-section-box">
                        <h4 style="color: ${career.themeColor};"><i class="fa-solid fa-graduation-cap"></i> ¿Qué nos enseña esta carrera?</h4>
                        <ul class="modal-checklist">
                            ${whatItTeachesHTML}
                        </ul>
                    </div>

                    <div class="modal-section-box">
                        <h4 style="color: ${career.themeColor};"><i class="fa-solid fa-gift"></i> ¿Qué nos brinda a futuro?</h4>
                        <ul class="modal-checklist">
                            ${whatItProvidesHTML}
                        </ul>
                    </div>
                </div>

                <!-- Consejos del Docente / Tips para Triunfar -->
                <div class="modal-tips-banner" style="border-left: 5px solid ${career.themeColor};">
                    <h4 style="color: ${career.themeColor};"><i class="fa-solid fa-lightbulb"></i> Consejos de los Maestros del Patria para Triunfar:</h4>
                    <p>${career.careerTips}</p>
                </div>

                <!-- Campo Laboral y Materias -->
                <div class="modal-grid-2col">
                    <div class="modal-section-box">
                        <h4 style="color: ${career.themeColor};"><i class="fa-solid fa-building-user"></i> Oportunidades de Empleo (Campo Laboral)</h4>
                        <ul class="modal-checklist">
                            ${jobFieldHTML}
                        </ul>
                    </div>

                    <div class="modal-section-box">
                        <h4 style="color: ${career.themeColor};"><i class="fa-solid fa-list-check"></i> Asignaturas y Talleres Clave</h4>
                        <ul class="modal-checklist">
                            ${keySubjectsHTML}
                        </ul>
                    </div>
                </div>

                <!-- Galería de Fotos de la Carrera -->
                <div class="modal-gallery-section">
                    <h4 style="color: ${career.themeColor};"><i class="fa-solid fa-camera"></i> Galería de Prácticas y Estudiantes</h4>
                    <div class="modal-gallery-grid">
                        ${galleryHTML}
                    </div>
                </div>

                <!-- Botón CTA para matricularse directamente en esta carrera -->
                <div class="modal-footer-cta">
                    <div class="modal-cta-text">
                        <h5>¿Te apasiona el ${career.shortName}?</h5>
                        <p>Aparta tu cupo sin costo alguno en la matrícula 2026 del CEMG Patria.</p>
                    </div>
                    <button class="btn btn-primary btn-animated" id="btnModalEnrollCareer" data-career-name="${career.shortName}">
                        <span class="btn-text"><i class="fa-solid fa-user-check"></i> Matricularme en esta Carrera Gratis</span>
                        <span class="btn-shine"></span>
                    </button>
                </div>
            </div>
        `;

        // Añadir evento al botón de matrícula dentro del modal
        const btnModalEnroll = document.getElementById('btnModalEnrollCareer');
        if (btnModalEnroll) {
            btnModalEnroll.addEventListener('click', () => {
                closeModal();
                const academicSelect = document.getElementById('academicLevel');
                if (academicSelect) {
                    for (let i = 0; i < academicSelect.options.length; i++) {
                        if (academicSelect.options[i].text.toLowerCase().includes(career.id) ||
                            academicSelect.options[i].value.toLowerCase().includes(career.id)) {
                            academicSelect.selectedIndex = i;
                            break;
                        }
                    }
                }
                const matriculaSec = document.getElementById('matricula');
                if (matriculaSec) {
                    matriculaSec.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }

        careerModal.classList.add('active');
        careerModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        careerModal.classList.remove('active');
        careerModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    // Eventos de apertura
    openCareerButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const careerId = btn.getAttribute('data-career-id');
            openModalWithCareer(careerId);
        });
    });

    if (closeCareerModal) {
        closeCareerModal.addEventListener('click', closeModal);
    }

    // Cerrar al dar click fuera del contenedor
    careerModal.addEventListener('click', (e) => {
        if (e.target === careerModal) {
            closeModal();
        }
    });

    // Cerrar con tecla Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && careerModal.classList.contains('active')) {
            closeModal();
        }
    });

    /* ==========================================================================
       5. TEST VOCACIONAL INTERACTIVO (ORIENTACIÓN VOCACIONAL)
       ========================================================================== */
    const quizSteps = document.querySelectorAll('.quiz-step');
    const quizResult = document.getElementById('quizResult');
    const resultCareerName = document.getElementById('resultCareerName');
    const resultCareerDesc = document.getElementById('resultCareerDesc');
    const btnViewQuizCareer = document.getElementById('btnViewQuizCareer');
    const btnRestartQuiz = document.getElementById('btnRestartQuiz');

    let currentStep = 1;
    let quizScores = {
        informatica: 0,
        administracion: 0,
        finanzas: 0,
        humanidades: 0,
        aeb: 0,
        mecanica: 0
    };
    let winningCareerId = 'informatica';

    document.querySelectorAll('.quiz-option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const careerKey = btn.getAttribute('data-career-result');
            if (quizScores[careerKey] !== undefined) {
                quizScores[careerKey] += 1;
            }

            if (currentStep < 3) {
                // Siguiente paso
                quizSteps.forEach(step => step.classList.remove('active'));
                currentStep++;
                const nextStep = document.querySelector(`.quiz-step[data-step="${currentStep}"]`);
                if (nextStep) nextStep.classList.add('active');
            } else {
                // Finalizar y calcular resultado
                quizSteps.forEach(step => step.style.display = 'none');
                
                // Determinar la carrera con mayor puntaje
                let maxScore = -1;
                for (const key in quizScores) {
                    if (quizScores[key] > maxScore) {
                        maxScore = quizScores[key];
                        winningCareerId = key;
                    }
                }

                const matchedCareer = careersData[winningCareerId];
                if (matchedCareer) {
                    resultCareerName.textContent = matchedCareer.name;
                    resultCareerName.style.color = matchedCareer.themeColor;
                    resultCareerDesc.textContent = matchedCareer.motto;
                }

                quizResult.style.display = 'block';
            }
        });
    });

    if (btnViewQuizCareer) {
        btnViewQuizCareer.addEventListener('click', () => {
            openModalWithCareer(winningCareerId);
        });
    }

    if (btnRestartQuiz) {
        btnRestartQuiz.addEventListener('click', () => {
            currentStep = 1;
            quizScores = { informatica: 0, administracion: 0, finanzas: 0, humanidades: 0, aeb: 0, mecanica: 0 };
            quizResult.style.display = 'none';
            quizSteps.forEach(step => {
                step.style.display = '';
                step.classList.remove('active');
            });
            const firstStep = document.querySelector(`.quiz-step[data-step="1"]`);
            if (firstStep) firstStep.classList.add('active');
        });
    }

    /* ==========================================================================
       6. FORMULARIO DE PRE-MATRÍCULA Y GENERACIÓN DE COMPROBANTE OFICIAL
       ========================================================================== */
    const preMatriculaForm = document.getElementById('preMatriculaForm');
    const formSuccessMessage = document.getElementById('formSuccessMessage');
    const successSummaryText = document.getElementById('successSummaryText');
    const receiptContainer = document.getElementById('receiptContainer');

    if (preMatriculaForm) {
        preMatriculaForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const studentName = document.getElementById('studentName').value.trim();
            const studentPhone = document.getElementById('studentPhone').value.trim();
            const studentAge = document.getElementById('studentAge').value.trim();
            const academicLevel = document.getElementById('academicLevel').value;
            const preferredShift = document.getElementById('preferredShift').value;
            const guardianName = document.getElementById('guardianName').value.trim() || 'No especificado';

            if (!studentName || !studentPhone || !academicLevel) {
                alert('Por favor completa todos los campos requeridos.');
                return;
            }

            // Generar código de comprobante único
            const folioCode = `PATRIA-2026-${Math.floor(1000 + Math.random() * 9000)}`;
            const fechaRegistro = new Date().toLocaleDateString('es-HN', {
                year: 'numeric', month: 'long', day: 'numeric'
            });

            // Ocultar formulario y mostrar mensaje de éxito
            preMatriculaForm.style.display = 'none';
            formSuccessMessage.style.display = 'block';

            successSummaryText.innerHTML = `
                ¡Felicidades <strong>${studentName}</strong>! Tu solicitud para <strong>${academicLevel}</strong> ha sido registrada con éxito. La educación en el CEMG Patria es <strong>100% Gratuita</strong>.
            `;

            if (receiptContainer) {
                receiptContainer.innerHTML = `
                    <div class="receipt-card">
                        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:2px solid #0b6635; padding-bottom:0.75rem; margin-bottom:1rem;">
                            <div>
                                <h4 style="color:#0b6635; font-family:'Outfit',sans-serif; margin:0; font-size:1.15rem;">CEMG PATRIA</h4>
                                <small style="color:#64748b;">La Lima Nueva, Cortés • Saber y Cultura</small>
                            </div>
                            <div style="text-align:right;">
                                <span style="background-color:#dcfce7; color:#166534; font-weight:800; font-size:0.78rem; padding:0.25rem 0.6rem; border-radius:9999px;">FOLIO: ${folioCode}</span>
                            </div>
                        </div>

                        <div class="receipt-row"><strong>Estudiante:</strong> <span>${studentName}</span></div>
                        <div class="receipt-row"><strong>Teléfono:</strong> <span>${studentPhone}</span></div>
                        <div class="receipt-row"><strong>Edad:</strong> <span>${studentAge} años</span></div>
                        <div class="receipt-row"><strong>Nivel / Carrera:</strong> <span>${academicLevel}</span></div>
                        <div class="receipt-row"><strong>Jornada Solicitada:</strong> <span>${preferredShift}</span></div>
                        <div class="receipt-row"><strong>Encargado / Tutor:</strong> <span>${guardianName}</span></div>
                        <div class="receipt-row"><strong>Días de Clase:</strong> <span>Lunes a Viernes</span></div>
                        <div class="receipt-row"><strong>Sede:</strong> <span>La Lima Nueva, La Lima, Cortés</span></div>
                        <div class="receipt-row" style="border-bottom:none;"><strong>Costo de Matrícula:</strong> <span style="color:#16a34a; font-size:1.05rem;">L. 0.00 (100% Gratuito)</span></div>

                        <div style="margin-top:1rem; padding:0.75rem; background-color:#f0fdf4; border-radius:8px; font-size:0.82rem; color:#166534; line-height:1.45;">
                            <i class="fa-solid fa-circle-info"></i> <strong>Instrucciones para formalizar:</strong> Guarda o toma captura a este comprobante y preséntalo en la Secretaría del colegio en <strong>La Lima Nueva de lunes a viernes</strong> junto con los requisitos (partida de nacimiento, certificado de estudios previos y fotografías).
                        </div>
                    </div>
                `;
            }
        });
    }

    /* ==========================================================================
       7. FAQ ACCORDION (PREGUNTAS FRECUENTES)
       ========================================================================== */
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        questionBtn.addEventListener('click', () => {
            const isOpen = item.classList.contains('active');

            // Cerrar otros acordeones
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                const otherAnswer = otherItem.querySelector('.faq-answer');
                if (otherAnswer) otherAnswer.style.maxHeight = null;
            });

            if (!isOpen) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });

    /* ==========================================================================
       8. ANIMACIÓN DE CONTADORES NUMÉRICOS (STATS)
       ========================================================================== */
    const statNumbers = document.querySelectorAll('.stat-number');
    let hasAnimatedStats = false;

    const animateStats = () => {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'), 10);
            let count = 0;
            const stepTime = Math.max(20, Math.floor(1800 / target));

            const timer = setInterval(() => {
                count += Math.ceil(target / 45);
                if (count >= target) {
                    stat.textContent = target;
                    clearInterval(timer);
                } else {
                    stat.textContent = count;
                }
            }, stepTime);
        });
    };

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimatedStats) {
                hasAnimatedStats = true;
                animateStats();
            }
        });
    }, { threshold: 0.3 });

    const heroStatsSection = document.querySelector('.hero-stats');
    if (heroStatsSection) {
        statsObserver.observe(heroStatsSection);
    }

});
