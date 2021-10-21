import { useRouter } from 'next/router';
import Home from './index';

const Lang = () => {
	const router = useRouter();
	const { lang } = router.query;

	if (lang == 'nl') {
		return <Home lang='nl' />;
	} else {
		return <Home lang='en' />;
	}
};

export default Lang;
