import React, { FC } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";

import HeadProvider from "./HeadProvider/HeadProvider";
import Layout from "@/components/layout/Layout";
import ReduxToastr from "@/components/ui/redux-toastr/ReduxToastr";
import { store } from "@/store/store";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

const MainProvider: FC = ({ children }) => {
	return (
		<HeadProvider>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					<ReduxToastr />
					<Layout>{children}</Layout>
				</QueryClientProvider>
			</Provider>
		</HeadProvider>
	);
};

export default MainProvider;
