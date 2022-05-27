

type ProfileStateType = {
	name: string | null
	status: string | null
}

export type ProfileActionType = {

}

const initialState: ProfileStateType = {
	name: null,
	status: null,
};

export const profileReducer = (state = initialState, action: ProfileActionType ) => {

	switch (action) {

		default: return state;
	}
};