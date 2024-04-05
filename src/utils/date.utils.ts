export function getFormattedDate(date: string | undefined) {
    if(!date) return;
    const options:  Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    
    return new Date(date).toLocaleDateString('en-US', options);
}

export function getCurrentDate() {
    return new Date().toISOString().split('T')[0];
}