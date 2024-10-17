
    const toggleButton = document.getElementById('toggleButton');
    const checkContainer = document.getElementById('contenedor');

    toggleButton.addEventListener('click', () => {
        checkContainer.classList.toggle('show');
    });




    document.getElementById('btnTutorial').addEventListener('click', function() {
    // Inicializa el tutorial y muestra el modal
    $('#tutorialModal').modal('show');
    currentStep = 0; // Inicializa la etapa del tutorial
    showStep();
});

function showStep() {
    const steps = [
        {
            elementId: 'contenedorLeyenda',
            message: 'En primer lugar aqui encontramos todas las insignias y su significado',
        },
        {
            elementId: 'btnImage',
            message: 'Haz click en "Seleccionar imagen" para importar la imagen en la cual desees aplicar las insignias',
        },
        {
            elementId: 'contenedor',
            message: 'Aqui podrás escoger aquellas insignias que quieras añadir a tu imagen de perfil.',
        },
        {
            elementId: 'crop-button',
            message: 'Haz click en "Guardar" para descargar la imagen en tu equipo.',
        }
    ];

    if (currentStep < steps.length) {
        const step = steps[currentStep];
        const element = document.getElementById(step.elementId);
        
        // Añade la clase de foco
        
        // Muestra el mensaje en el modal
        document.getElementById('message-text').innerText = step.message;
        
        // Haz scroll al elemento
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Muestra el botón "Siguiente"
        document.getElementById('next-button').style.display = 'block';

        // Evento para siguiente paso
        document.getElementById('next-button').onclick = function() {
            // Quita la clase de foco del elemento actual
            element.classList.remove('focused');

            // Incrementa el paso actual
            currentStep++;
            if (currentStep == 2) {
                const button = document.getElementById('toggleButton');
                const contenedor = document.getElementById('checkContainer');
                const buttonImage = document.getElementById('buttonImage');
                contenedor.style.display = 'block'; // Muestra el contenedor
                buttonImage.src = 'ASSETS/cerrar.png'; // Cambia a la imagen de "cerrar"
                buttonImage.classList.remove('buttonImageClosed'); // Quita la clase con fondo
                buttonImage.classList.add('buttonImageOpen'); // Agrega la clase sin fondo
                
                // Añade la clase de fondo blanco al contenedor de checklist
                contenedor.classList.add('focused');
            } else if (currentStep > 2) {
                const contenedor = document.getElementById('checkContainer');
                // Quita la clase de fondo blanco cuando se sale del paso
                contenedor.classList.remove('focused');
            }
            showStep(); // Muestra el siguiente paso
        };
    } else {
        // Cierra el modal o reinicia el tutorial
        $('#tutorialModal').modal('hide');
    }
}


    document.addEventListener('DOMContentLoaded', function() {
        const title = document.getElementById('card-title');
        const text = document.getElementById('card-text');
        const image = document.getElementById('card-image');

        const tabElements = {
            allstar: document.getElementById('allstar-tab'),
            teamplus: document.getElementById('teamplus-tab'),
            atlas: document.getElementById('atlas-tab'),
            volunt: document.getElementById('volunt-tab'),
            teamplusPart: document.getElementById('teamplusPart-tab'),
            greenLeader: document.getElementById('greenLeader-tab'),
            allStarNom: document.getElementById('allStarNom-tab'),
            epis: document.getElementById('epis-tab'),
            pdp: document.getElementById('pdp-tab'),
            accionaT: document.getElementById('accionaT-tab'),
            calidad: document.getElementById('calidad-tab'),
        };

        function switchTab(tab) {
            switch (tab) {
                case 'allstar':
                    title.innerText = 'GANADOR ALL STAR';
                    text.innerHTML = 'Son los ganadores de los tres valores corporativos de la empresa: Pensamos en grande, Somos un equipo y El cliente es lo primero,su victoria demuestra un rendimiento y una dedicación excepcionales. Este programa reconoce a los empleados que van más allá de sus responsabilidades habituales para contribuir al éxito de la empresa.';
                    image.src = 'ASSETS/AllStarCube.png';
                    image.alt = 'Cubo all star';
                    break;
                case 'teamplus':
                    title.innerText = 'GANADOR TEAM PLUS';
                    text.innerHTML = '<p>Equipos ganadores del proyecto Team Plus, el cual consiste en premiar las nuevas ideas y propuestas de mejora realizadas en equipo o de forma individual.</p><ul style="list-style-type: none; padding: 0; font-weight:bold;"><li>Incentivar y premiar el trabajo en equipo.</li><li>Fomentar la creatividad y la innovación en la empresa.</li></ul><p>El programa de innovación que cada año nos reta y pone a prueba nuestra creatividad, donde tenemos la oportunidad de desarrollar nuestras habilidades a través del aprendizaje de metodologías, del trabajo en equipo y de la transformación de nuestras aspiraciones más innovadoras, para hacerlas realidad.</p>';
                    image.src = 'ASSETS/TeamPlusWinnerCube.png';
                    image.alt = 'Cubo team plus';
                    break;
                case 'atlas':
                    title.innerText = 'COLECTIVO ATLAS';
                    text.innerText = 'Programa diseñado para identificar y desarrollar a los futuros líderes de la empresa. Los participantes en Atlas son aquellos que han demostrado habilidades de liderazgo excepcionales y un potencial significativo para ocupar roles estratégicos en el futuro.';
                    image.src = 'ASSETS/Atlas.png';
                    image.alt = 'Cubo atlas';
                    break;
                case 'volunt':
                    title.innerText = 'VOLUNTARIADO';
                    text.innerHTML = 'Este programa se centra en la participación comunitaria y en la responsabilidad social corporativa. <br>Los voluntarios son empleados que dedican su tiempo y esfuerzo a causas benéficas, reflejando nuestro compromiso con la comunidad y con la creación de un impacto positivo en la sociedad.';
                    image.src = 'ASSETS/VoluntariadoCube.png';
                    image.alt = 'Cubo voluntariado';
                    break;
                case 'teamplusPart':
                    title.innerText = 'PARTICIPANTE TEAM PLUS';
                    text.innerHTML = '<p>Iniciativa que consiste en premiar las nuevas ideas y propuestas de mejora realizadas en equipo o de forma individual. Los objetivos de esta iniciativa son:</p><p style="font-weight: bold;">Incentivar y premiar el trabajo en equipo.</p><p style="font-weight: bold;">Fomentar la creatividad y la innovación en la empresa.</p><p>El programa de innovación que cada año nos reta y pone a prueba nuestra creatividad, donde tenemos la oportunidad de desarrollar nuestras habilidades a través del aprendizaje de metodologías, del trabajo en equipo y de la transformación de nuestras aspiraciones más innovadoras, para hacerlas realidad.</p>';
                    image.src = 'ASSETS/TeamPlusParticipantCube.png';
                    image.alt = 'Cubo participante team plus';
                    break;
                case 'greenLeader':
                    title.innerText = 'GREEN LEADER';
                    text.innerText = 'Este programa se enfoca en la sostenibilidad y en la promoción de prácticas ecológicas dentro de la organización. Los Green Leaders son aquellos que lideran iniciativas medioambientales y trabajan para reducir la huella ecológica de la empresa.';
                    image.src = 'ASSETS/GreenLeaderCube.png';
                    image.alt = 'Cubo green leader';
                    break;
                case 'allStarNom':
                    title.innerText = 'NOMINADO ALL STAR';
                    text.innerText = 'Los participantes en All Star son aquellos que han sobresalido en sus respectivos roles, demostrando un rendimiento y una dedicación excepcionales. Este programa reconoce a los empleados que van más allá de sus responsabilidades habituales para contribuir al éxito de la empresa.';
                    image.src = 'ASSETS/AllStarNomCube.png';
                    image.alt = 'Cubo nominado all star';
                    break;
                case 'epis':
                    title.innerText = 'EPIS';
                    text.innerText = 'Las personas EPI se refieren a los Equipos de Protección Individual. Estos son empleados que fomentan y velan para proteger a los trabajadores de riesgos que pueden amenazar su salud o seguridad en el entorno laboral.';
                    image.src = 'ASSETS/EPICube.png';
                    image.alt = 'Cubo EPIS';
                    break;
                case 'pdp':
                    title.innerText = 'EMBAJADOR PDP';
                    text.innerText = 'Empleados que cumplen la función de Protección de datos personales, los cuales velan por supervisar y asegurar el cumplimiento de las leyes de protección de datos dentro de las distintas áreas de la empresa.';
                    image.src = 'ASSETS/PDPCube.png';
                    image.alt = 'Cubo PDP';
                    break;
                case 'accionaT':
                    title.innerText = 'PROYECTO ACCIONA-T';
                    text.innerText = 'Este programa titulado Programa de Impacto Social Corporativo, a través de empleados de la casa se comparten los conocimientos operativos que hay en OPPLUS con alumnos de diferentes centros de estudios de Málaga.';
                    image.src = 'ASSETS/AccionaTCube.png';
                    image.alt = 'Cubo Acciona-T';
                    break;
                case 'calidad':
                    title.innerText = 'EMBAJADOR DE CALIDAD';
                    text.innerHTML = 'Programa que aporta visibilización y reconocimiento la labor de las personas que destacan en su día a día por la calidad ofrecida a nuestro cliente. Agradecer su profesionalidad, implicación y esfuerzo diarios. <br><br>Compartir su excelencia individual y buenas prácticas con el resto del equipo, por ser inspiración y un ejemplo a seguir por el resto. <br>Ayude a reforzar la importancia de Calidad como elemento clave para ofrecer una buena experiencia cliente, ser motor para aumentar la implicación de los equipos.';
                    image.src = 'ASSETS/CalidadCube.png';
                    image.alt = 'Cubo calidad';
                    break;
            }
        }

        for (let tab in tabElements) {
            tabElements[tab].addEventListener('click', function() {
                for (let otherTab in tabElements) {
                    tabElements[otherTab].classList.remove('active');
                }
                tabElements[tab].classList.add('active');
                switchTab(tab);
            });
        }
    });


