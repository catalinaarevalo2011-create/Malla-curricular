// --- ESTRUCTURA DE DATOS DE LA MALLA CURRICULAR ---
// Aquí se definen todos los ramos, su semestre y sus requisitos.
// Para añadir un requisito a un ramo, simplemente pon su 'id' en el array 'requisitos'.
const mallaData = [
    // Semestre 1
    { id: 'ts-101', nombre: 'Introducción al Trabajo', semestre: 1, requisitos: [] },
    { id: 'ts-102', nombre: 'Antropología General', semestre: 1, requisitos: [] },
    { id: 'ts-103', nombre: 'Taller de Vinculación Laboral en Contextos del Trabajo Social', semestre: 1, requisitos: [] },
    { id: 'ts-104', nombre: 'Computación Básica y Taller de Nivelación', semestre: 1, requisitos: [] },
    { id: 'ts-105', nombre: 'Matemáticas', semestre: 1, requisitos: [] },

    // Semestre 2
    { id: 'ts-201', nombre: 'Psicología Evolutiva', semestre: 2, requisitos: ['ts-102'] },
    { id: 'ts-202', nombre: 'Políticas Públicas y Sociales en Chile', semestre: 2, requisitos: ['ts-101'] },
    { id: 'ts-203', nombre: 'Taller de Vinculación Laboral: Programas Sociales', semestre: 2, requisitos: ['ts-103'] },
    { id: 'ts-204', nombre: 'Información Social, Manejo de Información Social', semestre: 2, requisitos: ['ts-104'] },
    { id: 'ts-205', nombre: 'Familia y Desarrollo de Habilidades Comunicativas', semestre: 2, requisitos: [] },

    // Semestre 3
    { id: 'ts-301', nombre: 'Salud Comunitaria', semestre: 3, requisitos: ['ts-202'] },
    { id: 'ts-302', nombre: 'Beneficios Previsionales y de Salud', semestre: 3, requisitos: ['ts-202'] },
    { id: 'ts-303', nombre: 'Taller de Vinculación Laboral y Salud Pública', semestre: 3, requisitos: ['ts-203'] },
    { id: 'ts-304', nombre: 'Legislación y Trabajo Social', semestre: 3, requisitos: [] },
    { id: 'ts-305', nombre: 'Grupos y Comunidades', semestre: 3, requisitos: ['ts-205'] },
    { id: 'ts-306', nombre: 'Taller de Desarrollo Personal con Ética Profesional', semestre: 3, requisitos: [] },

    // Semestre 4
    { id: 'ts-401', nombre: 'Administración General', semestre: 4, requisitos: [] },
    { id: 'ts-402', nombre: 'Taller de Redes Sociales', semestre: 4, requisitos: ['ts-305'] },
    { id: 'ts-403', nombre: 'Taller de Vinculación Laboral y Medio Ambiente', semestre: 4, requisitos: ['ts-303'] },
    { id: 'ts-404', nombre: 'Desarrollo Local', semestre: 4, requisitos: ['ts-305'] },
    { id: 'ts-405', nombre: 'Niñez e Infancia', semestre: 4, requisitos: ['ts-201'] },
    { id: 'ts-406', nombre: 'Técnicas de Administración Presupuestaria', semestre: 4, requisitos: ['ts-401'] },
    { id: 'ts-407', nombre: 'Habilidades, Emprendimiento y Liderazgo', semestre: 4, requisitos: [] },
    
    // Semestre 5
    { id: 'ts-501', nombre: 'Economía y Sociedad', semestre: 5, requisitos: [] },
    { id: 'ts-502', nombre: 'Planificación Social', semestre: 5, requisitos: ['ts-404'] },
    { id: 'ts-503', nombre: 'Elementos Teóricos y Metodológicos para la Intervención', semestre: 5, requisitos: ['ts-305'] },
    { id: 'ts-504', nombre: 'Metodología de la Investigación Social', semestre: 5, requisitos: ['ts-204'] },
    { id: 'ts-505', nombre: 'Sociología General', semestre: 5, requisitos: ['ts-102'] },
    { id: 'ts-506', nombre: 'Inglés Básico', semestre: 5, requisitos: [] },
    
    // Semestre 6
    { id: 'ts-601', nombre: 'Gestión de Recursos Humanos y Beneficios Laborales', semestre: 6, requisitos: ['ts-401'] },
    { id: 'ts-602', nombre: 'Taller de Habilidades Directivas', semestre: 6, requisitos: ['ts-407'] },
    { id: 'ts-603', nombre: 'Módulo de Integración Teórico Práctico de Diagnóstico Social', semestre: 6, requisitos: ['ts-503'] },
    { id: 'ts-604', nombre: 'Taller de Investigación Aplicada', semestre: 6, requisitos: ['ts-504'] },
    { id: 'ts-605', nombre: 'Taller de Preparación Laboral', semestre: 6, requisitos: [] },
    { id: 'ts-606', nombre: 'Inglés Básico Dos', semestre: 6, requisitos: ['ts-506'] },

    // Semestre 7
    { id: 'ts-701', nombre: 'Taller de Formulación y Evaluación de Proyectos Sociales', semestre: 7, requisitos: ['ts-502'] },
    { id: 'ts-702', nombre: 'Módulo de Integración Teórico Práctico de Intervención y Evaluación Social', semestre: 7, requisitos: ['ts-603'] },
    { id: 'ts-703', nombre: 'Taller de Sistematización', semestre: 7, requisitos: ['ts-604'] },
    { id: 'ts-704', nombre: 'Electivo de Formación Profesional 1', semestre: 7, requisitos: [] },
    { id: 'ts-705', nombre: 'Cultura y Valores', semestre: 7, requisitos: ['ts-505'] },

    // Semestre 8
    { id: 'ts-801', nombre: 'Proyecto de Título', semestre: 8, requisitos: ['ts-702', 'ts-703'] },
    { id: 'ts-802', nombre: 'Práctica Profesional Integral', semestre: 8, requisitos: ['ts-702'] },
    { id: 'ts-803', nombre: 'Talleres de Competencias Profesionales', semestre: 8, requisitos: ['ts-605'] },
    { id: 'ts-804', nombre: 'Electivo de Formación Profesional 2', semestre: 8, requisitos: ['ts-704'] },
];

