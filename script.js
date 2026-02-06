// Simplified Modal Logic for Cinematic Theme
const modal = document.getElementById('project-modal');

if (modal) {
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalLinks = document.getElementById('modal-links');
    const closeModal = document.querySelector('.close-modal');
    const triggers = document.querySelectorAll('.trigger-modal');

    triggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const title = trigger.getAttribute('data-title');
            const desc = trigger.getAttribute('data-desc');
            const repo = trigger.getAttribute('data-repo');
            const results = trigger.getAttribute('data-results');
            const demo = trigger.getAttribute('data-demo');
            const paper = trigger.getAttribute('data-paper');

            modalTitle.innerText = title;
            modalDesc.innerText = desc;
            modalLinks.innerHTML = '';

            const createLink = (url, text) => {
                if (url && url !== '#') {
                    const a = document.createElement('a');
                    a.href = url;
                    a.target = "_blank";
                    a.innerText = text;
                    a.className = "btn-primary";
                    a.style.fontSize = "0.8rem";
                    a.style.padding = "0.5rem 1rem";
                    modalLinks.appendChild(a);
                }
            }

            createLink(repo, "VIEW REPO");
            createLink(demo, "VIEW DEMO");
            createLink(paper, "VIEW PAPER");
            createLink(results, "VIEW RESULTS");

            modal.style.display = 'flex';
        });
    });

    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    });
}

// Make entire card clickable
const projectCards = document.querySelectorAll('.project-card');
if (projectCards.length > 0) {
    projectCards.forEach(card => {
        card.addEventListener('click', (e) => {
            const link = card.querySelector('a');
            if (link && e.target !== link && !link.contains(e.target)) {
                link.click();
            }
        });
        // Add pointer cursor to indicate clickability
        card.style.cursor = 'pointer';
    });
}
