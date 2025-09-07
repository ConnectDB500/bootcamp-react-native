import React, { useState } from "react";
import { Text,  Pressable } from "react-native";
import * as Clipboard from "expo-clipboard";

import { styles } from "./BatButtonStyles";
import BatTextInput from "components/BatTextInput/BatTextInput";
import generatePass from "services/passwordService";

export default function BatButton() {
    const [pass, setPass] = useState("");

    function handleGenerateButton() {
        let generateToken = generatePass()
        setPass(generateToken)
    }

    function handleCopyButton(){
        Clipboard.setStringAsync(pass);
    }

    return(
        <>
            <BatTextInput pass="pass" />
            <Pressable 
                onPress={handleGenerateButton}
                style={styles.button}
            >
                <Text style={styles.text}>GENERATE</Text>
            </Pressable>

            <Pressable 
                style={styles.button}
                onPress={handleCopyButton}
            >
                <Text style={styles.text}
                >COPY</Text>
            </Pressable>
        </>
    )
}