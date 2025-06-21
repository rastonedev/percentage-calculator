const waxAmountInput = document.getElementById('waxAmount');
const essenceAmountInput = document.getElementById('essenceAmount');
const hardenerAmountInput = document.getElementById('hardenerAmount');
const result = document.getElementById('resultado');
const wax = 500;
const essence = 30;
const hardener = 25;
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
        essenceAmountInput.value = calculateProportionWaxEssence(waxAmount);
        hardenerAmountInput.value = calculateProportionHardenerWax(waxAmount);
        isUpdating = false;
    } else {
        essenceAmountInput.value = "";
        hardenerAmountInput.value = "";
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
        waxAmountInput.value = calculateProportionEssenceWax(essenceAmount);
        hardenerAmountInput.value = calculateProportionHardenerWax(waxAmountInput.value);
        isUpdating = false;
    } else {
        waxAmountInput.value = "";
        hardenerAmountInput.value = "";
    }
});

hardenerAmountInput.addEventListener('input', () => {
    if (isUpdating) return;
    let hardenerAmount = hardenerAmountInput.value;
    if (!/^\d*\.?\d*$/.test(hardenerAmount)) {
        hardenerAmountInput.value = hardenerAmount.replace(/[^0-9.]/g, '');
    }
    hardenerAmount = parseFloat(hardenerAmountInput.value)
    if (!isNaN(hardenerAmount)) {
        isUpdating = true;
        waxAmountInput.value = calculateProportionWaxHardener(hardenerAmount);
        essenceAmountInput.value = calculateProportionWaxEssence(waxAmountInput.value);
        isUpdating = false;
    } else {
        waxAmountInput.value = "";
        essenceAmountInput.value = "";
    }
});

function calculateProportionWaxEssence(waxAmount) {
    return (waxAmount * essence) / wax;
}

function calculateProportionEssenceWax(essenceAmount) {
    return (essenceAmount * wax) / essence;
}

function calculateProportionHardenerWax(waxAmount) {
    return (waxAmount * hardener) / wax;
}

function calculateProportionWaxHardener(hardenerAmount) {
    return (hardenerAmount * wax) / hardener;
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

function showTab(tabId, event) {
    document.querySelectorAll(".tab-content").forEach((el) =>
      el.classList.remove("active")
    );
    document.querySelectorAll(".tab").forEach((btn) =>
      btn.classList.remove("active")
    );
    document.getElementById(tabId).classList.add("active");
    event.currentTarget.classList.add("active");
  }

  function select(btn) {
    document.querySelectorAll(".selector .option").forEach((b) =>
      b.classList.remove("active")
    );
    btn.classList.add("active");

    if (btn.id === "lowMeltingWax") {
      document.getElementById("hardener").style.display = "block";
    } else {
      document.getElementById("hardener").style.display = "none";
    }
  }

  window.addEventListener("load", () => {
    const calculadora = document.querySelector(".calculadora");
    const height = calculadora.offsetHeight;
    calculadora.style.minHeight = height + "px";
  });