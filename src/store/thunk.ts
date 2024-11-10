import { createAsyncThunk } from '@reduxjs/toolkit'

import { actions, RootState } from '~/store/index'

const MIN_INITIALIZE_DELAY: number = 500

const initialize = createAsyncThunk<void, void, { state: RootState }>(
  'app/initialize',
  async (_, { dispatch, getState }) => {
    try {
      await new Promise((res) => setTimeout(res, MIN_INITIALIZE_DELAY))
      if (!getState().user.isAuthenticated) {
        return
      }
      dispatch(
        actions.user.updateUser({
          email: 'example@gmail.com',
          emailConfirmed: false,
          nickname: 'Wirexia',
          photo:
            'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSJhcetOBwA-I9T3Jud_ScdMlVEs5UD09XXZXD_7RomhU6cjA_t',
          identifier: 'b9E5-cKf4-q3N',
        }),
      )
    } catch (e) {
      dispatch(logout())
    } finally {
      dispatch(actions.user.init())
    }
  },
)

const logout = createAsyncThunk<void, void, { state: RootState }>(
  'app/logout',
  async (_) => {},
)

export const appActions = {
  initialize,
  logout,
}
