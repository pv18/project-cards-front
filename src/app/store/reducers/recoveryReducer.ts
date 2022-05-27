type RecoveryStateType = {
	email: string | null
}

export type RecoveryActionType = {

}

const initialState: RecoveryStateType = {
	email: null,
};

export const recoveryReducer = (state = initialState, action: RecoveryActionType ) => {

	switch (action) {

		default: return state;
	}
};