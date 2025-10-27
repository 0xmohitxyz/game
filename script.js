
    // Get references
    const btn = document.getElementById('generateBtn');
    const numEl = document.getElementById('number');
    const discountEl = document.getElementById('discount');

    // Generate a random integer between 0 and 100 inclusive
    function random0to100() {
      // Math.random() returns [0,1); multiply by 101, floor to get 0..100
      return Math.floor(Math.random() * 101);
    }

    // Format percentage with two decimals
    function formatPercentFromValue(value) {
      // value is already a percentage value (like 230 => "230.00%")
      return value.toFixed(2) + '%';
    }

    // Click handler
    btn.addEventListener('click', () => {
      const n = random0to100();
      numEl.textContent = n;

      // Discount formula: (randomNumber / 10) * 100 = randomNumber * 10
      const discountValue = n / 10; // percentage number
      discountEl.textContent = 'Discount: ' + formatPercentFromValue(discountValue);
    });

    // Optional: initialize once
    (function init() {
      numEl.textContent = '—';
      discountEl.textContent = '—';
    })();
