const searchInput = document.getElementById('bibsearch');
const items = document.querySelectorAll('.pub-item');
const mainWrapper = document.querySelector('#main-wrapper');
const menu = document.querySelector('.menu-icon');
const clickable = document.querySelectorAll('.click');

searchInput?.addEventListener('input', (event) => {
  const query = event.target.value.trim().toLowerCase();

  items.forEach((item) => {
    const text = item.textContent.toLowerCase();
    item.classList.toggle('hidden-item', query && !text.includes(query));
  });
});

document.querySelectorAll('.bib-btn').forEach((button) => {
  button.addEventListener('click', () => {
    const bibtex = button.closest('.pub-item')?.querySelector('.bibtex');
    if (!bibtex) return;
    bibtex.classList.toggle('hidden');
  });
});

document.querySelectorAll('.copy-btn').forEach((button) => {
  button.addEventListener('click', async () => {
    const code = button.closest('.code-display-wrapper')?.querySelector('code');
    if (!code) return;

    try {
      await navigator.clipboard.writeText(code.textContent.trim());
      const original = button.textContent;
      button.textContent = 'Copied';
      setTimeout(() => {
        button.textContent = original;
      }, 1200);
    } catch (error) {
      button.textContent = 'Error';
      setTimeout(() => {
        button.textContent = 'Copy';
      }, 1200);
    }
  });
});

menu?.addEventListener('click', function () {
  this.classList.toggle('active');
  mainWrapper?.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
});

clickable.forEach((item) => {
  item.addEventListener('click', function () {
    menu?.classList.remove('active');
    mainWrapper?.classList.remove('active');
    document.body.classList.remove('no-scroll');
  });
});
