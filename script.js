document.addEventListener('DOMContentLoaded', function () {
  const folders = document.querySelectorAll('.folder');

  folders.forEach(function (folder) {
    folder.addEventListener('click', function () {
      folder.classList.toggle('open');
    });
  });
});
