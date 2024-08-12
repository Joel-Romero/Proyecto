import React, { useState } from 'react';
import { Alert, Image, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { TitleComponent } from '../components/TitleComponent';
import { PRIMARY_COLOR } from '../commons/constants';
import { BodyComponent } from '../components/BodyComponent';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import { styles } from '../theme/appTheme';

interface FormLogin {
    email: string;
    password: string;
}
interface User {
    id: number;
    email: string;
    password: string;
}


export const Inicio = () => {
    const users: User[] = [
        { id: 1, email: 'joelromero@gmail.com', password: '123456' },
        { id: 2, email: 'andresmolina@gmail.com', password: '987654321' }
    ];

    const [formLogin, setFormLogin] = useState<FormLogin>({
        email: '',
        password: ''
    });

    const [hiddenPaswword, setHiddenPaswword] = useState<boolean>(true);
    const handleSetValues = (name: string, value: string) => {
        setFormLogin({ ...formLogin, [name]: value });
    }

    const handleSignIn = () => {
        if (!formLogin.email || !formLogin.password) {
            Alert.alert(
                'Error',
                'Por favor, ingrese valores en todos los campos!'
            );
            return;
        }

        if (!verifyUser()) {
            Alert.alert(
                'Error',
                'Correo y/o contraseña incorrecta!'
            );
            return;
        }
        console.log(formLogin);
    }

    const verifyUser = (): User | null => {
        const existUser = users.find(user =>
            user.email === formLogin.email &&
            user.password === formLogin.password
        );
        return existUser || null;
    }

    return (
        <View>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <TitleComponent title='Inicia Sesión con PlayStation' />
            <BodyComponent>
                <View>
                    <Text style={styles.titleHeaderBody}>Bienvenido A PlayStation</Text>
                    <Text style={styles.textBody}>Diviértete con PlayStation</Text>
                </View>
                <Image style={styles.imagen}
                    source={{ uri: 'https://cdn.icon-icons.com/icons2/2845/PNG/512/playstation_logo_icon_181403.png' }} 
                />

                <View style={styles.contentInput}>
                    <InputComponent
                        placeholder='Correo'
                        handleSetValues={handleSetValues}
                        name='email' />
                    <InputComponent
                        placeholder='Contraseña'
                        handleSetValues={handleSetValues}
                        name='password'
                        isPassword={hiddenPaswword}
                        hasIcon={true}
                        setHiddenPaswword={() => setHiddenPaswword(!hiddenPaswword)} />
                </View>
                <ButtonComponent textButton='Inicia con PlayStation' onPress={handleSignIn} />
                <TouchableOpacity>
                    <Text style={styles.textRedirection}>Regístrate con PlayStation</Text>
                </TouchableOpacity>
            </BodyComponent>
        </View>
    )
}
