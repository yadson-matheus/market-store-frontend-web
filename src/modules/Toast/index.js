import M from 'materialize-css';

export function ToastDanger(html) {
    M.toast({ html: html, classes: 'bg-danger' });
}
