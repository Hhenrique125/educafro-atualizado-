document.addEventListener('DOMContentLoaded', function() {
    // Elementos DOM
    const themeToggle = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;
    
    // Verificar preferência de tema salva ou do sistema
    function getPreferredTheme() {
        // Verifica se há um tema salvo no localStorage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) return savedTheme;
        
        // Verifica a preferência do sistema operacional
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return systemPrefersDark ? 'dark' : 'light';
    }
    
    // Aplicar tema inicial
    function applyInitialTheme() {
        const theme = getPreferredTheme();
        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        updateToggleIcon(theme);
    }
    
    // Alternar entre temas
    function toggleTheme() {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        // Aplicar novo tema
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Atualizar ícone do botão
        updateToggleIcon(newTheme);
        
        // Disparar evento personalizado (opcional para outros scripts)
        document.dispatchEvent(new CustomEvent('themeChanged', { detail: newTheme }));
    }
    
    // Atualizar ícone do botão de tema
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
    
    // Observar mudanças na preferência do sistema
    function watchSystemThemeChange() {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            // Só muda se o usuário não tiver selecionado um tema manualmente
            if (!localStorage.getItem('theme')) {
                const newTheme = e.matches ? 'dark' : 'light';
                htmlElement.setAttribute('data-theme', newTheme);
                updateToggleIcon(newTheme);
            }
        });
    }
    
    // Inicialização
    applyInitialTheme();
    themeToggle.addEventListener('click', toggleTheme);
    watchSystemThemeChange();
    
    // Adicionar classe durante a transição para evitar flashes
    themeToggle.addEventListener('click', function() {
        document.documentElement.classList.add('theme-transition');
        setTimeout(() => {
            document.documentElement.classList.remove('theme-transition');
        }, 300);
    });
});
