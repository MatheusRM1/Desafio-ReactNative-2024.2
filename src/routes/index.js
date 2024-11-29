import { NavigationContainer } from '@react-navigation/native';
import TabRoutes from './tab.routes';
import Header from '../components/Header';

export default function Routes(){
    return(
        <NavigationContainer>
            <TabRoutes />
        </NavigationContainer>
    )
}