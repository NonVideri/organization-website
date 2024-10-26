import { writable } from 'svelte/store';

type AlertType = 'error' | 'success' | 'info' | 'warning';

export interface AlertProps {
	message: string;
	type: AlertType;
}

export const alert = writable<AlertProps | null>(null);

export const setAlert = (message: string, type: AlertType = 'error') => {
	alert.set({ message, type });
};
