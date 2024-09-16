// scripts.js
 
document.addEventListener('DOMContentLoaded', () => {

 
    // Función para aplicar configuraciones predeterminadas
    function applySettings() {
        document.getElementById('username').value = settings.profile.username;
        document.getElementById('email').value = settings.profile.email;
        document.getElementById('bio').value = settings.profile.bio;
        document.getElementById('profilePicture').value = settings.profile.profilePicture;
        document.getElementById('languageSelect').value = settings.language;
        document.getElementById('profileVisibility').value = settings.privacy.profileVisibility;
        document.getElementById('emailVisibility').value = settings.privacy.emailVisibility;
        document.getElementById('dataSharing').checked = settings.privacy.dataSharing;
        document.getElementById('twoFactorAuthentication').checked = settings.privacy.twoFactorAuthentication;
        document.getElementById('textSize').value = settings.accessibility.textSize;
        document.getElementById('highContrastMode').checked = settings.accessibility.highContrastMode;
        document.getElementById('screenReaderSupport').checked = settings.accessibility.screenReaderSupport;
        document.getElementById('emailNotifications').checked = settings.notifications.emailNotifications;
        document.getElementById('pushNotifications').checked = settings.notifications.pushNotifications;
        document.getElementById('smsNotifications').checked = settings.notifications.smsNotifications;
    }
 
    // Función para guardar configuraciones
    document.getElementById('saveSettings').addEventListener('click', () => {
        const updatedSettings = {
            profile: {
                username: document.getElementById('username').value,
                email: document.getElementById('email').value,
                bio: document.getElementById('bio').value,
                profilePicture: document.getElementById('profilePicture').value
            },
            language: document.getElementById('languageSelect').value,
            privacy: {
                profileVisibility: document.getElementById('profileVisibility').value,
                emailVisibility: document.getElementById('emailVisibility').value,
                dataSharing: document.getElementById('dataSharing').checked,
                twoFactorAuthentication: document.getElementById('twoFactorAuthentication').checked
            },
            accessibility: {
                textSize: document.getElementById('textSize').value,
                highContrastMode: document.getElementById('highContrastMode').checked,
                screenReaderSupport: document.getElementById('screenReaderSupport').checked
            },
            notifications: {
                emailNotifications: document.getElementById('emailNotifications').checked,
                pushNotifications: document.getElementById('pushNotifications').checked,
                smsNotifications: document.getElementById('smsNotifications').checked
            }
        };
        console.log('Configuraciones guardadas:', updatedSettings);
        alert('Configuraciones guardadas con éxito!');
    });
 
    // Aplicar configuraciones predeterminadas al cargar la página
    applySettings();
});