const projects = document.getElementById("projects");

async function listRepos() {
	fetch(`https://api.github.com/users/Andrierlison/repos`)
		.then((response) => response.json())
		.then((data) => {
			data.map((data) => {
				const li = document.createElement("li");
				const a = document.createElement("a");

				const repoNames = document.createTextNode(data.name);
				a.setAttribute("href", `${data.html_url}`);
				a.appendChild(repoNames);
				li.appendChild(a);
				projects.appendChild(li);

				function listLanguages(data) {
					fetch(`https://api.github.com/repos/Andrierlison/${data}/languages`)
						.then((respose) => respose.json())
						.then((language) => {
							const div = document.createElement("div");
							const repoLanguage = document.createTextNode(
								Object.keys(language)
							);
							div.setAttribute("class", "languages");
							div.appendChild(repoLanguage);
							li.appendChild(div);
						});
				}

				listLanguages(data.name);
			});
		});
}

listRepos();
