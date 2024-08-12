import { createStackNavigator } from '@react-navigation/stack';
import { PRIMARY_COLOR } from '../commons/constants';
import { Inicio } from '../screen/Inicio';
import { Registro } from '../screen/Registro';


const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                cardStyle:{
                    backgroundColor:PRIMARY_COLOR
                }
            }}>
            <Stack.Screen name="Inicio" options={{ headerShown: false }} component={Inicio} />
            <Stack.Screen name="Registro" options={{ headerShown: false }} component={Registro} />
        </Stack.Navigator>
    );
}