const btnMore = document.querySelector('.btn-more');
const btnViewAll = document.querySelector('.btn-view-all');
const group2 = document.querySelector('.species-content .second-pack');

btnViewAll.style.display = 'none';

//  evento de clique ao botão "Ver Mais"
btnMore.addEventListener('click', function () {
    // Alternar a classe "show" no grupo 2
    group2.classList.toggle('show');

    // Atualizar o estado do botão  "Ver Todos"
    if (group2.classList.contains('show')) {
        this.innerHTML = '<span>Ver Menos</span> <i class="fa-solid fa-circle-minus"></i>';
        btnViewAll.style.display = 'flex'; // Exibir o botão "Ver Todos"

        // Fazer scroll automático até o final do grupo 2
        group2.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
        this.innerHTML = '<span>Ver Mais</span> <i class="fa-solid fa-circle-plus"></i>';
        btnViewAll.style.display = 'none'; // Ocultar o botão "Ver Todos"

        // Fazer scroll automático até o início do grupo 2
        group2.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
});

btnViewAll.addEventListener('click', () => {
    window.location.href = '/ver-todos.html'; //LEMBRETE: Substituir pelo caminho correto da página "Ver Todos"
});


const imageUpload = document.querySelector('#image-upload');
const previewImage = document.querySelector('#preview-image');
const photoUpload = document.querySelector('.photo-upload');

// Evento para mostrar o preview da imagem
imageUpload.addEventListener('change', (event) => {
    const file = event.target.files[0]; // Obter o arquivo
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader(); // Ler o arquivo
        reader.onload = (e) => {
            previewImage.src = e.target.result; // Definir a fonte da imagem
            previewImage.style.display = 'block'; // Exibir a imagem
            photoUpload.querySelector('i').style.display = 'none'; // Esconder o ícone
            photoUpload.querySelector('span').style.display = 'none'; // Esconder o texto
        };
        reader.readAsDataURL(file); // Ler a imagem como uma URL
    } else {
        return
    }
});

// faz scroll ao clicar nos links da navbar para suas determinadas secções
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', (event) => {
        // Evitar o comportamento padrão apenas se não for o link "Home"
        if (!link.classList.contains('home')) {
            event.preventDefault();
            const targetId = link.getAttribute('href').replace('#', '');
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        }
    });
});

// funcionalidade do botão 'Faça uma cintribuição' da pagina de rosto
document.addEventListener("DOMContentLoaded", () => {
    // Obter o parâmetro da URL
    const urlParams = new URLSearchParams(window.location.search);
    const scrollTo = urlParams.get("scrollTo");

    if (scrollTo) {
        setTimeout(() => {
            const targetElement = document.getElementById(scrollTo);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        }, 900);
    }
});