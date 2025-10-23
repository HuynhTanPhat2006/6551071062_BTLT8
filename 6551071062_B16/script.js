$(document).ready(function() {
    // Validate email
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Add row handler
    $('#addRow').click(function() {
        const name = $('#name').val().trim();
        const email = $('#email').val().trim();
        const birthdate = $('#birthdate').val();

        // Validation
        $('.error').remove();
        let isValid = true;

        if (!name) {
            $('#name').after('<span class="error">Name is required</span>');
            isValid = false;
        }

        if (!email) {
            $('#email').after('<span class="error">Email is required</span>');
            isValid = false;
        } else if (!isValidEmail(email)) {
            $('#email').after('<span class="error">Invalid email format</span>');
            isValid = false;
        }

        if (!birthdate) {
            $('#birthdate').after('<span class="error">Birthdate is required</span>');
            isValid = false;
        }

        if (isValid) {
            const newRow = `
                <tr>
                    <td><input type="checkbox"></td>
                    <td>${name}</td>
                    <td>${email}</td>
                    <td>${birthdate}</td>
                </tr>
            `;
            $('#userTable tbody').append(newRow);

            // Clear inputs
            $('#name, #email, #birthdate').val('');
        }
    });

    // Delete row handler
    $('#deleteRow').click(function() {
        $('#userTable tbody tr').filter(function() {
            return $(this).find('input[type="checkbox"]').is(':checked');
        }).remove();
    });
});
