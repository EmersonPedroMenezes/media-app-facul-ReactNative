import { View, Image} from "react-native";
import Styles from "./Style.js";

export default function Logo (){   
    return(
        <View style={Styles.boxLogo}>
            <Image source={require('../../../assets/logo.png')}/>
        </View>
    );


}