// 작업 페이지: 이미지 카드를 누르면 큰 이미지가 열립니다.
const imageModal = document.querySelector('.image-modal');
if (imageModal) {
  document.querySelectorAll('.work-card').forEach(card => {
    card.addEventListener('click', () => {
      const image = imageModal.querySelector('.large-image');
      image.src = card.dataset.image;
      image.alt = card.dataset.title;
      imageModal.querySelector('.large-image-title').textContent = card.dataset.title;
      imageModal.querySelector('.large-image-description').textContent = card.dataset.description;
      imageModal.showModal();
    });
  });
}

// 메모 페이지: 메모 카드를 누르면 상세 메모가 열리고 긴 글은 팝업 안에서 스크롤됩니다.
const noteDetailModal = document.querySelector('.note-detail-modal');
if (noteDetailModal) {
  document.querySelectorAll('.note-card').forEach(card => {
    card.addEventListener('click', () => {
      noteDetailModal.querySelector('#note-detail-title').textContent = card.dataset.noteTitle;
      noteDetailModal.querySelector('.note-detail-date').textContent = card.dataset.noteDate;
      noteDetailModal.querySelector('.note-detail-body').textContent = card.dataset.noteBody.replace(/\\n/g, '\n');
      noteDetailModal.showModal();
    });
  });
}

// 팝업 닫기 버튼 및 바깥 영역 클릭
document.querySelectorAll('[data-close]').forEach(button => {
  button.addEventListener('click', () => button.closest('dialog').close());
});
document.querySelectorAll('dialog').forEach(dialog => {
  dialog.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });
});
