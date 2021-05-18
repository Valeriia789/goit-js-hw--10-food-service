const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switchToggle = document.getElementById('theme-switch-toggle');
const bodyClass = document.body.classList;

// создавать и читать данные в локальном хранилище, синтаксис:
// localStorage.setItem('Theme', JSON.stringify(Theme));
// console.log(JSON.parse(localStorage.getItem('Theme')));

switchToggle.addEventListener('change', onSwitchToggleChange);
savingTheme();

function onSwitchToggleChange () {
  if (bodyClass.value === Theme.DARK) {
    bodyClass.remove(Theme.DARK);
    bodyClass.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  } else {
    bodyClass.remove(Theme.LIGHT);
    bodyClass.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  }
}

function savingTheme () {
  const localTheme = localStorage.getItem('theme');

  if (localTheme) {
    bodyClass.value = localTheme;

    if (localTheme === Theme.DARK) {
      switchToggle.checked = true;
    }
  }
}
