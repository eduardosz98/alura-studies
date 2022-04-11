import { useEffect, useState } from 'react';

interface Repo {
    id: string,
    name: string,
}

function AppApi() {
	useEffect(() => {
		async function loadRepos() {
			const response = await fetch('https://api.github.com/users/eduardosz98/repos');
			const repos = await response.json();

			setRepo(repos);
		}
		loadRepos();
	}, []);
	const [repos, setRepo] = useState<Repo[]>([]);

	return (
		<ul>
			{repos.map(repo => (
				<li key={repo.id}>{repo.name}</li>
			))}
		</ul>
	);
}

export default AppApi;