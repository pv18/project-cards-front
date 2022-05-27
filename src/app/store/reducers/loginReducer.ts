type LoginStateType = {
	email: string | null
	password: string | null
	rememberMe: boolean
}

export type LoginActionType = {

}

const initialState: LoginStateType = {
	email: null,
	password: null,
	rememberMe: false,
};

export const loginReducer = (state = initialState, action: LoginActionType ) => {

	switch (action) {

		default: return state;
	}
};