import './styles.css';

const sections = [...document.querySelectorAll('[data-section]')];
const navLinks = [...document.querySelectorAll('[data-nav]')];
const progressBar = document.querySelector('#progress-bar');
const progressLabel = document.querySelector('#progress-label');
const completed = new Set();
const toast = document.querySelector('#toast');
const completedCount = document.querySelector('#completed-count');

function showToast(message, good = true) {
  toast.textContent = message;
  toast.className = `toast show ${good ? 'good' : 'bad'}`;
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => { toast.className = 'toast'; }, 2200);
}

function updateProgress() {
  const percent = Math.round((completed.size / 10) * 100);
  progressBar.style.width = `${Math.min(percent, 100)}%`;
  progressLabel.textContent = `${String(Math.min(percent, 100)).padStart(2, '0')}%`;
  completedCount.textContent = completed.size;
}

function complete(id) {
  if (!completed.has(id)) {
    completed.add(id);
    updateProgress();
  }
}

function markChoice(question, option) {
  const options = [...question.querySelectorAll('.answer-option')];
  options.forEach((item) => item.classList.remove('correct', 'wrong'));
  const correct = option.dataset.correct === 'true';
  option.classList.add(correct ? 'correct' : 'wrong');
  const feedback = question.querySelector('.answer-feedback');
  feedback.className = `answer-feedback ${correct ? 'good' : 'bad'}`;
  feedback.textContent = correct ? 'Correct — that is the exam-ready link.' : 'Not quite. Re-read the wording, then try again.';
  if (correct) {
    complete(question.dataset.question);
    showToast('Correct. Mark added.');
  } else {
    showToast('Try again — the clue is in the question.', false);
  }
}

function shuffleAnswers(question) {
  const group = question.querySelector('.answer-row,.answer-stack,.answer-grid');
  if (!group) return;
  const options = [...group.querySelectorAll('.answer-option')];
  for (let i = options.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }
  options.forEach((option) => group.appendChild(option));
}

document.querySelectorAll('[data-type="choice"]').forEach((question) => {
  shuffleAnswers(question);
  question.querySelectorAll('.answer-option').forEach((option) => option.addEventListener('click', () => markChoice(question, option)));
});

document.querySelectorAll('[data-type="text"]').forEach((question) => {
  const input = question.querySelector('input');
  const button = question.querySelector('.check-text');
  button.addEventListener('click', () => {
    const answer = input.value.trim().toLowerCase();
    const keywords = input.dataset.keywords.split(',');
    const correct = keywords.some((keyword) => answer.includes(keyword));
    const feedback = question.querySelector('.answer-feedback');
    feedback.className = `answer-feedback ${correct ? 'good' : 'bad'}`;
    feedback.textContent = correct ? 'Correct — enzymes from the acrosome digest the jelly coat.' : 'Try the key word from the sperm diagram: what does the acrosome release?';
    if (correct) { complete(question.dataset.question); showToast('Keyword accepted.'); } else showToast('Not yet — use the diagram label.', false);
  });
  input.addEventListener('keydown', (event) => { if (event.key === 'Enter') button.click(); });
});

document.querySelectorAll('[data-reveal]').forEach((button) => {
  button.addEventListener('click', () => {
    const id = button.dataset.reveal;
    document.querySelectorAll('.diagram-tag,.adaptation-row').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    const male = {
      testes: 'Testis: produces sperm cells and secretes testosterone.',
      scrotum: 'Scrotum: holds the testes outside the body at a lower temperature, about 2–3°C below core temperature.',
      duct: 'Sperm duct: muscular tube carrying sperm from the testes towards the urethra.',
      prostate: 'Prostate gland: adds alkaline fluid that helps sperm survive the acidic vagina.',
      urethra: 'Urethra: carries urine or semen out of the body; not at the same time.',
      penis: 'Penis: contains erectile tissue and delivers semen for internal fertilisation.'
    };
    const female = {
      ovary: 'Ovary: releases ova and secretes oestrogen and progesterone.',
      oviduct: 'Oviduct: carries the egg towards the uterus; fertilisation happens here.',
      uterus: 'Uterus: muscular organ with a vascular lining where the embryo implants and the fetus develops.',
      cervix: 'Cervix: muscular neck of the uterus that dilates during birth.',
      vagina: 'Vagina: receives the penis and acts as the birth canal.'
    };
    const adaptations = {
      flagellum: 'Flagellum → movement → propels sperm through cervical mucus and towards the egg.',
      mitochondria: 'Mitochondria → ATP → provide energy for the flagellum to beat.',
      acrosome: 'Acrosome → enzymes → digest the egg cell’s jelly coat.',
      'egg-store': 'Egg cytoplasm → energy stores → fuels early mitotic divisions before implantation.'
    };
    const text = male[id] || female[id] || adaptations[id] || 'Keep linking the structure to its function.';
    const target = button.closest('.diagram-panel')?.querySelector('.diagram-reveal') || document.querySelector('#adaptation-reveal');
    if (target) target.textContent = text;
  });
});

document.querySelectorAll('.switcher-tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    const name = tab.dataset.tab;
    document.querySelectorAll('.switcher-tab').forEach((item) => { item.classList.toggle('active', item === tab); item.setAttribute('aria-selected', item === tab ? 'true' : 'false'); });
    document.querySelectorAll('.diagram-panel').forEach((panel) => panel.classList.toggle('active', panel.dataset.panel === name));
  });
});

const supportText = {
  cord: 'Umbilical cord: contains blood vessels connecting fetus to placenta.',
  placenta: 'Placenta: temporary exchange organ embedded in the uterine wall.',
  sac: 'Amniotic sac: membrane enclosing the amniotic fluid around the fetus.',
  fluid: 'Amniotic fluid: absorbs shocks, helps temperature stability and permits movement.'
};
document.querySelectorAll('.support-tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.support-tab').forEach((item) => item.classList.toggle('active', item === tab));
    document.querySelector('#support-answer').textContent = supportText[tab.dataset.support];
  });
});

document.querySelectorAll('.timeline-step').forEach((step) => step.addEventListener('click', () => {
  document.querySelectorAll('.timeline-step').forEach((item) => item.classList.remove('active'));
  step.classList.add('active');
}));

document.querySelector('#confidence')?.addEventListener('input', (event) => {
  document.querySelector('#confidence-value').textContent = `${event.target.value} / 5`;
});

document.querySelectorAll('[data-scroll]').forEach((button) => button.addEventListener('click', () => document.querySelector(button.dataset.scroll)?.scrollIntoView({ behavior: 'smooth' })));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('is-visible'); });
}, { threshold: .14 });
document.querySelectorAll('.reveal-on-scroll').forEach((element) => revealObserver.observe(element));

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => link.classList.toggle('active', link.dataset.nav === entry.target.id));
    }
  });
}, { rootMargin: '-32% 0px -58% 0px' });
sections.forEach((section) => sectionObserver.observe(section));
updateProgress();
