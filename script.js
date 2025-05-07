const waxAmountInput = document.getElementById('waxAmount');
const essenceAmountInput = document.getElementById('essenceAmount');
const result = document.getElementById('resultado');
const wax = 500;
const essence = 30;
let isUpdating = false;

waxAmountInput.addEventListener('input', () => {
    if (isUpdating) return;
    let waxAmount = waxAmountInput.value
    if (!/^\d*\.?\d*$/.test(waxAmount)) {
        waxAmountInput.value = waxAmount.replace(/[^0-9.]/g, '');
    }
    waxAmount = parseFloat(waxAmountInput.value)
    if (!isNaN(waxAmount)) {
        isUpdating = true;
        essenceAmountInput.value = calculateProportionWax(waxAmount);
        isUpdating = false;
    } else {
        essenceAmountInput.value = "";
    }
});

essenceAmountInput.addEventListener('input', () => {
    if (isUpdating) return;
    let essenceAmount = essenceAmountInput.value;
    if (!/^\d*\.?\d*$/.test(essenceAmount)) {
        essenceAmountInput.value = essenceAmount.replace(/[^0-9.]/g, '');
    }
    essenceAmount = parseFloat(essenceAmountInput.value)
    if (!isNaN(essenceAmount)) {
        isUpdating = true;
        waxAmountInput.value = calculateProportionEssence(essenceAmount);
        isUpdating = false;
    } else {
        waxAmountInput.value = "";
    }
});

function calculateProportionWax(waxAmount) {
    return (waxAmount * essence) / wax;
}

function calculateProportionEssence(essenceAmount) {
    return (essenceAmount * wax) / essence;
}

waxAmountInput.addEventListener('input', () => {
    const valor = waxAmountInput.value;
    if (!/^\d*\.?\d*$/.test(valor)) {
        waxAmountInput.value = valor.replace(/[^0-9.]/g, '');
    }
});

waxAmountInput.addEventListener('keypress', (e) => {
    if (e.key.toLowerCase() === 'e') {
        e.preventDefault();
    }
});

waxAmountInput.addEventListener('paste', (e) => {
    const pasted = (e.clipboardData || window.clipboardData).getData('text');
    if (/[^0-9.]/.test(pasted)) {
        e.preventDefault();
    }
});

essenceAmountInput.addEventListener('input', () => {
    const valor = essenceAmountInput.value;
    if (!/^\d*\.?\d*$/.test(valor)) {
        essenceAmountInput.value = valor.replace(/[^0-9.]/g, '');
    }
});

essenceAmountInput.addEventListener('keypress', (e) => {
    if (e.key.toLowerCase() === 'e') {
        e.preventDefault();
    }
});

essenceAmountInput.addEventListener('paste', (e) => {
    const pasted = (e.clipboardData || window.clipboardData).getData('text');
    if (/[^0-9.]/.test(pasted)) {
        e.preventDefault();
    }
});

function select(btn) {
    document.querySelectorAll('.selector .opcion').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}