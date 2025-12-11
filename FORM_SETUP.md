# Enquiry Form Setup Instructions

## FormSubmit.co Configuration

The enquiry form is now activated and uses FormSubmit.co (a free service) to send emails.

### Setup Steps:

1. **Open the file**: `src/pages/CustomOrders.jsx`

2. **Find line 29** and replace `your-email@example.com` with your actual email address:
   ```javascript
   const response = await fetch('https://formsubmit.co/ajax/YOUR_EMAIL@example.com', {
   ```

3. **First submission verification**:
   - After updating your email, submit a test form
   - FormSubmit will send a verification email to confirm your email address
   - Click the verification link in that email
   - After verification, all future form submissions will go directly to your inbox

### Features Included:

✅ Email notifications for each enquiry
✅ Form validation
✅ Loading state during submission
✅ Success/error messages
✅ Automatic form reset after successful submission
✅ Professional email formatting (table layout)

### Alternative Email Services:

If you prefer a different service, you can replace the FormSubmit code with:

- **EmailJS**: More customization options
- **Netlify Forms**: If hosting on Netlify
- **Custom Backend**: Your own API endpoint

### Testing:

1. Fill out the form on the Custom Orders page
2. Click "Submit Enquiry"
3. You should see "Sending..." while processing
4. Success message appears when sent
5. Form fields clear automatically

---

**Note**: The current configuration sends plain emails. You can customize the email template by modifying the FormSubmit parameters in the code.
