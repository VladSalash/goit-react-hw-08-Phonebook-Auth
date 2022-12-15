import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { NavLink } from 'react-router-dom';

export default function ErrorPage() {
  const padding = {
    paddingLeft: 20,
    textAlign: 'center',
  };
  return (
    <>
      <h1 style={padding}>404 Page not found :(</h1>
      <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
        <NavLink to="/" variant="body2">
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Go back
          </Button>
        </NavLink>
      </Stack>
    </>
  );
}
