import { createSlice } from '@reduxjs/toolkit';

interface ScreenState {
    isMobile: boolean;
    isMenuOpen: boolean;
}

const initialState: ScreenState = {
    isMobile: window.innerWidth < 1024,
    isMenuOpen: false,
};

const screenSlice = createSlice({
    name: 'screen',
    initialState,
    reducers: {
        setIsMobile: (state, action) => {
            state.isMobile = action.payload;
        },
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        setMenuOpen: (state, action) => {
            state.isMenuOpen = action.payload;
        },
    },
});

export const { setIsMobile, toggleMenu, setMenuOpen } = screenSlice.actions;
export default screenSlice.reducer;