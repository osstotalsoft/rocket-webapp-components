##### Copy this snapshot in the overview panel

```js
himport React, { useState } from "react";
import Pagination from "@bit/totalsoft_oss.react-mui.pagination";

const initialPager = {
	page: 1,
	pageSize: 10
}

const App = () => {

	const [pager, setPager] = useState(initialPager);
	const onChangePage = (page) => {
		setPager(pagerUpdater('page', ++page));
	};

	const onChangeRowsPerPage = pageSize => {
		setPager(pagerUpdater('pageSize', pageSize));
	};

	const pagerUpdater = (prop, value) => (
		prop === 'pageSize' ?
			{
				...pager,
				[prop]: value,
				page: 0
			} : {
				...pager,
				[prop]: value
			}
	);
	const onRefresh = () => onChangePage(0);

	return (
		<Pagination
			totalCount={1000}
			pageSize={pager.pageSize}
			page={pager.page}
			onChangeRowsPerPage={onChangeRowsPerPage}
			onChangePage={onChangePage}
			onRefresh={onRefresh}
		/>
	)
}

export default (
	<App />
);
```
