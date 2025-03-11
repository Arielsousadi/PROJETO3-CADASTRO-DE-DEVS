document.addEventListener('DOMContentLoaded', () => {
    const developers = [];  // Array que armazenará os desenvolvedores

    const form = document.getElementById('developerForm');
    const technologiesContainer = document.getElementById('technologiesContainer');
    const addTechnologyButton = document.getElementById('addTechnologyButton');
    const output = document.getElementById('output');

    // Adiciona nova linha de tecnologia ao clicar no botão
    addTechnologyButton.addEventListener('click', () => {
        const rowCount = technologiesContainer.children.length;  // Conta as linhas existentes
        const newRow = document.createElement('div');  // Cria uma nova linha

        // Adiciona a estrutura HTML da nova linha com a classe 'technologyRow'
        newRow.classList.add('technologyRow');  // Adicionando a classe
        newRow.innerHTML = `
            <input type="text" class="technologyName" placeholder="Tecnologia" required>
            <label><input type="radio" name="experience${rowCount}" value="0-2 anos"> 0-2 anos</label>
            <label><input type="radio" name="experience${rowCount}" value="3-4 anos"> 3-4 anos</label>
            <label><input type="radio" name="experience${rowCount}" value="5+ anos"> 5+ anos</label>
            <button type="button" class="removeRowButton">Remover</button>
        `;
        
        // Adiciona a linha ao container e define o evento de remoção
        technologiesContainer.appendChild(newRow);
        newRow.querySelector('.removeRowButton').addEventListener('click', () => newRow.remove());
    });

    // Envia os dados do formulário ao clicar no botão de cadastro
    form.addEventListener('submit', (event) => {
        event.preventDefault();  // Impede o recarregamento da página

        const developerName = document.getElementById('developerName').value;  // Coleta o nome
        const technologies = [];

        // Coleta as tecnologias e suas experiências
        document.querySelectorAll('.technologyRow').forEach((row, index) => {
            const technologyName = row.querySelector('.technologyName').value;
            const experience = row.querySelector(`input[name="experience${index}"]:checked`)?.value;
            
            if (technologyName && experience) {
                technologies.push({ technology: technologyName, experience });
            }
        });

        // Salva os dados do desenvolvedor no array e exibe no console
        developers.push({ name: developerName, technologies });
        console.log(developers);
        output.textContent = JSON.stringify(developers, null, 2);

        form.reset();  // Limpa o formulário
    });
});
