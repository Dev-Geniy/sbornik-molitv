// Открыть модальное окно
    function openModal(prayerId) {
        const modal = document.getElementById(prayerId);
        modal.style.display = 'block';
    }

    // Закрыть модальное окно
    function closeModal(prayerId) {
        const modal = document.getElementById(prayerId);
        modal.style.display = 'none';
    }

    // Закрыть модальное окно при клике вне области контента
    window.onclick = function(event) {
        if (event.target.className === "modal") {
            closeModal(event.target.id);
        }
    }
