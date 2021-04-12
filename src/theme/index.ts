import {createMuiTheme} from "@material-ui/core";
import {red} from '@material-ui/core/colors'

const Theme = createMuiTheme({
    typography: {
        // 中文字符和日文字符通常比较大，
        // 所以选用一个略小的 fontsize 会比较合适。
        fontSize: 12,
    },
    palette: {
        primary: {
            main: red[800],
        },

    },
})

export default Theme