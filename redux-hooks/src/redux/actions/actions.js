import { INC, DEC } from './actionTypes';

export const inc = () => {
	return {
		type: INC
	};
};

export const dec = () => {
	return {
		type: DEC
	};
};
