// Form Validation Utility
class FormValidator {
    constructor(formId) {
        this.form = document.getElementById(formId);
        this.errors = {};
    }

    // Validate email format
    validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Validate required field
    validateRequired(value, fieldName) {
        if (!value || value.trim() === '') {
            this.errors[fieldName] = `${fieldName} is required`;
            return false;
        }
        return true;
    }

    // Validate minimum length
    validateMinLength(value, minLength, fieldName) {
        if (value.length < minLength) {
            this.errors[fieldName] = `${fieldName} must be at least ${minLength} characters`;
            return false;
        }
        return true;
    }

    // Show error message
    showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        if (!field) return;

        // Remove existing error
        this.clearError(fieldId);

        // Add error class
        field.classList.add('error');

        // Create error message element
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        errorDiv.id = `${fieldId}-error`;

        // Insert after field
        field.parentNode.insertBefore(errorDiv, field.nextSibling);
    }

    // Clear error message
    clearError(fieldId) {
        const field = document.getElementById(fieldId);
        if (!field) return;

        field.classList.remove('error');
        const errorMsg = document.getElementById(`${fieldId}-error`);
        if (errorMsg) {
            errorMsg.remove();
        }
    }

    // Clear all errors
    clearAllErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(msg => msg.remove());

        const errorFields = document.querySelectorAll('.error');
        errorFields.forEach(field => field.classList.remove('error'));

        this.errors = {};
    }

    // Show success message
    showSuccess(message) {
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.textContent = message;

        this.form.insertBefore(successDiv, this.form.firstChild);

        setTimeout(() => {
            successDiv.remove();
        }, 3000);
    }

    // Validate contact form
    validateContactForm(formData) {
        this.clearAllErrors();
        let isValid = true;

        // Validate name
        if (!this.validateRequired(formData.name, 'Name')) {
            this.showError('name', this.errors['Name']);
            isValid = false;
        }

        // Validate email
        if (!this.validateRequired(formData.email, 'Email')) {
            this.showError('email', this.errors['Email']);
            isValid = false;
        } else if (!this.validateEmail(formData.email)) {
            this.showError('email', 'Please enter a valid email address');
            isValid = false;
        }

        // Validate subject
        if (!this.validateRequired(formData.subject, 'Subject')) {
            this.showError('subject', this.errors['Subject']);
            isValid = false;
        }

        // Validate message
        if (!this.validateRequired(formData.message, 'Message')) {
            this.showError('message', this.errors['Message']);
            isValid = false;
        } else if (!this.validateMinLength(formData.message, 10, 'Message')) {
            this.showError('message', this.errors['Message']);
            isValid = false;
        }

        return isValid;
    }

    // Validate login form
    validateLoginForm(formData) {
        this.clearAllErrors();
        let isValid = true;

        // Validate email
        if (!this.validateRequired(formData.email, 'Email')) {
            this.showError('email', this.errors['Email']);
            isValid = false;
        } else if (!this.validateEmail(formData.email)) {
            this.showError('email', 'Please enter a valid email address');
            isValid = false;
        }

        // Validate password
        if (!this.validateRequired(formData.password, 'Password')) {
            this.showError('password', this.errors['Password']);
            isValid = false;
        }

        return isValid;
    }

    // Validate signup form
    validateSignupForm(formData) {
        this.clearAllErrors();
        let isValid = true;

        // Validate name
        if (!this.validateRequired(formData.name, 'Name')) {
            this.showError('name', this.errors['Name']);
            isValid = false;
        }

        // Validate email
        if (!this.validateRequired(formData.email, 'Email')) {
            this.showError('email', this.errors['Email']);
            isValid = false;
        } else if (!this.validateEmail(formData.email)) {
            this.showError('email', 'Please enter a valid email address');
            isValid = false;
        }

        // Validate password
        if (!this.validateRequired(formData.password, 'Password')) {
            this.showError('password', this.errors['Password']);
            isValid = false;
        } else if (!this.validateMinLength(formData.password, 6, 'Password')) {
            this.showError('password', this.errors['Password']);
            isValid = false;
        }

        // Validate confirm password
        if (formData.confirmPassword !== formData.password) {
            this.showError('confirmPassword', 'Passwords do not match');
            isValid = false;
        }

        return isValid;
    }
}
