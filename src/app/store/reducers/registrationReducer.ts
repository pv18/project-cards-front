type RegistrationStateType = {
	email: string | null
	password: string | null
}

export type RegistrationActionType = {

}

const initialState: RegistrationStateType = {
	email: null,
	password: null,
};

export const registrationReducer = (state = initialState, action: RegistrationActionType ) => {

	switch (action) {

		default: return state;
	}
};