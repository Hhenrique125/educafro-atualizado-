document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;

    // Verificar tema salvo ou usar dark como padrão
    function getPreferredTheme() {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme || 'dark'; // Dark como padrão
    }

    // Aplicar tema
    function setTheme(theme) {
        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        updateToggleIcon(theme);
    }

    // Alternar temas
    function toggleTheme() {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }

    // Atualizar ícone do botão
    function updateToggleIcon(theme) {
        const iconLight = themeToggle.querySelector('.icon-light');
        const iconDark = themeToggle.querySelector('.icon-dark');
        
        if (theme === 'dark') {
            iconLight.style.display = 'none';
            iconDark.style.display = 'inline-block';
        } else {
            iconLight.style.display = 'inline-block';
            iconDark.style.display = 'none';
        }
    }

    // Inicialização
    setTheme(getPreferredTheme());
    themeToggle.addEventListener('click', toggleTheme);

    // Debug
    console.log('Tema inicial:', getPreferredTheme());
});
