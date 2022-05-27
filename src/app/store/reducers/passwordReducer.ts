type PasswordStateType = {
	email: string | null
	password: string | null
}

export type PasswordActionType = {

}

const initialState: PasswordStateType = {
	email: null,
	password: null,
};

export const passwordReducer = (state = initialState, action: PasswordActionType ) => {

	switch (action) {

		default: return state;
	}
};