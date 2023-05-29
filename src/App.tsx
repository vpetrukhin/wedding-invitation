import { YMaps } from '@pbe/react-yandex-maps';
import {
	Confirmation,
	DressCode,
	Footer,
	Invitation,
	Location,
	Main,
	Timing,
} from './sections';

function App() {
	return (
		<YMaps>
			<Main />
			<Invitation />
			<Location />
			<Timing />
			<DressCode />
			<Confirmation />
			<Footer />
		</YMaps>
	);
}

export default App;