document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.querySelector('.scroll-container');
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const header = document.getElementById('header');

    scrollContainer.addEventListener('scroll', () => {
        const scrollPosition = scrollContainer.scrollTop;
        console.log(`Scroll Position: ${scrollPosition}`); // Imprime la posición de scroll
        const scrollHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;

        // Calcula la altura Y a la que se encuentra y actualiza el indicador
        scrollIndicator.textContent = Math.round(scrollPosition); // Muestra la posición en el indicador

        // Actualiza la posición del indicador en la barra de desplazamiento
        const percentage = (scrollPosition / scrollHeight) * 100; // Porcentaje de desplazamiento
        const indicatorHeight = (scrollContainer.clientHeight / scrollContainer.scrollHeight) * scrollContainer.clientHeight;
        scrollIndicator.style.top = `${percentage}%`;

        // Cambia el color de fondo del header
        if (Math.round(scrollPosition) > 100) {
            header.style.backgroundColor = 'rgba(30, 80, 104, 0.4)'; // Fondo transparente
        } else {
            const opacity = 1 - (scrollPosition / 100); // Calcula la opacidad
            header.style.backgroundColor = `#1E5068`; // Cambia el color de fondo
        }
    });
});

const button = document.getElementById('toggleButton');
const contenedor = document.getElementById('checkContainer');
const buttonImage = document.getElementById('buttonImage');

