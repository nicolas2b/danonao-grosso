// Contador de visualizações
let viewCount = localStorage.getItem('viewCount') ? parseInt(localStorage.getItem('viewCount')) : 0;
viewCount++;
localStorage.setItem('viewCount', viewCount);
document.getElementById('viewCount').textContent = viewCount;

// Modal interativo
function openModal(benefit) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalText = document.getElementById('modalText');

    if (benefit === 'saudeDigestiva') {
        modalTitle.textContent = 'Saúde Digestiva';
        modalText.textContent = 'O iogurte contém probióticos, que são bactérias benéficas para o intestino, ajudando na digestão e na absorção de nutrientes.';
    } else if (benefit === 'fortaleceOssos') {
        modalTitle.textContent = 'Fortalece Ossos';
        modalText.textContent = 'Além de cálcio, o iogurte contém vitamina D, que é essencial para a absorção de cálcio no corpo, ajudando a manter ossos fortes.';
    } else if (benefit === 'melhoraImunidade') {
        modalTitle.textContent = 'Melhora o Sistema Imunológico';
        modalText.textContent = 'Os probióticos presentes no iogurte ajudam a fortalecer o sistema imunológico, aumentando a resistência a infecções.';
    }

    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
}

// Fechar modal ao clicar fora
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}

