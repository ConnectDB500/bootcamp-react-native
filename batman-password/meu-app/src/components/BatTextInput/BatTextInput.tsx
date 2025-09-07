import React, { useState } from "react";
import { TextInput } from "react-native";

import { styles } from "./BatTextInputStyles";

interface BatTextInputProps{
  pass: string
}

export default function BatTextInput(props: BatTextInputProps) {
    return (
        <TextInput 
          placeholder="password" 
          style={styles.inputer}
          value={props.pass}
        />
    )
}