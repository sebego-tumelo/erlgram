import { useReducer } from "react";
import { GlobalContext } from "../Contexts/GlobalContext";
import {
	GlobalAccountShape,
	GlobalContextReducerAction,
} from "../lib/ts/interfaces";
import "../scss/main.scss";

function MyApp({ Component, pageProps }) {
	function GlobalContextReducer(
		oldGlobalState: GlobalAccountShape,
		action: GlobalContextReducerAction
	) {
		switch (action.type) {
			case "CLEAR":
				return { account: { authorized: false } };

			case "UPDATE":
				return { ...oldGlobalState, ...action.payload };
		}
	}

	let [GlobalState, dispatchGlobalState] = useReducer(GlobalContextReducer, {
		account: { authorized: false },
	});

	return (
		<GlobalContext.Provider value={[GlobalState, dispatchGlobalState]}>
			<Component {...pageProps} />
		</GlobalContext.Provider>
	);
}

export default MyApp;