// --- LÓGICA DE LA APLICACIÓN ---
document.addEventListener('DOMContentLoaded', () => {
    const mallaContainer = document.getElementById('malla-curricular');
    const modal = document.getElementById('modal-requisitos');
    const closeModal = document.querySelector('.cerrar-modal');
    const listaRequisitos = document.getElementById('lista-requisitos');
    
    let ramosAprobados = new Set(cargarProgreso());

    // Función para generar la malla dinámicamente
    function generarMalla() {
        // Obtenemos el número máximo de semestres
        const numSemestres = Math.max(...mallaData.map(r => r.semestre));
        
        // Creamos una columna para cada semestre
        for (let i = 1; i <= numSemestres; i++) {
            const semestreDiv = document.createElement('div');
            semestreDiv.className = 'semestre';
            semestreDiv.innerHTML = `<h2>Semestre ${i}</h2>`;
            
            // Filtramos y añadimos los ramos de este semestre
            mallaData.filter(ramo => ramo.semestre === i).forEach(ramo => {
                const ramoDiv = document.createElement('div');
                ramoDiv.className = 'ramo';
                ramoDiv.dataset.id = ramo.id;
                ramoDiv.textContent = ramo.nombre;
                
                // Si el ramo está en la lista de aprobados, le añadimos la clase
                if (ramosAprobados.has(ramo.id)) {
                    ramoDiv.classList.add('aprobado');
                }
                
                semestreDiv.appendChild(ramoDiv);
            });
            
            mallaContainer.appendChild(semestreDiv);
        }
    }
    
    // Función para manejar el clic en un ramo
    function handleRamoClick(e) {
        if (e.target.classList.contains('ramo')) {
            const ramoId = e.target.dataset.id;
            const ramo = mallaData.find(r => r.id === ramoId);
            
            // Si ya está aprobado, permite desaprobarlo
            if (e.target.classList.contains('aprobado')) {
                e.target.classList.remove('aprobado');
                ramosAprobados.delete(ramoId);
                guardarProgreso();
                return;
            }
            
            const requisitosFaltantes = verificarRequisitos(ramo);
            
            if (requisitosFaltantes.length === 0) {
                e.target.classList.add('aprobado');
                ramosAprobados.add(ramoId);
                guardarProgreso();
            } else {
                mostrarModalRequisitos(requisitosFaltantes);
            }
        }
    }
    
    // Función para verificar si los requisitos de un ramo están cumplidos
    function verificarRequisitos(ramo) {
        const faltantes = [];
        for (const reqId of ramo.requisitos) {
            if (!ramosAprobados.has(reqId)) {
                // Buscamos el nombre del ramo requisito para mostrarlo
                const ramoRequisito = mallaData.find(r => r.id === reqId);
                faltantes.push(ramoRequisito.nombre);
            }
        }
        return faltantes;
    }

    // Función para mostrar el modal con los requisitos que faltan
    function mostrarModalRequisitos(requisitos) {
        // Limpiamos la lista anterior
        listaRequisitos.innerHTML = '';
        
        // Añadimos los nuevos requisitos a la lista
        requisitos.forEach(nombreRamo => {
            const li = document.createElement('li');
            li.textContent = nombreRamo;
            listaRequisitos.appendChild(li);
        });
        
        modal.style.display = 'block';
    }

    // --- PERSISTENCIA DE DATOS (LocalStorage) ---
    
    function guardarProgreso() {
        // Guardamos el conjunto de ramos aprobados como un array en localStorage
        localStorage.setItem('progresoMalla', JSON.stringify(Array.from(ramosAprobados)));
    }
    
    function cargarProgreso() {
        const progresoGuardado = localStorage.getItem('progresoMalla');
        return progresoGuardado ? JSON.parse(progresoGuardado) : [];
    }

    // --- EVENT LISTENERS ---
    
    mallaContainer.addEventListener('click', handleRamoClick);
    
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    });

    // Iniciar la aplicación
    generarMalla();
});
