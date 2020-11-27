import React, { useState } from 'react';
const [lembrete, setLembrete] = useState ('');

const LembreteInput = (props) => {
    return (
        <View style={styles.lembreteView}>
            {/* usuário irá inserir lembretes aqui*/}
            <TextInput
                placeholder="Lembrar..."
                style={styles.lembreteInputText}
                onChangeText={capturarLembrete}
                value={lembrete}
            />
            <Button
                title="+"
                onPress={() => props.onAdicionarLembrete(lembrete)}
            />
        </View>
    );
}

const capturarLembrete = (lembrete) => {
    setLembrete (lembrete);
    };

const styles = StyleSheet.create({
    lembreteView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8
    },
    lembreteInputText: {
        width: '80%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 2
    }
}
);
export default LembreteInput;