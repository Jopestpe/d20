const TodoConteudoDaPagina = document.documentElement.innerHTML;
const PaginaFormatada = TodoConteudoDaPagina
    .replace(/\bForça\b/g, '<span id="IDForça">Força</span>')
    .replace(/\bDestreza\b/g, '<span id="IDDestreza">Destreza</span>')
    .replace(/\bConstituição\b/g, '<span id="IDConstituição">Constituição</span>')
    .replace(/\bCarisma\b/g, '<span id="IDCarisma">Carisma</span>')
    .replace(/\bIntelecto\b/g, '<span id="IDIntelecto">Intelecto</span>')
    .replace(/\bPercepção\b/g, '<span id="IDPercepção">Percepção</span>')
    .replace(/\b(For)\b/g, '<span id="IDForça">$1</span>')
    .replace(/\b(Des)\b/g, '<span id="IDDestreza">$1</span>')
    .replace(/\b(Con)\b/g, '<span id="IDConstituição">$1</span>')
    .replace(/\b(Car)\b/g, '<span id="IDCarisma">$1</span>')
    .replace(/\b(Int)\b/g, '<span id="IDIntelecto">$1</span>')
    .replace(/\b(Per)\b/g, '<span id="IDPercepção">$1</span>')
    .replace(/\+(\d+)/g, '<span id="PontoPositivo">$&</span>')
    .replace(/\-(\d+)/g, '<span id="PontoNegativo">$&</span>');
document.documentElement.innerHTML = PaginaFormatada;


