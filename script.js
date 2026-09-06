document.addEventListener('DOMContentLoaded', function() {
    const apiGrid = document.getElementById('apiGrid');
    const searchInput = document.getElementById('searchInput');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    let currentFilter = 'all';
    let currentSearch = '';

    // Render API cards
    function renderCards() {
        apiGrid.innerHTML = '';
        
        const filteredData = apiKeysData.filter(api => {
            const matchesFilter = currentFilter === 'all' || api.category === currentFilter;
            const matchesSearch = api.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
                                 api.description.toLowerCase().includes(currentSearch.toLowerCase());
            return matchesFilter && matchesSearch;
        });

        if (filteredData.length === 0) {
            apiGrid.innerHTML = '<div class="no-results">No API keys found. Try adjusting your search or filter.</div>';
            return;
        }

        filteredData.forEach(api => {
            const card = createCard(api);
            apiGrid.appendChild(card);
        });
    }

    // Create API card element
    function createCard(api) {
        const card = document.createElement('div');
        card.className = 'api-card';
        
        card.innerHTML = `
            <div style="font-size: 2em; margin-bottom: 10px;">${api.logo}</div>
            <h3>${api.name}</h3>
            <span class="category">${api.category.toUpperCase()}</span>
            <p>${api.description}</p>
            <div class="features">
                ${api.features.map(feature => `<span>${feature}</span>`).join('')}
            </div>
            <p style="font-size: 0.9em; color: #999;"><strong>Free Limit:</strong> ${api.freeLimit}</p>
            <div class="links">
                <a href="${api.documentation}" target="_blank" class="btn-primary">Docs</a>
                <a href="${api.signup}" target="_blank" class="btn-secondary">Sign Up</a>
            </div>
        `;
        
        return card;
    }

    // Filter button event listeners
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.dataset.filter;
            renderCards();
        });
    });

    // Search input event listener
    searchInput.addEventListener('input', function(e) {
        currentSearch = e.target.value;
        renderCards();
    });

    // Initial render
    renderCards();
});