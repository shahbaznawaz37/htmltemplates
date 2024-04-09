document.addEventListener('DOMContentLoaded', function () {
    var cardNumberInput = document.getElementById('cardNumber');
    var cardTypeSelect = document.getElementById('cardType');
    var form = document.getElementById('credit-card-form');

    populateYears();

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        var cardName = document.getElementById('cardName').value;
        var cardNumber = cardNumberInput.value.replace(/\s/g, '');
        var expiryMonth = document.getElementById('expiryMonth').value;
        var expiryYear = document.getElementById('expiryYear').value;
        var cvv = document.getElementById('cvv').value;

        if (!validateCardNumber(cardNumber)) {
            alert("Invalid card number.");
            return;
        }

        if (!validateExpiryDate(expiryMonth, expiryYear)) {
            alert("Invalid expiry date.");
            return;
        }

        if (!validateCVV(cvv)) {
            alert("Invalid CVV.");
            return;
        }

        alert("Form submitted successfully!");
    });

    cardNumberInput.addEventListener('input', function() {
        var cardNumber = this.value.replace(/\s/g, '');
        var formattedNumber = cardNumber.replace(/(.{4})/g, '$1 ').trim();
        this.value = formattedNumber;

        var detectedType = getCardType(cardNumber);
        if (detectedType) {
            cardTypeSelect.value = detectedType;
        }
    });

    function populateYears() {
        var yearSelect = document.getElementById('expiryYear');
        var currentYear = new Date().getFullYear();
        for (var i = 0; i < 10; i++) {
            var year = currentYear + i;
            var option = document.createElement('option');
            option.value = year;
            option.textContent = year;
            yearSelect.appendChild(option);
        }
    }

    function validateCardNumber(number) {
        var regex = new RegExp("^[0-9]{16}$");
        return regex.test(number);
    }

    function validateExpiryDate(month, year) {
        if (!month || !year) {
            return false;
        }
        // Add more logic here if needed
        return true;
    }

    function validateCVV(cvv) {
        var regex = new RegExp("^[0-9]{3,4}$");
        return regex.test(cvv);
    }

    function getCardType(number) {
        if (/^4[0-9]{12}(?:[0-9]{3})?$/.test(number)) {
            return 'Visa';
        }
        if (/^5[1-5][0-9]{14}$/.test(number)) {
            return 'MasterCard';
        }
        // Other card types can be added here

        return '';
    }
});