// Inicializa el estado del contenedor
contenedor.style.display = 'none'; // Asegúrate de que el contenedor esté oculto al cargar la página

button.addEventListener('click', () => {
    if (contenedor.style.display === 'none' || contenedor.style.display === '') {
        contenedor.style.display = 'block'; // Muestra el contenedor
        buttonImage.src = 'ASSETS/cerrar.png'; // Cambia a la imagen de "cerrar"
        buttonImage.classList.remove('buttonImageClosed'); // Quita la clase con fondo
        buttonImage.classList.add('buttonImageOpen'); // Agrega la clase sin fondo
    } else {
        contenedor.style.display = 'none'; // Oculta el contenedor
        buttonImage.src = 'ASSETS/insignia.png'; // Cambia a la imagen de "abrir"
        buttonImage.classList.remove('buttonImageOpen'); // Quita la clase sin fondo
        buttonImage.classList.add('buttonImageClosed'); // Agrega la clase con fondo
    }
});
    const maxChecks = 6;
    let cropper;
    let currentImageURL = '';
    let selectedArcs = []; // Etiquetas seleccionadas

    // Aplicar el color del cuadro basado en el atributo data-color
    $('.arc-checkbox').each(function() {
        const color = $(this).data('color');
        $(this).next('.color-box').css('background-color', color);
    });

    // Escuchar cambios en los checkboxes
    $('.arc-checkbox').on('change', function() {
        selectedArcs = [];
        $('.arc-checkbox:checked').each(function() {
            selectedArcs.push($(this).val());
        });

        // Aplicar los arcos a la imagen actual inmediatamente al cambiar las etiquetas
        updatePreviewWithArcs();
        updateCheckboxAvailability();
    });

    // Cuando seleccionas una imagen nueva
    document.getElementById('profile-picture').addEventListener('change', function(event) {
        const files = event.target.files;
        const done = function(url) {
            const image = document.getElementById('image');
            image.src = url;
            currentImageURL = url;
            $('#cropper-modal').modal('show');
        };
        let reader;
        let file;

        if (files && files.length > 0) {
            file = files[0];

            if (URL) {
                done(URL.createObjectURL(file));
            } else if (FileReader) {
                reader = new FileReader();
                reader.onload = function(e) {
                    done(reader.result);
                };
                reader.readAsDataURL(file);
            }
        }
    });

    $('#cropper-modal').on('shown.bs.modal', function() {
        cropper = new Cropper(document.getElementById('image'), {
            aspectRatio: 1,
            viewMode: 1,
            preview: '.img-preview',
        });
    }).on('hidden.bs.modal', function() {
        if (cropper) {
            cropper.destroy();
            cropper = null;
        }

        if (currentImageURL.startsWith('blob:')) {
            URL.revokeObjectURL(currentImageURL);
        }
    });

    document.getElementById('crop-and-save').addEventListener('click', async function() {
    const canvas = cropper.getCroppedCanvas({
        width: 200,
        height: 200,
    });

    const checkContainer = document.getElementById('checkContainer');
    const container = document.querySelector('.container.text-center');

    // Mostrar el checkContainer
    checkContainer.style.display = 'block';
    checkContainer.style.opacity = '1';

    // Obtener el ancho del contenedor principal y el gap
    const containerWidth = container.offsetWidth;
    const gap = 16; // 1em en píxeles, asumiendo un tamaño de fuente de 16px

    // Calcular la posición del checkContainer
    const offset = containerWidth + gap;

    // Aplicar la transformación
    checkContainer.style.transform = `translateX(0px)`;
    checkContainer.style.transition = 'transform 0.5s ease';

    // Mostrar la imagen recortada
    const roundedCanvas = getRoundedCanvas(canvas);
    applySelectedArcs(roundedCanvas);

    const centeredImageDiv = document.getElementById('centered-image');
    centeredImageDiv.innerHTML = '';
    centeredImageDiv.appendChild(roundedCanvas);
    centeredImageDiv.style.display = 'block';

    $('#cropper-modal').modal('hide');
});




    document.getElementById('crop-button').addEventListener('click', async function() {
    const centeredImageDiv = document.getElementById('centered-image');
    const canvas = centeredImageDiv.querySelector('canvas');

    if (!canvas) {
        alert('No hay una imagen disponible para guardar. Por favor, recorta la imagen primero.');
        return;
    }

    // Guardar la imagen con el explorador de archivos
    await saveCanvasAsImage(canvas);
});

