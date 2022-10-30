import {
  ThemeProvider, createTheme, Typography,
  Avatar, Box, FormControlLabel, Checkbox, Button
}
  from "@mui/material";
import rtlPlugin from "stylis-plugin-rtl";
import {CacheProvider} from "@emotion/react";
import createCache from "@emotion/cache";
import {prefixer} from "stylis";
import image from "./img/anpr7glow.png"
import {FaRegUser} from "react-icons/fa"
import {MdLockOutline} from "react-icons/md"
import {blue} from "@mui/material/colors";
import Grid from "@mui/material/Unstable_Grid2";

const theme = createTheme({
  direction : "rtl",
  typography : {
    fontFamily : "vazir, Roboto"
  },
  palette : {
    primary : {
      main : "#fff"
    }
  }
})
const cacheRTL = createCache({
  key : "muirtl",
  stylisPlugins : [prefixer,rtlPlugin]
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CacheProvider value={cacheRTL}>
        <div className="bg-sky-900 min-h-screen">
          <Grid container>
            <Grid xs={10} sm={8} md={5} lg={5} sx={{mx : "auto",display : "flex",
            justifyContent : "center" , alignItems: "center", py: 2}}>
              <Box className="bg-sky-800" sx={{display : "flex", flexDirection : "column", gap : 2 , p : 4 , color : "white" , borderRadius : "10px"}}>
                <Typography variant="h4">خودنگار</Typography>
                <Typography variant="h6" sx={{mb : 2}}>سامانه هوشمند تشخیص پلاک</Typography>
                <Typography variant="h6">ورود</Typography>
                <Box sx={{display : "flex",alignItems : "center",gap:1, borderRadius : "10px",
                border : `2px solid ${blue[400]}`, p : ".5rem 1rem"}}>
                  <FaRegUser size={20}/>
                  <input type="text" placeholder="نام کاربری" className="w-full placeholder:text-white bg-transparent outline-0 border-0 text-white text-lg"/>
                </Box>
                <Box sx={{display : "flex",alignItems : "center",gap:1, borderRadius : "10px",
                  border : `2px solid ${blue[400]}`, p : ".5rem 1rem"}}>
                  <MdLockOutline size={30}/>
                  <input type="text" placeholder="کلمه عبور" className="w-full placeholder:text-white bg-transparent outline-0 border-0 text-white text-lg"/>
                </Box>
                <FormControlLabel control={<Checkbox />} label="مرا به خاطر بسپار" />
                <Button variant="contained" className="bg-blue-400 text-white text-2xl">ورود</Button>
              </Box>
            </Grid>
            <Grid xs={0} sm={0} md={5} lg={6} sx={{mx : "auto"}}>
              <Avatar src={image} sx={{width : "100%",height : "100%",borderRadius : 0, maxWidth : "550px"}}/>
            </Grid>
          </Grid>
          <Box sx={{display : "flex", justifyContent : "center", alignItems : "center", gap: 1,flexDirection : "column", color : "white"}}>
            <Typography variant="h6">هوش داده مهتاب</Typography>
            <Typography variant="h6">www.datamoon.ir</Typography>
          </Box>
        </div>
      </CacheProvider>
    </ThemeProvider>
  );
}

export default App;