async function saveCanvasAsImage(canvas) {
    try {
        // Solicita el explorador de archivos para seleccionar la ubicación de guardado
        const fileHandle = await window.showSaveFilePicker({
            suggestedName: 'imagen_recortada.png',
            types: [
                {
                    description: 'Imagen PNG',
                    accept: {
                        'image/png': ['.png'],
                    },
                },
            ],
        });

        // Obtén el archivo como un blob y escribe en el archivo seleccionado
        const writableStream = await fileHandle.createWritable();
        const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
        await writableStream.write(blob);
        await writableStream.close();

        alert('Imagen guardada exitosamente');
    } catch (err) {
        console.error('Error al guardar la imagen:', err);
        alert('No se pudo guardar la imagen');
    }
}



    let originalImageData; // Variable para guardar los datos de la imagen original

    // Obtener canvas redondeado
    function getRoundedCanvas(sourceCanvas) {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        const width = sourceCanvas.width;
        const height = sourceCanvas.height;

        canvas.width = width;
        canvas.height = height;

        // Dibujar el círculo
        context.beginPath();
        context.arc(width / 2, height / 2, Math.min(width, height) / 2, 0, 2 * Math.PI);
        context.closePath();
        context.clip();

        // Dibujar la imagen dentro del círculo
        context.drawImage(sourceCanvas, 0, 0, width, height);

        originalImageData = context.getImageData(0, 0, width, height);

        return canvas;
    }

    function applySelectedArcs(canvas) {
    const context = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    const arcWidth = 10; // Ancho de cada arco
    const totalArcs = 6; // Total de arcos posibles
    const anglePerArc = (2 * Math.PI) / totalArcs; // Cada arco cubre 60 grados

    // Limpiar el canvas antes de dibujar nuevos arcos
    context.clearRect(0, 0, width, height);

    // Redibujar la imagen original sobre el canvas
    if (originalImageData) {
        context.putImageData(originalImageData, 0, 0);
    }

    // Si no hay arcos seleccionados, no dibujar nada
    if (selectedArcs.length === 0) return;

    // Ajuste del ángulo de inicio para que el primer arco esté en la parte inferior
    const adjustedStartAngle = ((Math.PI / 2) - (anglePerArc / 2))

    selectedArcs.forEach((arc, index) => {
        const startAngle = adjustedStartAngle + index * anglePerArc // Ajustar el ángulo inicial de cada arco
        const endAngle = startAngle + anglePerArc; // Calcular el ángulo final del arco
        const text = arc.value;
        const textRadius = width / 2 - arcWidth / 2 - 2; // Radio para posicionar el texto un poco dentro del arco

        // Dibujar el arco
        context.beginPath();
        context.arc(width / 2, height / 2, width / 2 - arcWidth / 2, startAngle, endAngle);
        context.lineWidth = arcWidth;
        context.strokeStyle = arc.color; // Aplicar el color de la etiqueta seleccionada
        context.stroke();

        // Configurar el texto
        /*const textLength = text.length;
        const textAnglePerChar = (endAngle - startAngle) / textLength; // Ángulo por cada carácter

        context.font = '14px Arial';
        context.fillStyle = '#000'; // Color del texto
        context.textAlign = 'center';
        context.textBaseline = 'middle';

        for (let i = 0; i < textLength; i++) {
            const char = text[i];
            const angle = startAngle + (i + 0.5) * textAnglePerChar; // Ángulo para el centro del carácter
            const x = width / 2 + textRadius * Math.cos(angle); // Coordenada X del carácter
            const y = height / 2 + textRadius * Math.sin(angle); // Coordenada Y del carácter

            // Ajustar el texto para que siga el arco
            context.save();
            context.translate(x, y);

            
            context.rotate(angle + Math.PI / 2); // Rotar el contexto para que el texto siga el arco

            context.fillText(char, 0, 0); // Dibujar el carácter

            context.restore();
        }*/
    });
}


function updateCheckboxAvailability() {
        const checkedCount = $('.arc-checkbox:checked').length;
        
        // Desactivar el resto de checkboxes si ya hay 6 seleccionados
        if (checkedCount >= maxChecks) {
            $('.arc-checkbox:not(:checked)').prop('disabled', true);
        } else {
            $('.arc-checkbox').prop('disabled', false);
        }
}



// Actualizar previsualización con los arcos seleccionados
function updatePreviewWithArcs() {
    const centeredImageDiv = document.getElementById('centered-image');
    const canvas = centeredImageDiv.querySelector('canvas'); // Obtener la imagen actual recortada

    if (canvas) {
        selectedArcs = [];
        $('.arc-checkbox:checked').each(function() {
            selectedArcs.push({
                value: $(this).val(),
                color: $(this).data('color') // Obtener el color asociado a la etiqueta
            });
        });

        applySelectedArcs(canvas); // Aplicar los arcos sobre la imagen ya recortada
    }
}
